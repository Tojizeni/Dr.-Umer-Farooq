import Seo from "../../components/ui/Seo";
import { CheckCircle2, UserSquare2, Award, Clock, GraduationCap, BadgeCheck, Stethoscope } from "lucide-react";

export default function About() {
    const qualifications = [
        "D. H. M. S (Diploma in Homeopathic Medicine and Surgery)",
        "R. H. M. P (Registered Homeopathic Medical Practitioner)",
        "B. H. M. S - Peshawar University",
        "15+ Years of Clinical Experience",
    ];

    const certifications = [
        { title: "D. H. M. S", desc: "Diploma in Homeopathic Medicine & Surgery", icon: GraduationCap },
        { title: "R. H. M. P", desc: "Registered Medical Practitioner", icon: BadgeCheck },
        { title: "B. H. M. S", desc: "Peshawar University", icon: Award },
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
                description="Learn more about Dr. ___'s qualifications, certifications, and homeopathic practice philosophy."
            />

            {/* Page Header / Hero Section */}
            <section className="bg-brand-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Image */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <img
                            src="/doctor.jpg"
                            alt="Dr. Umer Farooq - Homeopathic Physician"
                            className="w-full h-[450px] object-cover"
                        />
                    </div>

                    {/* Right Side: Info */}
                    <div>
                        <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                            <Stethoscope className="w-4 h-4" /> Skin Consultant + General Physician
                        </span>

                        <h1 className="mt-2 text-4xl font-bold text-gray-900">Dr. Umer Farooq</h1>
                        <p className="text-lg text-brand-700 font-medium mt-1">Homeopathic Physician</p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Welcome to my practice. I believe in treating the person as a whole, not just the symptoms.
                            With over a decade of experience in homeopathic medicine, I am dedicated to providing personalized
                            care that addresses your unique health concerns and promotes natural healing.
                        </p>

                        {/* Quick Stats */}
                        <div className="mt-6 flex gap-6">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-brand-700" />
                                <span className="text-sm font-medium text-gray-700">20+ Years Exp</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-brand-700" />
                                <span className="text-sm font-medium text-gray-700">Certified M.D.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Cards Section (NEW) */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Medical Certifications</h2>
                        <p className="mt-2 text-gray-500">Registered and verified professional qualifications</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl border border-brand-100 shadow-sm flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-brand-700 rounded-full flex items-center justify-center mb-4">
                                    <cert.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Qualifications & Why Choose Me Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">

                    {/* Qualifications */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
                    <div className="bg-brand-700 p-8 rounded-2xl text-white shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Why Choose Dr. ___?</h2>
                        <ul className="space-y-4">
                            {whyChooseMe.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-100 flex-shrink-0 mt-0.5" />
                                    <span className="text-brand-50">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="/appointment"
                            className="mt-8 inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
                        >
                            Book Consultation
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}