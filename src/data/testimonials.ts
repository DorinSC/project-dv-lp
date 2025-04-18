export type Testimonial = {
  name: string;
  surname: string;
  text: string;
  rating: number;
  source?: "google" | "facebook" | "instagram";
};

export const testimonials: Testimonial[] = [
  {
    name: "Dorin",
    surname: "Scoferta",
    text: "Raport calitate-preț excelent. Profesionalism la cel mai înalt nivel.",
    rating: 5,
    source: "google",
  },
  {
    name: "Николай",
    surname: "Дьякону",
    text: "Прекрасный персонaл. Всем советую.",
    rating: 5,
    source: "google",
  },
  {
    name: "Jhon",
    surname: "Dow",
    text: "Totul a fost clar explicat, fără costuri ascunse și cu multă răbdare.",
    rating: 5,
    source: "instagram",
  },
  {
    name: "Ion",
    surname: "Falfache",
    text: "Moderne Klinik, saubere Räume und kompetente Zahnärzte. Absolut empfehlenswert!",
    rating: 5,
    source: "google",
  },
  {
    name: "Ioana",
    surname: "Falfache",
    text: "Service impeccable et personnel très professionnel. Je recommande vivement !",
    rating: 5,
    source: "google",
  },
  {
    name: "Irina",
    surname: "Scoferta",
    text: "Лікарі уважні та компетентні. Все пояснюють зрозуміло.",
    rating: 5,
    source: "facebook",
  },
  {
    name: "Mihaela",
    surname: "Darie",
    text: "Очень благодарна за качественное лечение и заботу!",
    rating: 5,
    source: "facebook",
  },
];
