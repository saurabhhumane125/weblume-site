import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/weblume", label: "Twitter" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/weblume",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/weblume", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@weblume.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--background-dark)] border-t border-white/5 py-12 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Left */}
          <div>
            <a
              href="/"
              className="text-[20px] font-bold text-white tracking-[-0.02em] block mb-1"
            >
              Weblume
            </a>
            <p className="text-[14px] text-[#6B7280]">
              Software Development Agency
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-[#6B7280] hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 text-[#6B7280] hover:text-white transition-colors duration-200"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-[13px] text-[#6B7280]">
            © {new Date().getFullYear()} Weblume. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
