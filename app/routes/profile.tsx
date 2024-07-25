import Education from '~/components/about/education';
import Experience from '~/components/about/experience';
import Profile from '~/components/about/profile';
import Sidebar from '~/components/about/sidebar';

export default function Index() {
    return (
        <div className='flex flex-col'>
            <article className='container mx-auto mb-10 max-w-6xl px-4'>
                <h1 className='my-10 text-center text-6xl'>Profile</h1>
                <section className='flex flex-col gap-4 md:flex-row'>
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
