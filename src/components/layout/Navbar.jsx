import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Stethoscope, CalendarPlus } from "lucide-react";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/treatments", label: "Treatments" },
    { to: "/consultation", label: "Consultation" },
    { to: "/reviews", label: "Reviews" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 font-bold text-xl text-brand-700">
                        <Stethoscope className="w-6 h-6" />
                        <span>Dr. Homeo</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors ${isActive ? "text-brand-700" : "text-gray-600 hover:text-brand-700"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/appointment"
                            className="bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-brand-800 transition-colors"
                        >
                            <CalendarPlus className="w-4 h-4" />
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden text-gray-600 hover:text-brand-700"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="px-4 py-3 space-y-2 flex flex-col">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${isActive ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/appointment"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 bg-brand-700 text-white px-4 py-3 rounded-lg text-center font-medium flex items-center justify-center gap-2"
                        >
                            <CalendarPlus className="w-4 h-4" />
                            Book Appointment
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}