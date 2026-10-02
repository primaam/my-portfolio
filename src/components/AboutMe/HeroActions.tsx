"use client";

import { ArrowDown, FileDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { smoothScrollToId } from "@/lib/scroll";

export default function HeroActions() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          smoothScrollToId("projects", 1100);
        }}
        className={
          buttonVariants({ size: "lg" }) +
          " font-semibold shadow-[0_0_28px_rgb(45_212_191/0.35)] hover:shadow-[0_0_36px_rgb(45_212_191/0.5)]"
        }
      >
        <ArrowDown /> View Projects
      </a>
      <a
        href="/resume.pdf"
        download="prima-maharyono-resume.pdf"
        className={buttonVariants({ variant: "outline", size: "lg" })}
      >
        <FileDown /> Download CV
      </a>
    </div>
  );
}
