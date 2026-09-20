import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { validate, type Errors } from "../lib/validate";

const FIELDS = ["first", "last", "email", "phone", "address", "suburb", "type"] as const;

export default function AppraisalForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data, FIELDS as unknown as string[]);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = form.querySelector<HTMLElement>(".fld.is-bad input, .fld.is-bad select");
      first?.focus();
      return;
    }
    // TODO: POST to your CRM / email endpoint here.
    setSent(true);
    form.reset();
  };

  const cls = (name: string) => `fld${errors[name] ? " is-bad" : ""}`;

  return (
    <section className="sec" id="appraisal" aria-labelledby="app-h">
      <div className="wrap form-grid">
        <Reveal>
          <p className="eyebrow">Appraisal</p>
          <h2 className="display d-md" id="app-h" style={{ marginTop: 22 }}>
            Find out what your property could be worth
          </h2>
          <p className="lede" style={{ marginTop: 22, fontSize: 15 }}>
            Send us a few details and one of our local agents will be in touch to arrange an appraisal.
          </p>
          <p className="form-note">We'll only use your details to respond to this enquiry.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <form id="appraisalForm" onSubmit={onSubmit} noValidate>
            <div className="fields is-2">
              <div className={cls("first")}>
                <label htmlFor="a-first">First name</label>
                <input id="a-first" name="first" type="text" autoComplete="given-name" required />
                <span className="err">Enter your first name</span>
              </div>
              <div className={cls("last")}>
                <label htmlFor="a-last">Last name</label>
                <input id="a-last" name="last" type="text" autoComplete="family-name" required />
                <span className="err">Enter your last name</span>
              </div>
              <div className={cls("email")}>
                <label htmlFor="a-email">Email</label>
                <input id="a-email" name="email" type="email" autoComplete="email" required />
                <span className="err">Enter a valid email address</span>
              </div>
              <div className={cls("phone")}>
                <label htmlFor="a-phone">Phone</label>
                <input id="a-phone" name="phone" type="tel" autoComplete="tel" required />
                <span className="err">Enter a contact number</span>
              </div>
              <div className={`${cls("address")} span2`}>
                <label htmlFor="a-addr">Property address</label>
                <input id="a-addr" name="address" type="text" autoComplete="street-address" required />
                <span className="err">Enter the property address</span>
              </div>
              <div className={cls("suburb")}>
                <label htmlFor="a-sub">Suburb</label>
                <input id="a-sub" name="suburb" type="text" required />
                <span className="err">Enter the suburb</span>
              </div>
              <div className={`${cls("type")} has-caret`}>
                <label htmlFor="a-type">Property type</label>
                <select id="a-type" name="type" required defaultValue="">
                  <option value="">Select</option>
                  {["House", "Apartment", "Townhouse", "Land", "Rural", "Commercial"].map((o) => <option key={o}>{o}</option>)}
                </select>
                <span className="err">Select a property type</span>
              </div>
              <div className="fld span2">
                <label htmlFor="a-msg">Message</label>
                <textarea id="a-msg" name="message" rows={3} />
              </div>
            </div>
            <p style={{ marginTop: 30 }}>
              <button className="btn" type="submit">
                <span>Request my appraisal <ArrowRight className="arw" size={15} strokeWidth={1.6} /></span>
              </button>
            </p>
            <p className={`form-done${sent ? " is-on" : ""}`} role="status">
              Thanks — your appraisal request has been prepared. Connect this form to your CRM or email endpoint to start receiving submissions.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
