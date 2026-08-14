import Seo from "../../components/ui/Seo";
import { CheckCircle2, UserSquare2, Award, Clock } from "lucide-react";

export default function About() {
    const qualifications = [
        "Bachelor of Homeopathic Medicine and Surgery (BHMS)",
        "Doctor of Medicine in Homeopathy (M.D.)",
        "Registered Homeopathic Practitioner",
        "15+ Years of Clinical Experience",
    ];

    const whyChooseMe = [
        "Personalized consultation tailored to your history",
        "Detailed patient history and root-cause assessment",
        "Regular follow-ups to track progress",
        "Flexible appointment scheduling (Online & In-person)",
    ];

    return (
        <>
            <Seo
                title="About The Doctor | Dr. Homeo"
                description="Learn more about Dr. ___'s qualifications, experience, and homeopathic practice philosophy."
            />

            {/* Page Header / Hero Section */}
            <section className="bg-brand-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Image */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <img
                            src="/doctor.jpg"
                            alt="Dr. ___ Homeopathic Physician"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Right Side: Info */}
                    <div>
                        <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">Homeopathic Physician</span>
                        <h1 className="mt-2 text-4xl font-bold text-gray-900">Dr. ___</h1>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Welcome to my practice. I believe in treating the person as a whole, not just the symptoms.
                            With over a decade of experience in homeopathic medicine, I am dedicated to providing personalized
                            care that addresses your unique health concerns and promotes natural healing.
                        </p>

                        {/* Quick Stats */}
                        <div className="mt-6 flex gap-6">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-brand-700" />
                                <span className="text-sm font-medium text-gray-700">15+ Years Exp</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-brand-700" />
                                <span className="text-sm font-medium text-gray-700">Certified M.D.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualifications & Why Choose Me Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">

                    {/* Qualifications */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <UserSquare2 className="w-8 h-8 text-brand-700" />
                            <h2 className="text-2xl font-bold text-gray-900">Qualifications & Experience</h2>
                        </div>
                        <ul className="space-y-4">
                            {qualifications.map((q, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{q}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Why Choose Me */}
                    <div className="bg-brand-700 p-8 rounded-2xl text-white">
                        <h2 className="text-2xl font-bold mb-6">Why Choose Dr. ___?</h2>
                        <ul className="space-y-4">
                            {whyChooseMe.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-100 flex-shrink-0 mt-0.5" />
                                    <span className="text-brand-50">{point}</span>
                                </li>
                            ))}
                        </ul>
                        {/* Optional: CTA Button */}
                        <a
                            href="/appointment"
                            className="mt-8 inline-block bg-white text-brand-700 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
                        >
                            Book Consultation
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}