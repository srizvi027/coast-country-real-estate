import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import PropertyCard from "./PropertyCard";
import { FOR_RENT } from "../data/properties";

export default function RentalProperties() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 24 : 320;
    rail.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section className="sec" id="rent" aria-labelledby="rent-h">
      <div className="wrap">
        <Reveal className="sec-head is-split">
          <div>
            <p className="eyebrow">For rent</p>
            <h2 className="display d-lg" id="rent-h" style={{ marginTop: 22 }}>Find your next home</h2>
          </div>
          <div className="rail-ctl">
            <button type="button" aria-label="Previous rentals" onClick={() => scrollBy(-1)}>
              <ArrowLeft size={17} strokeWidth={1.5} />
            </button>
            <button type="button" aria-label="Next rentals" onClick={() => scrollBy(1)}>
              <ArrowRight size={17} strokeWidth={1.5} />
            </button>
          </div>
        </Reveal>
      </div>
      <div className="wrap rail-wrap">
        <div className="rail" ref={railRef} tabIndex={0} aria-label="Rental properties, scrollable">
          {FOR_RENT.map((p) => (
            <PropertyCard key={p.id} property={p} cta="Enquire to inspect" showPrice={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
