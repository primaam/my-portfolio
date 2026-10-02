/** Smooth anchor scroll with controllable duration (ms). */
export function smoothScrollToY(targetY: number, duration = 1000) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  if (Math.abs(diff) < 2) return;
  const start = performance.now();
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const step = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutCubic(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function smoothScrollToId(id: string, duration = 1000) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 96;
  smoothScrollToY(Math.max(y, 0), duration);
}
