import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/ui/Seo";
import { Brain, Wind, Hand, Soup, Bone, Moon, Heart, Baby, ArrowRight } from "lucide-react";

// Static data (Baad mein Convex se fetch karenge)
const treatments = [
    { slug: "migraine", title: "Migraine & Headache", icon: Brain, desc: "Supportive care for chronic headaches and migraines." },
    { slug: "allergies", title: "Allergies", icon: Wind, desc: "Supportive care for various allergic conditions." },
    { slug: "skin-problems", title: "Skin Problems", icon: Hand, desc: "Supportive care for skin concerns." },
    { slug: "digestive-problems", title: "Digestive Problems", icon: Soup, desc: "Supportive care for digestive wellness." },
    { slug: "joint-muscle-pain", title: "Joint & Muscle Pain", icon: Bone, desc: "Supportive care for musculoskeletal comfort." },
    { slug: "respiratory-issues", title: "Respiratory Issues", icon: Wind, desc: "Supportive care for respiratory wellness." },
    { slug: "stress-sleep", title: "Stress & Sleep Problems", icon: Moon, desc: "Supportive care for stress and sleep." },
    { slug: "womens-health", title: "Women's Health", icon: Heart, desc: "Supportive care for women's wellness." },
    { slug: "childrens-health", title: "Children's Health", icon: Baby, desc: "Supportive care for children's wellness." },
];

export default function Treatments() {
    return (
        <>
            <Seo
                title="Treatments & Conditions | Dr. Homeo"
                description="Explore various health conditions we commonly address through personalized homeopathic care."
            />

            <section className="py-16 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">Our Specialities</span>
                        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Conditions We Address</h1>
                        <p className="mt-4 text-gray-600">
                            We provide supportive care for a wide range of acute and chronic conditions. Click on any condition to learn more.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {treatments.map((t, index) => (
                            <motion.div
                                key={t.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link
                                    to={`/treatments/${t.slug}`}
                                    className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all group h-full"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-brand-50 p-3 rounded-xl text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                                            <t.icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
                                            <p className="text-sm text-gray-500 mt-1">{t.desc}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-brand-700 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}