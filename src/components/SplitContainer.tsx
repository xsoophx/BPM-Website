import React, {useContext} from 'react';
import {ImageContainer} from "./ImageContainer";
import {TextContainer} from "./TextContainer";
import {ImageContext} from "../contexts/ImageContext";
import {TextProps} from "../texts/TextProps";

type Props = {
    imagePosition: 'left' | 'right';
    isStatic: boolean;
    textProps: TextProps;
}
export const SplitContainer = ({imagePosition = "right", isStatic, textProps}: Props) => {
    const {leftImageUrl, rightImageUrl} = useContext(ImageContext)
    const imageLeft = imagePosition === 'left'
    const className = imageLeft ?
        "flex bg-lightPurpleBackground flex-1 items-center justify-center text-xl p-[10%]"
        : "paddingInline commonPadding flex flex-1 items-center justify-center text-xl p-[10%]"

    return (
        <div className="flex w-full flex-1">
            {imageLeft ? <ImageContainer imageUrl={leftImageUrl} isStatic={isStatic}></ImageContainer> : null}
            <div className={className}>
                <TextContainer {...textProps} addTopBarHeight={!imageLeft}></TextContainer>
            </div>
            {!imageLeft ? <ImageContainer imageUrl={rightImageUrl} isStatic={isStatic}></ImageContainer> : null}
        </div>
    );
};
