import React from 'react';
import styles from './SplitScreen.module.scss'; // Make sure to create a corresponding CSS file

const { splitScreen, leftPane, rightPane } = styles;

interface SplitScreenProps {
    leftChildren?: React.ReactNode;
    rightChildren?: React.ReactNode;
}

const SplitScreen = (
    {
        leftChildren,
        rightChildren
    }: SplitScreenProps
) => {
    return (
        <div className={splitScreen}>
            <div className={leftPane}>
                {leftChildren}
            </div>
            <div className={rightPane}>
                {rightChildren}
            </div>
        </div>
    );
};

export default SplitScreen;
