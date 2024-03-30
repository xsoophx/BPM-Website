import React from 'react';
import {TextProps} from "../texts/TextProps";

type Props = TextProps & {
    addTopBarHeight: boolean;
}


export const TextContainer = ({heading, paragraph, addTopBarHeight}: Props) => {
    const className = addTopBarHeight ? "textContainer mb-20" : "textContainer";

    return (
        <div className={className}>
            <h1 className="flex-1 text-4xl bold text-left">{heading}</h1>
            <p className="flex-1 text-2xl text-left pt-8">{paragraph}</p>
        </div>
    );
}