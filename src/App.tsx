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

function App() {
  return (
    <Router>
      <Helmet>
        <title>Causory | Web Design & AI Solutions</title>
        <meta name="description" content="Professional web design and AI consulting services. We build stunning websites and implement intelligent automation solutions to help businesses work smarter." />
        <meta name="keywords" content="web design, AI consulting, website development, automation, AI integration, business technology, web development" />
        <link rel="canonical" href="https://causory.com/" />
      </Helmet>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-consulting" element={<AIConsulting />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
