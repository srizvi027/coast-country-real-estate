export type Agent = {
  name: string;
  email?: string;
  phone?: string;
  tel?: string;
  /** Replace `scene` with a real portrait path once photography is available. */
  scene: string;
};

export const TEAM: Agent[] = [
  { name: "Jason Stalgis", email: "jason.stalgis@ccfn.com.au", phone: "0403 648 375", tel: "+61403648375", scene: "t1" },
  { name: "Terry Digger", email: "terry.digger@ccfn.com.au", phone: "0417 760 669", tel: "+61417760669", scene: "t2" },
  { name: "Anne-Marie Fishburn", email: "anne-marie.fishburn@ccfn.com.au", scene: "t3" },
];
