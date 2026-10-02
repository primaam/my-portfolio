import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutMe() {
  return (
    <div className="pt-24">
      <section id="aboutme" className="scroll-mt-20">
        <Reveal>
          <div className="flex flex-col items-center gap-8 rounded-xl border border-cream/10 bg-surface p-8 sm:flex-row sm:p-12">
            <Image
              src="/assets/images/1.png"
              alt="Profile photo of Prima"
              width={220}
              height={220}
              className="h-44 w-44 shrink-0 rounded-full object-cover ring-1 ring-cream/15 sm:h-56 sm:w-56"
              priority
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-semibold tracking-tight text-cream sm:text-4xl">
                Prima Anugerah Maharyono
              </h1>
              <p className="mt-2 text-sm text-accent sm:text-base">
                Frontend Developer | React Native Developer | Web Developer
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-6">
        <Reveal delay={0.05}>
          <div className="flex flex-col items-center gap-8 rounded-xl border border-cream/10 bg-surface p-8 sm:flex-row sm:p-12">
            <Image
              src="/assets/images/2.jpg"
              alt="Prima at work"
              width={320}
              height={240}
              className="h-52 w-full shrink-0 rounded-lg object-cover ring-1 ring-cream/15 sm:w-72"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold text-cream sm:text-2xl">
                Hi, I&apos;m Prima
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Frontend Developer focused on mobile apps with React Native
                and web development with React. Experienced with JavaScript,
                TypeScript, and state management with Redux. Passionate about
                exploring my capabilities and eager to take on new
                opportunities to further develop my career.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
