import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import AIConsulting from './pages/AIConsulting';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Therapists from './pages/Therapists';
import Recovery from './pages/Recovery';
import Nonprofits from './pages/Nonprofits';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Causory | Professional Web Design & AI Automation Services</title>
        <meta name="description" content="Transform your business with custom web design, intelligent AI automation, and cutting-edge digital solutions. We build stunning websites and implement AI-powered systems that drive growth for businesses across the United States." />
        <meta name="keywords" content="web design, AI consulting, website development, AI automation, custom websites, AI integration, business automation, chatbot development, web development, AI solutions, digital transformation" />
        <link rel="canonical" href="https://www.causory.com/" />
      </Helmet>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-consulting" element={<AIConsulting />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/therapists" element={<Therapists />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/nonprofits" element={<Nonprofits />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
