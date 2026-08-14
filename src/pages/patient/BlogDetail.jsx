import { useParams, Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import { ArrowLeft, Calendar } from "lucide-react";

const blogData = {
    "allergy-management": {
        title: "Homeopathic Approaches to Allergy Management",
        date: "May 15, 2024",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        body: "Allergies can be challenging, but homeopathic supportive care offers a holistic approach. In this article, we explore..."
    },
    "sleep-habits": {
        title: "Healthy Sleep Habits for Better Wellbeing",
        date: "May 10, 2024",
        image: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=800&q=80",
        body: "Sleep is crucial for health. Here are some tips and natural approaches to improve your sleep cycle..."
    }
};

export default function BlogDetail() {
    const { slug } = useParams();
    const post = blogData[slug] || {
        title: "Article Not Found",
        date: "",
        image: "",
        body: "The article you are looking for does not exist."
    };

    return (
        <>
            <Seo title={`${post.title} | Dr. Homeo Blog`} description={post.body.substring(0, 100)} />

            <section className="py-16 bg-white min-h-screen">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-brand-700 hover:underline mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    {post.image && (
                        <div className="rounded-2xl overflow-hidden mb-8 h-72 md:h-96">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    )}

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{post.title}</h1>

                    <div className="mt-6 prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        <p>{post.body}</p>
                    </div>
                </div>
            </section>
        </>
    );
}