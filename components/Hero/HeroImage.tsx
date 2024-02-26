// HeroImage.jsx

import Image from "next/image";
import styles from "./HeroImage.module.scss";
import Button from "../common/Button";

const { heroContent, heroImage, heroWrapper, textContainer, contentImage, ctaButton } = styles;

interface HeroImageProps {
    background: string;
    image: string;
    title: string;
    description: string;
    onclick: () => void;
}
const HeroImage = (
    {
        background,
        image,
        title,
        description,
        onclick
    }: HeroImageProps
) => {
    return (
        <div className={heroWrapper}>
            <Image
                className={heroImage}
                priority
                fill
                src={background}
                alt="Background"
                quality={100}
            />

            <div className={heroContent}>
                <Image
                    className={contentImage}
                    src={image}
                    alt={'Sandra Fraser Image'}
                    width={290}
                    height={400}
                />
                <div className={textContainer}> {/* Add this wrapper */}
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {description}
                    </p>
                    <Button
                        size={"small"}
                        onClick={onclick}
                        color={"#007bff"}
                        className={ctaButton}
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;