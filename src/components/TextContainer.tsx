import React from 'react';

type Props = {
    heading: string;
    text: string;
}

export const TextContainer = ({heading, text}: Props) => {
    return (
        <>
            <div className="flex-1 text-4xl bold text-center">{heading}</div>
            <div className="flex-1 text-xl text-center pt-10">{text}</div>
        </>
    );
}