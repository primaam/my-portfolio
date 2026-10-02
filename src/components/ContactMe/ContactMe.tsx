import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function ContactMe() {
  return (
    <section id="contactme" className="mt-6 scroll-mt-20">
      <Reveal>
        <div className="rounded-xl border border-cream/10 bg-surface p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-cream">
                Looking forward to connect with everyone!
              </h2>
              <div className="mt-5 space-y-3 text-sm">
                <a
                  href="mailto:pmaharyono@gmail.com"
                  className="flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
                >
                  <Mail size={16} className="shrink-0" />
                  pmaharyono@gmail.com
                </a>
                <a
                  href="tel:+6281393858484"
                  className="flex items-center gap-2.5 text-muted transition-colors hover:text-accent"
                >
                  <Phone size={16} className="shrink-0" />
                  (+62) 813-9385-8484
                </a>
              </div>
            </div>

            <div className="border-t border-cream/10 pt-10 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <h2 className="text-lg font-semibold text-cream">My Social</h2>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href="https://github.com/primaam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/primamaharyono/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/prima.maharyono/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
                >
                  <Instagram size={18} />
                </a>
              </div>
              <a
                href="/resume.pdf"
                download="prima-maharyono-resume.pdf"
                className={buttonVariants({}) + " mt-5"}
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
