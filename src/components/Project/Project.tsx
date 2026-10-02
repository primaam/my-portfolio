"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectDetail } from "@/data/projectData";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

export default function Project() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setIndex((next + projectDetail.length) % projectDetail.length);
  };

  const current = projectDetail[index];

  return (
    <section id="projects" className="mt-6 scroll-mt-20">
      <Reveal>
        <div className="rounded-xl border border-cream/10 bg-surface p-8 sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted">
                Projects I&apos;ve Contributed To...
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-cream">
                {current.title}
              </h2>
              <p className="mt-1 text-sm text-accent">
                {current.team} — {current.role}
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                {current.shortDesc}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                {projectDetail.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i, i > index ? 1 : -1)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`h-1.5 cursor-pointer rounded-full transition-all ${
                      i === index ? "w-6 bg-accent" : "w-1.5 bg-cream/20 hover:bg-cream/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="relative flex min-h-56 items-center justify-center overflow-hidden rounded-lg bg-cream/5 p-6">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0, x: 40 * direction }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 * direction }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Image
                      src={current.logo}
                      alt={`${current.title} logo`}
                      width={420}
                      height={160}
                      className="h-auto max-h-44 w-auto max-w-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => go(index - 1, -1)}
                  aria-label="Previous project"
                >
                  <ChevronLeft />
                </Button>
                <Button onClick={() => router.push(`/detail/${index}`)}>
                  See Detail
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => go(index + 1, 1)}
                  aria-label="Next project"
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
