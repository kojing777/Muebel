import React, { useEffect, useRef, useState } from "react";
import hero1 from "../assets/Hero1.png";
import hero2 from "../assets/Hero2.png"; 
import hero3 from "../assets/Hero3.png";
import hero4 from "../assets/Hero4.png";

const Hero = () => {
    const furnitureImages = [
        
        hero1,
        hero2,
        hero3,
        hero4
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    // Function to go to a specific slide
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Function for auto sliding with random interval
    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            const nextSlide = Math.floor(Math.random() * furnitureImages.length);
            setCurrentSlide(nextSlide);
        }, 3000); // Change slide every 3 seconds
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    // Update slider position when currentSlide changes
    useEffect(() => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth / furnitureImages.length;
            sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }
    }, [currentSlide]);

    return (
        <div className="bg-[#fbebb5] mt-20 mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 pb-16 min-h-[600px]">
            {/* Text Content */}
            <div className="w-full md:w-1/2 max-md:mb-8 text-center md:text-left">
                <p className="flex justify-center md:justify-start items-center gap-1 text-gray-700 text-xs mb-2">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 1-1m0 10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1m7-10a1 1 0 0 1 .967.744L12.146 5.2 15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.18 4.455a1 1 0 0 1-1.933 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0"
                            fill="#7c3aed"
                        />
                    </svg>
                    PREMIUM FURNITURE COLLECTION
                </p>
                <h1 className="font-extrabold text-4xl md:text-6xl text-gray-900 mb-4 leading-tight">
                    Elevate Your
                    <br /> Living Space
                    <span className="inline-block bg-purple-600 text-white font-extrabold px-3 -mb-1 border-b-2 border-purple-800">
                        Beautifully
                    </span>
                </h1>
                <p className="text-gray-600 text-sm mb-6">
                    Discover handcrafted furniture that combines comfort, style, and quality.
                    <br />
                    Transform your home with pieces designed to last a lifetime.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 justify-center md:justify-start">
                    <a
                        className="bg-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded shadow hover:bg-purple-700 transition"
                        href="#"
                    >
                        Shop Collection
                    </a>
                    <a
                        className="text-sm font-normal flex items-center justify-center space-x-1 hover:underline text-purple-700"
                        href="#"
                    >
                        <span>Explore Showroom</span>
                        <svg
                            width="15"
                            height="11"
                            viewBox="0 0 15 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 5.5h13.09M8.948 1l5.143 4.5L8.948 10"
                                stroke="#7c3aed"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Image Carousel without dots */}
            <div className="w-full md:w-1/2 flex justify-center pt-20">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl overflow-hidden relative">
                    <div 
                        ref={sliderRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ width: `${furnitureImages.length * 100}%` }}
                    >
                        {furnitureImages.map((img, index) => (
                            <img 
                                key={index}
                                src={img}
                                className="w-full flex-shrink-0 object-contain"
                                style={{ width: `${100 / furnitureImages.length}%` }}
                                alt={`Furniture ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;