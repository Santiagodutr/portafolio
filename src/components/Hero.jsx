import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const shapes = [
  { type: 'circle', size: 500, top: '-15%', right: '-10%', delay: 0 },
  { type: 'square', size: 400, top: '50%', left: '-5%', delay: 0.2 },
  { type: 'circle', size: 300, bottom: '-10%', right: '20%', delay: 0.4 },
];

const Hero = () => {
  const { t } = useLanguage();
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);
  const particlesRef = useRef(null);

  // Hay 194 imágenes en la carpeta heroanimation (scene00001.jpg hasta scene00194.jpg)
  const frameCount = 194;
  const currentFrame = index => `/heroanimation/scene${(index + 1).toString().padStart(5, '0')}.jpg`;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");

    // Set canvas internal resolution to handle standard landscape video
    const isMobile = window.innerWidth < 768;
    canvas.width = isMobile ? 960 : 1920;
    canvas.height = isMobile ? 540 : 1080;

    const images = [];
    const seq = { frame: 0 };

    // Preload images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[Math.round(seq.frame)];
      if (img && img.complete) {
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    }

    // GSAP ScrollTrigger Sequence Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        pin: true,
        scrub: 1, // Sutil suavizado
        start: "top top",
        end: "+=400%" // Scroll extendido equivalente a 4 pantallas
      }
    });

    // Estado inicial de la máscara: invisible y a escala GIGANTE
    gsap.set(maskRef.current, { opacity: 0 });
    gsap.set(".mask-text", { scale: 50, transformOrigin: "50% 50%" });

    // 1. Scrub del Video (Progreso: 0.00 a 1.00)
    // El video corre a pantalla completa a lo largo de todo el scroll
    tl.to(seq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 1,
      onUpdate: render
    }, 0);

    // 2. Al 70% de la animación, encendemos la máscara (como la escala es 50, no tapará casi nada aún)
    tl.to(maskRef.current, { opacity: 1, duration: 0.01 }, 0.70);

    // 3. Zoom-In Épico: La palabra viene desde afuera hacia tamaño normal (Progreso: 0.70 a 0.85)
    tl.to(".mask-text", {
      scale: 1,
      duration: 0.15,
      ease: "power2.out"
    }, 0.70);

    // 4. Se cierra a cero desapareciendo en la oscuridad (Progreso: 0.85 a 0.90)
    tl.to(".mask-text", {
      scale: 0,
      opacity: 0,
      duration: 0.05,
      ease: "power2.in"
    }, 0.85);

    // 5. Emerge el contenido normal del Hero y las partículas ambientales de fondo (Progreso: 0.90 a 1.0)
    tl.fromTo(contentRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.10, ease: "power3.out" },
      0.90
    );

    tl.fromTo(particlesRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.10, ease: "power2.inOut" },
      0.90
    );

  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="section" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: 0,
      margin: 0
    }}>
      {/* 1. LAYER: Video a Pantalla Completa (Bottom Layer) */}
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* 2. LAYER: Máscara SVG (Middle Layer) - Oculta los bordes pero expone la palabra SANTIAGO */}
      <div 
        ref={maskRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          willChange: 'opacity'
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <mask id="textMask">
              {/* Entorno visible (color sólido normal) -> pintado de blanco en la máscara */}
              <rect width="100%" height="100%" fill="white" />
              {/* Texto "hueco" (deja ver el video) -> pintado de negro en la máscara */}
              <text 
                className="mask-text"
                x="50%" 
                y="50%" 
                textAnchor="middle" 
                dominantBaseline="middle" 
                fill="black" 
                style={{ 
                  fontSize: 'clamp(5rem, 15vw, 15rem)', 
                  fontWeight: 900, 
                  fontFamily: 'Inter, system-ui, sans-serif', 
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  willChange: 'transform, opacity'
                }}
              >
                SANTIAGO
              </text>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="var(--color-bg-primary)" mask="url(#textMask)" />
        </svg>
      </div>

      {/* LAYER 2.5: Partículas/Burbujas geométricas (Aparecen sólo al final, controlados por GSAP) */}
      <div 
        ref={particlesRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1, // Debajo del texto pero arriba de la máscara base
          pointerEvents: 'none',
          opacity: 0, // Inician invisibles, el GSAP se encarga
          willChange: 'opacity'
        }}
      >
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`geometric-shape shape-${shape.type}`}
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              bottom: shape.bottom,
              left: shape.left,
              right: shape.right,
              opacity: 0.4 // Opacidad intrínseca sutil base
            }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              y: {
                duration: 8 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      {/* 3. LAYER: Contenido Normal del Hero (Top Layer) */}
      <div 
        ref={contentRef}
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 2, 
          textAlign: 'center',
          willChange: 'transform, opacity'
        }}
      >
        <div>
          {/* Eyebrow text */}
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '999px',
              marginBottom: 'var(--space-4)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-accent-primary)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              {t('hero.role')}
            </p>
          </div>

          {/* Main Heading */}
          <h1
            style={{
              marginBottom: 'var(--space-4)',
              fontSize: 'var(--text-6xl)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.8)',
              color: 'var(--color-text-primary)'
            }}
          >
            {t('hero.title.1')}
            <span className="gradient-text" style={{ textShadow: 'none' }}>
              {t('hero.title.2')}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-6)',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-3)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 'var(--space-6)',
            }}
          >
            <a href="#projects" className="btn btn-primary" style={{ boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}>
              {t('hero.cta.projects')}
            </a>
            <a href="#contact" className="btn btn-outline" style={{ background: 'rgba(0,0,0,0.4)', borderColor: 'rgba(255,255,255,0.2)' }} onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t('hero.cta.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
