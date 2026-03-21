import { useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Experience = () => {
    const { t } = useLanguage();

    const experiences = useMemo(() => [
        {
            id: 1,
            company: t('exp.1.company'),
            role: t('exp.1.title'),
            period: t('exp.1.date'),
            achievements: [
                t('exp.1.desc.1'),
                t('exp.1.desc.2'),
                t('exp.1.desc.3'),
                t('exp.1.desc.4')
            ],
            technologies: ['React', 'Spring Boot', 'PostgreSQL', 'pg_vector', 'AWS', 'WebSockets'],
        },
        {
            id: 2,
            company: t('exp.2.company'),
            role: t('exp.2.title'),
            period: t('exp.2.date'),
            achievements: [
                t('exp.2.desc.1'),
                t('exp.2.desc.2'),
                t('exp.2.desc.3'),
                t('exp.2.desc.4'),
                t('exp.2.desc.5'),
                t('exp.2.desc.6')
            ],
            technologies: ['Astro', 'TypeScript', 'AdonisJS', 'PostgreSQL', 'Docker', 'Supabase Auth', 'Resend', 'Puppeteer', 'Vanilla CSS'],
        }
    ], [t]);

    const sectionRef = useRef(null);
    const scrollRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const container = scrollRef.current;
        if (!container) return;

        const totalScroll = container.scrollWidth - window.innerWidth;
        
        if (totalScroll > 0) {
            gsap.to(container, {
                x: () => -totalScroll,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + totalScroll,
                    invalidateOnRefresh: true
                }
            });
        }
    }, { dependencies: [experiences], scope: sectionRef });

    return (
        <section id="experience" ref={sectionRef} className="section" style={{ 
            background: 'var(--color-bg-primary)',
            position: 'relative',
            overflow: 'hidden',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0'
        }}>
            <div className="container" style={{ width: '100%', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {t('exp.title.1')} <span className="gradient-text">{t('exp.title.2')}</span>
                        </motion.h2>
                    </div>

                    {/* Horizontal Scroll Container Wrapper */}
                    <div style={{ overflow: 'hidden', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginTop: 'var(--space-8)' }}>
                        <div 
                            ref={scrollRef}
                            style={{
                                display: 'flex',
                                width: `${Math.max(experiences.length, 1) * 100}vw`,
                                flexWrap: 'nowrap'
                            }}
                        >
                        {experiences.map((exp, index) => (
                            <div key={exp.id} style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 5vw', boxSizing: 'border-box' }}>
                                {/* Experience Card */}
                                <div className="card" style={{
                                    width: '90vw',
                                    maxWidth: '800px',
                                    maxHeight: 'calc(100vh - 200px)',
                                    overflowY: 'auto',
                                    background: 'rgba(128, 128, 128, 0.08)',
                                    backdropFilter: 'blur(24px)',
                                    WebkitBackdropFilter: 'blur(24px)',
                                    border: '1px solid rgba(128, 128, 128, 0.2)',
                                    borderRadius: '24px',
                                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                                    margin: '0 auto'
                                }}>
                                  <div style={{ padding: 'var(--space-6)' }}>
                                    {/* Header */}
                                    <div style={{
                                        marginBottom: 'var(--space-3)',
                                        padding: 'var(--space-4)',
                                        background: 'var(--color-bg-tertiary)',
                                        borderRadius: 'var(--border-radius)',
                                        border: '1px solid var(--color-border)'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'baseline',
                                            flexWrap: 'wrap',
                                            gap: 'var(--space-2)',
                                        }}>
                                            <h3 style={{
                                                fontSize: 'var(--text-xl)',
                                                fontWeight: 600,
                                                color: 'var(--color-text-primary)'
                                            }}>
                                                {exp.role}
                                            </h3>
                                            <span style={{
                                                fontSize: 'var(--text-sm)',
                                                fontFamily: 'var(--font-mono)',
                                                color: 'var(--color-text-tertiary)',
                                            }}>
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p style={{
                                            fontSize: 'var(--text-base)',
                                            color: 'var(--color-accent-primary)',
                                            fontWeight: 500,
                                        }}>
                                            {exp.company}
                                        </p>
                                    </div>

                                    {/* Achievements */}
                                    <ul style={{
                                        listStyle: 'none',
                                        marginBottom: 'var(--space-4)',
                                        paddingLeft: 'var(--space-2)'
                                    }}>
                                        {exp.achievements.map((achievement, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 'var(--space-2)',
                                                    marginBottom: 'var(--space-2)',
                                                    fontSize: 'var(--text-sm)',
                                                    color: 'var(--color-text-secondary)',
                                                }}
                                            >
                                                <span style={{ color: 'var(--color-accent-primary)', marginTop: '2px' }}>•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: 'var(--space-2)',
                                    }}>
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="tag"
                                                style={{ fontSize: 'var(--text-xs)' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                  </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
