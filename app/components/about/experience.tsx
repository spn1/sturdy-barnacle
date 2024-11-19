export default function Experience({
    setHovered,
}: {
    setHovered: (section: string | null) => void;
}) {
    const hoverHandlers = (section: string) => ({
        onMouseEnter: () => setHovered(section),
        onMouseLeave: () => setHovered(null),
    });

    return (
        <div className='flex flex-col gap-6 md:col-span-2 lg:col-span-3'>
            <h2 className='border-b-2 border-solid border-green-600 pb-2 text-4xl dark:border-rose-400'>
                Professional Experience
            </h2>
            <div className='fade-out-experience flex flex-col gap-8'>
                <section {...hoverHandlers('sky-senior')}>
                    <div className='flex gap-4'>
                        <img
                            src='/img/sky-logo-small-rgb-128x128.png'
                            alt='sky logo'
                            className='float-left size-16'
                        />
                        <div className='grow'>
                            <h3 className='text-xl font-bold'>Sky, Leeds</h3>
                            <h4 className='text-xl italic'>
                                Senior Software Engineer
                            </h4>
                        </div>
                        <span className='justify-self-end'>2022 - Present</span>
                    </div>
                    <div>
                        <div className='text-md'>
                            <ul className='list-outside list-disc pl-4'>
                                <li>
                                    Led the development of a series of product
                                    settings journeys for a brand new Sky
                                    product, working with teams in America and
                                    India.
                                </li>
                                <li>
                                    Worked with engineers in other teams to set
                                    up the infrastructure to enable API mocking,
                                    as the new product&apos;s external APIs
                                    couldnt be utilized in a development
                                    environment.
                                </li>
                                <li>
                                    Organized the implementation of automation
                                    testing into the team using playwright and
                                    percy.
                                </li>
                                <li>
                                    Collaborated with business analysts and
                                    product owners to analyze requirements,
                                    refine tickets, and deliver frequent
                                    application updates.
                                </li>
                                <li>
                                    Mentored other junior engineers in the team
                                    on software development best practices.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section {...hoverHandlers('sky-dev')}>
                    <div className='flex gap-4'>
                        <img
                            src='/img/sky-logo-small-rgb-128x128.png'
                            alt='sky logo'
                            className='float-left size-16'
                        />
                        <div className='grow'>
                            <h3 className='text-xl font-bold'>Sky, Leeds</h3>
                            <h4 className='text-xl italic'>
                                Software Developer
                            </h4>
                        </div>
                        <span className='justify-self-end'>2018 - 2022</span>
                    </div>
                    <div className='text-md'>
                        <ul className='list-outside list-disc pl-4'>
                            <li>
                                Collaborated with other developers to implement
                                features for the Sky customer help website.
                                Included maintaining some back-end services to
                                augment the web application.
                            </li>
                            <li>
                                Worked to deadlines using agile methodologies
                                (scrum and kanban).
                            </li>
                            <li>
                                Helped investigate and fix bugs within the
                                application, including responding to high
                                priority incidents.
                            </li>
                            <li>
                                Presented new features to the wider department
                                to showcase progress of large projects.
                            </li>
                            <li>
                                In self-development time, developed a custom
                                tool to help content editors search for content
                                in a more refined way.
                            </li>
                        </ul>
                    </div>
                </section>
                <section {...hoverHandlers('fdm')}>
                    <div className='flex gap-4'>
                        <img
                            src='/img/credit-suisse-logo-256x256.png'
                            alt='sky logo'
                            className='float-left size-16'
                        />
                        <div className='grow'>
                            <h3 className='text-xl font-bold'>
                                Credit Suisse, Zurich
                            </h3>
                            <h4 className='text-xl italic'>IT Consultant</h4>
                        </div>
                        <span className='justify-self-end'>2017 - 2018</span>
                    </div>
                    <div className='text-md'>
                        <ul className='list-outside list-disc pl-4'>
                            <li>
                                Worked on augmenting software provided by an
                                external software company.
                            </li>
                            <li>
                                Conducted maintenance of server-side
                                applications.
                            </li>
                            <li>
                                Troubleshooted production server problems with
                                the support team.
                            </li>
                            <li>
                                Developed software with a large team of
                                co-workers using the scrum methodology.
                            </li>
                            <li>
                                Carefully handled confidential data that could
                                not leave Switzerland or the Bank.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
