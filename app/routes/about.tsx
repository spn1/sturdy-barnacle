import Education from '~/components/about/education';
import Experience from '~/components/about/experience';
import Profile from '~/components/about/profile';
import Sidebar from '~/components/about/sidebar';

export default function Index() {
    return (
        <div className='flex flex-col'>
            <article className='container mx-auto mb-10 max-w-6xl'>
                <h1 className='my-10 text-center text-6xl'>Curriculum Vitae</h1>
                <section className='flex gap-4'>
                    <div className='relative w-1/3'>
                        <Sidebar />
                    </div>
                    <div className='flex w-2/3 flex-col gap-6 self-end overflow-auto p-2'>
                        <Profile />
                        <Experience />
                        <Education />
                    </div>
                </section>
            </article>
        </div>
    );
}
