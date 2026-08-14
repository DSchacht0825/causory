require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const PORT = process.env.PORT || 3001;

console.log('Starting server on port:', PORT);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Check if API key is configured
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('❌ WARNING: ANTHROPIC_API_KEY is not set! The chatbot will not work.');
} else {
  console.log('✅ ANTHROPIC_API_KEY is configured');
}

// Store conversation history in memory (in production, use a database)
const conversations = {};

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, context } = req.body;
    const sessionId = req.headers['x-session-id'] || 'default';

    // Initialize conversation history if not exists
    if (!conversations[sessionId]) {
      conversations[sessionId] = [];
    }

    // Build system prompt with company context
    const systemPrompt = `You are Causory AI, a knowledgeable and friendly assistant for Causory — a full-service digital agency based in San Diego, CA.

## About Causory
Causory offers Website as a Service (WaaS) for home service businesses — a one-time setup fee to launch a custom-designed website, then a flat $200/mo Website Care Plan for hosting, security, and support. We work with clients across the United States.

**Contact:**
- Phone/Text: 619-300-8337
- Email: info@causory.com
- Free Consultation: https://calendly.com/schacht-dan/30min
- Website: https://www.causory.com

---

## Website as a Service (WaaS) Plans

Every plan has two parts: a one-time setup fee (due at kickoff, covers custom design & build) and the same $200/mo Website Care Plan on every tier (hosting, SSL, daily backups, security monitoring, content changes, technical support, performance optimization, uptime monitoring).

### 🚀 Launch — $700 setup + $200/mo
Custom one-page landing site, mobile-friendly design, contact form, click-to-call & email buttons, Google Maps integration, social links, basic SEO. Perfect for new businesses, contractors, and solo professionals.

### 📈 Growth — $1,000 setup + $200/mo (most popular)
Everything in Launch, plus up to 5 custom pages (Services, About, Contact, Gallery, FAQ), testimonials, an online quote/request form, Google Business Profile integration, performance optimization, and website analytics. Perfect for home service companies, medical practices, law firms, and growing businesses.

### ⭐ Authority — $1,400 setup + $200/mo
Everything in Growth, plus a professional headshot session, business branding photography, premium homepage design, the AI-powered chatbot included, advanced SEO optimization, priority support, and a quarterly website review. Perfect for attorneys, realtors, medical professionals, and consultants building a personal brand.

## What's Included

### Custom Websites
Conversion-focused websites designed to turn visitors into paying customers, with service-area pages and quote/request forms built for how home service leads convert. Mobile-optimized, fast-loading, and built to rank on Google from day one.

### AI Chatbot
A 24/7 chat assistant (like this one!) trained on the client's specific business — answers FAQs, qualifies leads, and hands off to the business owner when needed. Included at no extra cost on the Authority plan.

### SEO & Google Visibility
Every website launches with an on-page SEO foundation. Growth adds Google Business Profile integration; Authority adds advanced SEO optimization — visibility keeps improving, not fading after launch.

### API Integrations
We connect the website to external tools — CRMs, payment processors (Stripe), scheduling systems (Calendly), email marketing platforms, and more.

---

## Industries We Specialize In
- **General Contractors & Remodeling** — project galleries, service pages by trade, quote requests
- **HVAC, Plumbing & Electrical** — emergency-ready design, service-area pages, maintenance-plan pages
- **Cleaning, Landscaping & Maintenance** — recurring-service pages, easy booking requests
- **Roofing & Restoration** — insurance-claim-friendly content, storm/emergency messaging, before/after galleries
- **Home service businesses of all kinds** — anyone who relies on local search to book jobs

---

## Real Client Projects (Portfolio)
1. **Teresita's Birria** — Food truck catering website with online inquiries
2. **Soul Tide Therapy** — Mental health practice website (reviewed 5 stars by Ashley Sellers, Local Guide)
3. **Restoring San Diego** — Nonprofit youth empowerment site — SEO traffic skyrocketed after launch (reviewed 5 stars by Scott Miner, Founder & CEO)
4. **Casandra's Cleaning** — Cleaning service website (reviewed 5 stars by Casandra Martinez)
5. **12 Step Journey** — Recovery & wellness platform
6. **Youth Empowerment Initiative** — Community outreach & prevention

---

## Google Reviews (5 stars across the board)
- Ashley Sellers (Soul Tide): "Daniel exceeded expectations... incredibly communicative, informative, and easy to work with."
- Scott Miner (Restoring San Diego): "SEO traffic skyrocketed, visibility exploded... they didn't just build a website, they built momentum for change."
- Casandra Martinez (Casandra's Cleaning): "100 percent use Causory every single time!"
- Yvonne (Teresita's Birria): "They really listened to my ideas and brought my thoughts to life even better than I imagined."

---

## Your Role as Causory AI
- Answer any question about the WaaS plans, pricing, what's included, and the process
- Help visitors figure out which tier fits their business (Launch, Growth, or Authority)
- Recommend relevant portfolio examples based on the visitor's industry
- Qualify leads naturally by understanding their business, goals, timeline, and current situation
- Encourage scheduling a free consultation when interest is clear
- Be warm, knowledgeable, and helpful — not salesy

**Lead qualification questions to weave in naturally:**
- What kind of business or organization do you have?
- What are your main goals — more customers, internal tools, automation?
- Do you have an existing website, or is this a new project?
- What's your rough timeline?

**When someone is ready for next steps, offer:**
1. Free 30-min consultation: https://calendly.com/schacht-dan/30min
2. Call/text: 619-300-8337
3. Email: info@causory.com

Keep responses concise and conversational. Use line breaks for readability. Use emojis sparingly and naturally.`;

    // Add user message to history
    conversations[sessionId].push({
      role: 'user',
      content: message,
    });

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: systemPrompt,
      messages: conversations[sessionId],
    });

    const assistantMessage = response.content[0].text;

    // Add assistant response to history
    conversations[sessionId].push({
      role: 'assistant',
      content: assistantMessage,
    });

    // Keep only last 10 messages to manage memory
    if (conversations[sessionId].length > 10) {
      conversations[sessionId] = conversations[sessionId].slice(-10);
    }

    // Determine if we should capture lead info
    const shouldCaptureLead =
      assistantMessage.toLowerCase().includes('schedule') ||
      assistantMessage.toLowerCase().includes('consultation') ||
      assistantMessage.toLowerCase().includes('call') ||
      conversations[sessionId].length >= 6; // After 3 exchanges

    res.json({
      reply: assistantMessage,
      shouldCaptureLead,
    });
  } catch (error) {
    console.error('Error communicating with Claude API:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      type: error.type,
      stack: error.stack
    });
    res.status(500).json({
      error: 'Failed to process message',
      details: error.message,
      ...(process.env.NODE_ENV !== 'production' && { stack: error.stack })
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Chatbot API is running',
    hasApiKey: !!process.env.ANTHROPIC_API_KEY,
    nodeEnv: process.env.NODE_ENV || 'development'
  });
});

// Lead capture endpoint (for future use - storing to database)
app.post('/api/lead', async (req, res) => {
  try {
    const { name, email, phone, business, needs, conversationHistory } = req.body;

    // Here you would save to database
    console.log('New Lead Captured:', { name, email, phone, business, needs });

    // In production, you might also:
    // - Send email notification
    // - Add to CRM
    // - Send conversation transcript

    res.json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Error capturing lead:', error);
    res.status(500).json({ error: 'Failed to capture lead' });
  }
});

// Serve React app for all other routes (must be after API routes)
// Express 5 compatible - use middleware instead of wildcard route
app.use((req, res, next) => {
  // Only serve index.html for GET requests that aren't API calls
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  } else {
    next();
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🤖 Chatbot API server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Serving React app from: ${path.join(__dirname, 'build')}`);
});
