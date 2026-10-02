import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectDetail } from "@/data/projectData";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Project() {
  return (
    <section id="projects" className="mt-8 scroll-mt-24">
      <Reveal>
        <SectionHeading label="Projects" />
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {projectDetail.map((item, i) => (
          <Reveal key={item.id} delay={(i % 2) * 0.08}>
            <Link
              href={`/detail/${i}`}
              className="panel group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_16px_40px_rgb(0_0_0/0.35)]"
            >
              <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-elevated/50">
                <Image
                  src={item.images}
                  alt={`${item.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {item.role}
                </p>
                <h3 className="mt-1.5 text-xl font-semibold text-cream transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {item.shortDesc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.techStack.slice(0, 4).map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 pt-1 text-sm font-medium text-accent">
                  View case
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
