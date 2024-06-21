import { Link } from '@remix-run/react';

import { Tooltip } from '~/components/tooltip';

export default function Index() {
    return (
        <div className='container mx-auto h-dvh'>
            <header className='bg-hero md:h-10/12 h-1/2 bg-cover bg-clip-border bg-center p-4'>
                {/* hero */}
                <div className='flex h-full w-2/3 flex-col justify-center gap-2'>
                    <p className='text-2xl'>Hello! My name is</p>
                    <h1 className='text-6xl font-bold'>Spencer Newton</h1>
                    <p className='text-2xl'>Welcome to my web-portfolio!</p>
                </div>
            </header>
            <div className='p-4'>
                <section className='grid grid-cols-1 justify-center gap-4 py-10 text-xl sm:grid-cols-2 md:grid-cols-3'>
                    {/* Experience */}
                    <div className='rounded-xl bg-zinc-800 p-6 text-stone-200 shadow-xl dark:bg-stone-200 dark:text-zinc-800'>
                        <p>
                            <span className='font-bold text-sky-200 dark:text-rose-500'>
                                Master of Physics & Computer Science
                            </span>
                            ,<br /> Aberystwyth University
                        </p>
                    </div>
                    <div className='rounded-xl bg-zinc-800 p-6 text-stone-200 shadow-xl dark:bg-stone-200 dark:text-zinc-800'>
                        <p>
                            <span className='font-bold text-emerald-400 dark:text-emerald-600'>
                                Senior Software Engineer
                            </span>
                            <br /> at Sky, Leeds
                        </p>
                    </div>
                    <div className='rounded-xl bg-zinc-800 px-6 py-6 text-stone-200 shadow-xl dark:bg-stone-200 dark:text-zinc-800'>
                        <p>
                            All round
                            <Tooltip content='*References available on request'>
                                ✨
                                <span className='font-bold text-yellow-200 dark:text-orange-600'>
                                    cool dude
                                </span>
                                *✨
                            </Tooltip>
                        </p>
                    </div>
                </section>
                <section className='flex w-full flex-row justify-center divide-x py-10 text-xl'>
                    {/* Links to other pages */}
                    <div className='px-6'>
                        <Link to='/about'>About Me</Link>
                    </div>
                    <div className='px-6'>
                        <Link to='/projects'>Portfolio & Projects</Link>
                    </div>
                    <div className='px-6'>
                        <Link
                            to='https://github.com/spn1'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
