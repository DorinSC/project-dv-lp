import Promo1 from "@/assets/promotions/promo1.jpg";
import Promo2 from "@/assets/promotions/promo2.jpg";
import Promo3 from "@/assets/promotions/promo3.jpg";
import Promo4 from "@/assets/promotions/promo4.jpg";

export type SubItem = {
  title: string;
  description?: string;
  href?: string;
  img?: string;
  startDate?: string;
  endDate?: string;
};

export type NavItem = {
  title: string;
  href: string;
  layout?: "featured" | "columns-2"; // or any other layouts you define
  subitems?: SubItem[];
};

export const navItems: NavItem[] = [
  {
    title: "promotions",
    href: "/promotions",
    layout: "featured",
    subitems: [
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
    ],
  },
  {
    title: "services",
    href: "/services",
    layout: "columns-2",
    subitems: [
      { title: "service 1", href: "/services/1", description: "lorem ipsum" },
      {
        title: "service 2",
        href: "/services/2",
        description: "lorem ipsum ipsum lorem",
      },
      {
        title: "service 3",
        href: "/services/3",
        description: "lorem ipsum lorem ipsum",
      },
      {
        title: "service 4",
        href: "/services/4",
        description: "lorem ipsum lorem ipsum",
      },
    ],
  },
  {
    title: "contactus",
    href: "#contact-us",
  },
];
