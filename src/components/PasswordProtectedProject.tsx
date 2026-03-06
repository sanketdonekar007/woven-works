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
            setIsOpen(false);
            navigate(to);
        } else {
            setError(true);
        }
    };

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer inline-flex items-center w-fit">
                {children}
            </div>

            <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) { setPassword(''); setError(false); } }}>
                <DialogContent className="sm:max-w-md rounded-3xl border border-border bg-background p-8">
                    <DialogHeader className="mb-2">
                        <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                            🔒 Protected Case Study
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground mt-2 text-base leading-relaxed">
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
                                autoFocus
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError(false);
                                }}
                                className={`w-full h-12 rounded-2xl border px-4 text-sm bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ${error ? 'border-red-500 focus:ring-red-500' : 'border-border'
                                    }`}
                            />
                            {error && (
                                <p className="text-sm text-red-500 font-medium pl-1">
                                    Incorrect password. Please try again.
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => { setIsOpen(false); setPassword(''); setError(false); }}
                                className="px-6 py-3 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
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
