import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'finger-fort': "url('/finger-fort-1.png')",
                envdiff: "url('/envdiff.png')",
                psl: "url('/psl-screenshot.png')",
                'triple-triad': "url('/triple-triad-1.png')",
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
