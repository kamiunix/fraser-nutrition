import Image from 'next/image';
import Button from '../common/Button'; // Ensure your Button component is compatible with Tailwind or adjust accordingly.

const HeroImage = ({
                       background,
                       image,
                       title,
                       description,
                       onclick,
                   }) => {
    return (
        <div className="relative w-screen h-screen text-center">
            <Image
                className="object-cover object-center"
                priority
                fill
                src={background}
                alt="Background"
                quality={100}
            />

            <div className="absolute md:top-10 max-md:top-20 left-10 flex flex-col md:flex-row items-center justify-center w-4/5 h-4/5">
                <Image
                    className="shadow-lg rounded-md"
                    src={image}
                    alt={'Sandra Fraser Image'}
                    width={290}
                    height={400}
                />
                <div className="bg-white p-5 md:-ml-12 md:mt-12 max-md:mt-1 shadow-lg flex flex-col justify-center">
                    <h1 className="text-center text-3xl p-1">
                        {title}
                    </h1>
                    <p className="text-center text-xl p-0.5">
                        {description}
                    </p>
                    <button
                        onClick={onclick}
                        className="mx-auto mt-5 mb-3 text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;
