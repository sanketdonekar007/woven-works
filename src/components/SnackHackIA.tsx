
import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const SnackHackIA = ({ accentColor }: { accentColor?: string }) => {
    return (
        <div className="max-w-6xl mx-auto py-20 px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-[#0F0F0F] mb-6">Information Architecture</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    SnackHack follows a lightweight, mobile-first structure designed for fast access with minimal navigation.
                </p>
            </div>

            <div className="relative flex flex-col items-center">
                {/* Level 1: Home */}
                <div className="relative z-10">
                    <div
                        className="text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg min-w-[200px] text-center"
                        style={{ backgroundColor: accentColor || '#FF6B01' }}
                    >
                        Home
                    </div>
                </div>

                {/* Vertical Line 1 */}
                <div className="w-px h-12 bg-slate-200"></div>

                {/* Level 2: Scan */}
                <div className="relative z-10">
                    <div
                        className="text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg min-w-[200px] text-center"
                        style={{ backgroundColor: accentColor ? `${accentColor}ee` : '#FF8533' }}
                    >
                        Scan
                    </div>
                </div>

                {/* Vertical Line 2 */}
                <div className="w-px h-12 bg-slate-200"></div>

                {/* Level 3: Trio */}
                <div className="relative w-full">
                    {/* Horizontal Line Connecting the Trio */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-slate-200"></div>

                    <div className="grid grid-cols-3 gap-8 pt-12">
                        <div className="flex flex-col items-center">
                            <div className="absolute top-0 w-px h-12 bg-slate-200 -mt-12 left-1/2 -translate-x-1/2 md:hidden"></div>
                            {/* Vertical connectors for grid items */}
                            <div className="absolute top-0 w-px h-12 bg-slate-200 -mt-12"></div>
                            <div
                                className="text-white px-6 py-5 rounded-2xl font-bold text-lg shadow-lg w-full text-center z-10"
                                style={{ backgroundColor: accentColor ? `${accentColor}cc` : '#FFA366' }}
                            >
                                Product Details
                            </div>
                        </div>
                        <div className="flex flex-col items-center relative">
                            <div className="absolute top-0 w-px h-12 bg-slate-200 -mt-12"></div>
                            <div
                                className="text-white px-6 py-5 rounded-2xl font-bold text-lg shadow-lg w-full text-center z-10"
                                style={{ backgroundColor: accentColor ? `${accentColor}cc` : '#FFA366' }}
                            >
                                Health Score
                            </div>
                            {/* Connector to History */}
                            <div className="w-px h-12 bg-slate-200"></div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="absolute top-0 w-px h-12 bg-slate-200 -mt-12"></div>
                            <div
                                className="text-white px-6 py-5 rounded-2xl font-bold text-lg shadow-lg w-full text-center z-10"
                                style={{ backgroundColor: accentColor ? `${accentColor}cc` : '#FFA366' }}
                            >
                                Alternatives
                            </div>
                        </div>
                    </div>
                </div>

                {/* Level 4: Scan History */}
                <div className="relative z-10">
                    <div
                        className="text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg min-w-[200px] text-center"
                        style={{ backgroundColor: accentColor ? `${accentColor}aa` : '#FFC299' }}
                    >
                        Scan History
                    </div>
                </div>
            </div>
        </div>
    );
};
