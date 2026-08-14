import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope, ClipboardList, Pill, CalendarPlus } from "lucide-react";

const steps = [
    { num: "01", title: "Book Appointment", desc: "Schedule your visit online or via WhatsApp.", icon: CalendarPlus },
    { num: "02", title: "Consultation", desc: "Discuss your health concerns in detail.", icon: Stethoscope },
    { num: "03", title: "Doctor Assessment", desc: "Comprehensive evaluation of your history.", icon: ClipboardList },
    { num: "04", title: "Treatment Plan", desc: "Personalized homeopathic guidance provided.", icon: Pill },
    { num: "05", title: "Follow-up", desc: "Regular check-ins to track your progress.", icon: CalendarCheck },
];

export default function ProcessTimeline() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">How It Works</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                        Our Consultation Process
                    </h2>
                </div>

                {/* Timeline Grid */}
                <div className="relative">
                    {/* Horizontal Line for Desktop */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative text-center lg:text-left"
                            >
                                {/* Icon Circle */}
                                <div className="relative z-10 mx-auto lg:mx-0 w-16 h-16 bg-white border-2 border-brand-700 rounded-full flex items-center justify-center mb-4 shadow-sm">
                                    <step.icon className="w-7 h-7 text-brand-700" />
                                </div>

                                {/* Step Number */}
                                <span className="text-sm font-bold text-brand-700">{step.num}</span>
                                <h3 className="mt-1 text-lg font-bold text-gray-900">{step.title}</h3>
                                <p className="mt-2 text-sm text-gray-500">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}