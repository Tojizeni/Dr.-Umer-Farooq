import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    // Check if user is logged in via localStorage
    const isAuthenticated = localStorage.getItem("isAdmin") === "true";

    // Agar login nahi hai, toh login page pe bhej do
    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    // Agar login hai, toh AdminLayout (jisme Sidebar hai) ko render karo
    return children;
}