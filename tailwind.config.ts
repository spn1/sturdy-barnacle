import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'finger-fort': "url('/finger-fort-bg.png')",
                envdiff: "url('/envdiff-bg.png')",
                psl: "url('/psl-bg.png')",
                'triple-triad': "url('/triple-triad-bg.png')",
            },
            animation: {
                'modal-fade': 'modal-fade 0.3s ease-in-out',
            },
            keyframes: {
                'modal-fade': {
                    '0%': { opacity: '0%', transform: 'translateY(-10%)' },
                    '100%': { opacity: '100%', transform: 'translateY(0%)' },
                },
            },
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
    },
    darkMode: 'selector',
    plugins: [],
} satisfies Config;
