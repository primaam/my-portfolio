import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/primaam", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/primamaharyono/",
    Icon: Linkedin,
  },
];

export default function ContactMe() {
  return (
    <section id="contactme" className="mt-8 scroll-mt-24">
      <Reveal>
        <SectionHeading label="Contact" />
        <div className="overflow-hidden rounded-xl bg-cream text-base shadow-[0_16px_48px_rgb(0_0_0/0.35)]">
          <div className="p-8 sm:p-12">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-pine">
              Have a project in mind?
            </p>
            <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-base/70">
              My inbox is always open — whether you have a question, a
              project to discuss, or just want to say hi, I&apos;ll do my
              best to get back to you.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="mailto:pmaharyono@gmail.com"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-base px-6 text-sm font-semibold text-cream shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]"
              >
                <Mail size={16} /> pmaharyono@gmail.com
              </a>
              <a
                href="/resume.pdf"
                download="prima-maharyono-resume.pdf"
                className="inline-flex h-12 items-center gap-2 rounded-md border-2 border-base/20 px-6 text-sm font-semibold text-base transition-all hover:-translate-y-0.5 hover:border-base/50 active:scale-[0.98]"
              >
                <FileDown size={16} /> Download CV
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-base/15 pt-6">
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-md",
                      "text-base/70 transition-all hover:-translate-y-0.5 hover:bg-base/10 hover:text-base"
                    )}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <a
                href="tel:+6281393858484"
                className="text-sm font-medium text-base/70 transition-colors hover:text-base"
              >
                (+62) 813-9385-8484
              </a>
              <p className="text-sm text-base/60">
                Indonesian (Native) · English (Limited working)
              </p>
              <p className="w-full text-xs text-base/50 sm:ml-auto sm:w-auto">
                © 2026 Prima Maharyono
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
