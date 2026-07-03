'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', toggle: () => {} });

export function ThemeProvider({ children }) {
    // Server + first client render default to dark (matches <html class="dark">
    // set by the blocking script in layout, so there is no theme flash).
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);

    // Read the stored preference once, after mount.
    useEffect(() => {
        let stored = null;
        try {
            stored = localStorage.getItem('theme');
        } catch (e) {}
        if (stored === 'light' || stored === 'dark') setTheme(stored);
        setMounted(true);
    }, []);

    // Keep the <html> class and storage in sync with state (idempotent).
    useEffect(() => {
        if (!mounted) return;
        document.documentElement.classList.toggle('dark', theme === 'dark');
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {}
    }, [theme, mounted]);

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
