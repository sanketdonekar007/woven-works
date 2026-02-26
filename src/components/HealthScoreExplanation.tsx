
import React from "react";
import { Candy, Droplets, FlaskConical, Hash, Check, AlertTriangle, X } from "lucide-react";

export const HealthScoreExplanation = ({ accentColor }: { accentColor?: string }) => {
    const calculations = [
        { icon: "🍬", label: "Sugar content" },
        { icon: "🥑", label: "Fat levels" },
        { icon: "⚗️", label: "Additives" },
        { icon: "🔢", label: "Calories per serving" },
    ];

    const categories = [
        {
            title: "Good",
            desc: "Low sugar, healthy ingredients",
            color: "bg-emerald-500",
            icon: <Check className="w-5 h-5 text-white" />,
        },
        {
            title: "Moderate",
            desc: "Some concerns, consume mindfully",
            color: "bg-amber-500",
            icon: <AlertTriangle className="w-5 h-5 text-white" />,
        },
        {
            title: "Poor",
            desc: "High sugar, many additives",
            color: "bg-rose-500",
            icon: <X className="w-5 h-5 text-white" />,
        },
    ];

    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-[#0F0F0F] mb-12 text-center">Health Score Explanation</h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left Side: Calculations */}
                <div className="space-y-8">
                    <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Calculated Using:</h3>
                    <div className="space-y-4">
                        {calculations.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform text-2xl">
                                    {item.icon}
                                </div>
                                <span className="text-slate-700 font-medium text-lg">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Categories */}
                <div className="space-y-8">
                    <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">Visual Categories:</h3>
                    <div className="space-y-4">
                        {categories.map((cat, idx) => (
                            <div key={idx} className={`${cat.color} p-6 rounded-2xl shadow-lg shadow-slate-200/50 transform hover:-translate-y-1 transition-all duration-300`}>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-1">{cat.title}</h4>
                                        <p className="text-white/90 text-sm font-medium">{cat.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <div
                className="mt-16 p-8 rounded-[2rem] border border-slate-100 text-center"
                style={{ backgroundColor: accentColor ? `${accentColor}10` : '#f8fafc' }}
            >
                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto italic">
                    "This approach balances simplicity with credibility, giving users instant understanding while maintaining transparency."
                </p>
            </div>
        </div>
    );
};
