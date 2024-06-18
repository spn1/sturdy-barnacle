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
        className="absolute top-7 left-0 w-max opacity-0 transition-opacity duration-300 py-1 px-2 group-hover:opacity-100 rounded-lg dark:bg-slate-300 dark:text-slate-900"
      >
        {content}
      </span>
    </div>
  )
}