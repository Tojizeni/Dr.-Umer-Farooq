import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import StatCard from "../../components/admin/StatCard";
import { CalendarClock, Clock, CheckCircle2, XCircle, CalendarCheck } from "lucide-react";

export default function Overview() {
    const stats = useQuery(api.appointments.getStats, {});

    // Get today's date for formatting
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500 mt-1">{today}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <StatCard title="Today's Appointments" value={stats?.today ?? "..."} icon={CalendarClock} color="bg-blue-500" />
                <StatCard title="Pending Requests" value={stats?.pending ?? "..."} icon={Clock} color="bg-yellow-500" />
                <StatCard title="Confirmed (Total)" value={stats?.confirmed ?? "..."} icon={CheckCircle2} color="bg-green-500" />
                <StatCard title="Completed (Total)" value={stats?.completed ?? "..."} icon={CalendarCheck} color="bg-brand-700" />
                <StatCard title="Cancelled (Total)" value={stats?.cancelled ?? "..."} icon={XCircle} color="bg-red-500" />
            </div>

            {/* Quick Links / Recent Activity (Placeholder) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
                <p className="text-gray-500 text-sm">
                    Welcome back, Doctor! Check your pending appointments and patient messages to get started with your day.
                </p>
                {/* In a real app, you'd map over recent appointments here */}
            </div>
        </div>
    );
}