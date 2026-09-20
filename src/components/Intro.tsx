import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="sec" id="about" aria-labelledby="about-h">
      <div className="wrap intro-grid">
        <Reveal className="col-l">
          <p className="eyebrow">About the agency</p>
          <h2 className="display d-lg" id="about-h" style={{ marginTop: 22 }}>
            Local knowledge.<br />Personal service.
          </h2>
          <div className="intro-mark"><span />Est. on the South Coast</div>
        </Reveal>
        <Reveal className="col-r" delay={0.1}>
          <p className="lede">
            A boutique network of offices that's uniquely positioned to provide the finest real estate services for each stage of your
            property journey. Whether you choose First National Coast &amp; Country Real Estate to buy, sell, rent or manage your property,
            you can be sure we'll offer you carefully tailored solutions, the highest level of professionalism and the most experienced,
            highly regarded real estate agents in Kiama, Gerringong, Gerroa, Shoalhaven Heads, Jamberoo and surrounding areas – Kiama Downs,
            Minnamurra, Kiama Heights and Berry.
          </p>
          <p className="lede">
            We've learnt a lot over the years and are driven by a desire to always provide outstanding results for our clients.
          </p>
          <p style={{ marginTop: 34 }}>
            <a className="txtlink" href="#values">Discover our story <ArrowRight className="arw" size={15} strokeWidth={1.6} /></a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
