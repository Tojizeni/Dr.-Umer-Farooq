import { useParams, Link } from "react-router-dom";
import Seo from "../../components/ui/Seo";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Static data for detail page
const details = {
    "migraine": {
        title: "Migraine & Headache",
        desc: "Homeopathic supportive care for chronic headaches and migraines focuses on understanding individual triggers and providing holistic management.",
        points: ["Detailed history of triggers", "Personalized wellness plan", "Supportive natural remedies"]
    }
    // Baqi slugs yahan add kar sakte hain ya Convex se laenge
};
const defaultDetail = {
    title: "Treatment Detail",
    desc: "We provide personalized supportive care for this condition. Please book a consultation for a detailed assessment.",
    points: ["Comprehensive assessment", "Personalized guidance", "Follow-up support"]
};

export default function TreatmentDetail() {
    const { slug } = useParams();
    const detail = details[slug] || defaultDetail;

    return (
        <>
            <Seo title={`${detail.title} | Dr. Homeo`} description={detail.desc} />

            <section className="py-16 bg-white min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/treatments" className="inline-flex items-center gap-2 text-brand-700 hover:underline mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to all Treatments
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{detail.title}</h1>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">{detail.desc}</p>

                    <div className="mt-8 bg-brand-50 p-8 rounded-2xl border border-brand-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">What to expect:</h2>
                        <ul className="space-y-3">
                            {detail.points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10 text-center">
                        <Link to="/appointment" className="bg-brand-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-800 transition-colors">
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}