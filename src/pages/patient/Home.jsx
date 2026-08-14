import Seo from "../../components/ui/Seo";
import Hero from "../../components/home/Hero";
import StatsBar from "../../components/home/StatsBar";
import TreatmentsPreview from "../../components/home/TreatmentsPreview";
import ProcessTimeline from "../../components/home/ProcessTimeline";
import ReviewsPreview from "../../components/home/ReviewsPreview";

export default function Home() {
    return (
        <>
            {/* SEO Meta Tags for Home Page */}
            <Seo
                title="Dr. Homeo | Personalized Homeopathic Care"
                description="Consult with an experienced homeopathic physician for personalized healthcare guidance and holistic well-being."
            />

            {/* Assembling all Home Components */}
            <Hero />
            <StatsBar />
            <TreatmentsPreview />
            <ProcessTimeline />
            <ReviewsPreview />
        </>
    );
}