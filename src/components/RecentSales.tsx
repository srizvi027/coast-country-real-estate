import Reveal from "./Reveal";
import PropertyCard from "./PropertyCard";
import { SOLD } from "../data/properties";

export default function RecentSales() {
  return (
    <section className="sec dark" aria-labelledby="sold-h">
      <div className="wrap">
        <Reveal className="sec-head is-split">
          <div>
            <p className="eyebrow is-light">Results</p>
            <h2 className="display d-lg" id="sold-h" style={{ marginTop: 22 }}>Recently sold</h2>
          </div>
          <p className="sub">Recent sales across Shoalhaven Heads, Gerringong and Kiama.</p>
        </Reveal>
        <div className="grid-props is-4">
          {SOLD.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <PropertyCard property={p} showTitle={false} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
