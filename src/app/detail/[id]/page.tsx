import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectDetail } from "@/data/projectData";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  return projectDetail.map((_, i) => ({ id: String(i) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = projectDetail[Number(id)];
  return {
    title: data ? `Detail Project: ${data.title}` : "Project not found",
  };
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = Number(id);
  const data = projectDetail[index];
  if (!data) notFound();
  const links = (
    [
      { label: "Website", href: data.link.web },
      { label: "App Store", href: data.link.appStore },
      { label: "Play Store", href: data.link.playStore },
    ] as const
  ).filter((l) => l.href.length > 0);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8">
      <Link
        href="/"
        className={buttonVariants({ variant: "ghost", size: "sm" }) + " mb-8"}
      >
        <ArrowLeft /> Back
      </Link>

      {/* Title + description */}
      <section className="animate-fade-up panel p-6 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.logo}
            alt={`${data.title} logo`}
            className="h-24 w-auto shrink-0 rounded-lg bg-cream/10 object-contain p-2"
          />
          <div className="hidden w-px self-stretch bg-cream/15 sm:block" />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
              {data.title}
            </h1>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              {data.longDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Role summary */}
      <section className="mt-6 panel p-6 sm:p-10">
        <h2 className="text-lg font-semibold text-cream">Role Summary</h2>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row">
          <div className="shrink-0 sm:w-56">
            <p className="font-medium text-cream">{data.role}</p>
            <p className="mt-1 text-sm text-muted">{data.team}</p>
          </div>
          <div className="hidden w-px self-stretch bg-cream/15 sm:block" />
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-cream">Job Detail</h3>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
              {data.roleJobDetail.map((item, i) => (
                <li key={i}>- {item}</li>
              ))}
            </ul>
            <h3 className="mt-5 font-medium text-cream">Tech Stack</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {data.techStack.map((item, i) => (
                <Badge key={i} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="mt-6 panel p-6 sm:p-10">
        <h2 className="text-lg font-semibold text-cream">Result</h2>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row">
          <div className="flex-1">
            <h3 className="font-medium text-cream">Achievement</h3>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
              {data.achievement.map((item, i) => (
                <li key={i}>- {item}</li>
              ))}
            </ul>
          </div>
          {links.length > 0 && (
            <>
              <div className="hidden w-px self-stretch bg-cream/15 sm:block" />
              <div className="shrink-0 sm:w-56">
                <h3 className="font-medium text-cream">Links</h3>
                <div className="mt-2 flex flex-col gap-2 text-sm">
                  {links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent hover:underline"
                    >
                      {l.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
