import React from 'react';

type EmailButtonProps = {
    size?: "small" | "medium" | "large";
    color?: string;
    textColor?: string;
    text: string;
    subject: string;
    body: string;
    email?: string;
};

const EmailButton = (
    {
        size,
        color,
        textColor = "white",
        text,
        subject,
        body,
        email = 'sandra@frasernutrition.com',
    }: EmailButtonProps
) => {
    const sizeMap = {
        small: "1em",
        medium: "1.5em",
        large: "2em",
    };

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 w-64 cursor-pointer hover:shadow-lg hover:scale-105 transform ease-in-out"
        >
            <a
                style={{
                    fontSize: sizeMap[size] || "1em",
                    color: textColor,
                }}
                href={mailtoLink}
            >
                {text}
            </a>

        </div>
    );
};

type BookNowButtonProps = {
    color?: string;
    textColor?: string;
}
const BookNowButton = (
    {
        color= "rgb(162,162,162)",
        textColor="#000000"
    }: BookNowButtonProps) =>
(
    <EmailButton
        text="Book Now"
        subject="Booking Inquiry"
        body={""}
        color={color}
        textColor={textColor}
        size={"medium"}
    />
);

const ContactButton = () => (
    <EmailButton
        text="Contact"
        subject="General Inquiry"
        body=""
    />
);

export { BookNowButton, ContactButton };