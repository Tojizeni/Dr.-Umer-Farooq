import { Link } from "react-router-dom";
import { Stethoscope, Phone, MapPin, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand & About */}
                <div className="space-y-4">
                    <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
                        <Stethoscope className="w-6 h-6 text-brand-500" />
                        Dr. Homeo
                    </Link>
                    <p className="text-sm text-gray-400">
                        Personalized Homeopathic Care for Better Wellbeing. Providing natural and holistic treatment options.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="bg-gray-800 hover:bg-brand-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                            <FaFacebookF className="w-4 h-4" />
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-brand-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                            <FaInstagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-brand-700 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                            <FaXTwitter className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/about" className="hover:text-brand-500 transition-colors">About Doctor</Link></li>
                        <li><Link to="/treatments" className="hover:text-brand-500 transition-colors">Treatments</Link></li>
                        <li><Link to="/consultation" className="hover:text-brand-500 transition-colors">Consultation Process</Link></li>
                        <li><Link to="/blog" className="hover:text-brand-500 transition-colors">Health Blog</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                            <span>123 Main Street, Medical Center, City, Country</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-brand-500 flex-shrink-0" />
                            <a href="tel:+92123456789" className="hover:text-brand-500 transition-colors">+92 123 456789</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-brand-500 flex-shrink-0" />
                            <a href="mailto:info@drhomeo.com" className="hover:text-brand-500 transition-colors">info@drhomeo.com</a>
                        </li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-brand-500 flex-shrink-0" />
                            <span>Mon - Fri: 10am - 8pm</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-brand-500 flex-shrink-0" />
                            <span>Sat: 10am - 4pm</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-brand-500 flex-shrink-0" />
                            <span>Sun: Closed</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Dr. Homeo Clinic. All rights reserved.</p>
            </div>
        </footer>
    );
}