import { useEffect, useState } from "react";
import type { TouchEvent } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setY(window.pageYOffset);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

export function useSwipe(onSwipe: (dir: 1 | -1) => void) {
  return {
    onTouchStart: (e: TouchEvent) => {
      (e.currentTarget as HTMLElement).dataset.x0 = String(e.touches[0].clientX);
      (e.currentTarget as HTMLElement).dataset.y0 = String(e.touches[0].clientY);
    },
    onTouchEnd: (e: TouchEvent) => {
      const el = e.currentTarget as HTMLElement;
      const x0 = Number(el.dataset.x0 ?? NaN);
      const y0 = Number(el.dataset.y0 ?? NaN);
      if (Number.isNaN(x0)) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 46 && Math.abs(dx) > Math.abs(dy)) onSwipe(dx < 0 ? 1 : -1);
      delete el.dataset.x0;
    },
  };
}
