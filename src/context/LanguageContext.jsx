import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedLanguage = localStorage.getItem('language-preference');
            if (savedLanguage) {
                return savedLanguage;
            }
            // Optional: detect browser language
            // const browserLang = navigator.language.split('-')[0];
            // return browserLang === 'es' ? 'es' : 'en';
        }
        return 'es'; // default to spanish
    });

    useEffect(() => {
        localStorage.setItem('language-preference', language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
