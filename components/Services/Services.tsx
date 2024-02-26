// HeroImage.jsx

import Image from "next/image";
import styles from "./Services.module.scss";
import {Button} from "semantic-ui-react";

const { content, image, wrapper, textContainer, contentImage, ctaButton } = styles;

interface ServicesProps {
    background?: string;
    title: string;
}
const Services = (
    {
        background,
        title,
    }: ServicesProps
) => {
    const services = [
        {
            title: "Nutrition",
            description: "We offer a range of nutrition services to help you reach your goals.",
            image: "/nutrition.jpg"
        },
        {
            title: "Personal Training",
            description: "Our personal training services are tailored to your needs.",
            image: "/personaltraining.jpg"
        },
        {
            title: "Mindfulness",
            description: "We offer mindfulness services to help you achieve a balanced lifestyle.",
            image: "/mindfulness.jpg"
        },
        {
            title: "Corporate Wellness",
            description: "Our corporate wellness services are designed to help your employees thrive.",
            image: "/corporatewellness.jpg"
        }
    ]

    return (
        <div className={wrapper}>
            {background && (
                <Image
                    className={image}
                    priority
                    fill
                    src={background}
                    alt=""
                    quality={100}
                />
            )}

            <div className={content}>
                <div className={textContainer}>
                    <h1>
                        {title}
                    </h1>
                    {services.map((service, index) => (
                        <div
                            key={index}
                        >
                            <Image
                                className={contentImage}
                                src={service.image}
                                alt={service.title}
                                width={290}
                                height={400}
                            />
                            <div>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;