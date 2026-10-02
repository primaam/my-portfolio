import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  WorkDetailData,
  EducationDetailData,
  LanguageData,
} from "@/data/experienceData";

export default function Background() {
  return (
    <section id="background" className="mt-8 scroll-mt-24">
      <Reveal>
        <SectionHeading label="Background" />
        <div className="panel p-8 sm:p-12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-10">
            <div>
              <h2 className="text-lg font-semibold text-cream">
                Work Experience
              </h2>
              <ol className="mt-6 space-y-8 border-l border-cream/15 pl-6">
                {WorkDetailData.map((item, i) => (
                  <li key={i} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/15"
                    />
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                      {item.time}
                    </p>
                    <h3 className="mt-1 font-medium text-cream">
                      {item.company}
                    </h3>
                    <p className="text-sm text-muted">{item.location}</p>
                    <div className="mt-2 space-y-1">
                      {item.roles.map((r, j) => (
                        <p key={j} className="text-sm text-cream/90">
                          {r.title}
                          <span className="text-muted"> · {r.time}</span>
                        </p>
                      ))}
                    </div>
                    {item.summary && (
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.summary}
                      </p>
                    )}
                    {item.highlights && (
                      <ul className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
                        {item.highlights.map((h, k) => (
                          <li key={k}>- {h}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-cream/15 pt-10 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <h2 className="text-lg font-semibold text-cream">
                Education &amp; Certification
              </h2>
              <div className="mt-6 space-y-4">
                {EducationDetailData.map((item, i) => (
                  <article
                    key={i}
                    className="rounded-lg border border-cream/10 bg-elevated/60 p-4 transition-colors hover:border-accent/40"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-sm font-medium text-cream">
                        {item.school}
                      </h3>
                      {item.year && (
                        <span className="shrink-0 font-mono text-[11px] text-muted">
                          {item.year}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted">{item.title}</p>
                    {item.detail && (
                      <p className="text-sm text-muted">{item.detail}</p>
                    )}
                  </article>
                ))}
              </div>

              <h2 className="mt-8 text-lg font-semibold text-cream">
                Languages
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {LanguageData.map((l) => (
                  <span
                    key={l.language}
                    className="inline-flex items-center rounded-md border border-cream/20 px-2.5 py-0.5 text-xs text-muted"
                  >
                    {l.language} · {l.level}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
