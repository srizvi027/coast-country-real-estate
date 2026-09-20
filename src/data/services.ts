export type Service = { n: string; title: string; copy: string; href: string; scene: string; image: string; alt: string };

export const SERVICES: Service[] = [
  { n: "01", title: "Buy", copy: "Find your next home, investment or coastal property.", href: "#featured", scene: "svc-buy", image: "/images/properties/coastal-home-1.jpg", alt: "Coastal home for sale in Gerringong" },
  { n: "02", title: "Sell", copy: "Professional property marketing and sales expertise.", href: "#sell", scene: "svc-sell", image: "/images/properties/coastal-home-2.jpg", alt: "Family home listed for sale on the South Coast" },
  { n: "03", title: "Rent", copy: "Find a property that suits your lifestyle.", href: "#rent", scene: "svc-rent", image: "/images/properties/coastal-home-3.jpg", alt: "Light-filled living room of a rental property in Kiama" },
  { n: "04", title: "Property management", copy: "Professional management for property owners and landlords.", href: "#enquiry", scene: "svc-manage", image: "/images/properties/coastal-home-4.jpg", alt: "Aerial view of coastal streets and properties" },
  { n: "05", title: "Holiday", copy: "Holiday property management and coastal accommodation.", href: "#holiday", scene: "svc-holiday", image: "/images/properties/coastal-home-1.jpg", alt: "Beachfront holiday accommodation on the South Coast" },
];

export const VALUES = [
  { label: "Local expertise", title: "Local expertise", copy: "Experienced, highly regarded agents working across Kiama, Gerringong, Gerroa, Shoalhaven Heads and Jamberoo." },
  { label: "Connections", title: "South Coast connections", copy: "A boutique network of offices covering the surrounding areas \u2014 Kiama Downs, Minnamurra, Kiama Heights and Berry." },
  { label: "Service", title: "Personalised service", copy: "Carefully tailored solutions and the highest level of professionalism at every stage of your property journey." },
  { label: "Experience", title: "Property experience", copy: "Sales, property management and holiday management, driven by a desire to deliver outstanding results for our clients." },
];
