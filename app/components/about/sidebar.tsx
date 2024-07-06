export default function Sidebar() {
    return (
        <div className='flex w-1/3 flex-col gap-4 rounded-lg bg-stone-300 dark:bg-zinc-800'>
            <div>
                <img
                    src='/self-ramen.jpg'
                    alt='me!'
                    className='h-72 w-full rounded-lg object-cover'
                />
                <div className='p-2'>
                    <h2 className='text-4xl'>Spencer Newton</h2>
                    <p className='text-lg'>Senior Software Engineer</p>
                    <p className='text-lg'>M.Phys Space Science and Robotics</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 p-2'>
                <h2 className='border-b-2 border-solid border-sky-600 text-2xl dark:border-red-600'>
                    Skills
                </h2>
                <ul className='text-md border-b-2 border-solid border-sky-600 pb-2 dark:border-red-600'>
                    <li>HTML, Javascript, CSS</li>
                    <li>React, Node, Typescript</li>
                    <li>GraphQL, REST, SQL, Docker</li>
                    <li>CMS Systems (Contentstack)</li>
                    <li>CI/CD Systems (Teamcity, Concourse, Octopus)</li>
                    <li>PaaS Systems (Cloudfoundry)</li>
                    <li>Test Driven Development, Project Planning</li>
                    <li>Technical Leadership, Software Design</li>
                </ul>
                <ul className='pb-2'>
                    <li>C#, .Net, C, C++</li>
                    <li>Java, Python, Unity</li>
                    <li>Fortran, Matlab, OpenCV</li>
                    <li>Bash, Unix, Ditto</li>
                </ul>
            </div>
        </div>
    );
}
