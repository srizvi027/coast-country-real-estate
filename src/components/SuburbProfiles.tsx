import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Scene from "./Scene";
import { LOCATIONS } from "../data/locations";

export default function SuburbProfiles() {
  return (
    <section className="mapsec sec" id="suburbs" aria-labelledby="sub-h">
      <div className="wrap map-grid">
        <Reveal>
          <p className="eyebrow">Suburb profiles</p>
          <h2 className="display d-lg" id="sub-h" style={{ marginTop: 22 }}>Explore the South Coast</h2>
          <p className="lede" style={{ marginTop: 26 }}>
            Discover local property insights, lifestyle information and suburb profiles across the South Coast.
          </p>
          <p style={{ marginTop: 34 }}>
            <a className="btn is-ghost" href="#enquiry">
              <span>Explore suburb profiles <ArrowRight className="arw" size={15} strokeWidth={1.6} /></span>
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="map-canvas">
            <Scene scene="map" alt="Stylised map of the NSW South Coast" />
            {LOCATIONS.map((l) => (
              <a
                className={`map-pin${l.key ? " is-key" : ""}`}
                style={{ left: `${l.x}%`, top: `${l.y}%` }}
                href="#enquiry"
                key={l.name}
              >
                <i />{l.name}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
