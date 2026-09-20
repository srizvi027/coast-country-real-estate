import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Scene from "./Scene";
import { LOCATIONS } from "../data/locations";

export default function Locations() {
  return (
    <section className="sec" style={{ paddingTop: 0 }} id="locations" aria-labelledby="loc-h">
      <div className="wrap">
        <Reveal className="sec-head is-split">
          <div>
            <p className="eyebrow">Where we work</p>
            <h2 className="display d-lg" id="loc-h" style={{ marginTop: 22 }}>Know the coast.<br />Know the market.</h2>
          </div>
          <p className="sub">Nine communities, one stretch of coastline we've spent years getting to know.</p>
        </Reveal>
        <Reveal className="locs">
          {LOCATIONS.map((l) => (
            <a className="loc" href="#suburbs" key={l.name}>
              <Scene scene={l.scene} alt={`${l.name} on the NSW South Coast`} />
              <div className="loc-body">
                <div>
                  <h3>{l.name}</h3>
                  <small>{l.postcode}</small>
                </div>
                <ArrowRight className="arw" size={20} strokeWidth={1.3} />
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
