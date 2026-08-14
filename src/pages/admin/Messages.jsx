import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Mail, Phone, CheckCheck } from "lucide-react";

export default function Messages() {
    const messages = useQuery(api.messages.listAll, {});
    const markRead = useMutation(api.messages.markRead);

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Patient Messages</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                {messages?.map((msg) => (
                    <div key={msg._id} className={`p-4 flex flex-col md:flex-row justify-between gap-4 ${!msg.read ? "bg-brand-50/50" : ""}`}>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-gray-900">{msg.name}</span>
                                {!msg.read && <span className="bg-brand-700 text-white text-xs px-2 py-0.5 rounded-full">New</span>}
                            </div>
                            <p className="text-gray-600 my-2 bg-gray-50 p-3 rounded text-sm">"{msg.body}"</p>
                            <div className="flex gap-4 text-sm text-gray-500 mt-2">
                                {msg.email && <a href={`mailto:${msg.email}`} className="flex items-center gap-1 hover:text-brand-700"><Mail className="w-4 h-4" /> {msg.email}</a>}
                                {msg.phone && <a href={`tel:${msg.phone}`} className="flex items-center gap-1 hover:text-brand-700"><Phone className="w-4 h-4" /> {msg.phone}</a>}
                            </div>
                        </div>

                        <div className="flex items-start">
                            {!msg.read && (
                                <button
                                    onClick={() => markRead({ id: msg._id })}
                                    className="text-sm text-brand-700 font-medium flex items-center gap-1 hover:underline"
                                >
                                    <CheckCheck className="w-4 h-4" /> Mark as read
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {messages?.length === 0 && (
                    <p className="p-8 text-center text-gray-400">No messages found.</p>
                )}
            </div>
        </div>
    );
}