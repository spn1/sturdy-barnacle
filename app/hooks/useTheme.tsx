import { useState, useEffect, useCallback } from 'react';

export default (initialTheme: string) => {
    const [theme, setTheme] = useState<string>(initialTheme);

    console.log('InitialTheme: ', initialTheme);
    console.log('Theme: ', theme);

    useEffect(() => {
        if (window !== undefined) {
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
