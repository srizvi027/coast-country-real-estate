import { Mail, Phone, Search } from "lucide-react";
import { OFFICES } from "../data/site";
import { useScrollY } from "../hooks/useReducedMotion";

export default function MobileBar() {
  const y = useScrollY();
  return (
    <nav className={`mobar${y > 520 ? " is-on" : ""}`} aria-label="Quick actions">
      <a href={`tel:${OFFICES[0].tel}`}><Phone size={17} strokeWidth={1.5} />Call</a>
      <a href="#search"><Search size={17} strokeWidth={1.5} />Search</a>
      <a className="is-key" href="#enquiry"><Mail size={17} strokeWidth={1.5} />Enquire</a>
    </nav>
  );
}
