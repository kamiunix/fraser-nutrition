import Image from "next/image";
import React from "react";


type ServicesProps = {
    background?: string;
    title: string;
};

const Services = ({ background, title }: ServicesProps) => {
    const services = [
        {
            title: "Weight Management",
            description: "Personalized plans to help you achieve and maintain a healthy weight without compromising on nutrition or energy.",
            image: "/weight-management-icon.png"
        },
        {
            title: "Sports Nutrition",
            description: "Enhance your athletic performance with tailored nutritional strategies for training, recovery, and competition.",
            image: "/sports-nutrition-icon.png"
        },
        {
            title: "Medical Nutrition Therapy",
            description: "Diet plans to manage and prevent a variety of medical conditions such as diabetes, heart disease, and gastrointestinal issues.",
            image: "/medical-nutrition-icon.png"
        },
        {
            title: "Prenatal Nutrition",
            description: "Nutritional support for expecting mothers to foster healthy baby development and manage pregnancy-related conditions.",
            image: "/prenatal-nutrition-icon.png"
        },
        {
            title: "Pediatric Nutrition",
            description: "Guidance on nourishing diets for children and adolescents to support growth and academic performance.",
            image: "/pediatric-nutrition-icon.png"
        },
        {
            title: "Nutritional Education",
            description: "Workshops and seminars to empower you with the knowledge to make informed food choices for a healthier lifestyle.",
            image: "/nutritional-education-icon.png",
            icon: "fa-solid fa-notes-medical"
        },
        // ... Add other services here if needed
    ];

    return (
        <div className="container mx-auto p-4">
            {background && (
                <Image
                    className="absolute inset-0 object-cover w-full h-full"
                    priority
                    layout="fill"
                    src={background}
                    alt=""
                    quality={100}
                />
            )}

            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={60} // Set this to the size of your icons
                                height={60} // Set this to the size of your icons
                                className="block mx-auto bg-gray-200 p-2 rounded-full"
                            />
                            <h2 className="mt-2 text-xl font-semibold text-center">{service.title}</h2>
                            <p className="mt-2 text-gray-600 text-sm text-center">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
