import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "../data/testimonials";
import { useSwipe } from "../hooks/useReducedMotion";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((n + TESTIMONIALS.length) % TESTIMONIALS.length);
  const swipe = useSwipe((dir) => go(i + dir));

  return (
    <section className="sec quotes" id="quotes" aria-labelledby="q-h" aria-roledescription="carousel">
      <div className="wrap quote-grid">
        <Reveal>
          <p className="eyebrow">Testimonials</p>
          <h2 className="display d-md" id="q-h" style={{ marginTop: 22 }}>What our clients say</h2>
          <p className="lede" style={{ marginTop: 22, fontSize: 15 }}>
            Reviews from people who have bought, sold and leased with our team.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="quote-view" {...swipe}>
            <div className="quote-track" style={{ transform: `translateX(${-i * 100}%)` }}>
              {TESTIMONIALS.map((t, n) => (
                <div className="quote-slide" key={n} aria-hidden={n !== i}>
                  <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                  <blockquote>{t.quote}</blockquote>
                  <div className="quote-by">
                    <span className="quote-ava" aria-hidden="true">{t.author.charAt(0)}</span>
                    <div>
                      <div className="n">{t.author}</div>
                      <div className="r">Client review</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="quote-ctl">
            <div className="quote-dots" role="tablist" aria-label="Choose testimonial">
              {TESTIMONIALS.map((_, n) => (
                <button
                  key={n}
                  type="button"
                  role="tab"
                  aria-label={`Testimonial ${n + 1}`}
                  aria-current={n === i}
                  onClick={() => go(n)}
                />
              ))}
            </div>
            <div className="rail-ctl">
              <button type="button" aria-label="Previous testimonial" onClick={() => go(i - 1)}>
                <ArrowLeft size={17} strokeWidth={1.5} />
              </button>
              <button type="button" aria-label="Next testimonial" onClick={() => go(i + 1)}>
                <ArrowRight size={17} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
