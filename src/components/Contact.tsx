import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import { OFFICES } from "../data/site";

export default function Contact() {
  return (
    <section className="sec" id="contact" aria-labelledby="con-h">
      <div className="wrap">
        <Reveal className="sec-head is-split">
          <div>
            <p className="eyebrow">Visit us</p>
            <h2 className="display d-lg" id="con-h" style={{ marginTop: 22 }}>Three offices on the coast</h2>
          </div>
          <p className="sub">Drop in, or call the office closest to your property.</p>
        </Reveal>
      </div>
      <div className="wrap">
        <Reveal className="offices">
          {OFFICES.map((o) => (
            <div className="office" key={o.id}>
              <h3>{o.name}</h3>
              <address>
                {o.address[0]}<br />{o.address[1]}
              </address>
              <a className="tel" href={`tel:${o.tel}`}>
                <Phone size={15} strokeWidth={1.5} />{o.phone}
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
