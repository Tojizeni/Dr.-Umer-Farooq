import { Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Seo from "../../components/ui/Seo";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";

// Image URL nikalne ke liye chota helper component
function PostImage({ storageId }) {
    const url = useQuery(api.files.getImageUrl, { storageId });
    if (url === undefined) return <div className="h-56 bg-gray-100 animate-pulse"></div>;
    if (url === null) return <div className="h-56 bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>;
    return <img src={url} alt="Post Cover" className="w-full h-56 object-cover" />;
}

export default function Blog() {
    const posts = useQuery(api.blogPosts.listPublished, {});

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
                        {!posts && (
                            <div className="col-span-2 flex justify-center py-10">
                                <Loader2 className="w-8 h-8 animate-spin text-brand-700" />
                            </div>
                        )}

                        {posts?.map((post, index) => (
                            <motion.div
                                key={post._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link to={`/blog/${post.slug}`} className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                                    <div className="overflow-hidden">
                                        <PostImage storageId={post.coverImageId} />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
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