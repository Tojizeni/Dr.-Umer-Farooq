import Seo from "../../components/ui/Seo";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    { name: "Ahmed R.", rating: 5, text: "Very professional consultation and good communication. The doctor listened to my complete history before suggesting anything." },
    { name: "Sara K.", rating: 5, text: "The personalized care was exactly what I needed. Highly recommend for anyone looking for holistic treatment." },
    { name: "Bilal M.", rating: 4, text: "Good experience overall. The clinic is clean and the appointment system is very easy to use." },
    { name: "Fatima Z.", rating: 5, text: "Excellent supportive care. The doctor genuinely cares about patient well-being." },
];

export default function Reviews() {
    return (
        <>
            <Seo title="Patient Reviews | Dr. Homeo" description="Read what our patients have to say about their experience with our homeopathic care." />

            <section className="py-16 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
                        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">What Our Patients Say</h1>
                        <p className="mt-4 text-gray-600">Real feedback from real patients. (Names are abbreviated for privacy).</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
                            >
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-50" />
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 relative z-10">"{review.text}"</p>
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center font-bold text-brand-700">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                        <p className="text-xs text-gray-500">Verified Patient</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}