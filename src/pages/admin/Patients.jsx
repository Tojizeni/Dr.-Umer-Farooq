import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Users } from "lucide-react";

export default function Patients() {
    const patients = useQuery(api.patients.listAll, {});

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Patients Directory</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registered On</th>
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
                                        <span className="font-medium text-gray-900">{p.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{p.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{p.email || "-"}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {new Date(p.createdAt).toLocaleDateString()}
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