import React from 'react';
import {ImageContainer} from "./ImageContainer";
import {TextContainer} from "./TextContainer";

type Props = {
    imagePosition: 'left' | 'right';
    imageUrl: string;
    isStatic: boolean;
}


export const SplitContainer = ({imagePosition = "right", imageUrl, isStatic}: Props) => {
    const imageLeft = imagePosition === 'left';

    return (
        <div className="flex w-full flex-1">
            {imageLeft ? <ImageContainer imageUrl={imageUrl} isStatic={isStatic}></ImageContainer> : null}
            <div className="flex-1 text-xl p-20">
                <TextContainer heading={"Heading"} text={"Text"}></TextContainer>
            </div>
            {!imageLeft ? <ImageContainer imageUrl={imageUrl} isStatic={isStatic}></ImageContainer> : null}
        </div>
    );
};
