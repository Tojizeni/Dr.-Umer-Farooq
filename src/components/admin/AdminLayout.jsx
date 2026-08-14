import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AdminLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar (Fixed on the left) */}
            <Sidebar />

            {/* Main Content Area */}
            {/* md:ml-64 isliye taake content sidebar ke right side pe aaye (kyunki sidebar fixed w-64 hai) */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
                    <Outlet /> {/* Yahan Overview, Appointments wagaira render honge */}
                </main>
            </div>
        </div>
    );
}