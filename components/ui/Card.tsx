import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--background-secondary)] border border-[var(--border-color)] rounded-xl p-8 transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:shadow-lg hover:border-[var(--text-muted)]",
        className
      )}
    >
      {children}
    </div>
  );
}
