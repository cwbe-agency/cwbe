export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      } mb-12 md:mb-16`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          {eyebrow}
        </div>
      )}

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}