import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarPlus, MessageCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-teal-50">
            {/* Subtle Background Pattern (Optional) */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/pattern.svg')] bg-repeat"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Homeopathic Physician
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                        Natural Care. <br />
                        <span className="text-brand-700">Personalized Attention.</span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-md">
                        Consult with an experienced homeopathic physician for personalized healthcare guidance and holistic well-being.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            to="/appointment"
                            className="bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-brand-800 transition-colors shadow-md hover:shadow-lg"
                        >
                            <CalendarPlus className="w-5 h-5" />
                            Book Appointment
                        </Link>

                        <a
                            href="https://wa.me/921234567890" // Apna WhatsApp number yahan likhein
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-brand-700 text-brand-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-brand-50 transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Us
                        </a>
                    </div>
                </motion.div>

                {/* Right Side: Doctor Image Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl bg-white p-3 border border-gray-100">
                        <img
                            src="/doctor.jpg" // public folder mein doctor.jpg rakhein
                            alt="Dr. Homeo - Homeopathic Physician"
                            className="w-full h-[450px] object-cover rounded-2xl"
                        />
                        {/* Floating Badge on Image */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-3">
                            <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-2xl">
                                👨‍⚕️
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg leading-tight">Dr. ___</h3>
                                <p className="text-sm text-brand-700">10+ Years Experience</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}