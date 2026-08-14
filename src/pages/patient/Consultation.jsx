import Seo from "../../components/ui/Seo";
import { motion } from "framer-motion";
import { CalendarPlus, Stethoscope, ClipboardList, Pill, CalendarCheck } from "lucide-react";

const steps = [
    { num: "01", title: "Book Appointment", desc: "Schedule your visit online or via WhatsApp at your convenience.", icon: CalendarPlus },
    { num: "02", title: "Consultation", desc: "Discuss your health concerns, history, and lifestyle in detail.", icon: Stethoscope },
    { num: "03", title: "Doctor Assessment", desc: "Comprehensive evaluation to understand the root cause.", icon: ClipboardList },
    { num: "04", title: "Treatment Plan", desc: "Personalized homeopathic guidance and supportive care plan.", icon: Pill },
    { num: "05", title: "Follow-up", desc: "Regular check-ins to track your progress and adjust if needed.", icon: CalendarCheck },
];

export default function Consultation() {
    return (
        <>
            <Seo title="Consultation Process | Dr. Homeo" description="Understand our step-by-step consultation process from booking to follow-up." />

            <section className="py-16 bg-gray-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">How It Works</span>
                        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Our Consultation Process</h1>
                        <p className="mt-4 text-gray-600">We ensure a smooth and transparent journey towards your well-being.</p>
                    </div>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 bg-brand-700 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {step.num}
                                    </div>
                                    {index !== steps.length - 1 && (
                                        <div className="w-px h-12 bg-gray-200 mt-2"></div>
                                    )}
                                </div>
                                <div className="pt-2">
                                    <div className="flex items-center gap-3 mb-2">
                                        <step.icon className="w-6 h-6 text-brand-600" />
                                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}