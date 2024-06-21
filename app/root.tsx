import type { LinksFunction } from '@remix-run/node';
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import { useState, useCallback, useEffect } from 'react';

import appStyles from '~/app.css?url';
import tailwindStyles from '~/tailwind.css?url';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: appStyles },
];

/**
 * The function that runs when an action is taken on the page. This is a
 * server-only function that handles mutations and fetches. If a non-GET
 * request is made, the action is called before the `loader`.
 * i.e. Form submit, search query, etc
 */
// export const action = async ({ request }: ActionFunctionArgs) => {

// }

/**
 * The function that runs when the page is loaded. It can be used to provide data
 * to the route when rendering. It is only ever run on the server, but when a
 * navigation occurs on the browser, Remix calls this function with `fetch` from
 * the client. This can technically contain server secrets, as any code that
 * isn't used to render the UI is removed from the browser bundle.
 * @param param Loader Function Arguments
 */
// export const loader = async ({ request }: LoaderFunctionArgs) => {

// }

/**
 * The component returned from the `root.tsx` file will serve as the template
 * for every page. The component that is rendered (based on the routing) will
 * be inserted where the <Outlet /> component is.
 * @returns The template component for the application
 */
export default function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (window !== undefined && sessionStorage !== undefined) {
            setTheme(
                window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : sessionStorage.getItem('theme') || 'light'
            );
        }
    }, []);

    const changeTheme = useCallback(() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');

        sessionStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    }, [theme]);

    return (
        <html className={theme} lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body className='font-sans bg-stone-200 text-zinc-800 dark:bg-zinc-900 dark:text-stone-200'>
                <nav
                    className='flex justify-between items-center p-4 h-14'
                    id='navbar'
                >
                    <h1 className='font-bold text-xl'>Portfolio</h1>
                    <button onClick={changeTheme} type='button'>
                        {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                </nav>
                <main id='main'>
                    {/*  */}
                    <Outlet />
                </main>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
