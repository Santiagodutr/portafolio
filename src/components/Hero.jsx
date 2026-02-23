import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  // Geometric shapes data - subtle floating blobs
  const shapes = [
    { type: 'circle', size: 400, top: '-10%', left: '-10%', delay: 0 },
    { type: 'square', size: 300, top: '40%', right: '-5%', delay: 0.2 },
    { type: 'circle', size: 200, bottom: '10%', left: '10%', delay: 0.4 },
  ];

  return (
    <section className="section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--space-8)'
    }}>
      {/* Floating Geometric Shapes - Now soft blobs */}
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
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.4,
            scale: 1,
            y: [0, -30, 0],
          }}
          transition={{
            opacity: { duration: 1.5, delay: shape.delay },
            scale: { duration: 1.5, delay: shape.delay },
            y: {
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow text */}
          <motion.div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '999px',
              marginBottom: 'var(--space-4)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            style={{
              marginBottom: 'var(--space-4)',
              fontSize: 'var(--text-6xl)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.title.1')}
            <span className="gradient-text">
              {t('hero.title.2')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-6)',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={{
              display: 'flex',
              gap: 'var(--space-3)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 'var(--space-6)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="btn btn-primary">
              {t('hero.cta.projects')}
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => {
              e.preventDefault();
              // We'll need to trigger the footer modal here ideally, but since it's in footer,
              // we'll smooth scroll to footer for now.
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t('hero.cta.contact')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
