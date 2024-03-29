import React, {useState} from 'react';
import {UploadButton} from "./UploadButton";

export const UploadArea = () => {
    const [dragOver, setDragOver] = useState(false);

    const handleDragEnter = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setDragOver(false);
    };

    const handleDragOver = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    const handleDrop = (e: { preventDefault: () => void; dataTransfer: { files: FileList; }; }) => {
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        console.log(files);
    };

    return (
        <>
            <div
                className={`border-2 ${dragOver ? 'border-blue-500' : 'border-gray-300'} p-10 rounded-lg cursor-pointer`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >Text
            </div>
            <UploadButton/></>
    );
};
