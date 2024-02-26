// HeroImage.jsx

import Image from "next/image";
import styles from "./WideImage.module.scss";
import {Container} from "semantic-ui-react";
import React from "react";

const { content, image, wrapper, textContainer, contentImage, ctaButton } = styles;

interface WideImageProps {
    background: string;
    children?: React.ReactNode;
}
const HeroImage = (
    {
        background,
        children
    }: WideImageProps
) => {
    return (
        <div className={wrapper}>
            <Image
                className={image}
                priority
                fill
                src={background}
                alt="Background"
                quality={100}
            />

            <div className={content}>
                <Container
                    style={{
                        height: "100%",
                    }}
                >
                    {children}
                </Container>
            </div>
        </div>
    );
};

export default HeroImage;