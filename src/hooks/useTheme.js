import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme-preference');
            if (savedTheme) {
                return savedTheme;
            }
        }
        return 'system';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        const applyTheme = (themeValue) => {
            if (themeValue === 'system') {
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                root.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
            } else {
                root.setAttribute('data-theme', themeValue);
            }
        };

        applyTheme(theme);
        localStorage.setItem('theme-preference', theme);

        // Listen for system theme changes if 'system' is selected
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    return { theme, setTheme };
};
