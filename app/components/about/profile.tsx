export default function Profile() {
    return (
        <div className='flex flex-col gap-2'>
            <h2 className='text-4xl md:hidden'>Profile</h2>
            <p className='text-md border-t-2 border-solid border-green-600 pt-4 dark:border-rose-400'>
                A highly focused and dedicated Software Engineer, with a Masters
                Degree in Physics and Computer Science and 5+ years experience
                working in software engineering teams. Has an analytical and
                logical way of thinking, enjoys the aspect of problem-solving
                with others using modern technology, and is keen to apply modern
                technology in real-world applications.
            </p>
            <p className='text-md'>
                Experienced in working on a variety of application domains,
                including maintaining complex financial software to handle
                accounts and loans for UHNWI at Credit Suisse, and developing
                web applications to help customers troubleshoot their issues
                digitally instead of through call centers at Sky. Later moved
                into a Senior Software Engineering role to lead the delivery of
                product settings journeys for Sky&apos;s commercial products and
                to help develop a new billing page for Sky Mobile.
            </p>
        </div>
    );
}
