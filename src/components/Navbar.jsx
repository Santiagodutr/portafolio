import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.experience'), href: '#experience' },
        { name: t('nav.contact'), href: '#contact' }
    ];

    const cycleTheme = () => {
        if (theme === 'dark') setTheme('light');
        else if (theme === 'light') setTheme('system');
        else setTheme('dark');
    };

    const getThemeIcon = () => {
        if (theme === 'light') {
            // Sun Icon
            return (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        } else if (theme === 'dark') {
            // Moon Icon
            return (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        } else {
            // System/Monitor Icon
            return (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
            style={{
                position: 'fixed',
                top: 'var(--space-4)',
                left: 0,
                right: 0,
                zIndex: 50,
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none'
            }}
        >
            <nav className="navbar-container">
                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMobileMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </>
                        )}
                    </svg>
                </button>

                <div className="navbar-divider mobile-divider" />

                {/* Navigation Links */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--color-text-secondary)',
                                textDecoration: 'none',
                                fontSize: 'var(--text-sm)',
                                fontWeight: '500',
                                transition: 'color var(--transition-fast)'
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Vertical Divider */}
                <div className="navbar-divider desktop-divider" />

                {/* Theme Toggle Button */}
                <button
                    onClick={cycleTheme}
                    title={`Current theme: ${theme}. Click to switch.`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-secondary)',
                        cursor: 'pointer',
                        padding: 'var(--space-1)',
                        borderRadius: '50%',
                        transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--color-text-primary)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--color-text-secondary)';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    <motion.div
                        key={theme}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {getThemeIcon()}
                    </motion.div>
                </button>

                {/* Vertical Divider */}
                <div className="navbar-divider-small" />

                {/* Language Toggle Button */}
                <button
                    onClick={toggleLanguage}
                    title={`Current language: ${language.toUpperCase()}. Click to switch.`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-secondary)',
                        cursor: 'pointer',
                        padding: 'var(--space-1)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.color = 'var(--color-text-primary)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.color = 'var(--color-text-secondary)';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    {language.toUpperCase()}
                </button>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            marginTop: 'var(--space-3)',
                            left: '50%',
                            x: '-50%',
                            width: 'calc(100vw - var(--space-8))',
                            maxWidth: '380px',
                            background: 'var(--color-bg-secondary)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--border-radius-lg)',
                            padding: 'var(--space-4)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-2)',
                            pointerEvents: 'auto',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                style={{
                                    color: 'var(--color-text-primary)',
                                    textDecoration: 'none',
                                    fontSize: 'var(--text-lg)',
                                    fontWeight: '500',
                                    padding: 'var(--space-3)',
                                    borderRadius: '8px',
                                    background: 'var(--color-card-bg)',
                                    border: '1px solid transparent',
                                    textAlign: 'center',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                                    e.currentTarget.style.background = 'var(--color-tag-bg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.background = 'var(--color-card-bg)';
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Navbar;
