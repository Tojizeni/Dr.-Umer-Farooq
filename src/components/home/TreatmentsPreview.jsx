import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Wind, Hand, Soup, Bone, Moon, Heart, Baby, ArrowRight } from "lucide-react";

// Static data for now (Will connect to Convex later)
const treatments = [
    { slug: "migraine", title: "Migraine & Headache", icon: Brain },
    { slug: "allergies", title: "Allergies", icon: Wind },
    { slug: "skin", title: "Skin Problems", icon: Hand },
    { slug: "digestive", title: "Digestive Problems", icon: Soup },
    { slug: "joint-pain", title: "Joint & Muscle Pain", icon: Bone },
    { slug: "respiratory", title: "Respiratory Issues", icon: Wind },
    { slug: "stress", title: "Stress & Sleep Problems", icon: Moon },
    { slug: "womens-health", title: "Women's Health", icon: Heart },
    { slug: "childrens-health", title: "Children's Health", icon: Baby },
];

export default function TreatmentsPreview() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">Our Specialities</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                        Conditions We Commonly Address
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Providing supportive care for a variety of chronic and acute health concerns through personalized homeopathic treatment.
                    </p>
                </div>

                {/* Grid of Treatment Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {treatments.map((t, index) => (
                        <motion.div
                            key={t.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <Link
                                to={`/treatments/${t.slug}`}
                                className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-50 p-3 rounded-xl text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                                        <t.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Learn more about our supportive approach.
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-700 group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}