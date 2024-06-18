import React from 'react';

export type Props = {
  content: string;
  children: React.ReactNode; 
}

export const Tooltip = ({ content, children }: Props) => {
  return (
    <div className='group relative'>
      {children}
      <span
        className="tooltip-arrow-top absolute top-12 left-0 w-max opacity-0 transition-opacity duration-300 py-1 px-2 group-hover:opacity-100 rounded-lg bg-zinc-800 text-stone-200 dark:bg-white dark:text-slate-900"
      >
        {content}
      </span>
    </div>
  )
}