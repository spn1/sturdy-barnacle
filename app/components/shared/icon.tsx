type Props = {
    icon: string;
};

export const Icon = ({ icon }: Props) => {
    if (!icon) {
        return null;
    }

    return (
        <span className='size-6'>
            <img src='/svg/linkedIn.svg' alt='linkedin' />
        </span>
    );
};
