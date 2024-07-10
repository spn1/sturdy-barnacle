export default function Sidebar() {
    return (
        <div className='sticky top-10 flex flex-col gap-4 rounded-lg p-2'>
            <img
                src='/self-cafe.jpg'
                alt='me!'
                className='h-96 w-full rounded-lg object-cover'
            />
            <div>
                <div>
                    <h2 className='text-4xl'>Spencer Newton</h2>
                    <p className='text-xl'>Senior Software Engineer</p>
                    <p className='text-lg'>M.Phys Space Science and Robotics</p>
                </div>
            </div>
            <div>
                <h2 className='mb-2 border-b-2 border-solid border-sky-600 pb-2 text-2xl dark:border-red-600'>
                    Skills
                </h2>
                <ul className='text-md'>
                    <li>HTML, Javascript, CSS</li>
                    <li>React, Node, Typescript</li>
                    <li>NextJS, Remix, Apollo</li>
                    <li>SASS, Styled Components, Tailwind</li>
                    <li>GraphQL, REST, SQL, Docker</li>
                    <li>CMS Systems (Contentstack)</li>
                    <li>CI/CD Systems (Teamcity, Concourse, Octopus)</li>
                    <li>PaaS Systems (Cloudfoundry)</li>
                    <li>Test Driven Development, Project Planning</li>
                    <li>Technical Leadership, Software Design</li>
                    <br />
                    <li>C, C++, Java</li>
                    <li>C#, .Net, Unity, Ditto</li>
                    <li>Python, Bidoof, Bash</li>
                    <li>OpenCV, Fortran, Matlab</li>
                </ul>
            </div>
            <div>
                <h2 className='mb-2 border-b-2 border-solid border-sky-600 pb-2 text-2xl dark:border-red-600'>
                    Interests
                </h2>
                <ul className='text-md border-b-2 border-solid border-sky-600 pb-2 dark:border-red-600'>
                    <li>Web Development</li>
                    <li>Game Development</li>
                    <li>Graphics Programming</li>
                    <br />
                    <li>Video Games</li>
                    <li>Climbing / Bouldering</li>
                    <li>Running / Hiking</li>
                    <li>Reading</li>
                </ul>
            </div>
        </div>
    );
}
