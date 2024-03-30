import React from 'react';

export const imageContextValue = {
    rightImageUrl: process.env.PUBLIC_URL + '/images/CDJ.jpg',
    leftImageUrl: process.env.PUBLIC_URL + '/images/MDJ.jpeg',
};

export const ImageContext = React.createContext(imageContextValue);