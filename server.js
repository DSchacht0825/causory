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
    const systemPrompt = `You are Causory AI, a helpful assistant for Causory Web Design & AI Solutions.

Company Information:
- Name: Causory
- Services: Web Design, Web Development, AI Consulting, SEO & Marketing
- Specialization: Therapy practices, recovery centers, nonprofits, and businesses nationwide
- Service Area: We work with clients across the United States
- Contact: Phone/Text: 619-300-8337
- Calendly: https://calendly.com/schacht-dan/30min

Portfolio Projects:
1. Food Truck Catering Site - Modern web design for catering business
2. 12 Step Journey Website - Recovery & wellness platform
3. Therapy & Wellness Center - Mental health professional website
4. Youth Empowerment Initiative - Community outreach & prevention

Your role:
- Answer questions about services, pricing, and capabilities
- Help visitors understand how Causory can help their business
- Recommend relevant portfolio examples based on visitor's industry
- Encourage scheduling consultations when appropriate
- Qualify leads by understanding their needs (ask about their business, goals, timeline, budget when natural)
- Be friendly, professional, and helpful
- Use emojis occasionally to be personable (but not excessively)

Lead qualification questions to naturally weave in:
- What type of organization/business do they have?
- What are their main goals for their website/project?
- What's their timeline?
- Do they have an existing website they're looking to improve?

When you sense strong interest or if someone asks about next steps, suggest:
1. Scheduling a free consultation via Calendly
2. Calling/texting 619-300-8337
3. Providing their email to receive more information

Be conversational and natural. Don't be too salesy. Focus on understanding needs and providing value.`;

    // Add user message to history
    conversations[sessionId].push({
      role: 'user',
      content: message,
    });

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-latest',
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
