import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Scene from "./Scene";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <section className="sec" style={{ paddingTop: 0 }} aria-labelledby="svc-h">
      <div className="wrap">
        <Reveal className="sec-head is-split">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="display d-lg" id="svc-h" style={{ marginTop: 22 }}>Every stage of the journey</h2>
          </div>
          <p className="sub">Sales, property management and holiday management, handled by one local team across three offices.</p>
        </Reveal>
      </div>
      <div className="wrap">
        <Reveal className="svc">
          {SERVICES.map((s) => (
            <a className="svc-card" href={s.href} key={s.n}>
              <div className="svc-media"><Scene scene={s.scene} image={s.image} alt={s.alt} /></div>
              <div className="svc-top">
                <span style={{ fontSize: 11, letterSpacing: ".2em" }}>{s.n}</span>
                <ArrowUpRight className="arw" size={18} strokeWidth={1.4} />
              </div>
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
