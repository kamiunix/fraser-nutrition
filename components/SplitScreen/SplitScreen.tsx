import React from 'react';

interface SplitScreenProps {
    leftChildren?: React.ReactNode;
    rightChildren?: React.ReactNode;
}

const SplitScreen = ({
                         leftChildren,
                         rightChildren
                     }: SplitScreenProps) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen md:m-10">
            <div className="w-full md:w-2/6 md:border-r-2 border-dotted border-gray-400 max-md:border-b-2 md:p-4">
                {leftChildren}
            </div>
            <div className="w-full md:w-4/6 md:p-4 max-md:pt-10">
                {rightChildren}
            </div>
        </div>
    );
};

export default SplitScreen;
