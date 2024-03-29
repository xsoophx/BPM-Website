import React from 'react';
import "../styles/styles.css";

export const Toolbar = () => {
    return (
        <div className="mr-20 ml-20">
            <div
                className="toolbar flex items-center justify-between w-full bg-transparent border-0 p-0 px-7 sm:px-5 transition-all duration-150 ease-in-out h-20">
                <div className="font-bold text-xl">BPM Detector</div>

                <div className="flex justify-end">
                    <div className="ml-4 mr-4 font-sans">Home</div>
                    <div className="ml-4 mr-4 font-sans">About</div>
                </div>
            </div>
        </div>
    )
}