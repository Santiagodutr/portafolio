import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ContactModal = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // idle | loading | success | error
    const [status, setStatus] = useState('idle');

    // Handle ESC key to close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset form when closed
            setTimeout(() => {
                setStatus('idle');
                setFormData({ name: '', email: '', message: '' });
            }, 300);
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // TODO: Replace with your actual n8n Webhook URL
        const WEBHOOK_URL = 'https://n8n.tu-dominio.com/webhook/contact-lead-portfolio';

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error enviando formulario:', error);
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-4)'
                }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(15, 23, 42, 0.8)',
                            backdropFilter: 'blur(8px)',
                            cursor: 'pointer'
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'relative',
                            width: 'calc(100% - var(--space-4))',
                            maxWidth: '500px',
                            background: 'var(--color-bg-primary)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 'var(--border-radius-lg)',
                            padding: 'var(--space-6)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                            zIndex: 1,
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: 'var(--space-4)',
                                right: 'var(--space-4)',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--color-text-tertiary)',
                                cursor: 'pointer',
                                padding: 'var(--space-2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.color = 'var(--color-text-primary)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.color = 'var(--color-text-tertiary)';
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <h3 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-2xl)' }}>
                            {t('contact.title')}
                        </h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)', fontSize: 'var(--text-sm)' }}>
                            {t('contact.subtitle')}
                        </p>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{
                                    textAlign: 'center',
                                    padding: 'var(--space-6) 0',
                                    color: 'var(--color-accent-lime)'
                                }}
                            >
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ margin: '0 auto var(--space-4)' }}>
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>{t('contact.success.title')}</h4>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)' }}>{t('contact.success.subtitle')}</p>
                                <button className="btn btn-primary" onClick={onClose} style={{ width: '100%' }}>
                                    {t('contact.success.close')}
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                                <div>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                        {t('contact.form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="form-input"
                                        placeholder={t('contact.form.namePlaceholder')}
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                        {t('contact.form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="form-input"
                                        placeholder={t('contact.form.emailPlaceholder')}
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
                                        {t('contact.form.message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        className="form-input"
                                        placeholder={t('contact.form.messagePlaceholder')}
                                        rows={4}
                                        style={{ resize: 'vertical' }}
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={status === 'loading'}
                                    />
                                </div>

                                {status === 'error' && (
                                    <div style={{ color: '#ef4444', fontSize: 'var(--text-sm)', padding: 'var(--space-2)', background: 'rgba(239, 68, 68, 0.1)', borderRadius: 'var(--border-radius)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                        {t('contact.form.error')}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ marginTop: 'var(--space-2)', width: '100%', justifyContent: 'center' }}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? t('contact.form.sending') : t('contact.form.send')}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
