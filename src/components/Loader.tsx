import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

export default function Loader() {
  const reduced = usePrefersReducedMotion();
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setDone(true), reduced ? 150 : 1750);
    return () => window.clearTimeout(t1);
  }, [reduced]);

  useEffect(() => {
    if (!done) return;
    const t2 = window.setTimeout(() => setGone(true), 750);
    return () => window.clearTimeout(t2);
  }, [done]);

  if (gone) return null;

  return (
    <div id="loader" className={done ? "is-done" : undefined} aria-hidden="true">
      <div className="load-sweep" />
      <div className="load-inner">
        <svg className="load-draw" viewBox="0 0 220 96" fill="none" aria-hidden="true">
          <path style={{ "--len": 300 } as CSSProperties} d="M14 92 L14 46 L64 16 L114 46 L114 92" />
          <path className="d2" style={{ "--len": 260 } as CSSProperties} d="M114 92 L114 54 L160 34 L206 54 L206 92" />
          <path className="d3" style={{ "--len": 120 } as CSSProperties} d="M44 92 L44 64 L70 64 L70 92 M136 92 L136 70 L160 70 L160 92" />
          <path className="d4" style={{ "--len": 210 } as CSSProperties} d="M0 92 L220 92" />
        </svg>
        <p className="load-word">
          First National<em>Coast &amp; Country</em>
        </p>
        <p className="load-sub">Real Estate &bull; South Coast</p>
      </div>
    </div>
  );
}
