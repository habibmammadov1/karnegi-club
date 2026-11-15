# Karnegi Klub — yeni vebsayt

Karnegi Klub (Azərbaycan) üçün yeni sayt: natiqlik, ünsiyyət və şəxsi inkişaf təlimləri. Hazırkı mərhələ dizaynı göstərmək üçün **statik** versiyadır.

## Texnologiyalar

- **Next.js 16** (App Router, TypeScript) — bütün səhifələr statik generasiya olunur
- **PostgreSQL 17** — `docker-compose.yml`-də hazırdır, növbəti mərhələdə (admin panel, müraciətlər) qoşulacaq
- **Docker** — `Dockerfile` (standalone build) və `docker-compose.yml` (web + db)
- Şriftlər: Unbounded (başlıqlar) və Onest (mətn), Azərbaycan hərflərini tam dəstəkləyir

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
src/
  app/                 səhifələr (əsas səhifə, /telimler/[slug], sitemap, robots)
  components/          Header, Footer, Stories (story baxıcısı), ContactForm, VoiceWave
  content/site.ts      bütün məzmun: təlimlər, rəylər, story-lər, əlaqə
```

Məzmunu dəyişmək üçün `src/content/site.ts` faylını redaktə edin. Story-lərə şəkil əlavə etmək üçün slayda `image: "/stories/fayl.jpg"` yazın və faylı `public/stories/` qovluğuna qoyun.

## SEO

- Hər təlimin ayrıca səhifəsi, başlığı və təsviri var
- `schema.org` strukturlaşdırılmış məlumatları (EducationalOrganization, Course)
- Avtomatik `sitemap.xml` və `robots.txt`
- `NEXT_PUBLIC_SITE_URL` dəyişəni ilə canonical ünvan
