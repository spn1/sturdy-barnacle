type Skills = {
    languages: string[];
    meta: string[];
    other: string[];
};

type Experience = {
    [key: string]: string[];
};

const skills: Skills = {
    languages: [
        'HTML',
        'CSS',
        'Javascript',
        'React',
        'Node',
        'Typescript',
        'NextJS',
        'Remix',
        'Styled Components',
        'SASS',
        'Tailwind',
        'GraphQL',
        'REST APIs',
        'SQL',
        'Postgresql',
        'Docker',
    ],
    meta: [
        'Teamcity',
        'Concourse',
        'Octopus',
        'GCP',
        'Cloud Run',
        'Cloud Build',
        'Cloud SQL',
        'Firebase',
        'CMS Systems (Contentstack)',
        'PaaS Systems (Cloudfoundry)',
        'Test Driven Development',
        'Jest',
        'React Testing Library',
        'Playwright',
        'Percy',
        'Project Planning',
        'Technical Leadership',
        'Software Design',
        'Safe 6',
    ],
    other: [
        'C',
        'C++',
        'Java',
        'C#',
        '.Net',
        'Unity',
        'Ditto',
        'Python',
        'Bidoof',
        'Bash',
        'OpenCV',
        'Fortran',
        'Matlab',
    ],
};

const experience: Experience = {
    'sky-senior': [
        'HTML',
        'Javascript',
        'CSS',
        'React',
        'Node',
        'Typescript',
        'Styled Components',
        'SASS',
        'GraphQL',
        'Postgresql',
        'REST',
        'NextJS',
        'Docker',
        'Concourse',
        'Octopus',
        'GCP',
        'Cloud Run',
        'Cloud Build',
        'Cloud SQL',
        'CMS Systems (Contentstack)',
        'PaaS Systems (Cloudfoundry)',
        'Test Driven Development',
        'Jest',
        'React Testing Library',
        'Playwright',
        'Percy',
        'Project Planning',
        'Technical Leadership',
        'Software Design',
        'Safe 6',
    ],
    'sky-dev': [
        'HTML',
        'Javascript',
        'CSS',
        'React',
        'Node',
        'REST APIs',
        'Styled Components',
        'Postgresql',
        'SASS',
        'Teamcity',
        'Octopus',
        'CMS Systems (Contentstack)',
        'PaaS Systems (Cloudfoundry)',
        'Test Driven Development',
        'Jest',
        'React Testing Library',
        'Docker',
        'GraphQL',
    ],
    fdm: ['SQL', 'C#', '.Net', 'Teamcity'],
};

const renderSkills = (hovered: string | null, skills: string[]) => {
    return (
        <>
            {skills.map((skill: string) => {
                const show = hovered
                    ? experience[hovered].includes(skill)
                    : false;
                return (
                    <li
                        className={`inline-block ${show ? 'show' : ''}`}
                        key={skill}
                    >
                        {skill},&nbsp;
                    </li>
                );
            })}
        </>
    );
};

export default function Sidebar({ hovered }: { hovered: string | null }) {
    return (
        <div className='sticky top-10 flex flex-col gap-4 rounded-lg p-2'>
            <div className='flex flex-col gap-4 sm:flex-row md:flex-col'>
                <img
                    src='/img/self-museum-cropped.jpeg'
                    alt='me!'
                    className='size-full rounded-lg sm:size-32 md:size-64 md:w-full md:object-cover'
                />
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl'>Spencer Newton</h2>
                    <p className='text-xl text-green-700 md:text-2xl dark:text-emerald-400'>
                        Senior Software Engineer
                    </p>
                    <p className='text-xl text-red-600 md:text-2xl dark:text-rose-400'>
                        M.Phys Space Science and Robotics
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-4 sm:flex-row md:flex-col'>
                <div className='w-full md:w-full'>
                    <h2 className='mb-2 border-b-2 border-solid border-green-700 pb-2 text-2xl dark:border-rose-400'>
                        Skills
                    </h2>
                    <ul
                        className={`text-md flex-col gap-4 ${hovered ? 'fade-out-skills' : ''}`}
                    >
                        {renderSkills(hovered, skills.languages)}
                        {renderSkills(hovered, skills.meta)}
                        {renderSkills(hovered, skills.other)}
                    </ul>
                </div>
                <div className='w-full md:w-full'>
                    <h2 className='mb-2 border-b-2 border-solid border-green-700 pb-2 text-2xl dark:border-rose-400'>
                        Interests
                    </h2>
                    <ul className='text-md border-solid border-green-700 pb-2 md:border-b-2 dark:border-rose-400'>
                        <li>Software Engineering</li>
                        <li>Technical Design</li>
                        <li className='mb-2'>Game Development</li>
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
