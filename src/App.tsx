import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import HomeServices from './pages/HomeServices';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Causory | Website as a Service for Home Service Businesses</title>
        <meta name="description" content="Causory is Website as a Service for home service businesses — contractors, HVAC, cleaning, roofing, and more. A setup fee to launch, then a flat monthly Website Care Plan for hosting, security, and support." />
        <meta name="keywords" content="website as a service, home service business website, contractor website design, HVAC website design, cleaning company website, roofing website design, managed website subscription, small business website design and hosting" />
        <link rel="canonical" href="https://causory.com/" />
      </Helmet>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
