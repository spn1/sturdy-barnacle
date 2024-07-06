import Education from '~/components/about/education';
import Experience from '~/components/about/experience';
import Profile from '~/components/about/profile';
import Sidebar from '~/components/about/sidebar';

export default function Index() {
    return (
        <div className='flex h-full flex-col justify-stretch'>
            <article className='container mx-auto mb-10 max-w-4xl'>
                <h1 className='my-10 text-center text-6xl'>Curriculum Vitae</h1>
                <section className='flex gap-4'>
                    <Sidebar />
                    <div className='flex h-dvh w-2/3 flex-col gap-6 self-end overflow-auto p-2'>
                        <Profile />
                        <Experience />
                        <Education />
                    </div>
                </section>
            </article>
        </div>
    );
}
