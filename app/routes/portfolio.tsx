// import Card from 'app/components/portfolio/card';
import React, { useState } from 'react';

const content = [
    {
        title: 'Envdiff',
        img: 'stone-200',
        modal: {
            title: 'Envdiff - Python project',
            sections: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            ],
        },
    },
];

export default function Index() {
    const [openModal, setOpenModal] = useState<number>(-1);

    const onClick = (modal: number) => (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setOpenModal(modal);
    };

    return (
        <div className='flex flex-col'>
            <article className='container mx-auto mb-10 max-w-6xl px-4'>
                <h1 className='my-10 text-center text-6xl'>Portfolio</h1>
                <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {content.map((item, index) => {
                        return (
                            <div
                                key={index}
                                // className='rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-2'
                                className='fixed inset-x-10 z-50 mx-auto h-1/2'
                            >
                                <div
                                    className={`h-80 gap-4 rounded-lg bg-${item.img} bg-cover`}
                                >
                                    <button
                                        onClick={onClick(index)}
                                        className={`flex size-full flex-col transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-2 ${openModal === index && 'hidden'}`}
                                    >
                                        <h2 className='rounded-lg bg-gradient-to-b from-stone-200 to-transparent p-4 text-4xl text-zinc-800'>
                                            {item.title}
                                        </h2>
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    {/* <div className='cursor-pointer rounded-lg border-stone-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-2'>
                        <div className='bg-finger-fort flex h-80 flex-col gap-4 rounded-lg bg-cover'>
                            <h2 className='rounded-lg bg-gradient-to-b from-zinc-800 to-transparent p-4 text-4xl text-stone-200'>
                                Finger Fort
                            </h2>
                        </div>
                    </div>

                    <div className='cursor-pointer rounded-lg border-stone-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-2'>
                        <div className='bg-triple-triad flex h-80 flex-col gap-4 rounded-lg bg-cover'>
                            <h2 className='rounded-lg bg-gradient-to-b from-stone-200 p-4 text-4xl text-zinc-800'>
                                Triple Triad
                            </h2>
                        </div>
                    </div>

                    <div className='cursor-pointer rounded-lg border-stone-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-2'>
                        <div className='bg-psl flex h-80 flex-col gap-4 rounded-lg bg-cover'>
                            <h2 className='rounded-lg bg-gradient-to-b from-zinc-800 p-4 text-4xl text-stone-200'>
                                Dissertation
                            </h2>
                        </div>
                    </div> */}
                </section>
            </article>
        </div>
    );
}
