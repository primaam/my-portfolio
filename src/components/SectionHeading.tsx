export default function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-3" aria-hidden="true">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
        {label}
      </span>
      <span className="h-px flex-1 bg-cream/15" />
    </div>
  );
}
