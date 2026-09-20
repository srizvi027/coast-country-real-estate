import Reveal from "./Reveal";
import { VALUES } from "../data/services";

export default function Values() {
  return (
    <section className="sec" id="values" aria-labelledby="val-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="eyebrow">Why Coast &amp; Country</p>
          <h2 className="display d-lg" id="val-h">A boutique network<br />with deep local roots</h2>
        </Reveal>
      </div>
      <Reveal className="values">
        {VALUES.map((v) => (
          <div className="value" key={v.title}>
            <span className="vnum">{v.label}</span>
            <div>
              <h3>{v.title}</h3>
              <p>{v.copy}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
