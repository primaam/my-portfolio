import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import HeroActions from "@/components/AboutMe/HeroActions";
import { Badge } from "@/components/ui/badge";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "6", label: "Projects Shipped" },
  { value: "15+", label: "Technologies" },
];

const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["SQL", "Kafka", "REST APIs", "Design Patterns"],
  },
  {
    group: "Mobile",
    items: ["React Native", "React Navigation", "Redux"],
  },
  {
    group: "Tools",
    items: ["Git", "Jira", "Axios", "JSDoc"],
  },
];

export default function AboutMe() {
    return (
        <div className="pt-28">
            <section id="aboutme" className="scroll-mt-24">
                <Reveal>
                    <SectionHeading label="About Me" />
                </Reveal>
                <div className="panel flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row">
                    <Reveal delay={0.05}>
                        <Image
                            src="/assets/images/1.png"
                            alt="Profile photo of Prima"
                            width={224}
                            height={224}
                            className="h-44 w-44 shrink-0 rounded-2xl object-cover ring-1 ring-cream/15 sm:h-56 sm:w-56"
                            priority
                        />
                    </Reveal>
                    <div className="text-center lg:text-left">
                        <Reveal delay={0.1}>
                            <h1 className="text-3xl font-semibold tracking-tight text-cream sm:text-5xl">
                                Prima Anugerah Maharyono
                            </h1>
                            <p className="mt-3 text-sm font-medium leading-relaxed text-cream/90 sm:text-base">
                                Full-Stack Developer <span className="text-accent">|</span>{" "}
                                Frontend Architecture <span className="text-accent">|</span>{" "}
                                Performance Optimization
                            </p>
                        </Reveal>
            <Reveal delay={0.18}>
              <HeroActions />
            </Reveal>
                        <Reveal delay={0.26}>
                            <dl className="mt-8 flex items-stretch justify-center gap-6 border-t border-cream/15 pt-6 sm:gap-10 lg:justify-start">
                                {STATS.map((s) => (
                                    <div key={s.label} className="flex flex-col">
                                        <dd className="order-1 text-2xl font-semibold text-cream sm:text-3xl">
                                            {s.value}
                                        </dd>
                                        <dt className="order-2 mt-1 text-xs text-muted">
                                            {s.label}
                                        </dt>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="mt-8">
                <Reveal>
                    <div className="panel flex flex-col items-center gap-8 p-8 sm:p-12 lg:flex-row">
                        <Image
                            src="/assets/images/2.jpg"
                            alt="Prima at work"
                            width={320}
                            height={240}
                            className="h-52 w-full shrink-0 rounded-2xl object-cover ring-1 ring-cream/15 sm:w-72"
                        />
                        <div className="min-w-0 text-center lg:text-left">
                            <h2 className="text-xl font-semibold text-cream sm:text-2xl">
                                Hi, I&apos;m Prima
                            </h2>
                            <p className="mt-3 leading-relaxed text-muted">
                                Software Engineer evolving from Frontend to Full-Stack. I bridge
                                frontend and backend boundaries — restructuring codebases for
                                scale, optimizing under constraints (15x query wins), and
                                designing for tomorrow&apos;s possibilities, not just
                                today&apos;s requirements.
                            </p>
                            <div className="mt-5 space-y-3">
                                {SKILLS.map((g) => (
                                    <div
                                        key={g.group}
                                        className="flex flex-col gap-2 sm:flex-row sm:items-center"
                                    >
                                        <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-accent sm:w-16 sm:text-left">
                                            {g.group}
                                        </span>
                                        <div className="flex flex-wrap justify-center gap-1.5 lg:justify-start">
                                            {g.items.map((s) => (
                                                <Badge key={s}>{s}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
