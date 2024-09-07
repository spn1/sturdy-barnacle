import { Link } from '@remix-run/react';

import { Waves } from '~/components/home/waves';

export default function Index() {
    return (
        <div className='flex h-svh flex-col justify-stretch'>
            <header className='container mx-auto flex h-1/2 max-w-screen-xl flex-col justify-center p-4 align-middle md:flex-row'>
                <div className='flex flex-col justify-center gap-2 text-center'>
                    <h1 className='text-6xl font-bold'>
                        Spencer Newton <span className='wave text-6xl'>👋</span>
                    </h1>
                    <p className='text-4xl'>Senior Software Engineer</p>
                </div>
            </header>
            <Waves />
            <div className='flex h-1/2 flex-col justify-evenly bg-zinc-800 dark:bg-stone-200'>
                <section className='container mx-auto grid max-w-screen-md grid-cols-1 justify-center gap-4 p-4 py-10 text-xl sm:grid-cols-2'>
                    <div className='rounded-xl bg-stone-200 p-6 text-zinc-800 shadow-lg shadow-zinc-600 dark:bg-zinc-800 dark:text-stone-200 dark:shadow-stone-500'>
                        <p>
                            <span className='font-bold text-red-600 dark:text-rose-400'>
                                Master of Physics & Computer Science
                            </span>
                            ,<br /> Aberystwyth University
                        </p>
                    </div>
                    <div className='rounded-xl bg-stone-200 p-6 text-zinc-800 shadow-lg shadow-zinc-600 dark:bg-zinc-800 dark:text-stone-200 dark:shadow-stone-500'>
                        <p>
                            <span className='font-bold text-green-600 dark:text-emerald-400'>
                                Senior Software Engineer
                            </span>
                            <br /> at Sky, Leeds
                        </p>
                    </div>
                </section>
                <section className='flex w-full flex-row justify-center divide-x py-10 text-xl text-stone-200 dark:text-zinc-800'>
                    <div className='border-stone-200 px-6 dark:border-zinc-800'>
                        <Link to='/about'>About Me</Link>
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
                    <div className='border-stone-200 px-6 dark:border-zinc-800'>
                        <Link
                            to='https://www.linkedin.com/in/spencer-newton-85065389/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            LinkedIn
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
