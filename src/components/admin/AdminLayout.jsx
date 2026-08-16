import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function AdminLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar Component ko state pass kar rahe hain */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <div className="flex-1 md:ml-64 flex flex-col min-h-screen w-full">

                {/* Mobile Header (Sirf mobile par dikhega) */}
                <div className="md:hidden sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center z-40 shadow-sm">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-gray-700 hover:text-brand-700 mr-4"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <h1 className="text-lg font-bold text-gray-900">Dr. Panel</h1>
                </div>

                {/* Main Content Area */}
                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
                    <Outlet /> {/* Yahan Appointments, Patients wagaira render honge */}
                </main>
            </div>
        </div>
    );
}