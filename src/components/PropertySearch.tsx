import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICE_AREAS } from "../data/site";

type Tab = "buy" | "rent" | "holiday";

const PRICES: Record<Tab, { label: string; options: string[] }> = {
  buy: { label: "Price", options: ["Any price", "Up to $750,000", "$750,000 – $1m", "$1m – $1.5m", "$1.5m – $2m", "$2m+"] },
  rent: { label: "Weekly rent", options: ["Any rent", "Up to $600 p/w", "$600 – $800 p/w", "$800 – $1,000 p/w", "$1,000+ p/w"] },
  holiday: { label: "Nightly rate", options: ["Any rate", "Up to $300 p/n", "$300 – $500 p/n", "$500 – $800 p/n", "$800+ p/n"] },
};

export default function PropertySearch() {
  const [tab, setTab] = useState<Tab>("buy");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    document.getElementById(tab === "rent" ? "rent" : "featured")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="search" id="search" aria-label="Property search">
      <div className="wrap">
        <div className="search-card">
          <div className="search-tabs" role="tablist" aria-label="Search type">
            {(["buy", "rent", "holiday"] as Tab[]).map((t) => (
              <button
                key={t}
                role="tab"
                id={`tab-${t}`}
                type="button"
                aria-selected={tab === t}
                aria-controls="search-form"
                onClick={() => setTab(t)}
              >
                {t[0].toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <form className="search-body" id="search-form" role="tabpanel" aria-labelledby={`tab-${tab}`} onSubmit={submit} noValidate>
            <div className="field has-caret">
              <label htmlFor="s-loc">Location</label>
              <select id="s-loc" defaultValue="All South Coast areas">
                <option>All South Coast areas</option>
                {SERVICE_AREAS.map((a) => <option key={a}>{a}</option>)}
              </select>
            </div>
            <div className="field has-caret">
              <label htmlFor="s-type">Property type</label>
              <select id="s-type">
                {["All types", "House", "Apartment", "Townhouse", "Land", "Rural", "Commercial"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="field has-caret">
              <label htmlFor="s-beds">Bedrooms</label>
              <select id="s-beds">
                {["Any", "1+", "2+", "3+", "4+", "5+"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="field has-caret">
              <label htmlFor="s-price">{PRICES[tab].label}</label>
              <select id="s-price" key={tab}>
                {PRICES[tab].options.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="s-id">Property ID</label>
              <input id="s-id" type="text" inputMode="numeric" placeholder="e.g. 1042" />
            </div>
            <div className="search-go">
              <button className="btn" type="submit">
                <span>Search properties <ArrowRight className="arw" size={15} strokeWidth={1.6} /></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
