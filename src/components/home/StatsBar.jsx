import { motion } from "framer-motion";
import { Award, Users, GraduationCap, MapPin } from "lucide-react";

const stats = [
    { icon: Award, value: "20+", label: "Years of Experience", color: "bg-blue-500" },
    { icon: Users, value: "5,000+", label: "Patients Treated", color: "bg-green-500" },
    { icon: GraduationCap, value: "BHMS, MD", label: "Certifications", color: "bg-purple-500" },
    { icon: MapPin, value: "Main City", label: "Clinic Location", color: "bg-orange-500" },
];

export default function StatsBar() {
    return (
        <section className="bg-white py-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className={`${stat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                            <stat.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</h3>
                        <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}