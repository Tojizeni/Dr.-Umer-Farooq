import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Users, Trash2, StickyNote, Save } from "lucide-react";

export default function Patients() {
    const patients = useQuery(api.patients.listAll, {});
    const removePatient = useMutation(api.patients.remove);
    const updateNotes = useMutation(api.patients.updateNotes);

    const [editingId, setEditingId] = useState(null);
    const [notesText, setNotesText] = useState("");

    const startEditing = (patient) => {
        setEditingId(patient._id);
        setNotesText(patient.notes || "");
    };

    const saveNotes = async (id) => {
        await updateNotes({ id, notes: notesText });
        setEditingId(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Patients Directory</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {patients?.map((p) => (
                            <tr key={p._id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm">
                                            {p.name.charAt(0)}
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-900 block">{p.name}</span>
                                            <span className="text-xs text-gray-400">Added: {new Date(p.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    <div>📞 {p.phone}</div>
                                    {p.email && <div className="text-gray-400 text-xs mt-1">✉️ {p.email}</div>}
                                </td>

                                {/* Notes Section */}
                                <td className="px-6 py-4 max-w-xs">
                                    {editingId === p._id ? (
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={notesText}
                                                onChange={(e) => setNotesText(e.target.value)}
                                                className="w-full px-2 py-1 border border-brand-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
                                                placeholder="Add internal notes..."
                                            />
                                            <button onClick={() => saveNotes(p._id)} className="text-green-600 hover:text-green-800">
                                                <Save className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div onClick={() => startEditing(p)} className="cursor-pointer flex items-center gap-2 text-sm text-gray-500 hover:text-brand-700">
                                            <StickyNote className="w-4 h-4 flex-shrink-0" />
                                            <span className="truncate">{p.notes ? p.notes : "Click to add notes"}</span>
                                        </div>
                                    )}
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <button
                                        onClick={() => {
                                            if (window.confirm(`Delete ${p.name}? This cannot be undone.`)) {
                                                removePatient({ id: p._id });
                                            }
                                        }}
                                        className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50"
                                        title="Delete Patient"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {patients?.length === 0 && (
                    <p className="p-8 text-center text-gray-400 flex items-center justify-center gap-2">
                        <Users className="w-5 h-5" /> No patients registered yet.
                    </p>
                )}
            </div>
        </div>
    );
}