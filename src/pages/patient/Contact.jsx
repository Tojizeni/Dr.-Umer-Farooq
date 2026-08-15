import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Seo from "../../components/ui/Seo";
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const createMessage = useMutation(api.messages.create);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", body: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createMessage(form); // Convex mein message save karega
        setSubmitted(true);
    };

    return (
        <>
            <Seo title="Contact Us | Dr. Homeo" description="Get in touch with our clinic for appointments and inquiries." />

            <section className="py-16 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">Get In Touch</span>
                        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Contact Our Clinic</h1>
                        <p className="mt-4 text-gray-600">Have questions? We're here to help.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info & Map */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Clinic Information</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-brand-700 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Address</h3>
                                            <p className="text-gray-600">123 Main Street, Medical Center, City, Country</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Phone className="w-6 h-6 text-brand-700 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Phone</h3>
                                            <p className="text-gray-600">+92 123 456789</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Mail className="w-6 h-6 text-brand-700 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email</h3>
                                            <p className="text-gray-600">info@drhomeo.com</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <Clock className="w-6 h-6 text-brand-700 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Hours</h3>
                                            <p className="text-gray-600">Mon - Sat: 10am - 8pm</p>
                                            <p className="text-gray-600">Sun: Closed</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Google Map Embed */}
                            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-64">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.123456!2d67.001!3d24.860!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM2LjAiTiA2N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <CheckCircle2 className="w-16 h-16 text-brand-600 mb-4" />
                                    <h2 className="text-2xl font-bold text-gray-900">Message Sent!</h2>
                                    <p className="text-gray-600 mt-2">Thank you for reaching out. We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-center gap-3 mb-6">
                                        <MessageSquare className="w-8 h-8 text-brand-700" />
                                        <h2 className="text-xl font-bold text-gray-900">Send a Message</h2>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                            <textarea
                                                name="body"
                                                rows="4"
                                                value={form.body}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-brand-700 text-white py-3 rounded-lg font-semibold hover:bg-brand-800 transition-colors"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}