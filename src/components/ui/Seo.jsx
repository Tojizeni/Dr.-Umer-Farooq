import { Helmet } from "react-helmet-async";

export default function Seo({ title, description, image, name = "Dr. Homeo Clinic" }) {
    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
            {name && <meta name="author" content={name} />}
        </Helmet>
    );
}