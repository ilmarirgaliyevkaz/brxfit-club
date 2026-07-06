// Central config for content that isn't code. Real data from the club + its
// verified 2GIS listing (rating/hours/geo). Video review files are pending.

export const WHATSAPP_NUMBER = "77071309980";
export const WHATSAPP_MESSAGE =
  "Здравствуйте! Хочу записаться на бесплатную тренировку в Bronx.";

export function whatsappHref(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_URL = "https://instagram.com/bronxfitness_expo";

// Verified 2GIS listing — used for the trust badge and map link.
export const TWO_GIS = {
  url: "https://2gis.kz/astana/firm/70000001067367604",
  reviewsUrl:
    "https://2gis.kz/astana/firm/70000001067367604/tab/reviews",
  rating: 4.7,
  reviews: 314,
};

export interface Location {
  name: string;
  address: string;
  hours: string;
  mapUrl: string;
  geo: { lat: number; lng: number };
}

// Single club (Expo). Address per owner; NB: 2GIS lists 55/1 — confirm 55/1 vs 55/3.
export const locations: Location[] = [
  {
    name: "Bronx Fitness — Экспо",
    address: "просп. Мангилик Ел, 55/3, павильон B2.4 (ориентир «Экспо Сфера»)",
    hours: "Ежедневно 07:00–23:00",
    mapUrl: "https://2gis.kz/astana/firm/70000001067367604",
    geo: { lat: 51.088808, lng: 71.415362 },
  },
];

export interface VideoTestimonial {
  name: string;
  /** Path under /public/video/reviews/ */
  src: string;
  poster?: string;
}

// TODO(content): drop the client-review videos into /public/video/reviews/
//   and list them here (name + filename). Add as many as you like.
export const videoTestimonials: VideoTestimonial[] = [
  // { name: "Имя клиента", src: "/video/reviews/1.mp4", poster: "/video/reviews/1.jpg" },
];
