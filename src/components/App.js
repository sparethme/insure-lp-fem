import React from 'react';


import Navbar from './navbar/navbar';
import Showcase from './showcase/Showcase';
import Features from './features/features';
import Cta from './cta/cta'
import Footer from './footer/footer';
import './App.css';

function App() {
  return (
    // wrap in div
    <div>
      <Navbar />
      <Showcase />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
