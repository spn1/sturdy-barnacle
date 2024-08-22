import { useState } from 'react';
import Modal from '~/components/shared/modal';

import { MetaFunction } from '@remix-run/react';

const content = [
    {
        heading: 'ENVDIFF',
        background: 'envdiff',
        modal: {
            heading: 'Envdiff - Python Tool',
            sections: [
                "This was a project I started after having repeatedly run into issues with environment variables across different developer machines and environments. The idea was to create a tool that would allow developers to easily compare their environment variables to diagnose issues when applications wouldn't work.",
                'I took this as an opportunity to use python, as I had recently been studying it and wanted to put it to use. I created a pseudo-CLI tool that would allow users to compare their environment variables to a reference file, and output the differences. It has been very useful in diagnosing issues and helping new team members solve problems.',
            ],
            image: 'envdiff',
        },
    },
    {
        heading: 'FINGER FORT',
        background: 'finger-fort',
        modal: {
            heading: 'Finger Fort - Unity Mobile Game',
            sections: [
                "Being a lover of video games, I've always been interest in how they are made. This has led me to try my hand at making my own games during my time at university. Finger Fort was a project I started with some friends after University as a way to keep in touch and work on something fun together.",
                'Finger Fort was a collaborative project that I started making with some friends from University. This was in 2015, after my final year at University, and was the first software project I worked on with a team.',
                "The game was designed to be played on mobile devices, and the goal of the game is to defend your Fort on the right side of the screen from enemies that spawn from the left side and run towards it. The enemies spawn in waves, and each level is composed of a set number of waves. If they reach the fort, you lose a life - lose all your lives and it's game over.",
                "The main method of defeating the enemies was to use the touch-screen to damage them in some way. This could include 'flicking' them away, tapping away magical shields, or pressing down on the fuse of a bomb to stop it from damaging the castle. Personally, I found it very enjoyable to actually code the logic behind those sorts of game mechanics, as opposed to just using them playing the game",
                'Unfortunately, the game was never finished as we moved on to pursue our careers. However, it was a great experience and I learned a lot from it.',
            ],
            image: 'finger-fort',
        },
    },
    {
        heading: 'TRIPLE TRIAD',
        background: 'triple-triad',
        modal: {
            heading: 'Triple Triad - Unity Card Game',
            sections: [
                'This was the first project I did in a game-creation tool called Unity, that I did during the Summer of 2014 between my 3rd and 4th years at university. The game is remake of the card mini-game from Final Fantasy 8 - Triple Triad. Since it was my first Unity project, I chose a game with set rules so that I could focus on the development and learning process, instead of the design of the game (rules, ui, balance, etc).',
                "It is played by drawing a hand of 5 cards (that represent different monsters in the orignal game), each of which has a 'power' value corresponding to each face of the card. Cards are played onto a 3 x 3 grid, and when a card is placed next to another card belonging to the opponent, those cards 'attack' each other by comparing their adjacent power values. If an attacking card has a higher power value than the defending card, the defending card is captured by the attacker and from then on belongs to that player. This continues untill all the grid slots have been filled, and whomever controls the most cards (including cards in their hand) at this point wins the match.",
            ],
        },
    },
    {
        heading: 'DISSERTATION',
        background: 'psl',
        modal: {
            heading: 'University Dissertation - Passive Structured Light',
            sections: [
                'This was the topic of my 4th year Major Project (and resulting disseration). The application that I wrote for this was done in C++ using OpenCV.',
                'Structured Light is a technique used to create 3D models of an environment by projecting a pattern of lights (eg laser stripes) onto it using a projector, and then analysing images of the resulting scene. Because we know the pattern of lights, the dimensions of the scene in the image can be derived by looking at how the pattern deforms around the objects in the scene.',
                'This project was focused on a similar technique, but instead of lasers, sunlight could be used to project a pattern of spots onto a scene by reflecting it off of an array of mirrors. This would be advantageous in some areas for use with planetary landers when compared to other techniques. For example, it would require less power than using a projector or stereo vision (see dissertation for an analysis) and could required less bulky equipment.',
            ],
            images: ['psl'],
            link: 'https://github.com/spn1/Passive-Structured-Light',
        },
    },
];

export const meta: MetaFunction = () => {
    return [
        { title: 'Spencer | Portfolio' },
        {
            property: 'og:title',
            content: 'Spencer | Portfolio',
        },
        {
            name: 'description',
            content: 'A CV and portfolio of work by Spencer Newton',
        },
        {
            name: 'og:description',
            content: 'A portfolio of work by Spencer Newton',
        },
        {
            name: 'canonical',
            content: 'https://www.spencernewton.dev/portfolio',
        },
        {
            name: 'og:url',
            content: 'https://www.spencernewton.dev/portfolio',
        },
        {
            name: 'og:image',
            content: '/self-museum-cropped.jpeg',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
    ];
};

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
                                className={`cursor-pointer rounded-lg border-2 border-zinc-800 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 dark:border-stone-200`}
                            >
                                <div className='bg flex h-48 flex-col gap-4 rounded-lg bg-cover'>
                                    <h2 className='font-mono rounded-lg p-4 text-4xl text-zinc-800 dark:text-stone-200'>
                                        {item.heading}
                                    </h2>
                                </div>
                            </button>
                            <Modal
                                isOpen={openModal === index}
                                onClose={() => setOpenModal(-1)}
                            >
                                <h3 className='mb-2 border-b-2 border-b-emerald-400 text-2xl'>
                                    {item.modal.heading}
                                </h3>
                                <div className='flex md:flex-row'>
                                    <div className='flex flex-col gap-2'>
                                        {item.modal.sections.map(
                                            (section, index) => (
                                                <p
                                                    key={index}
                                                    className='text-md'
                                                >
                                                    {section}
                                                </p>
                                            )
                                        )}
                                    </div>
                                    <img
                                        src={`/portfolio/${item.modal.image}.png`}
                                        alt={item.modal.image}
                                        className='w-1/2 rounded-lg'
                                    />
                                </div>
                            </Modal>
                        </>
                    ))}
                </section>
            </article>
        </div>
    );
}
