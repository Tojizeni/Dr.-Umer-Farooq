import { Link } from "react-router-dom";

// Button styles configuration
const variants = {
    primary: "bg-brand-700 text-white hover:bg-brand-800 shadow-sm",
    secondary: "bg-white text-brand-700 border border-brand-700 hover:bg-brand-50",
    outline: "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50",
    danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3 text-lg",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    to,
    href,
    className = "",
    ...props
}) {
    // Base classes applied to all buttons
    const baseClass = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

    // If 'to' prop is provided, render as React Router Link
    if (to) {
        return (
            <Link to={to} className={baseClass} {...props}>
                {children}
            </Link>
        );
    }

    // If 'href' prop is provided, render as normal anchor tag (for external links)
    if (href) {
        return (
            <a href={href} className={baseClass} {...props}>
                {children}
            </a>
        );
    }

    // Default: render as button element
    return (
        <button className={baseClass} {...props}>
            {children}
        </button>
    );
}