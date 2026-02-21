import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured online shopping platform with payment integration and admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            color: '#3b82f6', // Blue
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative project management tool with real-time updates and team features.',
            tags: ['Next.js', 'PostgreSQL', 'WebSocket'],
            color: '#8b5cf6', // Violet
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Beautiful weather forecasting app with interactive maps and notifications.',
            tags: ['React', 'API Integration', 'Charts'],
            color: '#06b6d4', // Cyan
        },
        {
            id: 4,
            title: 'Portfolio Generator',
            description: 'SaaS tool for creating professional portfolios with customizable templates.',
            tags: ['TypeScript', 'Tailwind', 'AWS'],
            color: '#10b981', // Emerald
        },
    ];

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="section" style={{
            background: 'var(--color-bg-secondary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Featured <span className="gradient-text">Projects</span>
                        </motion.h2>
                        <p style={{ marginTop: 'var(--space-2)', color: 'var(--color-text-secondary)' }}>
                            Swipe through my recent work
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div style={{
                        position: 'relative',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        minHeight: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevProject}
                            className="btn btn-outline"
                            style={{
                                position: 'absolute',
                                left: '-20px',
                                zIndex: 10,
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                padding: 0,
                                background: 'var(--color-bg-primary)',
                                border: '1px solid var(--color-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            aria-label="Previous project"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <button
                            onClick={nextProject}
                            className="btn btn-outline"
                            style={{
                                position: 'absolute',
                                right: '-20px',
                                zIndex: 10,
                                borderRadius: '50%',
                                width: '48px',
                                height: '48px',
                                padding: 0,
                                background: 'var(--color-bg-primary)',
                                border: '1px solid var(--color-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            aria-label="Next project"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Project Card */}
                        <div style={{ width: '100%', padding: '0 40px' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.3 }}
                                    className="card"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                        gap: 'var(--space-6)',
                                        background: 'rgba(30, 41, 59, 0.4)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid var(--color-border)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Image Placeholder area */}
                                    <div style={{
                                        aspectRatio: '16/9',
                                        background: `linear-gradient(135deg, ${projects[activeIndex].color}20, ${projects[activeIndex].color}05)`,
                                        borderRadius: 'var(--border-radius)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: `1px solid ${projects[activeIndex].color}30`
                                    }}>
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke={projects[activeIndex].color}>
                                            <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" />
                                            <path d="M8 21h8M12 17v4" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>

                                    {/* Content */}
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h3 style={{
                                            fontSize: 'var(--text-3xl)',
                                            marginBottom: 'var(--space-2)',
                                            color: 'var(--color-text-primary)'
                                        }}>
                                            {projects[activeIndex].title}
                                        </h3>
                                        <p style={{
                                            marginBottom: 'var(--space-4)',
                                            color: 'var(--color-text-secondary)',
                                            fontSize: 'var(--text-lg)'
                                        }}>
                                            {projects[activeIndex].description}
                                        </p>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                                            {projects[activeIndex].tags.map(tag => (
                                                <span key={tag} className="tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <a href="#" className="btn btn-primary" style={{ alignSelf: 'start' }}>
                                            View Case Study
                                        </a>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Dots Indicator */}
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: 'var(--space-4)' }}>
                                {projects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: index === activeIndex ? 'var(--color-accent-primary)' : 'var(--color-border)',
                                            border: 'none',
                                            padding: 0,
                                            cursor: 'pointer',
                                            transition: 'background 0.3s ease'
                                        }}
                                        aria-label={`Go to project ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
