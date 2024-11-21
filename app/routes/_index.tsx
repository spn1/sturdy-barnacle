import { Link } from '@remix-run/react';

export default function Index() {
    return (
        <div className='flex h-svh flex-col justify-stretch'>
            <header className='container mx-auto flex h-1/2 flex-col justify-center gap-6 p-4 md:flex-row'>
                <div className='flex flex-col justify-center gap-2 text-center align-middle'>
                    <p className='text-2xl'>Hello! My name is</p>
                    <h1 className='text-6xl font-bold'>Spencer Newton</h1>
                    <span className='wave mx-auto w-32 text-6xl'>👋</span>
                </div>
            </header>
            <div className='flex h-1/2 flex-col justify-evenly'>
                <section className='container mx-auto grid max-w-screen-lg grid-cols-1 gap-4 p-4 py-10 text-xl sm:grid-cols-2'>
                    <div className='h-full bg-stone-200 p-6 text-zinc-800 dark:bg-zinc-800 dark:text-stone-200'>
                        <p>
                            I&apos;m a{' '}
                            <span className='text-emerald-500 dark:text-emerald-400'>
                                Senior Software Engineer
                            </span>{' '}
                            with 6+ years experience working in software
                            engineering teams. I love solving problems using
                            modern technology, with a focus on web development
                            using React, Typescript, and Node. Feel free to hop
                            on over to my{' '}
                            <a
                                className='text-emerald-500 underline dark:text-emerald-400'
                                href='/about'
                            >
                                About
                            </a>{' '}
                            page to learn more about my experience.
                        </p>
                    </div>
                    <div className='bg-stone-200 p-6 text-zinc-800 dark:bg-zinc-800 dark:text-stone-200'>
                        <p>
                            I have a{' '}
                            <span className='text-rose-600 dark:text-rose-400'>
                                Master&apos;s degree in Physics and Computer
                                Science
                            </span>{' '}
                            and am interested in all things space and tech.
                            I&apos;m a lover of video games and particularly
                            enjoy learning how they work from a programming
                            perspective. I&apos;m currently working at Sky in
                            Leeds, but am open to other opportunities.
                        </p>
                    </div>
                </section>
                <section className='flex w-full flex-row justify-center divide-x py-10 text-xl text-zinc-800 dark:text-stone-200'>
                    <div className='border-zinc-800 px-6 dark:border-stone-200'>
                        <Link
                            to='https://github.com/spn1'
                            target='_blank'
                            rel='noreferrer'
                            className='flex items-center gap-2'
                        >
                            Github
                            <svg
                                className='fill-zinc-800 dark:fill-stone-200'
                                viewBox='0 0 98 96'
                                width='16'
                                height='16'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className='border-zinc-800 px-6 dark:border-stone-200'>
                        <Link
                            to='https://www.linkedin.com/in/spencer-newton-85065389/'
                            target='_blank'
                            rel='noreferrer'
                            className='flex items-center gap-2'
                        >
                            LinkedIn
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                className='fill-zinc-800 dark:fill-stone-200'
                                viewBox='0 0 16 16'
                            >
                                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z' />
                            </svg>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
