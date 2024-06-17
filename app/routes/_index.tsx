import {
  Link
} from '@remix-run/react';

export default function Index() {
  return (
    <>
      <header>
        {/* hero */}
        <h1 className='red-debug text-3xl font-bold underline'>
          Spencer Newton
        </h1>
        <h2>
          Senior Software Engineer
        </h2>
        <h3>
          M.Phys Space Science and Robotics
        </h3>
      </header>
      <section>
        {/* Experience */}
        <div>
          Master of Physics & Computer Science from Aberystwyth University
        </div>
        <div>
          Senior Software Engineer at Sky
        </div>
        <div>
          Experience with a variety of frameworks and technology
        </div>
      </section>
      <section>
        {/* Links to other pages */}
        <div>
          <Link to='/about'>About Me</Link>
        </div>
        <div>
          <Link to='/projects'>Portfolio & Projects</Link>
        </div>
        <div>
          <Link to='https://github.com/spn1' target='_blank' rel="noreferrer">Github</Link>
        </div>
      </section>
    </>
  )
}