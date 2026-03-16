interface SectionHeaderProps {
  label: string;
  heading: string;
  labelAccent?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  heading,
  labelAccent = false,
  light = false,
  align = "left",
}: SectionHeaderProps & { align?: "left" | "center" }) {
  return (
    <div className={`flex flex-col mb-10 md:mb-16 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <span
        className={`inline-flex font-mono text-[13px] md:text-[14px] font-medium tracking-[0.1em] uppercase mb-4 px-3 py-1 rounded-full border ${
          light 
            ? "border-white/10 text-white/70 bg-white/5" 
            : "border-[var(--border-color)] text-[var(--text-muted)] bg-[var(--background-secondary)]"
        } ${labelAccent ? "text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent)]/5" : ""}`}
      >
        {label}
      </span>
      <h2
        className={`text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tight leading-[1.05] max-w-[800px] ${
          light ? "text-[#ffffff]" : "text-[var(--text-primary)]"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}
