import React from 'react';

type Props = {
    imageUrl: string;
    isStatic: boolean;
}

export const ImageContainer = ({imageUrl, isStatic}: Props) => {
    const className = isStatic ? "imageContainer w-1/2 h-auto fixed" : "imageContainer w-1/2 h-auto";

    return (
        <div className={className}>
            <img src={imageUrl} alt={imageUrl.split("/").pop()} className="imageContainer object-cover"/>
            <div className="overlay"></div>
        </div>
    )
}
