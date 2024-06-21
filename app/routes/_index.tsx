import { Link } from '@remix-run/react';

import { Tooltip } from '~/components/tooltip';
import { Waves } from '~/components/waves';

export default function Index() {
    return (
        <div className='h-dvh'>
            <header className='bg-hero md:h-10/12 container mx-auto flex h-1/2 bg-cover bg-clip-border bg-center p-4'>
                {/* hero */}
                <div className='flex h-full w-2/3 flex-col justify-center gap-2'>
                    <p className='maggy text-2xl'>Hello! My name is</p>
                    <h1 className='text-6xl font-bold'>Spencer Newton</h1>
                </div>
            </header>
            <Waves />
            <div className='bg-zinc-800 p-4 dark:bg-stone-200'>
                <section className='container mx-auto grid grid-cols-1 justify-center gap-4 py-10 text-xl sm:grid-cols-2 md:grid-cols-3'>
                    {/* Experience */}
                    <div className='rounded-xl bg-stone-200 p-6 text-zinc-800 shadow-xl dark:bg-zinc-800 dark:text-stone-200'>
                        <p>
                            <span className='font-bold text-rose-600 dark:text-rose-400'>
                                Master of Physics & Computer Science
                            </span>
                            ,<br /> Aberystwyth University
                        </p>
                    </div>
                    <div className='rounded-xl bg-stone-200 p-6 text-zinc-800 shadow-xl dark:bg-zinc-800 dark:text-stone-200'>
                        <p>
                            <span className='font-bold text-emerald-600 dark:text-emerald-400'>
                                Senior Software Engineer
                            </span>
                            <br /> at Sky, Leeds
                        </p>
                    </div>
                    <div className='rounded-xl bg-stone-200 p-6 text-zinc-800 shadow-xl dark:bg-zinc-800 dark:text-stone-200'>
                        <p>
                            All round
                            <Tooltip content='*References available on request'>
                                ✨
                                <span className='font-bold text-orange-600 dark:text-yellow-200'>
                                    cool dude
                                </span>
                                *✨
                            </Tooltip>
                        </p>
                    </div>
                </section>
                <section className='flex w-full flex-row justify-center divide-x py-10 text-xl text-stone-200 dark:text-zinc-800'>
                    {/* Links to other pages */}
                    <div className='border-stone-200 px-6 dark:border-zinc-800'>
                        <Link to='/about'>About Me</Link>
                    </div>
                    <div className='border-stone-200 px-6 dark:border-zinc-800'>
                        <Link to='/projects'>Portfolio & Projects</Link>
                    </div>
                    <div className='border-stone-200 px-6 dark:border-zinc-800'>
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
