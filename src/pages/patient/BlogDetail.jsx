import { useParams, Link } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Seo from "../../components/ui/Seo";
import { ArrowLeft, Calendar, Loader2 } from "lucide-react";

function PostImage({ storageId }) {
    const url = useQuery(api.files.getImageUrl, { storageId });
    if (url === undefined || url === null) return null;
    return <div className="rounded-2xl overflow-hidden mb-8 h-72 md:h-96"><img src={url} alt="Cover" className="w-full h-full object-cover" /></div>;
}

export default function BlogDetail() {
    const { slug } = useParams();
    const post = useQuery(api.blogPosts.getBySlug, { slug });

    if (post === undefined) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-brand-700" />
            </div>
        );
    }

    if (post === null) {
        return (
            <div className="py-16 text-center min-h-screen">
                <h1 className="text-3xl font-bold text-gray-900">Article Not Found</h1>
                <Link to="/blog" className="mt-4 inline-block text-brand-700">Back to Blog</Link>
            </div>
        );
    }

    return (
        <>
            <Seo title={`${post.title} | Dr. Homeo Blog`} description={post.excerpt} />

            <section className="py-16 bg-white min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-brand-700 hover:underline mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    <PostImage storageId={post.coverImageId} />

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{post.title}</h1>

                    <div className="mt-6 prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                        {post.body}
                    </div>
                </div>
            </section>
        </>
    );
}