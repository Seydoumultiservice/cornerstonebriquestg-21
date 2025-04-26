import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { ToastProvider } from './context/ToastContext';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/nos-produits" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <ToastProvider />
    </Router>
  );
}

export default App;
