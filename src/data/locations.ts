export type Location = { name: string; postcode: string; scene: string; x: number; y: number; key?: boolean };

export const LOCATIONS: Location[] = [
  { name: "Kiama", postcode: "NSW 2533", scene: "loc-kiama", x: 46, y: 30, key: true },
  { name: "Gerringong", postcode: "NSW 2534", scene: "loc-gerringong", x: 54, y: 58, key: true },
  { name: "Gerroa", postcode: "NSW 2534", scene: "loc-gerroa", x: 76, y: 68 },
  { name: "Shoalhaven Heads", postcode: "NSW 2535", scene: "loc-shoalhaven", x: 62, y: 89, key: true },
  { name: "Jamberoo", postcode: "NSW 2533", scene: "loc-jamberoo", x: 22, y: 44 },
  { name: "Kiama Downs", postcode: "NSW 2533", scene: "loc-kiamadowns", x: 62, y: 9 },
  { name: "Minnamurra", postcode: "NSW 2533", scene: "loc-minnamurra", x: 30, y: 16, key: true },
  { name: "Kiama Heights", postcode: "NSW 2533", scene: "loc-kiamaheights", x: 68, y: 42 },
  { name: "Berry", postcode: "NSW 2535", scene: "loc-berry", x: 30, y: 78 },
];
