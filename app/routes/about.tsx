import Education from '~/components/about/education';
import Experience from '~/components/about/experience';
import Profile from '~/components/about/profile';
import Sidebar from '~/components/about/sidebar';

export default function Index() {
    return (
        <div className='flex flex-col'>
            <article className='container mx-auto mb-10 max-w-6xl px-4'>
                <h1 className='my-10 hidden text-center text-6xl md:block'>
                    Profile
                </h1>
                <section className='mt-4 flex flex-col gap-4 rounded-lg bg-stone-200 p-2 md:flex-row dark:bg-zinc-900'>
                    <div className='relative md:w-1/3'>
                        <Sidebar />
                    </div>
                    <div className='flex flex-col gap-6 self-end overflow-auto p-2 md:w-2/3'>
                        <Profile />
                        <Experience />
                        <Education />
                    </div>
                </section>
            </article>
        </div>
    );
}
