import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import { Stethoscope, Loader2 } from "lucide-react";

export default function Login() {
    const login = useMutation(api.admin.login);
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await login({ password });
            // Login successful! Password ko localStorage mein save kar lete hain
            localStorage.setItem("isAdmin", "true");
            navigate("/admin"); // Dashboard par bhej do
        } catch (err) {
            setError("Invalid Password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Seo title="Admin Login | Dr. Homeo" description="Doctor login portal." />
            <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">

                    <div className="flex flex-col items-center mb-8">
                        <div className="bg-brand-700 p-3 rounded-xl mb-4">
                            <Stethoscope className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
                        <p className="text-gray-500 text-sm mt-1">Enter password to access dashboard</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-700 text-white py-3 rounded-lg font-semibold hover:bg-brand-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" /> Checking...
                                </>
                            ) : (
                                "Unlock Dashboard"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}