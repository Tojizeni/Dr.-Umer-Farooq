import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function AddTreatment() {
    const createTreatment = useMutation(api.treatments.create);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        title: "", slug: "", icon: "Brain", shortDescription: "", detailedDescription: "", order: 1,
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createTreatment({
                ...form,
                order: Number(form.order),
            });
            navigate("/admin/treatments");
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <>
            <Seo title="Add Treatment | Dr. Homeo" description="Add a new treatment condition." />
            <div className="mb-6">
                <button onClick={() => navigate("/admin/treatments")} className="flex items-center gap-2 text-gray-600 hover:text-brand-700 mb-4">
                    <ArrowLeft className="w-4 h-4" /> Back to Treatments
                </button>
                <h1 className="text-2xl font-bold text-gray-900">Add New Treatment</h1>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4 max-w-3xl">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <input name="title" value={form.title} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="e.g. Migraine" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Icon Name *</label>
                        <input name="icon" value={form.icon} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="e.g. Brain, Wind, Heart" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL) *</label>
                        <input name="slug" value={form.slug} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="migraine-headache" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Display Order *</label>
                        <input type="number" name="order" value={form.order} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Short Description *</label>
                    <input name="shortDescription" value={form.shortDescription} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Description *</label>
                    <textarea name="detailedDescription" value={form.detailedDescription} onChange={handleChange} required rows="6" className="w-full px-4 py-2 border border-gray-300 rounded-lg"></textarea>
                </div>

                <button type="submit" disabled={loading} className="bg-brand-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-800 flex items-center gap-2">
                    {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : "Add Treatment"}
                </button>
            </form>
        </>
    );
}