export type Errors = Record<string, string>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(data: FormData, fields: string[]): Errors {
  const errs: Errors = {};
  fields.forEach((name) => {
    const value = String(data.get(name) ?? "").trim();
    if (!value) {
      errs[name] = "required";
      return;
    }
    if (name === "email" && !EMAIL.test(value)) errs[name] = "invalid";
    if (name === "phone" && value.replace(/[^0-9]/g, "").length < 8) errs[name] = "invalid";
  });
  return errs;
}
