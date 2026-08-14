import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Check, X, Star } from "lucide-react";

export default function ManageReviews() {
    const reviews = useQuery(api.reviews.listAll, {});
    const approve = useMutation(api.reviews.approve);

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Patient Reviews</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                {reviews?.map((r) => (
                    <div key={r._id} className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-gray-900">{r.patientName}</span>
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className={`w-3 h-3 ${i < r.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`} />
                                    ))}
                                </div>
                                {!r.approved && <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full">Pending</span>}
                            </div>
                            <p className="text-gray-600 text-sm italic">"{r.body}"</p>
                        </div>

                        <div className="flex gap-2 flex-shrink-0">
                            <button
                                onClick={() => approve({ id: r._id, approved: !r.approved })}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium ${r.approved ? "bg-gray-100 text-gray-700 hover:bg-gray-200" : "bg-green-600 text-white hover:bg-green-700"}`}
                            >
                                {r.approved ? "Unapprove" : "Approve"}
                            </button>
                        </div>
                    </div>
                ))}
                {reviews?.length === 0 && (
                    <p className="p-8 text-center text-gray-400">No reviews submitted yet.</p>
                )}
            </div>
        </div>
    );
}