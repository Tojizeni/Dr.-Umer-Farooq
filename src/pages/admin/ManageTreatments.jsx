import { useQuery } from "convex/react";
import { Link } from "react-router-dom"; // <-- Ye line add ho gayi
import { api } from "../../../convex/_generated/api";

export default function ManageTreatments() {
    const treatments = useQuery(api.treatments.listAll, {});

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Manage Treatments</h1>
                <Link to="/admin/treatments/new" className="bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-800">
                    + Add Treatment
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                {treatments?.map((t) => (
                    <div key={t._id} className="p-4 flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-gray-900">{t.title}</p>
                            <p className="text-sm text-gray-500">{t.shortDescription}</p>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">Slug: {t.slug}</span>
                    </div>
                ))}
                {treatments?.length === 0 && (
                    <p className="p-8 text-center text-gray-400">No treatments added yet. Run the seed function!</p>
                )}
            </div>
        </div>
    );
}