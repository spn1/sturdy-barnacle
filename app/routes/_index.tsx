import {
  Link
} from '@remix-run/react';

import { Tooltip } from '~/components/tooltip';

export default function Index() {
  return (
    <div className='container mx-auto h-dvh'>
      <header className='bg-hero bg-cover bg-center bg-clip-border p-4 h-1/2 md:h-10/12'>
        {/* hero */}
        <div className='h-full w-2/3 flex flex-col gap-2 justify-center'>
          <p className='text-2xl'>
            Hello! My name is
          </p>
          <h1 className='text-6xl font-bold'>
            Spencer Newton 
          </h1>
          <p className='text-2xl'>
            Welcome to my web-portfolio!
          </p>
        </div>
      </header>
      <div className='p-4'>
        <section className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center text-xl py-10'>
          {/* Experience */}
          <div className='bg-zinc-800 text-stone-200 dark:text-zinc-800 dark:bg-stone-200 rounded-xl shadow-xl p-6'>
            <p>
              <span className='text-sky-200 dark:text-rose-500 font-bold'>Master of Physics & Computer Science</span>,<br /> Aberystwyth University
            </p>
          </div>
          <div className='bg-zinc-800 text-stone-200 dark:text-zinc-800 dark:bg-stone-200 rounded-xl shadow-xl p-6'>
            <p>
            <span className='text-emerald-400 dark:text-emerald-600 font-bold'>Senior Software Engineer</span><br /> at Sky, Leeds
            </p>
          </div>
          <div className='bg-zinc-800 text-stone-200 dark:text-zinc-800 dark:bg-stone-200 rounded-xl shadow-xl py-6 px-6'>
              <p>
                All round
                <Tooltip content="*References available on request">
                  ✨
                  <span className=' text-yellow-200 dark:text-orange-600 font-bold'>
                    cool dude
                  </span>
                  *✨
                </Tooltip>
              </p>
          </div>
        </section>
        <section className='flex flex-row justify-center divide-x text-xl w-full py-10'>
          {/* Links to other pages */}
          <div className='px-6'>
            <Link to='/about'>About Me</Link>
          </div>
          <div className='px-6'>
            <Link to='/projects'>Portfolio & Projects</Link>
          </div>
          <div className='px-6'>
            <Link to='https://github.com/spn1' target='_blank' rel="noreferrer">Github</Link>
          </div>
        </section>
      </div>
    </div>
  )
}