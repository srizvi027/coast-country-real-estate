export type Property = {
  id: string;
  address: string;
  suburb: string;
  title: string;
  beds: number;
  baths: number;
  cars: number;
  scene: string;
  image: string;
  price?: string;
  status: "For sale" | "For lease" | "Sold";
};

export const FOR_SALE: Property[] = [
  { id: "saxonia-6", address: "6 Saxonia Road", suburb: "Gerringong NSW", title: "Family Living At Its Best", beds: 4, baths: 2, cars: 2, scene: "p1", image: "/images/properties/coastal-home-1.jpg", status: "For sale" },
  { id: "riverleigh-24", address: "24 Riverleigh Avenue", suburb: "Gerroa NSW", title: "Fully Renovated Family Retreat", beds: 5, baths: 3, cars: 2, scene: "p2", image: "/images/properties/coastal-home-2.jpg", status: "For sale" },
  { id: "jerry-bailey-53", address: "53 Jerry Bailey Road", suburb: "Shoalhaven Heads NSW", title: "Prime Coastal Opportunity in Shoalhaven Heads!", beds: 3, baths: 2, cars: 1, scene: "p3", image: "/images/properties/coastal-home-3.jpg", status: "For sale" },
  { id: "neptune-11", address: "11 Neptune Street", suburb: "Gerringong NSW", title: "Style, Space, and Separation", beds: 4, baths: 2, cars: 2, scene: "p4", image: "/images/properties/coastal-home-4.jpg", status: "For sale" },
];

export const FOR_RENT: Property[] = [
  { id: "greta-64a", address: "64A Greta Street", suburb: "Gerringong NSW", title: "A Feel Good Home in a Great Location!", beds: 3, baths: 1, cars: 1, scene: "r1", image: "/images/properties/coastal-home-2.jpg", status: "For lease" },
  { id: "hothersal-14", address: "14/2 Hothersal Street", suburb: "Kiama NSW", title: "Fully Furnished Bright & Cheerful Apartment", beds: 3, baths: 2, cars: 1, scene: "r2", image: "/images/properties/coastal-home-3.jpg", status: "For lease" },
  { id: "tarrant-3", address: "3/33 Tarrant Avenue", suburb: "Kiama Downs NSW", title: "Peaceful Family Living Backing onto Reserve", beds: 2, baths: 1, cars: 1, scene: "r3", image: "/images/properties/coastal-home-4.jpg", status: "For lease" },
  { id: "morrow-3a", address: "3A Morrow Street", suburb: "Gerringong NSW", title: "Executive Townhouse With Boat Harbour Views", beds: 3, baths: 3, cars: 2, scene: "r4", image: "/images/properties/coastal-home-1.jpg", status: "For lease" },
];

export const SOLD: Property[] = [
  { id: "towers-32", address: "32 Towers Road", suburb: "Shoalhaven Heads NSW", title: "", beds: 4, baths: 2, cars: 1, scene: "s1", image: "/images/properties/coastal-home-3.jpg", price: "$1,150,000", status: "Sold" },
  { id: "cooke-3", address: "3 Cooke Place", suburb: "Gerringong NSW", title: "", beds: 3, baths: 2, cars: 2, scene: "s2", image: "/images/properties/coastal-home-4.jpg", price: "$1,825,000", status: "Sold" },
  { id: "amundsen-13", address: "13 Amundsen Avenue", suburb: "Shoalhaven Heads NSW", title: "", beds: 3, baths: 1, cars: 1, scene: "s3", image: "/images/properties/coastal-home-1.jpg", price: "$915,000", status: "Sold" },
  { id: "weston-9", address: "9 Weston Place", suburb: "Kiama NSW", title: "", beds: 4, baths: 2, cars: 2, scene: "s4", image: "/images/properties/coastal-home-2.jpg", price: "$1,392,000", status: "Sold" },
];
