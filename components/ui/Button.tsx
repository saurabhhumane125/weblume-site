"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-[#111827] text-white! hover:bg-[var(--accent)] hover:shadow-lg",
    secondary:
      "bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-[var(--border-color)]",
    outline:
      "border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--background-secondary)]",
    ghost:
      "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--background-secondary)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-3 text-[14px]",
    lg: "px-8 py-4 text-[15px]",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
