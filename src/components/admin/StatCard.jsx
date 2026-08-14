export default function StatCard({ title, value, icon: Icon, color }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            {/* Icon Container */}
            <div className={`p-3 rounded-lg ${color}`}>
                {Icon && <Icon className="w-6 h-6 text-white" />}
            </div>

            {/* Text Content */}
            <div>
                <p className="text-sm text-gray-500 font-medium">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
            </div>
        </div>
    );
}