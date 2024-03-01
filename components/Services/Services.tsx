import Image from "next/image";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import services from './services.mock'


type ServicesProps = {
    background?: string;
    title: string;
};

const Services = ({ background, title }: ServicesProps) => {

    return (
        <div className="container mx-auto p-4 md:pl-20 md:pr-20">
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="block mx-auto p-2 h-20 w-full"
                            >
                                <path d={service.path}/>
                            </svg>
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
