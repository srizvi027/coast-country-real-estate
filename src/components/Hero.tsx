import { motion, useScroll, useTransform } from "framer-motion";
import Scene from "./Scene";
import { OFFICES } from "../data/site";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);

  return (
    <section className="hero" aria-labelledby="hero-h">
      <motion.div className="hero-bg" style={{ y }}>
        <Scene scene="hero" alt="Coastal headland and ocean on the NSW South Coast near Kiama" />
      </motion.div>
      <div className="wrap hero-in">
        <div>
          <p className="eyebrow is-light">Kiama &nbsp;·&nbsp; Gerringong &nbsp;·&nbsp; Gerroa &nbsp;·&nbsp; Shoalhaven Heads &nbsp;·&nbsp; Jamberoo</p>
          <h1 className="display d-xl" id="hero-h">Find your place on the South Coast</h1>
          <p className="hero-sub">
            <b>First National Coast &amp; Country Real Estate</b>
            Real estate agents servicing sales, property management and holiday management in Kiama, Gerringong, Gerroa, Shoalhaven Heads and Jamberoo.
          </p>
          <div className="hero-cta">
            <a className="btn" href="#featured"><span>Buy a property</span></a>
            <a className="btn is-outline-light" href="#sell"><span>Sell your property</span></a>
            <a className="btn is-outline-light" href="#rent"><span>Rent a property</span></a>
          </div>
        </div>
        <div className="hero-line">
          <strong>Three offices, one local team</strong>
          {OFFICES.map((o) => (
            <span key={o.id}>{o.name} · {o.phone}<br /></span>
          ))}
        </div>
      </div>
      <div className="scroll-ind"><span>Scroll</span><i /></div>
    </section>
  );
}
