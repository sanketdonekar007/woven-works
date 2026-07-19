import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

export const PasswordProtectedProject = ({
    to,
    children,
}: {
    to: string;
    children: React.ReactNode;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password.toLowerCase() === 'saycheez') {
            const projectSlug = to.split('/').pop();
            if (projectSlug) {
                sessionStorage.setItem(`unlocked_${projectSlug}`, 'true');
            }
            setIsOpen(false);
            navigate(to);
        } else {
            setError(true);
        }
    };

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer block w-full">
                {children}
            </div>

            <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) { setPassword(''); setError(false); } }}>
                <DialogContent className="w-[92vw] max-w-[440px] rounded-[28px] border border-white/10 bg-[#0d0d0d] p-6 sm:p-8 text-white focus:outline-none">
                    <DialogHeader className="mb-2 text-left">
                        <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                            <span>🔒</span> Protected Case Study
                        </DialogTitle>
                        <DialogDescription className="text-white/60 mt-2 text-sm sm:text-base leading-relaxed">
                            This case study contains confidential work and is password protected.
                            Enter the password to access the full process.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                        <div className="space-y-2">
                            <input
                                type="password"
                                placeholder="Enter password..."
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError(false);
                                }}
                                className={`w-full h-12 rounded-2xl border px-4 text-sm bg-white/[0.04] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${error ? 'border-red-500 focus:ring-red-500' : 'border-white/10'
                                    }`}
                            />
                            {error && (
                                <p className="text-sm text-red-400 font-medium pl-1">
                                    Incorrect password. Please try again.
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2.5 pt-2">
                            <button
                                type="button"
                                onClick={() => { setIsOpen(false); setPassword(''); setError(false); }}
                                className="w-full sm:w-auto px-6 h-12 rounded-full text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all border border-white/10"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 h-12 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                                View Case Study
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};
