import React, { useState } from 'react';

export const VideoCarousel = ({ videos }: { videos: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextVideo = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    };

    if (!videos || videos.length === 0) return null;

    return (
        <div className="relative w-full bg-gray-100 rounded-xl overflow-hidden group shadow-inner flex items-center justify-center">
            <video
                key={videos[currentIndex]}
                src={videos[currentIndex]}
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
            >
                Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500 bg-white/80 py-1 backdrop-blur-sm pointer-events-none">
                Video {currentIndex + 1} of {videos.length}
            </div>
            {videos.length > 1 && (
                <>
                    <button onClick={prevVideo} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button onClick={nextVideo} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
                        {videos.map((_, idx) => (
                            <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
