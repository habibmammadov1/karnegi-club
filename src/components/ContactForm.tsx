"use client";

import { useState } from "react";
import { programs } from "@/content/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent)
    return (
      <div className="form form--done" role="status">
        <p className="form__done-title">Müraciətiniz qəbul edildi</p>
        <p>Komandamız qısa zamanda sizinlə əlaqə saxlayacaq.</p>
        <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>
          Yeni müraciət
        </button>
      </div>
    );

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        // Statik versiya: müraciətlər hələ heç yerə göndərilmir (PostgreSQL mərhələsində qoşulacaq)
        setSent(true);
      }}
    >
      <label className="field">
        <span>Ad və soyad</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label className="field">
        <span>Telefon</span>
        <input name="phone" type="tel" required autoComplete="tel" placeholder="+994" />
      </label>
      <label className="field">
        <span>Təlim</span>
        <select name="program" defaultValue="">
          <option value="" disabled>
            Seçin
          </option>
          {programs.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.title}
            </option>
          ))}
          <option value="korporativ">Korporativ təlim</option>
        </select>
      </label>
      <button type="submit" className="btn btn--blue btn--wide">
        Müraciət göndər
      </button>
    </form>
  );
}
