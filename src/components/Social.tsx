import { Facebook } from "lucide-react";
import Reveal from "./Reveal";
import Scene from "./Scene";
import { SOCIAL } from "../data/site";

const TILES = [
  { scene: "g1", alt: "South Coast beach" },
  { scene: "g2", alt: "Recently listed home" },
  { scene: "g3", alt: "Village streetscape" },
  { scene: "g4", alt: "Interior of a listed property" },
  { scene: "g5", alt: "Coastal morning light" },
  { scene: "g6", alt: "Aerial of the coastline" },
];

export default function Social() {
  return (
    <section className="sec" aria-labelledby="soc-h" style={{ paddingBottom: "clamp(50px,6vw,90px)" }}>
      <div className="wrap">
        <Reveal className="sec-head is-split">
          <div>
            <p className="eyebrow">Social</p>
            <h2 className="display d-md" id="soc-h" style={{ marginTop: 22 }}>Follow Coast &amp; Country</h2>
          </div>
          <p className="sub">
            <a className="txtlink" href={SOCIAL.facebook} target="_blank" rel="noopener">
              <Facebook size={15} strokeWidth={1.6} />{SOCIAL.handle}
            </a>
          </p>
        </Reveal>
        <Reveal className="social-grid">
          {TILES.map((t) => (
            <a className="tile" key={t.scene} href={SOCIAL.facebook} target="_blank" rel="noopener">
              <Scene scene={t.scene} alt={t.alt} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
