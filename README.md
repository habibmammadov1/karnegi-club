# Karnegi Klub — yeni vebsayt

Karnegi Klub (Azərbaycan) üçün yeni sayt: natiqlik, ünsiyyət və şəxsi inkişaf təlimləri. Hazırkı mərhələ dizaynı göstərmək üçün **statik** versiyadır.

## Texnologiyalar

- **Next.js 16** (App Router, TypeScript) — bütün səhifələr statik generasiya olunur
- **PostgreSQL 17** — `docker-compose.yml`-də hazırdır, növbəti mərhələdə (admin panel, müraciətlər) qoşulacaq
- **Docker** — `Dockerfile` (standalone build) və `docker-compose.yml` (web + db)
- Şrift: Gilroy (`src/fonts/`, 400/500/700/800). Orijinal fayllarda “ə/Ə” hərfi olmadığı üçün bu hərflər fayllara əlavə edilib. Gilroy kommersiya şriftidir, saytda istifadə üçün veb lisenziyası lazımdır

## İşə salmaq

```bash
npm install
npm run dev          # http://localhost:3000
```

Docker ilə:

```bash
cp .env.example .env
docker compose up --build
```

## Struktur

```
public/images/         logo, təlimçinin şəkilləri, qalereya/, musteriler/ (loqolar)
public/video/          ana səhifə videosu
src/
  app/                 səhifələr: / , /telimler, /telimler/[slug], /korporativ, /fikirler,
                       /tedbirler, /qalereya, /videobloq, /haqqimizda, /elaqe, sitemap, robots
  components/          Header (üst zolaq + menyu), Footer, Blocks (ortaq bloklar), HeroVideo,
                       Stories (story baxıcısı), ContactForm, VoiceWave
  content/site.ts      bütün məzmun: menyu, təlimlər, rəylər, story-lər, qalereya, əlaqə
  fonts/               Gilroy
```

Məzmunu dəyişmək üçün `src/content/site.ts` faylını redaktə edin. Menyu `nav` massivindən qurulur. Story-lərə şəkil əlavə etmək üçün slayda `image: "/images/fayl.jpg"` (dairə üçün `cover`) yazın və faylı `public/images/` qovluğuna qoyun.

## SEO

- Hər təlimin ayrıca səhifəsi, başlığı və təsviri var
- `schema.org` strukturlaşdırılmış məlumatları (EducationalOrganization, Course)
- Avtomatik `sitemap.xml` və `robots.txt`
- `NEXT_PUBLIC_SITE_URL` dəyişəni ilə canonical ünvan
