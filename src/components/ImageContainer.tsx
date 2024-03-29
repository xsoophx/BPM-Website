import React from 'react';

type Props = {
    imageUrl: string;
}

export const ImageContainer = ({imageUrl}: Props) => {
    return (
        <div className="imageContainer w-1/2 h-auto">
            <img src={imageUrl} alt={imageUrl.split("/").pop()} className="w-full h-full object-cover"/>
            <div className="overlay"></div>
        </div>
    )
}
