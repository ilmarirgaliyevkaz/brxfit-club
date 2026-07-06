# brxfit.club — рекламный лендинг Bronx Fitness

Самостоятельный статический лендинг (Astro + Tailwind + TypeScript) под платный трафик.
Две страницы:

- `/` — клуб: атмосфера/комьюнити + 17 направлений
- `/hyrox` — отдельная посадочная под гонку Hyrox

Единственная цель — заявка через **WhatsApp**. Меню сайта намеренно нет.

## Запуск

```bash
npm install
npm run dev      # локальная разработка
npm run build    # astro check + сборка в dist/
npm run preview  # предпросмотр собранного
```

## Деплой

Домен `brxfit.club` — gTLD, ограничения «сервер в Казахстане» НЕ действуют.
Стек как у RichCoach: **GitHub → Vercel → Cloudflare (DNS)**.

1. Запушить репозиторий на GitHub, импортировать в Vercel (framework: Astro — определится сам).
2. В Vercel → Settings → Domains добавить `brxfit.club`. Vercel покажет точные DNS-записи.
3. В Cloudflare добавить эти записи (обычно: A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com).
   **ВАЖНО:** записи в режиме «DNS only» (серое облако, НЕ проксировать) —
   иначе Vercel не выпустит SSL. Это наш урок с RichCoach.
4. Дождаться выдачи SSL — сайт живой на https://brxfit.club.

## Что осталось подставить (реальный контент)

- [ ] Видео-отзывы → `public/video/reviews/`, затем вписать в `src/data/site.ts`
- [ ] 4 промо-видео флагманов → `public/video/` (`fire.mp4`, `fight.mp4`, `women.mp4`, `hero.mp4` + `hero-poster.jpg`)
- [ ] Клип для STRETCH&GO (пока заглушка)
- [x] OG для /hyrox: `public/og-hyrox.png` (1200×630) — готова
- [ ] OG для главной `/`: `public/og-image.png` (1200×630)
- [x] Адрес подтверждён: 55/3
- [ ] Официальный бейдж HYROX -> `public/hyrox-badge.svg` (секция доверия на /hyrox)
- [ ] URL вашей карточки в HYROX Gym Finder -> ссылка в блоке доверия /hyrox
- [ ] Блок «Удобства» (персоналки, фитнес-бар, массаж, сауны) — включить?
- [ ] Кроссфит / Зумба из 2ГИС — добавить в каталог?

## Структура

- `src/pages/` — маршруты (`index.astro`, `hyrox.astro`)
- `src/layouts/AdLandingLayout.astro` — минимальный layout (SEO/OG/JSON-LD, без меню)
- `src/components/sections/` — секции страниц
- `src/components/ui/` — примитивы (`WhatsAppButton`, `ProgramCard`)
- `src/data/` — `programs.ts` (каталог), `site.ts` (контакты/локация/отзывы)
- `src/styles/global.css` — дизайн-токены (#0A0A0A / #FFD700 / Inter)

> `@astrojs/sitemap` запинен на `3.2.1` — версии 3.7+ несовместимы с Astro 4.
