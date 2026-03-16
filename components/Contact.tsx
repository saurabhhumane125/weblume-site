"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          ...formData,
          subject: `New Project Inquiry: ${formData.projectType}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--background-dark)]">
      <Container>
        <div className="max-w-[680px] mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-[clamp(32px,5vw,48px)] font-bold text-white leading-[1.1] mb-4">
              Let&apos;s build something.
            </h2>
            <p className="text-[18px] text-[#9CA3AF] mb-12">
              Have a project in mind? Tell us about it and we&apos;ll get back
              to you within 24 hours.
            </p>
          </AnimateOnScroll>

          {status === "success" ? (
            <AnimateOnScroll>
              <div className="flex flex-col items-center gap-4 py-16">
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="text-[24px] font-semibold text-white">
                  Thank you. We&apos;ll be in touch.
                </h3>
                <p className="text-[#9CA3AF]">
                  We typically respond within 24 hours.
                </p>
              </div>
            </AnimateOnScroll>
          ) : (
            <AnimateOnScroll delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-[#6B7280] text-[15px] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-[#6B7280] text-[15px] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                  />
                </div>

                {/* Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-[15px] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 appearance-none cursor-pointer [&>option]:bg-[#111827] [&>option]:text-white"
                  >
                    <option value="" disabled className="text-[#6B7280]">
                      Project Type
                    </option>
                    <option value="Website">Website</option>
                    <option value="Web App">Web App</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="MVP">MVP</option>
                    <option value="Other">Other</option>
                  </select>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-[15px] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 appearance-none cursor-pointer [&>option]:bg-[#111827] [&>option]:text-white"
                  >
                    <option value="" disabled className="text-[#6B7280]">
                      Budget Range
                    </option>
                    <option value="<$1K">&lt;$1K</option>
                    <option value="$1K-$5K">$1K-$5K</option>
                    <option value="$5K-$10K">$5K-$10K</option>
                    <option value="$10K+">$10K+</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-[#6B7280] text-[15px] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--text-primary)] font-medium text-[15px] rounded-xl hover:bg-[var(--accent)] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-[14px] text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </AnimateOnScroll>
          )}

          <AnimateOnScroll delay={0.3}>
            <p className="text-[14px] text-[#6B7280] mt-8">
              Or email us directly at{" "}
              <a
                href="mailto:hello@weblume.com"
                className="text-white hover:text-[var(--accent)] transition-colors underline underline-offset-4"
              >
                hello@weblume.com
              </a>
            </p>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
