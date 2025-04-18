export type Service = {
  title: string;
  price?: number;
  priceFrom?: number;
  priceTo?: number;
  description?: string;
};

export const services: Service[] = [
  {
    title: "Extractia dintelui temporar",
    price: 700,
    description: "lorem ipsum loraren bisque sarex romanum",
  },
  { title: "Sinus lifting inchis", price: 3000 },
  { title: "Extractia dintelui permanent tipic", price: 800 },
  { title: "Sinus lifting deschis", price: 10000 },
  { title: "Extractia molarului 3", priceFrom: 700, priceTo: 3000 },
  { title: "PRF / aditie osoasa 0,5g", price: 4000 },
  { title: "Rezectie apicala cu chistectomie", price: 3500 },
  { title: "Suturarea", price: 250 },
  { title: "Frenoplastie", price: 2000 },
  { title: "Tratamentul alveolitei", price: 1000 },
  { title: "Augmentarea crestei alveolare", priceFrom: 4000, priceTo: 12000 },
  { title: "Chiuretaj subgingival arcada", price: 2000 },
];
