import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { OFFICES } from "../data/site";
import { validate, type Errors } from "../lib/validate";

const FIELDS = ["office", "first", "last", "email", "phone", "message"];

export default function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errs = validate(new FormData(form), FIELDS);
    setErrors(errs);
    if (Object.keys(errs).length) {
      form.querySelector<HTMLElement>(".fld.is-bad input, .fld.is-bad select, .fld.is-bad textarea")?.focus();
      return;
    }
    // TODO: POST to your CRM / email endpoint here.
    setSent(true);
    form.reset();
  };

  const cls = (name: string) => `fld${errors[name] ? " is-bad" : ""}`;

  return (
    <section className="sec dark" id="enquiry" aria-labelledby="enq-h">
      <div className="wrap form-grid">
        <Reveal>
          <p className="eyebrow is-light">Enquiries</p>
          <h2 className="display d-md" id="enq-h" style={{ marginTop: 22 }}>Talk to us today</h2>
          <p className="lede is-light" style={{ marginTop: 22, fontSize: 15 }}>
            Buying, selling, leasing or looking after a holiday property — send us a message and we'll point you to the right person.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <form id="enquiryForm" onSubmit={onSubmit} noValidate>
            <div className="fields is-2">
              <div className={`${cls("office")} span2 has-caret`}>
                <label htmlFor="e-off">Office</label>
                <select id="e-off" name="office" required defaultValue="">
                  <option value="">Select an office</option>
                  {OFFICES.map((o) => <option key={o.id}>{o.fullName}</option>)}
                </select>
                <span className="err">Choose an office</span>
              </div>
              <div className={cls("first")}>
                <label htmlFor="e-first">First name</label>
                <input id="e-first" name="first" type="text" autoComplete="given-name" required />
                <span className="err">Enter your first name</span>
              </div>
              <div className={cls("last")}>
                <label htmlFor="e-last">Last name</label>
                <input id="e-last" name="last" type="text" autoComplete="family-name" required />
                <span className="err">Enter your last name</span>
              </div>
              <div className={cls("email")}>
                <label htmlFor="e-email">Email</label>
                <input id="e-email" name="email" type="email" autoComplete="email" required />
                <span className="err">Enter a valid email address</span>
              </div>
              <div className={cls("phone")}>
                <label htmlFor="e-phone">Phone</label>
                <input id="e-phone" name="phone" type="tel" autoComplete="tel" required />
                <span className="err">Enter a contact number</span>
              </div>
              <div className={`${cls("message")} span2`}>
                <label htmlFor="e-msg">Message</label>
                <textarea id="e-msg" name="message" rows={3} required />
                <span className="err">Tell us how we can help</span>
              </div>
            </div>
            <p style={{ marginTop: 30 }}>
              <button className="btn is-light" type="submit">
                <span>Send enquiry <ArrowRight className="arw" size={15} strokeWidth={1.6} /></span>
              </button>
            </p>
            <p className={`form-done${sent ? " is-on" : ""}`} role="status">
              Thanks — your enquiry is ready to send. Connect this form to your CRM or email endpoint to go live.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
