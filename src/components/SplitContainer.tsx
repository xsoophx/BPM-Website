import React from 'react';
import {ImageContainer} from "./ImageContainer";

type Props = {
    imagePosition: 'left' | 'right';
    imageUrl: string;
}


export const SplitContainer = ({imagePosition = "right", imageUrl}: Props) => {
    const imageLeft = imagePosition === 'left';

    return (
        <div className="flex w-full flex-1">
            {imageLeft ? <ImageContainer imageUrl={imageUrl}></ImageContainer> : null}

            <div className="flex-1">Text</div>

            {!imageLeft ? <ImageContainer imageUrl={imageUrl}></ImageContainer> : null}
        </div>
    );
};
