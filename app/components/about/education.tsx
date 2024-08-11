export default function Education() {
    return (
        <div className='flex flex-col gap-4 md:col-span-2 lg:col-span-3'>
            <h2 className='border-b-2 border-solid border-green-600 pb-2 text-4xl dark:border-rose-400'>
                Education
            </h2>
            <section>
                <div className='flex gap-4 align-middle'>
                    <img
                        src='/aber-shield-color.png'
                        alt='sky logo'
                        className='float-left h-20 pb-2 pl-2'
                    />
                    <div className='grow self-center'>
                        <h3 className='text-xl font-bold'>
                            Aberystwyth University, Aberstwyth
                        </h3>
                        <h4 className='text-xl italic'>
                            M.Phys Space Science and Robotics
                        </h4>
                    </div>
                    <span className='justify-self-end'>2010 - 2015</span>
                </div>
                <div className='text-md'>
                    <p>Modules included:</p>
                    <ul className='list-outside list-disc pl-4'>
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
