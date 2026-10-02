import Reveal from "@/components/Reveal";
import { WorkDetailData, EducationDetailData } from "@/data/experienceData";

export default function Background() {
  return (
    <section id="background" className="mt-6 scroll-mt-20">
      <Reveal>
        <div className="rounded-xl border border-cream/10 bg-surface p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-cream">
                Education &amp; Certification
              </h2>
              <div className="mt-5 space-y-6">
                {EducationDetailData.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-medium text-cream">{item.school}</h3>
                      <span className="shrink-0 text-sm text-muted">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{item.title}</p>
                    {item.detail && (
                      <p className="text-sm text-muted">{item.detail}</p>
                    )}
                    {item.detail && (
                      <div className="mt-4 border-t border-cream/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-cream/10 pt-10 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <h2 className="text-lg font-semibold text-cream">
                Work Experience
              </h2>
              <div className="mt-5 space-y-6">
                {WorkDetailData.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-medium text-cream">{item.role}</h3>
                      <span className="shrink-0 text-sm text-muted">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{item.company}</p>
                    <p className="text-sm text-muted">{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
