import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/yourusername',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/yourusername',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/yourusername',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: 'Email',
            url: 'mailto:your.email@example.com',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ];

    return (
        <footer id="contact" style={{
            background: 'var(--color-bg-secondary)',
            borderTop: '1px solid var(--color-border)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '200px',
                background: 'radial-gradient(ellipse at top, rgba(0, 255, 255, 0.1), transparent)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Contact CTA Section */}
                <motion.div
                    style={{
                        textAlign: 'center',
                        paddingTop: 'var(--space-8)',
                        paddingBottom: 'var(--space-7)',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>
                        Let's Work <span className="gradient-text">Together</span>
                    </h2>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        marginBottom: 'var(--space-6)',
                        margin: '0 auto var(--space-6)',
                    }}>
                        I'm always interested in hearing about new projects and opportunities.
                    </p>
                    <motion.a
                        href="mailto:your.email@example.com"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 'var(--space-4)',
                        paddingBottom: 'var(--space-6)',
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '48px',
                                height: '48px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                background: 'var(--color-bg-tertiary)',
                                border: '1px solid var(--color-border)',
                                color: 'var(--color-text-secondary)',
                                transition: 'all var(--transition-base)',
                                textDecoration: 'none',
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            whileHover={{
                                background: 'var(--color-accent-cyan)',
                                color: 'var(--color-bg-primary)',
                                borderColor: 'var(--color-accent-cyan)',
                                scale: 1.1,
                            }}
                            aria-label={link.name}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    style={{
                        textAlign: 'center',
                        paddingTop: 'var(--space-6)',
                        paddingBottom: 'var(--space-5)',
                        borderTop: '1px solid var(--color-border)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text-tertiary)',
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p>
                        © {new Date().getFullYear()} Your Name. All rights reserved.
                    </p>
                    <p style={{ marginTop: 'var(--space-2)' }}>
                        Built with <span style={{ color: 'var(--color-accent-cyan)' }}>React</span> &{' '}
                        <span style={{ color: 'var(--color-accent-lime)' }}>Framer Motion</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
