export default function Index() {
    return (
        <div className='flex h-full flex-col justify-stretch'>
            <article className='container mx-auto'>
                <h1 className='my-10 text-center text-6xl'>Curriculum Vitae</h1>
                <section className='grid auto-cols-max grid-cols-1 gap-8'>
                    <div className='flex flex-col gap-2 p-4'>
                        <img src='/self-cafe.jpg' alt='me!' />
                        <h2 className='text-4xl'>Spencer Newton</h2>
                        <p className='text-lg'>
                            🐱‍💻 Senior Software Engineer
                        </p>
                        <p className='text-lg'>
                            👨‍🎓 M.Phys Space Science and Robotics
                        </p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='border-b-2 border-solid border-stone-300 pb-4 text-4xl dark:border-zinc-800'>
                            Skills & Experience
                        </h2>
                        <ul className='border-b-2 border-solid border-stone-300 pb-2 dark:border-zinc-800'>
                            <li>HTML, Javascript, CSS</li>
                            <li>React, Node, Typescript</li>
                            <li>GraphQL, REST, SQL, Docker</li>
                            <li>CMS Systems (Contentstack)</li>
                            <li>
                                CI/CD Systems (Teamcity, Concourse, Octopus)
                            </li>
                            <li>PaaS Systems (Cloudfoundry)</li>
                            <li>Test Driven Development, Project Planning</li>
                            <li>Technical Leadership, Software Design</li>
                        </ul>
                        <ul>
                            <li>C#, .Net, C, C++</li>
                            <li>Java, Python, Unity</li>
                            <li>Fortran, Matlab, OpenCV</li>
                            <li>Bash, Unix, Ditto</li>
                        </ul>
                    </div>
                    <div className='col-span-3 flex flex-col gap-4 p-4'>
                        <h2 className='border-b-2 border-solid border-stone-300 pb-2 text-4xl dark:border-zinc-800'>
                            Profile
                        </h2>
                        <p className='text-xl'>
                            A highly focused and dedicated Software Engineer,
                            with a Masters Degree in Physics and Computer
                            Science and 5+ years experience working in software
                            engineering teams. Has an analytical and logical way
                            of thinking, enjoys the aspect of problem-solving
                            with others using modern technology, and is keen to
                            apply modern technology in real-world applications.
                        </p>
                        <p className='text-xl'>
                            Experienced in working on a variety of application
                            domains, including maintaining complex financial
                            software to handle accounts and loans for UHNWI at
                            Credit Suisse, and developing web applications to
                            help customers troubleshoot their issues digitally
                            instead of through call centers at Sky. Later moved
                            into a Senior Software Engineering role to lead the
                            delivery of product settings journeys for Sky&apos;s
                            commercial products and to help develop a new
                            billing page for Sky Mobile.
                        </p>
                    </div>
                    <div className='col-span-3 flex flex-col gap-4 p-4'>
                        <h2 className='border-b-2 border-solid border-stone-300 pb-2 text-4xl dark:border-zinc-800'>
                            Experience
                        </h2>
                        <section>
                            <h3 className='text-2xl'>
                                <span className='font-bold'>Sky, Leeds</span> -{' '}
                                <span className='italic'>
                                    Senior Software Engineer
                                </span>
                            </h3>
                            <div className='text-lg'>
                                <p>
                                    Moved into a senior position to lead a
                                    different team that worked on various
                                    product settings journeys for sky.com
                                </p>
                                <ul className='list-inside list-disc'>
                                    <li>
                                        Led the development of a series of
                                        product settings journeys for a brand
                                        new Sky product, working with teams in
                                        America and India.
                                    </li>
                                    <li>
                                        Collaborated with engineers in other
                                        teams in setting up a stubbing framework
                                        to facilitate API mocking for this new
                                        product, as the external APIs couldnt be
                                        utilized in a development environment.
                                    </li>
                                    <li>
                                        Organized the implementation of
                                        automation testing into the team.
                                    </li>
                                    <li>
                                        Collaborated with business analysts and
                                        product owners to analyze requirements,
                                        refine tickets, and deliver frequent
                                        application updates.
                                    </li>
                                    <li>
                                        Mentored other junior engineers in the
                                        team on software development best
                                        practices.
                                    </li>
                                    <li>
                                        Assisted in developing a new billing
                                        page for Sky mobile customers.
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <h3 className='text-2xl'>
                                <span className='font-bold'>Sky, Leeds</span> -{' '}
                                <span className='italic'>
                                    Software Developer
                                </span>
                            </h3>
                            <div className='text-lg'>
                                <p>
                                    Front end web developer using Javascript,
                                    React, and Node. Developed and maintained
                                    the main hub for content to hlep both
                                    customers and call-center agents diagnose
                                    and fix issues.
                                </p>
                                <ul className='list-inside list-disc'>
                                    <li>
                                        Collaborated with other developers to
                                        implement features for the Sky customer
                                        help website. Included maintaining some
                                        back-end serrvices to augment the web
                                        application.
                                    </li>
                                    <li>
                                        Worked to deadlines using agile
                                        methodologies (scrum and kanban).
                                    </li>
                                    <li>
                                        Helped investigate and fix bugs within
                                        the application, including responding to
                                        high priority incidents.
                                    </li>
                                    <li>
                                        Presented new features to the wider
                                        department to showcase progress of large
                                        projects.
                                    </li>
                                    <li>
                                        In self-development time, developed a
                                        custom tool to help content editors
                                        search for content in a more refined
                                        way.
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <h3 className='text-2xl'>
                                <span className='font-bold'>
                                    Credit Suisse, Zurich
                                </span>{' '}
                                -{' '}
                                <span className='italic'>
                                    IT Consultant, Software Developer
                                </span>
                            </h3>
                            <div className='text-lg'>
                                <p>
                                    Developed complex financial software using
                                    different C#, WCF, Excel, and SQL.
                                </p>
                                <ul className='list-inside list-disc'>
                                    <li>
                                        Worked on augmenting software procided
                                        by an external software company.
                                    </li>
                                    <li>
                                        Conducted maintenance of server-side
                                        applications.
                                    </li>
                                    <li>
                                        Troubleshooted production server
                                        problems with the support team.
                                    </li>
                                    <li>
                                        Developed software with a large team of
                                        co-workers using the scrum methodology.
                                    </li>
                                    <li>
                                        Carefully handles confidential data that
                                        could not leave Switzerland or the Bank.
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className='col-span-3 flex flex-col gap-4 p-4'>
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
                                        Disertation - Passive Structured Light
                                        for Planetary Landers (Computer Vision
                                        based software project, C++ and OpenCV)
                                    </li>
                                    <li>Software Development (Java)</li>
                                    <li>
                                        Program Design, Data Structures, and
                                        Algorithms
                                    </li>
                                    <li>C and UNIX Programming</li>
                                    <li>Agile Methodologies</li>
                                    <li>Numerical Methods (Fortran, Matlab)</li>
                                    <li>Introduction to Intelligent Systems</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className='col-span-3 flex flex-col gap-4 p-4'>
                        <h2 className='border-b-2 border-solid border-stone-300 pb-2 text-4xl dark:border-zinc-800'>
                            Personal Interests
                        </h2>
                        <section>
                            <div className='text-lg'>
                                <ul className='list-inside list-disc'>
                                    <li>Climbing</li>
                                    <li>Reading</li>
                                    <li>Video Games</li>
                                    <li>Running</li>
                                    <li>Programming</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </section>
            </article>
        </div>
    );
}
