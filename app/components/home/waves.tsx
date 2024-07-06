export const Waves = () => (
    <div>
        <svg
            className='waves'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 24 150 28'
            preserveAspectRatio='none'
            shapeRendering='auto'
        >
            <defs>
                <path
                    id='gentle-wave'
                    d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
                />
            </defs>
            <g className='parallax'>
                <use
                    xlinkHref='#gentle-wave'
                    x='48'
                    y='0'
                    className='fill-zinc-800/70 dark:fill-stone-200/70'
                />
                <use
                    xlinkHref='#gentle-wave'
                    x='48'
                    y='3'
                    className='fill-zinc-800/50 dark:fill-stone-200/50'
                />
                <use
                    xlinkHref='#gentle-wave'
                    x='48'
                    y='5'
                    className='fill-zinc-800/30 dark:fill-stone-200/30'
                />
                <use
                    xlinkHref='#gentle-wave'
                    x='48'
                    y='7'
                    className='fill-zinc-800 dark:fill-stone-200'
                />
            </g>
        </svg>
    </div>
);
