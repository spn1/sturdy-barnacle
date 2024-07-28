import Card from 'app/components/portfolio/card';

export default function Index() {
    return (
        <div className='flex flex-col'>
            <article className='container mx-auto mb-10 max-w-6xl px-4'>
                <h1 className='my-10 text-center text-6xl'>Portfolio</h1>
                <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='cursor-pointer rounded-lg border-stone-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-2'>
                        <div className='bg-envdiff flex h-80 flex-col gap-4 rounded-lg bg-cover'>
                            <h2 className='rounded-lg bg-gradient-to-b from-stone-200 to-transparent p-4 text-4xl text-zinc-800'>
                                envdiff
                            </h2>
                        </div>
                    </div>

                    <div className='cursor-pointer rounded-lg border-stone-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-2'>
                        <div className='bg-finger-fort flex h-80 flex-col gap-4 rounded-lg bg-cover'>
                            <h2 className='rounded-lg bg-gradient-to-b from-zinc-800 to-transparent p-4 text-4xl text-stone-200'>
                                Finger Fort
                            </h2>
                        </div>
                    </div>

                    <div className='cursor-pointer rounded-lg border-stone-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-2'>
                        {/* <div> */}
                        <div className='bg-triple-triad flex h-80 flex-col gap-4 rounded-lg bg-cover'>
                            <h2 className='rounded-lg bg-gradient-to-b from-stone-200 p-4 text-4xl text-zinc-800'>
                                Triple Triad
                            </h2>
                        </div>
                    </div>

                    <div className='cursor-pointer rounded-lg border-stone-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-2'>
                        {/* <div> */}
                        <div className='bg-psl flex h-80 flex-col gap-4 rounded-lg bg-cover'>
                            <h2 className='rounded-lg bg-gradient-to-b from-zinc-800 p-4 text-4xl text-stone-200'>
                                Dissertation
                            </h2>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}
