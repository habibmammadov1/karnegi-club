import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap phero">
      <h1 className="phero__title">Səhifə tapılmadı</h1>
      <p className="phero__lead">Axtardığınız səhifə silinib və ya ünvan səhvdir.</p>
      <Link href="/" className="btn btn--blue">Əsas səhifəyə qayıt</Link>
    </section>
  );
}
