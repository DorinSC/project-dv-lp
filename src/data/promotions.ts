import Promo1 from "@/assets/promotions/promo1.jpg";
import Promo2 from "@/assets/promotions/promo2.jpg";
import Promo3 from "@/assets/promotions/promo3.jpg";
import Promo4 from "@/assets/promotions/promo4.jpg";

export type Promotion = {
  title: string;
  description: string;
  img: string;
  startDate: string;
  endDate: string;
};

export const promotions: Promotion[] = [
  {
    title: "Impreuna mai avantajos",
    description: "1+1 = 1100 Lei, detartraj impreuna e mai avantajos",
    img: Promo1,
    startDate: "12-04-2025",
    endDate: "25-04-2025",
  },
  {
    title: "8 Martie - 10%",
    description:
      "Inscrie-te de 8 Martie si primesti -10% reducere la orice procedura",
    img: Promo2,
    startDate: "08-03-2025",
    endDate: "08-03-2025",
  },
  {
    title: "Inalbire mai ieftina",
    description: "Description of promotion 3",
    img: Promo3,
    startDate: "12-04-2025",
    endDate: "15-04-2025",
  },
  {
    title: "Promotie de 14 Februarie",
    description: "Description of promotion 4",
    img: Promo4,
    startDate: "12-04-2025",
    endDate: "15-04-2025",
  },
];
