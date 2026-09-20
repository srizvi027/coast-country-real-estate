import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Scene from "./Scene";
import { FOR_SALE } from "../data/properties";
import { usePrefersReducedMotion, useSwipe } from "../hooks/useReducedMotion";

const pad = (n: number) => String(n).padStart(2, "0");

export default function PropertyReel() {
  const reduced = usePrefersReducedMotion();
  const [idx, setIdx] = useState(0);
  const prevRef = useRef(0);
  const [live, setLive] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);

  const go = useCallback((n: number) => {
    setIdx((cur) => {
      prevRef.current = cur;
      return (n + FOR_SALE.length) % FOR_SALE.length;
    });
  }, []);

  useEffect(() => {
    if (reduced || !live) return;
    const timer = window.setInterval(() => go(idx + 1), 7000);
    return () => window.clearInterval(timer);
  }, [idx, live, reduced, go]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => setLive(entries[0].isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const swipe = useSwipe((dir) => go(idx + dir));
  const p = FOR_SALE[idx];

  return (
    <section className="reel" id="reel" ref={sectionRef} aria-label="Featured property showcase" aria-roledescription="carousel" {...swipe}>
      <div className="reel-stack">
        {FOR_SALE.map((item, i) => (
          <div
            key={item.id}
            className={`reel-slide${i === idx ? " is-live" : i === prevRef.current ? " is-out" : ""}`}
          >
            <Scene scene={item.scene} image={item.image} alt={`${item.address}, ${item.suburb}`} />
          </div>
        ))}
      </div>
      <div className="reel-num" aria-hidden="true">{pad(idx + 1)}</div>
      <div className="wrap reel-in">
        <div className="reel-meta">
          <p className="reel-eyebrow">For sale · {p.suburb}</p>
          <h3 className="display d-lg">{p.address}, {p.suburb.replace(" NSW", "")}</h3>
          <p className="reel-title">{p.title}</p>
          <ul className="reel-specs">
            <li>{p.beds} Bedrooms</li>
            <li>{p.baths} Bathrooms</li>
            <li>{p.cars} Parking</li>
          </ul>
        </div>
        <div className="reel-foot">
          <div className="reel-nav">
            <button type="button" aria-label="Previous property" onClick={() => go(idx - 1)}>
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button type="button" aria-label="Next property" onClick={() => go(idx + 1)}>
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
          <div className="reel-bar">
            <i style={{ transform: `scaleX(${(idx + 1) / FOR_SALE.length})` }} />
          </div>
          <span className="reel-count">{pad(idx + 1)} / {pad(FOR_SALE.length)}</span>
        </div>
      </div>
    </section>
  );
}
