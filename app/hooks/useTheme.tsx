import { useState, useEffect, useCallback } from 'react';

export default (initialTheme: string) => {
    const [theme, setTheme] = useState<string>(initialTheme);

    useEffect(() => {
        if (window !== undefined && sessionStorage !== undefined) {
            const initialTheme = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches
                ? 'dark'
                : 'light';
            setTheme(initialTheme);
            document.cookie = `theme=${initialTheme}`;
        }
    }, []);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        setTheme(newTheme);
        document.cookie = `theme=${newTheme}`;
    }, [theme]);

    return [theme, toggleTheme] as const;
};