import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import Navbar from './components/NavBar.tsx';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add more routes as needed */}
        
        
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
