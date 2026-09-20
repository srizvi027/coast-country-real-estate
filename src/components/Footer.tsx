import { ArrowRight } from "lucide-react";
import { NAV, OFFICES, SOCIAL } from "../data/site";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <img src="/logo-light.png" alt="First National Coast & Country Real Estate" width={310} height={100} />
            <p style={{ marginTop: 24, color: "rgba(255,255,255,.66)", fontSize: 14, lineHeight: 1.75, maxWidth: "40ch" }}>
              Real estate agents servicing sales, property management and holiday management in Kiama, Gerringong, Gerroa,
              Shoalhaven Heads and Jamberoo.
            </p>
            <p style={{ marginTop: 22 }}>
              <a className="txtlink is-light" href={SOCIAL.facebook} target="_blank" rel="noopener">
                Facebook <ArrowRight className="arw" size={14} strokeWidth={1.6} />
              </a>
            </p>
          </div>
          <div className="f-links">
            <h4>Explore</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href}>{n.label === "Contact" ? "Contact Us" : n.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="f-off">
            <h4>Offices</h4>
            <ul>
              {OFFICES.map((o) => (
                <li key={o.id}>
                  <strong>{o.name}</strong><br />
                  {o.address.join(", ")}<br />
                  <a href={`tel:${o.tel}`}>{o.phone}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© {new Date().getFullYear()} First National Coast &amp; Country Real Estate</p>
          <nav aria-label="Legal">
            <a href="#top">Privacy Policy / Disclaimer</a>
            <a href="#top">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
