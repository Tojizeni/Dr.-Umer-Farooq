import { NavLink, useNavigate } from "react-router-dom";
import {
    LayoutDashboard, CalendarClock, Users, MessageSquare,
    Pill, FileText, Star, Settings, LogOut
} from "lucide-react";

const navItems = [
    { to: "/admin", label: "Overview", icon: LayoutDashboard, end: true },
    { to: "/admin/appointments", label: "Appointments", icon: CalendarClock },
    { to: "/admin/patients", label: "Patients", icon: Users },
    { to: "/admin/messages", label: "Messages", icon: MessageSquare },
    { to: "/admin/treatments", label: "Treatments", icon: Pill },
    { to: "/admin/blog", label: "Blog Posts", icon: FileText },
    { to: "/admin/reviews", label: "Reviews", icon: Star },
    { to: "/admin/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
    const navigate = useNavigate();

    // Simple Logout function
    const handleLogout = () => {
        localStorage.removeItem("isAdmin"); // Password remove kar do
        navigate("/admin/login"); // Login page par bhej do
    };

    return (
        <aside className="w-64 bg-gray-900 text-gray-300 flex flex-col fixed inset-y-0 left-0 z-50">
            {/* Logo / Title */}
            <div className="h-16 flex items-center justify-center border-b border-gray-800">
                <h1 className="text-white font-bold text-xl tracking-wide">Dr. Panel</h1>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? "bg-brand-700 text-white"
                                : "hover:bg-gray-800 hover:text-white"
                            }`
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            {/* Logout Button */}
            <div className="p-2 border-t border-gray-800">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </aside>
    );
}