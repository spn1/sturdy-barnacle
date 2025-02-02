import type {
    LinksFunction,
    LoaderFunctionArgs,
    MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import {
    useLoaderData,
    NavLink,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';

import appStyles from '~/app.css?url';
import tailwindStyles from '~/tailwind.css?url';
import customStyles from '~/styles/_index.css?url';
import useTheme from './hooks/useTheme';

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: appStyles },
    { rel: 'stylesheet', href: customStyles },
];

/**
 * Provides metadata that is used to populate the head of the document.
 * @returns The metadata for the page
 */
export const meta: MetaFunction = () => {
    return [
        { title: 'Spencer Newton' },
        {
            property: 'og:title',
            content: 'Spencer Newton',
        },
        {
            name: 'description',
            content: 'A CV and portfolio of work by Spencer Newton',
        },
        {
            name: 'og:description',
            content: 'A CV and portfolio of work by Spencer Newton',
        },
        {
            name: 'canonical',
            content: 'https://www.spencernewton.dev/',
        },
        {
            name: 'og:url',
            content: 'https://www.spencernewton.dev/',
        },
        {
            name: 'og:image',
            content: '/self-museum-cropped.jpeg',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
    ];
};

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
export const loader = async ({ request }: LoaderFunctionArgs) => {
    const cookies = request.headers.get('Cookie') as string;
    const themeCookie = cookies
        ?.split('; ')
        ?.filter((cookie) => cookie.includes('theme'));

    if (!themeCookie || themeCookie.length !== 1) {
        return json({ theme: 'dark' });
    }

    const theme = themeCookie[0]?.split('=')[1];

    return json({ theme });
};

/**
 * The component returned from the `root.tsx` file will serve as the template
 * for every page. The component that is rendered (based on the routing) will
 * be inserted where the <Outlet /> component is.
 * @returns The template component for the application
 */
export default function App() {
    // const loaderData = useLoaderData<typeof loader>();
    const [theme] = useTheme('light');

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
            <body className='bg-texture min-h-lvh bg-stone-200 font-sans text-zinc-800 dark:bg-zinc-900 dark:text-stone-200'>
                <nav
                    className='flex h-14 items-center justify-center bg-stone-200 p-4 dark:bg-zinc-900'
                    id='navbar'
                >
                    <div className='mx-auto flex divide-x text-xl'>
                        <NavLink
                            to='/about'
                            className={
                                'border-zinc-800 px-6 dark:border-stone-200'
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to='/'
                            className='border-zinc-800 px-6 text-xl dark:border-stone-200'
                        >
                            Home
                        </NavLink>
                    </div>
                    {/* <button
                        onClick={toggleTheme}
                        type='button'
                        className='ml-auto'
                    >
                        {theme === 'dark' ? '🌞' : '🌙'}
                    </button> */}
                </nav>
                <main id='main' className='min-h-lvh'>
                    <Outlet />
                </main>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
