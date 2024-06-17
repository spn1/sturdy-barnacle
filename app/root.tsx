import type { ActionFunctionArgs, LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Form,
  NavLink,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { useEffect } from "react";

import appStyles from './app.css?url';
import tailwindStyles from './tailwind.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: appStyles }
]

/**
 * The function that runs when an action is taken on the page
 * i.e. Form submit, search query, etc
 */
// export const action = async ({ request }: ActionFunctionArgs) => {

// }

/**
 * The function that runs when the page is loaded
 * @param param Loader Function Arguments
 */
// export const loader = async ({ request }: LoaderFunctionArgs) => {

// }


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav id='navbar'>
          <h1>
            Portfolio
          </h1>
        </nav>
        <article id="main">
          <Outlet />
        </article>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
