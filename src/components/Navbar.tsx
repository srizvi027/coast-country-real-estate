import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { NAV, OFFICES } from "../data/site";
import { useScrollY } from "../hooks/useReducedMotion";

export default function Navbar() {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const stuck = y > 60;

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navClass = ["nav", stuck ? "is-stuck" : "", open ? "is-open" : ""].filter(Boolean).join(" ");

  return (
    <>
      <header className={navClass} id="nav">
        <div className="wrap nav-in">
          <a className="brand" href="#top" aria-label="First National Coast & Country Real Estate, home">
            <img className="lg-light" src="/logo-light.png" alt="First National Coast & Country Real Estate" width={310} height={100} />
            <img className="lg-dark" src="/logo-dark.png" alt="" aria-hidden="true" width={310} height={100} />
          </a>
          <nav className="nav-links" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="nav-act">
            <a className="icon-btn" href="#search" aria-label="Search properties">
              <Search size={16} strokeWidth={1.6} />
            </a>
            <a className="btn is-nav-ghost nav-cta" href="#search"><span>Search Properties</span></a>
            <a className="btn nav-cta" href="#enquiry"><span>Enquire</span></a>
          </div>
          <button
            className="burger"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            <i />
          </button>
        </div>
      </header>

      <div className={`menu${open ? " is-open" : ""}`} id="menu" aria-label="Mobile menu">
        <ul>
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a
                className="mlink"
                href={item.href}
                style={{ transitionDelay: open ? `${0.06 + i * 0.045}s` : "0s" }}
                onClick={() => setOpen(false)}
              >
                {item.label} <small>{String(i + 1).padStart(2, "0")}</small>
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-foot">
          <a className="btn" href="#search" onClick={() => setOpen(false)}><span>Search Properties</span></a>
          <a className="btn is-ghost" href="#enquiry" onClick={() => setOpen(false)}><span>Enquire</span></a>
        </div>
        <p className="menu-call">
          {OFFICES[0].name} office
          <a href={`tel:${OFFICES[0].tel}`}>{OFFICES[0].phone}</a>
        </p>
      </div>
    </>
  );
}
