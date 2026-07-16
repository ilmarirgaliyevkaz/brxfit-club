// Program catalogue for Bronx Fitness.
// Source: club schedule export (June 2026). Attendance is real data used only
// for internal ordering — NOT shown as a public metric.
// TODO(content): have the club confirm every `blurb` — these are placeholders
//   written from the program name, not approved marketing copy.
// TODO(refactor): migrate to an Astro `data` content collection once copy is final.

export type CategoryId =
  | "combat"
  | "functional"
  | "strength"
  | "flow"
  | "dance";

export interface Category {
  id: CategoryId;
  title: string;
}

export interface Program {
  slug: string;
  name: string;
  category: CategoryId;
  blurb: string;
  /** Internal ordering signal (people who attended in June). Not rendered. */
  attendance: number;
  /** Shown as a large card in the flagship section. */
  flagship?: boolean;
  /** If set, the card links to a dedicated page instead of opening a modal. */
  href?: string;
}

export const categories: Category[] = [
  { id: "combat", title: "Единоборства" },
  { id: "functional", title: "Функциональные" },
  { id: "strength", title: "Силовые" },
  { id: "flow", title: "Растяжка и восстановление" },
  { id: "dance", title: "Танцевальные" },
];

export const programs: Program[] = [
  // ── Единоборства ──────────────────────────────────────────────
  {
    slug: "bronx-fire",
    name: "BRONX FIRE",
    category: "combat",
    blurb: "Боксёрский кардио-интенсив под музыку — жжёт и заряжает.",
    attendance: 244,
    flagship: true,
    href: "/fire",
  },
  {
    slug: "bronx-fight",
    name: "BRONX FIGHT",
    category: "combat",
    blurb: "Техника бокса и работа на снарядах для реального навыка.",
    attendance: 224,
    flagship: true,
    href: "/fight",
  },
  {
    slug: "bronx-teens",
    name: "BRONX TEENS",
    category: "combat",
    blurb: "Бокс для подростков: дисциплина, форма, уверенность.",
    attendance: 117,
    flagship: true,
    href: "/teens",
  },
  {
    slug: "bronx-punch",
    name: "BRONX PUNCH",
    category: "combat",
    blurb: "Ударная функциональная работа на мешках без спарринга.",
    attendance: 96,
  },
  {
    slug: "box-woman",
    name: "BOX WOMAN",
    category: "combat",
    blurb: "Женский бокс в комфортном темпе и своей компании.",
    attendance: 26,
  },
  {
    slug: "muay-thai",
    name: "BRONX MUAY THAI",
    category: "combat",
    blurb: "Тайский бокс: руки, ноги, колени, клинч.",
    attendance: 20,
  },

  // ── Функциональные ────────────────────────────────────────────
  {
    slug: "bronx-ft",
    name: "BRONX FT",
    category: "functional",
    blurb: "Функциональный тренинг всего тела в интервальном формате.",
    attendance: 104,
  },
  {
    slug: "hyrox",
    name: "HYROX",
    category: "functional",
    blurb: "Подготовка к гонке Hyrox: бег + силовые станции.",
    attendance: 25,
    flagship: true,
    href: "/hyrox",
  },
  {
    slug: "athlete-lab",
    name: "ATHLETE LAB",
    category: "functional",
    blurb: "Атлетическая подготовка: сила, скорость, взрыв.",
    attendance: 16,
  },

  // ── Силовые ───────────────────────────────────────────────────
  {
    slug: "bronx-full-body",
    name: "BRONX FULL BODY",
    category: "strength",
    blurb: "Силовая на все группы мышц за одну тренировку.",
    attendance: 57,
  },
  {
    slug: "bronx-fight-hyrox",
    name: "BRONX FIGHT & HYROX",
    category: "strength",
    blurb: "Гибрид бокса и функциональных станций.",
    attendance: 0,
  },

  // ── Растяжка и восстановление ─────────────────────────────────
  {
    slug: "stretch-and-go",
    name: "STRETCH&GO",
    category: "flow",
    blurb: "Глубокая растяжка и мобильность — тело дышит свободнее.",
    attendance: 340,
  },
  {
    slug: "pilates",
    name: "PILATES",
    category: "flow",
    blurb: "Пилатес для осанки, кора и контроля над телом.",
    attendance: 163,
  },
  {
    slug: "yoga",
    name: "YOGA",
    category: "flow",
    blurb: "Йога для гибкости, дыхания и разгрузки головы.",
    attendance: 82,
  },

  // ── Танцевальные ──────────────────────────────────────────────
  {
    slug: "high-heels",
    name: "HIGH HEELS",
    category: "dance",
    blurb: "Танец на каблуках: пластика, женственность, кураж.",
    attendance: 53,
  },
  {
    slug: "latina",
    name: "LATINA",
    category: "dance",
    blurb: "Латиноамериканские ритмы и лёгкое кардио в танце.",
    attendance: 26,
  },
];

/** Programs grouped by category, each group ordered by real popularity. */
export function programsByCategory() {
  return categories
    .map((cat) => ({
      category: cat,
      items: programs
        .filter((p) => p.category === cat.id)
        .sort((a, b) => b.attendance - a.attendance),
    }))
    .filter((g) => g.items.length > 0);
}

/**
 * Flagship cards in a deliberate order — these mirror the four ad landing
 * pages, so the running order is a marketing decision, not an attendance one.
 * (Hyrox leads despite low attendance: it's the campaign we're pushing.)
 */
const flagshipOrder = ["hyrox", "bronx-fire", "bronx-fight", "bronx-teens"];

export const flagshipPrograms = programs
  .filter((p) => p.flagship)
  .sort((a, b) => flagshipOrder.indexOf(a.slug) - flagshipOrder.indexOf(b.slug));
