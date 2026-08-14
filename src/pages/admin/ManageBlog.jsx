import { Link } from "react-router-dom"; // <-- Ye line add ho gayi
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Trash2, Eye, EyeOff } from "lucide-react";

export default function ManageBlog() {
    const posts = useQuery(api.blogPosts.listAll, {});
    const publish = useMutation(api.blogPosts.publish);
    const remove = useMutation(api.blogPosts.remove);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Manage Blog Posts</h1>
                {/* Link ko button ki tarah style kiya hai */}
                <Link to="/admin/blog/new" className="bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-800">
                    + New Post
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                {posts?.map((post) => (
                    <div key={post._id} className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <p className="font-semibold text-gray-900">{post.title}</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Category: {post.category} • {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => publish({ id: post._id, published: !post.published })}
                                className={`p-2 rounded-lg ${post.published ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                title={post.published ? "Unpublish" : "Publish"}
                            >
                                {post.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                            </button>

                            <button
                                onClick={() => { if (window.confirm("Delete this post permanently?")) remove({ id: post._id }); }}
                                className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                                title="Delete"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
                {posts?.length === 0 && (
                    <p className="p-8 text-center text-gray-400">No blog posts created yet.</p>
                )}
            </div>
        </div>
    );
}