export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
    return (
        <div className={`${center ? 'text-center mx-auto' : 'text-left'} max-w-2xl mb-12`}>
            {eyebrow && (
                <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">
                    {eyebrow}
                </span>
            )}
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
            {subtitle && <p className="mt-4 text-gray-600">{subtitle}</p>}
        </div>
    );
}