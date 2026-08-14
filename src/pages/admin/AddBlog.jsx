import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function AddBlog() {
    const createPost = useMutation(api.blogPosts.create);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: "", slug: "", category: "", excerpt: "", body: "",
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createPost({
                ...form,
                coverImageId: undefined, // Image upload baad mein add karenge
            });
            navigate("/admin/blog");
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <>
            <Seo title="Add Blog Post | Dr. Homeo" description="Create a new blog post." />
            <div className="mb-6">
                <button onClick={() => navigate("/admin/blog")} className="flex items-center gap-2 text-gray-600 hover:text-brand-700 mb-4">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog Posts
                </button>
                <h1 className="text-2xl font-bold text-gray-900">Add New Blog Post</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4 max-w-3xl">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <input name="title" value={form.title} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                        <input name="category" value={form.category} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="e.g. Allergy, Nutrition" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL) *</label>
                    <input name="slug" value={form.slug} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="my-new-post" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Short Excerpt *</label>
                    <textarea name="excerpt" value={form.excerpt} onChange={handleChange} required rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="1-2 line summary"></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Article Body *</label>
                    <textarea name="body" value={form.body} onChange={handleChange} required rows="8" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Write full article here..."></textarea>
                </div>

                <button type="submit" disabled={loading} className="bg-brand-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-800 flex items-center gap-2">
                    {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : "Save Draft"}
                </button>
            </form>
        </>
    );
}