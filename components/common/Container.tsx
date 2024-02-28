import React, {ReactNode} from 'react';

type ContainerProps = {
    children?: ReactNode;
    style?: any;
}

const Container = ({ children, style }: ContainerProps) => {
    // Default styles for the container
    const defaultStyle = {
        width: '100%', // Makes the container take up full width
        ...style, // Allows custom styles to override default styles
    };

    return (
        <div
            style={defaultStyle}
        >
            {children}
        </div>
    );
};

export default Container;
