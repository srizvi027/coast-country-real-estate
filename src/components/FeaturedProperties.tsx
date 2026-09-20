import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import PropertyCard from "./PropertyCard";
import { FOR_SALE } from "../data/properties";

export default function FeaturedProperties() {
  return (
    <section className="sec" id="featured" style={{ paddingTop: 0 }} aria-labelledby="feat-h">
      <div className="wrap">
        <Reveal className="sec-head is-split">
          <div>
            <p className="eyebrow">For sale</p>
            <h2 className="display d-lg" id="feat-h" style={{ marginTop: 22 }}>Featured properties</h2>
          </div>
          <p className="sub">Explore some of our latest properties available across the South Coast.</p>
        </Reveal>
        <div className="grid-props is-4">
          {FOR_SALE.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <PropertyCard property={p} />
            </Reveal>
          ))}
        </div>
        <p style={{ marginTop: "clamp(34px,4vw,56px)" }}>
          <a className="txtlink" href="#search">View all properties <ArrowRight className="arw" size={15} strokeWidth={1.6} /></a>
        </p>
      </div>
    </section>
  );
}
