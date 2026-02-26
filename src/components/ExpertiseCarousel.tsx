import React from 'react';

const ExpertiseCarousel = () => {
    const skills = [
        "Design system",
        "Prototyping",
        "Information Architecture",
        "User research",
        "User flows",
        "Visual design",
        "Wireframing",
        "No-code development"

    ];

    // Duplicate the list to ensure seamless scrolling
    const carouselItems = [...skills, ...skills, ...skills, ...skills];

    return (
        <div className="w-full max-w-[1200px] mx-auto overflow-hidden bg-transparent mb-16 px-6 lg:px-8">
            {/* Added padding to match other sections if needed, or keep full width */}
            <div className=' mb-8 px-12 lg:px-12'>
                <h2 className="text-3xl font-medium text-left text-[#0F0F0F]">Core strength & Expertise</h2>
            </div>
            <div className="relative w-full overflow-hidden">
                {/* Gradient overlays for fade effect at edges */}
                <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-scroll whitespace-nowrap">
                    {carouselItems.map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className="inline-block px-6 py-3 ml-4 bg-[#EEF2FF] text-gray-800 rounded-full text-lg font-medium whitespace-nowrap"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpertiseCarousel;
