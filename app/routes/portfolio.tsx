import { useState, useRef } from 'react';
import Modal from '~/components/shared/modal';

const content = [
    {
        heading: 'ENVDIFF',
        background: 'envdiff',
        content: {
            heading: 'Envdiff - Python Project',
            sections: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            ],
        },
        // },
        // {
        //     heading: 'envdiff 2',
        //     background: 'envdiff',
        //     content: {
        //         heading: 'Envdiff - Python Project',
        //         sections: [
        //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //         ],
        //     },
        // },
        // {
        //     heading: 'envdiff 3',
        //     background: 'envdiff',
        //     content: {
        //         heading: 'Envdiff - Python Project',
        //         sections: [
        //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //         ],
        //     },
        // },
        // {
        //     heading: 'envdiff 4',
        //     background: 'envdiff',
        //     content: {
        //         heading: 'Envdiff - Python Project',
        //         sections: [
        //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        //         ],
        //     },
    },
];

export default function Index() {
    const [openModal, setOpenModal] = useState(-1);

    const onClick =
        (index: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setOpenModal(index);
        };

    return (
        <div className='flex flex-col'>
            <article className='container mx-auto mb-10 max-w-6xl px-4'>
                <h1 className='my-10 text-center text-6xl'>Portfolio</h1>
                <section className='grid grid-flow-row-dense grid-cols-1 gap-4 transition duration-500 ease-in-out md:grid-cols-2 lg:grid-cols-3'>
                    {content.map((item, index) => (
                        <>
                            <button
                                key={index}
                                onClick={onClick(index)}
                                className={`cursor-pointer rounded-lg border-2 border-stone-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105`}
                            >
                                <div className='bg flex h-48 flex-col gap-4 rounded-lg bg-cover'>
                                    <h2 className='font-mono rounded-lg bg-gradient-to-b from-zinc-800 to-transparent p-4 text-4xl text-stone-200'>
                                        Finger Fort
                                    </h2>
                                </div>
                            </button>
                            <Modal
                                isOpen={openModal === index}
                                onClose={() => setOpenModal(-1)}
                            >
                                <h3>{item.heading}</h3>
                                {item.content.sections.map((section, index) => (
                                    <p key={index}>{section}</p>
                                ))}
                            </Modal>
                        </>
                    ))}
                </section>
            </article>
        </div>
    );
}
