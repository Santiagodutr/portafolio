import { motion } from 'framer-motion';
import TechStack from './TechStack';

const About = () => {
    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            About <span className="gradient-text">Me</span>
                        </motion.h2>
                    </div>

                    {/* Two Column Layout */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--space-7)',
                        alignItems: 'start',
                    }}>
                        {/* Profile Image Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}
                        >
                            <div style={{
                                position: 'relative',
                                borderRadius: 'var(--border-radius-lg)',
                                overflow: 'hidden',
                                aspectRatio: '1/1',
                                background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
                                padding: '2px', // Thinner border
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 'var(--border-radius-lg)',
                                    background: 'var(--color-bg-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 'var(--text-4xl)',
                                    color: 'var(--color-text-tertiary)',
                                }}>
                                    {/* Placeholder for profile image */}
                                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="7" r="4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <p style={{
                                marginBottom: 'var(--space-4)',
                                fontSize: 'var(--text-lg)',
                                color: 'var(--color-text-secondary)',
                            }}>
                                I'm a passionate software developer with a keen eye for design and
                                a love for building elegant solutions to complex problems.
                            </p>

                            <p style={{ marginBottom: 'var(--space-5)', color: 'var(--color-text-secondary)' }}>
                                With several years of experience in full-stack development, I
                                specialize in creating responsive web applications that prioritize
                                user experience and performance. I'm always exploring new technologies
                                and best practices to stay at the forefront of web development.
                            </p>

                            {/* Tech Stack Carousel */}
                            <div style={{ marginTop: 'var(--space-6)' }}>
                                <TechStack />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
