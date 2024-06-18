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
          <h1 className='text-6xl font-bold'>
            Spencer Newton
          </h1>
        </div>
      </header>
      <div className='p-4'>
        <section className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center text-xl py-10'>
          {/* Experience */}
          <div className='border-2 border-teal-300 rounded-lg p-6'>
            <p>
              <span className='text-teal-300 font-bold'>Master of Physics & Computer Science</span><br />from Aberystwyth University
            </p>
          </div>
          <div className='border-2 border-fuchsia-400 rounded-lg p-6'>
            <p>
            <span className='text-fuchsia-400 font-bold'>Senior Software Engineer</span><br /> at Sky
            </p>
          </div>
          <div className='border-2 border-orange-400 rounded-lg p-6'>
              <p>
                All round
                <Tooltip content="References available on request">
                  <span className='text-orange-300 font-bold'>
                    ✨cool dude✨
                  </span>*
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