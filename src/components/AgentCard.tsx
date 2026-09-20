import { Mail, Phone } from "lucide-react";
import Scene from "./Scene";
import type { Agent } from "../data/team";

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <article className="agent">
      <div className="agent-media">
        <Scene scene={agent.scene} alt={`Portrait of ${agent.name}`} />
      </div>
      <div className="agent-info">
        <h3>{agent.name}</h3>
        <p className="role">First National Coast &amp; Country</p>
        <div className="agent-contact">
          {agent.phone && (
            <a href={`tel:${agent.tel}`}><Phone size={14} strokeWidth={1.5} />{agent.phone}</a>
          )}
          {agent.email && (
            <a href={`mailto:${agent.email}`}><Mail size={14} strokeWidth={1.5} />{agent.email}</a>
          )}
        </div>
      </div>
    </article>
  );
}
