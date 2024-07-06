export default function Education() {
    return (
        <div className='flex flex-col gap-4 md:col-span-2 lg:col-span-3'>
            <h2 className='border-b-2 border-solid border-stone-300 pb-2 text-4xl dark:border-zinc-800'>
                Education
            </h2>
            <section>
                <h3 className='text-2xl'>
                    <span className='font-bold'>
                        Aberystwyth University, Aberystwyth
                    </span>{' '}
                    -{' '}
                    <span className='italic'>
                        M.Phys Space Science and Robotics
                    </span>
                </h3>
                <div className='text-lg'>
                    <p>Modules included:</p>
                    <ul className='list-inside list-disc'>
                        <li>
                            Disertation - Passive Structured Light for Planetary
                            Landers (Computer Vision based software project, C++
                            and OpenCV)
                        </li>
                        <li>Software Development (Java)</li>
                        <li>Program Design, Data Structures, and Algorithms</li>
                        <li>C and UNIX Programming</li>
                        <li>Agile Methodologies</li>
                        <li>Numerical Methods (Fortran, Matlab)</li>
                        <li>Introduction to Intelligent Systems</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
