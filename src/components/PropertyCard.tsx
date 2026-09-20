import { ArrowRight, BedDouble, Bath, Car } from "lucide-react";
import Scene from "./Scene";
import type { Property } from "../data/properties";

type Props = { property: Property; cta?: string; showTitle?: boolean; showPrice?: boolean };

export default function PropertyCard({ property, cta = "View property", showTitle = true, showPrice = true }: Props) {
  const badgeClass =
    property.status === "Sold" ? "badge is-sold" : property.status === "For lease" ? "badge is-blue" : "badge";

  return (
    <article className="pcard">
      <div className="pcard-media">
        <span className={badgeClass}>{property.status}</span>
        <Scene scene={property.scene} image={property.image} alt={`${property.address}, ${property.suburb}`} />
      </div>
      <div className="pcard-body">
        <p className="pcard-addr">{property.address}, {property.suburb}</p>
        {showTitle && property.title ? <h3>{property.title}</h3> : null}
        {showPrice ? (
          property.status === "Sold" ? (
            <p className="sold-price">{property.price}</p>
          ) : (
            <p className="price is-quiet">{property.price ?? "Price on application"}</p>
          )
        ) : null}
        <ul className="specs">
          <li><BedDouble size={15} strokeWidth={1.5} />{property.beds}</li>
          <li><Bath size={15} strokeWidth={1.5} />{property.baths}</li>
          <li><Car size={15} strokeWidth={1.5} />{property.cars}</li>
        </ul>
        {property.status !== "Sold" && (
          <p className="pcard-go">
            <a className="txtlink" href="#enquiry">{cta} <ArrowRight className="arw" size={14} strokeWidth={1.6} /></a>
          </p>
        )}
      </div>
    </article>
  );
}
