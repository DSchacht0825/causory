import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface LeadInfo {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  needs?: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({});
  const [conversationStage, setConversationStage] = useState<'greeting' | 'chatting' | 'lead_capture'>('greeting');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send initial greeting
      setTimeout(() => {
        addBotMessage(
          "Hi! I'm Causory AI, your digital assistant. I can help you with:\n\n" +
          "🎨 Web design & development services\n" +
          "🤖 AI consulting & automation\n" +
          "📊 Portfolio examples\n" +
          "📅 Schedule a consultation\n\n" +
          "What brings you here today?"
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const sendToClaude = async (userMessage: string) => {
    setIsTyping(true);

    try {
      // Prepare context for Claude
      const context = {
        leadInfo,
        conversationHistory: messages.slice(-5), // Last 5 messages for context
        companyInfo: {
          name: "Causory",
          services: ["Web Design", "Web Development", "AI Consulting", "SEO & Marketing"],
          specialization: "Therapy practices, recovery centers, and nonprofits in North County San Diego",
          calendlyLink: "https://calendly.com/schacht-dan/30min",
          phone: "619-300-8337",
          portfolio: [
            "Food Truck Catering Site",
            "12 Step Journey Website (Recovery & Wellness)",
            "Therapy & Wellness Center",
            "Youth Empowerment Initiative"
          ]
        }
      };

      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          context,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      setIsTyping(false);
      addBotMessage(data.reply);

      // Check if we should capture lead info
      if (data.shouldCaptureLead && conversationStage === 'chatting') {
        setTimeout(() => {
          setConversationStage('lead_capture');
          addBotMessage(
            "I'd love to help you further! Could you share your email so we can send you more information and follow up?"
          );
        }, 1000);
      }
    } catch (error) {
      console.error('Error communicating with chatbot API:', error);
      setIsTyping(false);
      addBotMessage(
        "I'm having trouble connecting right now. You can reach us directly at:\n\n" +
        "📞 Call: 619-300-8337\n" +
        "💬 Text: 619-300-8337\n" +
        "📅 Schedule: https://calendly.com/schacht-dan/30min"
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');
    setConversationStage('chatting');

    // Simple lead capture detection
    if (conversationStage === 'lead_capture') {
      // Check if it's an email
      if (userMessage.includes('@')) {
        setLeadInfo({ ...leadInfo, email: userMessage });
        addBotMessage(
          "Thank you! Would you also like to share your name and phone number? Or I can connect you with our calendar to schedule a call right away."
        );
      } else if (!leadInfo.name) {
        setLeadInfo({ ...leadInfo, name: userMessage });
        addBotMessage("Nice to meet you! What's your email address?");
      } else if (!leadInfo.phone && /\d{3}[-.]?\d{3}[-.]?\d{4}/.test(userMessage)) {
        setLeadInfo({ ...leadInfo, phone: userMessage });
        addBotMessage(
          "Perfect! I've saved your information. Would you like to:\n\n" +
          "📅 Schedule a free consultation: https://calendly.com/schacht-dan/30min\n" +
          "💬 Continue chatting about your project\n" +
          "📞 Have us call you at " + userMessage
        );
      } else {
        await sendToClaude(userMessage);
      }
    } else {
      await sendToClaude(userMessage);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          className="chatbot-bubble"
          onClick={toggleChat}
          aria-label="Open chat"
        >
          <div className="chatbot-bubble-avatar">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="url(#gradient1)" fillOpacity="0.2"/>
              <path d="M16 4C12.5 4 9 6 9 10C9 14 12.5 16 16 16C19.5 16 23 14 23 10C23 6 19.5 4 16 4Z" fill="white"/>
              <path d="M8 22C8 18 11 16 16 16C21 16 24 18 24 22V26C24 27 23 28 22 28H10C9 28 8 27 8 26V22Z" fill="white"/>
              <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"/>
              <defs>
                <linearGradient id="gradient1" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ffffff" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="#ffffff" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="chatbot-bubble-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="rgba(255,255,255,0.2)"/>
                  <path d="M20 6C15.5 6 11 9 11 14C11 19 15.5 22 20 22C24.5 22 29 19 29 14C29 9 24.5 6 20 6Z" fill="white"/>
                  <path d="M10 28C10 23 14 21 20 21C26 21 30 23 30 28V33C30 34.5 28.5 36 27 36H13C11.5 36 10 34.5 10 33V28Z" fill="white"/>
                  <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
                </svg>
                <div className="chatbot-status-indicator"></div>
              </div>
              <div className="chatbot-header-text">
                <h3>Causory AI</h3>
                <p>Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chatbot-message ${message.sender === 'user' ? 'chatbot-message-user' : 'chatbot-message-bot'}`}
              >
                {message.sender === 'bot' && (
                  <div className="chatbot-message-avatar">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="url(#msgGradient)"/>
                      <path d="M16 4C12.5 4 9 6 9 10C9 14 12.5 16 16 16C19.5 16 23 14 23 10C23 6 19.5 4 16 4Z" fill="white"/>
                      <path d="M8 22C8 18 11 16 16 16C21 16 24 18 24 22V26C24 27 23 28 22 28H10C9 28 8 27 8 26V22Z" fill="white"/>
                      <defs>
                        <linearGradient id="msgGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#6366f1"/>
                          <stop offset="1" stopColor="#8b5cf6"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
                <div className="chatbot-message-content">
                  <p style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
                  <span className="chatbot-message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chatbot-message chatbot-message-bot">
                <div className="chatbot-message-avatar">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="url(#typingGradient)"/>
                    <path d="M16 4C12.5 4 9 6 9 10C9 14 12.5 16 16 16C19.5 16 23 14 23 10C23 6 19.5 4 16 4Z" fill="white"/>
                    <path d="M8 22C8 18 11 16 16 16C21 16 24 18 24 22V26C24 27 23 28 22 28H10C9 28 8 27 8 26V22Z" fill="white"/>
                    <defs>
                      <linearGradient id="typingGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366f1"/>
                        <stop offset="1" stopColor="#8b5cf6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="chatbot-typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form className="chatbot-input-container" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className="chatbot-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
