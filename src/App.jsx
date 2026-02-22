import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <div id="skills"><TechStack /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <Footer />
    </div>
  );
}

export default App;
