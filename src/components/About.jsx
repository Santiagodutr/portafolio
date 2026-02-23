import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

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
                            {t('nav.about')}
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
                                    borderRadius: 'calc(var(--border-radius-lg) - 2px)',
                                    background: 'var(--color-bg-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src="/me/ME.jpeg"
                                        alt="Santiago Duarte"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
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
                                {t('about.p1')}
                            </p>

                            <p style={{ marginBottom: 'var(--space-5)', color: 'var(--color-text-secondary)' }}>
                                {t('about.p2')}
                            </p>

                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
