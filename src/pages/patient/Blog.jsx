import { Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

// Static data (Baad mein Convex se fetch karenge)
const posts = [
    { slug: "allergy-management", title: "Homeopathic Approaches to Allergy Management", date: "May 15, 2024", excerpt: "Learn how homeopathic supportive care can help manage seasonal allergies.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
    { slug: "sleep-habits", title: "Healthy Sleep Habits for Better Wellbeing", date: "May 10, 2024", excerpt: "Tips and natural remedies to improve your sleep cycle.", image: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=800&q=80" },
];

export default function Blog() {
    return (
        <>
            <Seo title="Health Blog | Dr. Homeo" description="Read articles on health, wellness, and homeopathic care." />

            <section className="py-16 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">Health Blog</span>
                        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Latest Articles & Tips</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link to={`/blog/${post.slug}`} className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                                    <div className="overflow-hidden h-56">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                            <Calendar className="w-4 h-4" />
                                            {post.date}
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand-700 transition-colors">{post.title}</h2>
                                        <p className="mt-2 text-gray-600">{post.excerpt}</p>
                                        <div className="mt-4 inline-flex items-center gap-2 text-brand-700 font-medium text-sm">
                                            Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
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