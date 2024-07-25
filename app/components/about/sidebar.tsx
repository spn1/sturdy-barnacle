export default function Sidebar() {
    return (
        <div className='sticky top-10 flex flex-col gap-4 rounded-lg p-2'>
            <div className='flex flex-row gap-4 md:flex-col'>
                <img
                    src='/self-cafe.jpg'
                    alt='me!'
                    className='float-left size-52 rounded-lg object-cover md:h-96 md:w-full'
                />
                <div className='flex flex-col gap-2'>
                    <h2 className='text-6xl md:text-4xl'>Spencer Newton</h2>
                    <p className='text-3xl text-green-600 md:text-xl dark:text-emerald-400'>
                        Senior Software Engineer
                    </p>
                    <p className='text-3xl text-red-600 md:text-xl dark:text-rose-400'>
                        M.Phys Space Science and Robotics
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row md:flex-col'>
                <div className='w-full md:w-full'>
                    <h2 className='mb-2 border-b-2 border-solid border-green-600 pb-2 text-2xl dark:border-rose-400'>
                        Skills
                    </h2>
                    <ul className='text-md'>
                        <li>HTML, Javascript, CSS</li>
                        <li>React, Node, Typescript</li>
                        <li>NextJS, Remix,</li>
                        <li>SASS, Styled Components, Tailwind</li>
                        <li>GraphQL, REST, SQL, Docker</li>
                        <li>CMS Systems (Contentstack)</li>
                        <li>CI/CD Systems (Teamcity, Concourse, Octopus)</li>
                        <li>PaaS Systems (Cloudfoundry)</li>
                        <li>Test Driven Development, Project Planning</li>
                        <li className='mb-2'>
                            Technical Leadership, Software Design
                        </li>
                        <li>C, C++, Java</li>
                        <li>C#, .Net, Unity, Ditto</li>
                        <li>Python, Bidoof, Bash</li>
                        <li>OpenCV, Fortran, Matlab</li>
                    </ul>
                </div>
                <div className='w-full md:w-full'>
                    <h2 className='mb-2 border-b-2 border-solid border-green-600 pb-2 text-2xl dark:border-rose-400'>
                        Interests
                    </h2>
                    <ul className='text-md border-solid border-sky-600 pb-2 md:border-b-2 dark:border-rose-400'>
                        <li>Web Development</li>
                        <li>Game Development</li>
                        <li className='mb-2'>Graphics Programming</li>
                        <li>Video Games</li>
                        <li>Climbing / Bouldering</li>
                        <li>Running / Hiking</li>
                        <li>Reading</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
