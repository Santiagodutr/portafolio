import { useState, useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
  
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenisInstance = lenisRef.current?.lenis;
    if (lenisInstance) {
        lenisInstance.on('scroll', ScrollTrigger.update);
    }
  
    return () => {
        gsap.ticker.remove(update);
        if (lenisInstance) lenisInstance.off('scroll', ScrollTrigger.update);
    };
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false, smoothWheel: true }} ref={lenisRef}>
      <div className="App">
        <Navbar />
        <Hero />
        <div id="about"><About /></div>
        <div id="skills"><TechStack /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
