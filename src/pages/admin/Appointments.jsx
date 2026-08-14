import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Check, X, CheckCircle2 } from "lucide-react";

const TABS = ["pending", "confirmed", "completed", "cancelled"];

export default function Appointments() {
    const [tab, setTab] = useState("pending");
    const appointments = useQuery(api.appointments.listByStatus, { status: tab });
    const updateStatus = useMutation(api.appointments.updateStatus);

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Appointments</h1>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-200">
                {TABS.map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`px-4 py-2 text-sm font-medium capitalize transition-colors border-b-2 ${tab === t ? "border-brand-700 text-brand-700" : "border-transparent text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                {appointments?.map((a) => (
                    <div key={a._id} className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <p className="font-semibold text-gray-900">{a.name}</p>
                            <p className="text-sm text-gray-500 mt-1">
                                {a.preferredDate} at {a.preferredTime} • <span className="capitalize">{a.consultationType}</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-0.5">📞 {a.phone} {a.email && `| ✉️ ${a.email}`}</p>
                            {a.message && <p className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded">📝 {a.message}</p>}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 flex-shrink-0">
                            {a.status === "pending" && (
                                <button onClick={() => updateStatus({ id: a._id, status: "confirmed" })} className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700" title="Confirm">
                                    <Check className="w-4 h-4" />
                                </button>
                            )}
                            {a.status === "confirmed" && (
                                <button onClick={() => updateStatus({ id: a._id, status: "completed" })} className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700" title="Mark Completed">
                                    <CheckCircle2 className="w-4 h-4" />
                                </button>
                            )}
                            {(a.status === "pending" || a.status === "confirmed") && (
                                <button onClick={() => updateStatus({ id: a._id, status: "cancelled" })} className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700" title="Cancel">
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {appointments?.length === 0 && (
                    <p className="p-8 text-center text-gray-400">No {tab} appointments found.</p>
                )}
            </div>
        </div>
    );
}