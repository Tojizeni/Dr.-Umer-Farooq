import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Seo from "../../components/ui/Seo";
import { CheckCircle2, CalendarPlus } from "lucide-react";

export default function Appointment() {
    const createAppointment = useMutation(api.appointments.create);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "", phone: "", email: "", preferredDate: "", preferredTime: "",
        consultationType: "In-person", message: "",
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createAppointment(form); // Convex mutation call
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <>
                <Seo title="Appointment Booked | Dr. Homeo" description="Your appointment request has been submitted." />
                <div className="max-w-lg mx-auto py-24 text-center px-4">
                    <CheckCircle2 className="w-16 h-16 text-brand-600 mx-auto" />
                    <h2 className="mt-4 text-2xl font-bold">Appointment Requested!</h2>
                    <p className="text-gray-600 mt-2">We'll confirm via WhatsApp/phone shortly.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Seo title="Book Appointment | Dr. Homeo" description="Schedule a consultation with Dr. ___." />

            <section className="py-16 bg-gray-50 min-h-screen">
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <CalendarPlus className="w-8 h-8 text-brand-700" />
                        <h1 className="text-2xl font-bold text-gray-900">Book an Appointment</h1>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                            <input name="phone" value={form.phone} onChange={handleChange} required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input name="email" type="email" value={form.email} onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                            <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                            <input type="time" name="preferredTime" value={form.preferredTime} onChange={handleChange} required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                            <select name="consultationType" value={form.consultationType} onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent">
                                <option>In-person</option>
                                <option>Online</option>
                                <option>WhatsApp</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Describe your concern (Optional)</label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"></textarea>
                    </div>

                    <button type="submit"
                        className="w-full bg-brand-700 text-white py-3 rounded-lg font-semibold hover:bg-brand-800 transition-colors">
                        Submit Request
                    </button>
                </motion.form>
            </section>
        </>
    );
}