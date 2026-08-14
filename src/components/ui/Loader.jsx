export default function Loader({ fullScreen = false, size = "md" }) {
    const sizes = {
        sm: "w-6 h-6 border-2",
        md: "w-12 h-12 border-4",
        lg: "w-16 h-16 border-4",
    };

    const spinner = (
        <div className={`animate-spin rounded-full border-gray-200 border-t-brand-700 ${sizes[size]}`}></div>
    );

    // Agar full screen loader chahiye (e.g., ProtectedRoute check karte waqt)
    if (fullScreen) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
                {spinner}
            </div>
        );
    }

    // Normal in-page loader
    return (
        <div className="w-full py-10 flex items-center justify-center">
            {spinner}
        </div>
    );
}