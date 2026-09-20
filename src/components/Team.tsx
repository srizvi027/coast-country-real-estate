import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import AgentCard from "./AgentCard";
import { TEAM } from "../data/team";

export default function Team() {
  return (
    <section className="sec" id="team" aria-labelledby="team-h">
      <div className="wrap">
        <Reveal className="sec-head is-split">
          <div>
            <p className="eyebrow">Meet the team</p>
            <h2 className="display d-lg" id="team-h" style={{ marginTop: 22 }}>People who know the coast</h2>
          </div>
          <p className="sub">Talk to an agent who lives and works where you're buying, selling or leasing.</p>
        </Reveal>
        <Reveal className="team">
          {TEAM.map((a) => <AgentCard key={a.name} agent={a} />)}
        </Reveal>
        <p style={{ marginTop: "clamp(30px,4vw,50px)" }}>
          <a className="txtlink" href="#enquiry">Meet the full team <ArrowRight className="arw" size={15} strokeWidth={1.6} /></a>
        </p>
      </div>
    </section>
  );
}
