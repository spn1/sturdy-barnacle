import { Link } from '@remix-run/react';
import { Icon } from '~/components/shared/icon';

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
                        >
                            Github
                        </Link>
                    </div>
                    <div className='border-zinc-800 px-6 dark:border-stone-200'>
                        <Link
                            to='https://www.linkedin.com/in/spencer-newton-85065389/'
                            target='_blank'
                            rel='noreferrer'
                            className='flex flex-row'
                        >
                            LinkedIn
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
