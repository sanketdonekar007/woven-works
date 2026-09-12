type SnackHackIAProps = { accentColor?: string };

const Node = ({ children, color, muted = false }: { children: React.ReactNode; color: string; muted?: boolean }) => (
    <div
        className="relative z-10 min-h-16 px-5 py-4 rounded-2xl border text-center text-[15px] md:text-[16px] font-medium flex items-center justify-center shadow-[0_12px_35px_rgba(0,0,0,0.22)]"
        style={{ color: muted ? 'rgba(255,255,255,.72)' : '#fff', backgroundColor: muted ? `${color}18` : color, borderColor: muted ? `${color}45` : `${color}80` }}
    >
        {children}
    </div>
);

export const SnackHackIA = ({ accentColor = '#FF6B01' }: SnackHackIAProps) => {
    const lineColor = `${accentColor}70`;
    const childColor = `${accentColor}cc`;

    return (
        <section className="max-w-6xl mx-auto py-12 md:py-16 px-1" aria-labelledby="snackhack-ia-title">
            <div className="max-w-3xl mb-12 md:mb-16">
                <p className="text-[13px] tracking-[0.2em] uppercase text-white/35 mb-3">Product structure</p>
                <h2 id="snackhack-ia-title" className="text-[26px] md:text-[36px] font-semibold text-white tracking-[-0.03em] mb-4">Information Architecture</h2>
                <p className="text-[15px] md:text-[17px] text-white/50 leading-7">
                    The primary scan journey stays shallow: users move from entry to scanning, then choose the level of product information they need. Scan History remains connected to the result experience for quick retrieval.
                </p>
            </div>

            <div className="hidden md:flex flex-col items-center" role="img" aria-label="Home connects to Scan. Scan branches to Product Details, Health Score, and Alternatives. Health Score connects to Scan History.">
                <div className="w-56"><Node color={accentColor}>Home</Node></div>
                <div className="w-px h-10" style={{ backgroundColor: lineColor }} />
                <div className="w-56"><Node color={accentColor}>Scan</Node></div>
                <div className="w-px h-10" style={{ backgroundColor: lineColor }} />

                <div className="relative w-full max-w-4xl pt-10">
                    <div className="absolute top-0 left-[16.666%] right-[16.666%] h-px" style={{ backgroundColor: lineColor }} />
                    <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                    <div className="grid grid-cols-3 gap-6">
                        {['Product Details', 'Health Score', 'Alternatives'].map((label) => (
                            <div key={label} className="relative">
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-10" style={{ backgroundColor: lineColor }} />
                                <Node color={childColor}>{label}</Node>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-px h-10" style={{ backgroundColor: lineColor }} />
                <div className="w-56"><Node color={accentColor} muted>Scan History</Node></div>
            </div>

            <div className="md:hidden flex flex-col items-center" role="img" aria-label="Mobile information architecture tree for SnackHack">
                <div className="w-full max-w-xs"><Node color={accentColor}>Home</Node></div>
                <div className="w-px h-8" style={{ backgroundColor: lineColor }} />
                <div className="w-full max-w-xs"><Node color={accentColor}>Scan</Node></div>
                <div className="w-px h-8" style={{ backgroundColor: lineColor }} />
                <div className="relative w-full max-w-xs pl-7 space-y-3">
                    <div className="absolute left-2 top-0 bottom-0 w-px" style={{ backgroundColor: lineColor }} />
                    <div className="absolute left-2 right-1/2 top-0 h-px" style={{ backgroundColor: lineColor }} />
                    <div className="absolute left-2 right-1/2 bottom-0 h-px" style={{ backgroundColor: lineColor }} />
                    {['Product Details', 'Health Score', 'Alternatives'].map((label) => (
                        <div key={label} className="relative">
                            <div className="absolute right-full top-1/2 w-5 h-px" style={{ backgroundColor: lineColor }} />
                            <Node color={childColor}>{label}</Node>
                        </div>
                    ))}
                </div>
                <div className="w-px h-8" style={{ backgroundColor: lineColor }} />
                <div className="w-full max-w-xs"><Node color={accentColor} muted>Scan History</Node></div>
            </div>
        </section>
    );
};
