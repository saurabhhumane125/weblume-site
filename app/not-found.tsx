import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Container className="text-center">
        <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[var(--text-muted)] mb-4">
          404
        </p>
        <h1 className="text-[clamp(40px,7vw,72px)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)] mb-6">
          Page not found.
        </h1>
        <p className="text-[18px] text-[var(--text-secondary)] max-w-[420px] mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-[var(--text-primary)] text-white font-medium text-[15px] rounded-lg hover:bg-[var(--accent)] transition-all duration-200"
        >
          Back to Home →
        </Link>
      </Container>
    </div>
  );
}
