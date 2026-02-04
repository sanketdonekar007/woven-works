
import { Link } from "react-router-dom";

interface AnimatedLinkProps {
    to?: string;
    href?: string;
    children: React.ReactNode;
    className?: string;
    target?: string;
    rel?: string;
    onClick?: () => void;
}

const AnimatedLink = ({ to, href, children, className = "", target, rel, onClick }: AnimatedLinkProps) => {
    // Common content wrapper with the animation logic
    const content = (
        <div className="relative overflow-hidden h-[1.2em] group cursor-pointer px-[2px]">
            <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                <span className="block">{children}</span>
                <span className="block absolute top-full left-0 text-black/50">{children}</span>
            </div>
        </div>
    );

    const baseClasses = "inline-block text-xl font-normal text-black no-underline leading-[1.2em]";
    const combinedClasses = `${baseClasses} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses} target={target} rel={rel} onClick={onClick}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClasses} target={target} rel={rel} onClick={onClick}>
                {content}
            </a>
        );
    }

    return (
        <div className={combinedClasses} onClick={onClick}>
            {content}
        </div>
    );
};

export default AnimatedLink;
