export function SectionHeader({ badge, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-2">
      <span className="font-label-badge text-label-badge text-primary-fixed-dim uppercase tracking-wider">
        {badge}
      </span>
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold text-balance">
        {title}
      </h2>
      <p className="font-body-md text-body-sm sm:text-body-md text-on-surface-variant text-balance">
        {desc}
      </p>
    </div>
  );
}
