# Causory Web Design & AI Solutions

Modern website with AI-powered chatbot for Causory, a web design and AI consulting company serving clients nationwide.

## Features

- 🎨 Modern React website with Tailwind CSS
- 🤖 AI chatbot powered by Claude 3.5 Sonnet
- 📱 Fully responsive mobile design
- 📅 Calendly integration for scheduling
- 📊 Lead capture functionality
- ⚡ Fast performance and smooth animations

## Tech Stack

**Frontend:**
- React 19
- TypeScript
- Tailwind CSS
- React Router

**Backend:**
- Node.js + Express
- Anthropic Claude API
- CORS enabled

## Local Development

### Prerequisites
- Node.js 16+
- npm or yarn
- Anthropic API key

### Setup

1. Clone the repository:
```bash
git clone https://github.com/DSchacht0825/causory.git
cd causory-react
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Add your Anthropic API key to `.env`:
```
ANTHROPIC_API_KEY=your_api_key_here
PORT=3001
```

5. Start the backend server:
```bash
node server.js
```

6. In a new terminal, start the frontend:
```bash
npm start
```

7. Open http://localhost:3000 in your browser

## Easy Deployment with Railway

**Railway is the easiest option** - deploy both frontend and backend from the same repo with minimal setup.

### Step-by-Step:

1. **Sign up at [Railway.app](https://railway.app)** (free tier available)

2. **Deploy Backend API:**
   - Click "New Project" → "Deploy from GitHub"
   - Select your `causory-react` repository
   - Railway auto-detects Node.js
   - Add environment variable:
     - Name: `ANTHROPIC_API_KEY`
     - Value: `your_api_key_here`
   - Deploy! Copy the URL (e.g., `https://your-app.railway.app`)

3. **Update Frontend to use Backend URL:**
   - Open `src/components/Chatbot.tsx`
   - Line 96: Change `http://localhost:3001` to your Railway URL
   - Commit and push changes

4. **Deploy Frontend:**
   - Create another Railway service or use Vercel/Netlify
   - Build command: `npm run build`
   - Output directory: `build`

### Alternative: Vercel (Frontend) + Railway (Backend)

**Backend on Railway** (same as above)

**Frontend on Vercel:**
```bash
npm run build
vercel --prod
```

## Environment Variables

Required for backend:
- `ANTHROPIC_API_KEY` - Your Anthropic API key from console.anthropic.com
- `PORT` - Server port (default: 3001)

## Chatbot Features

- Intelligent responses about services and pricing
- Portfolio recommendations based on industry
- Automatic lead qualification
- Contact information capture
- Calendly scheduling integration
- Conversation context memory
- Mobile-optimized interface

## Project Structure

```
causory-react/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   │   ├── Chatbot.tsx  # AI chatbot component
│   │   ├── Chatbot.css  # Chatbot styles
│   │   └── Layout.tsx   # Site layout
│   ├── pages/           # Page components
│   └── App.tsx          # Main app component
├── server.js            # Backend API server
├── .env.example         # Environment variables template
└── package.json         # Dependencies
```

## Support

For issues or questions:
- Phone/Text: 619-300-8337
- Schedule: https://calendly.com/schacht-dan/30min

---

Built with ❤️ by Causory
Powered by Claude AI
