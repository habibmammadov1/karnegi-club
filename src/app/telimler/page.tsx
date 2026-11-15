import type { Metadata } from "next";
import { CtaBand, PageHero, ProgramList } from "@/components/Blocks";
import { otherTopics } from "@/content/site";

export const metadata: Metadata = {
  title: "Təlimlər",
  description: "Karnegi Klubun açıq təlimləri: Xarizmatik Natiq, Beyin Xəritəsi, İdeyalar Generatoru, Time Management, Effektiv Satış, Stressin idarə edilməsi.",
  alternates: { canonical: "/telimler" },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Təlimlər" lead="Açıq qruplarda, fərdi və korporativ formatda keçirilir. Təlimin 80 faizi təcrübədir: hər iştirakçı dəfələrlə çıxış edir." />
      <section className="wrap section section--tight">
        <ProgramList />
        <div className="topics">
          <p className="topics__h">Həmçinin</p>
          <ul className="topics__list">
            {otherTopics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="practice">
        <div className="wrap">
          <h2 className="h2 h2--white">Təlimdə çox danışırsınız. Biz isə az.</h2>
          <div className="ratio" role="img" aria-label="Təlimin 80 faizi təcrübə, 20 faizi nəzəriyyədir">
            <div className="ratio__part ratio__part--main" style={{ flexBasis: "80%" }}>
              <span className="ratio__num">80%</span>
              <span className="ratio__label">təcrübə</span>
            </div>
            <div className="ratio__part" style={{ flexBasis: "20%" }}>
              <span className="ratio__num">20%</span>
              <span className="ratio__label">nəzəriyyə</span>
            </div>
          </div>
          <p className="practice__text">
            İştirakçılar bütün qrup önündə, cütlükdə, üçlükdə və kiçik qruplarda çıxış edir. Nəzəriyyə yalnız bacarığı
            göstərmək və nəticəni müzakirə etmək üçündür.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
