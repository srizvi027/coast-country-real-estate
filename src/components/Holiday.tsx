import { ArrowRight } from "lucide-react";
import Scene from "./Scene";
import { SOCIAL } from "../data/site";

export default function Holiday() {
  return (
    <section className="holiday" id="holiday" aria-labelledby="hol-h">
      <Scene scene="holiday" alt="Holiday house near the beach" />
      <div className="wrap holiday-in">
        <div>
          <p className="eyebrow is-light">Holiday management</p>
          <h2 className="display d-lg" id="hol-h" style={{ marginTop: 22, color: "#fff" }}>
            Your property.<br />Our local expertise.
          </h2>
        </div>
        <div>
          <p className="lede is-light">
            Alongside sales and property management, our team also looks after holiday properties across the South Coast — marketing,
            bookings and care of your home while you're away. Coast &amp; Country Holidays is our dedicated holiday arm.
          </p>
          <p style={{ marginTop: 32 }}>
            <a className="btn is-light" href={SOCIAL.holidays} target="_blank" rel="noopener">
              <span>Explore holiday management <ArrowRight className="arw" size={15} strokeWidth={1.6} /></span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
