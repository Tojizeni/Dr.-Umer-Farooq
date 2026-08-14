export default function Settings() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Clinic Settings</h1>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-2xl">
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Clinic Name</label>
                        <input type="text" defaultValue="Dr. Homeo Clinic" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                        <input type="text" defaultValue="+92 123 456789" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Opening Hours</label>
                        <input type="text" defaultValue="Mon - Sat: 10am - 8pm" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                    </div>

                    <button type="button" className="bg-brand-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-800">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}