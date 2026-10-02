"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Home, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { smoothScrollToId, smoothScrollToY } from "@/lib/scroll";

const MENU = [
  { title: "About Me", id: "aboutme" },
  { title: "Background", id: "background" },
  { title: "Projects", id: "projects" },
  { title: "Contact Me", id: "contactme" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("aboutme");
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        const ids = MENU.map((m) => m.id);
        let current = ids[0];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 120) current = id;
        }
        setActive(current);
      }, 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setDrawerOpen(false);
    smoothScrollToId(id, 1000);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors",
          scrolled
            ? "border-b border-cream/10 bg-base/90 backdrop-blur"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => smoothScrollToY(0, 1000)}
            className="flex cursor-pointer items-center gap-2 text-cream transition-colors hover:text-accent"
            aria-label="Back to top"
          >
            <Home size={18} />
            <span className="hidden text-sm font-semibold sm:inline">
              Home
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {MENU.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "cursor-pointer rounded-md px-3 py-2 text-sm transition-colors",
                  active === item.id
                    ? "text-accent"
                    : "text-cream/70 hover:text-cream"
                )}
              >
                {item.title}
                <span
                  className={cn(
                    "mt-0.5 block h-px bg-accent transition-opacity",
                    active === item.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </button>
            ))}
          </nav>

          <button
            onClick={() => setDrawerOpen(true)}
            className="cursor-pointer rounded-md p-2 text-cream hover:bg-elevated md:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
        <motion.div
          style={{ scaleX: progress }}
          className="h-0.5 origin-left bg-accent"
        />
      </header>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-full w-64 flex-col bg-surface p-6 shadow-xl">
            <button
              onClick={() => setDrawerOpen(false)}
              className="cursor-pointer self-end rounded-md p-2 text-cream hover:bg-elevated"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <nav className="mt-4 flex flex-col gap-1">
              {MENU.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "cursor-pointer rounded-md px-3 py-2.5 text-left text-sm transition-colors",
                    active === item.id
                      ? "bg-elevated text-accent"
                      : "text-cream/80 hover:bg-elevated"
                  )}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
