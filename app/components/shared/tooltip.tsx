import React from 'react';

export type Props = {
    content: string;
    children: React.ReactNode;
};

export const Tooltip = ({ content, children }: Props) => {
    return (
        <div className='group relative'>
            {children}
            <span className='tooltip-arrow-top absolute left-0 top-12 w-max rounded-lg border-zinc-800 bg-zinc-800 px-2 py-1 text-stone-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-stone-100 dark:text-zinc-800'>
                {content}
            </span>
        </div>
    );
};
