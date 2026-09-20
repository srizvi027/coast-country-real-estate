import Scene from "./Scene";

export default function SellBand() {
  return (
    <section className="band" id="sell" aria-labelledby="sell-h">
      <Scene scene="sell" alt="Coastal property at dusk" />
      <div className="wrap band-in">
        <p className="eyebrow is-light">Selling</p>
        <h2 className="display d-lg" id="sell-h" style={{ marginTop: 22 }}>Thinking of selling?</h2>
        <p className="lede is-light">
          Talk to our experienced local team about your property and discover what your next move could look like.
        </p>
        <div className="band-cta">
          <a className="btn is-light" href="#appraisal"><span>Request an appraisal</span></a>
          <a className="btn is-outline-light" href="#enquiry"><span>Talk to our team</span></a>
        </div>
      </div>
    </section>
  );
}
