"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Story } from "@/content/site";

const SLIDE_MS = 5000;

export default function Stories({ stories }: { stories: Story[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const [paused, setPaused] = useState(false);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement | null>(null);
  const touchX = useRef<number | null>(null);

  const story = open !== null ? stories[open] : null;

  const close = useCallback(() => {
    setOpen(null);
    lastFocus.current?.focus();
  }, []);

  const next = useCallback(() => {
    if (open === null) return;
    const s = stories[open];
    if (slide < s.slides.length - 1) setSlide(slide + 1);
    else if (open < stories.length - 1) {
      setOpen(open + 1);
      setSlide(0);
    } else close();
  }, [open, slide, stories, close]);

  const prev = useCallback(() => {
    if (open === null) return;
    if (slide > 0) setSlide(slide - 1);
    else if (open > 0) {
      setOpen(open - 1);
      setSlide(stories[open - 1].slides.length - 1);
    }
  }, [open, slide, stories]);

  // Baxılmış story-ləri qeyd et
  useEffect(() => {
    if (story) setSeen((p) => (p.has(story.id) ? p : new Set(p).add(story.id)));
  }, [story]);

  // Avtomatik keçid
  useEffect(() => {
    if (open === null || paused) return;
    const t = setTimeout(next, SLIDE_MS);
    return () => clearTimeout(t);
  }, [open, slide, paused, next]);

  // Klaviatura və scroll kilidi
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, next, prev, close]);

  const openStory = (i: number, el: HTMLElement) => {
    lastFocus.current = el;
    setOpen(i);
    setSlide(0);
    setPaused(false);
  };

  return (
    <>
      <div className="stories" aria-label="Story-lər">
        <ul className="stories__track">
          {stories.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                className={`story-chip${seen.has(s.id) ? " is-seen" : ""}`}
                onClick={(e) => openStory(i, e.currentTarget)}
              >
                <span className="story-chip__ring">
                  <span className="story-chip__face" aria-hidden="true">
                    {s.mark}
                  </span>
                </span>
                <span className="story-chip__label">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {story && (
        <div className="viewer" role="dialog" aria-modal="true" aria-label={story.label} onClick={close}>
          <div
            className="viewer__card"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={() => setPaused(true)}
            onPointerUp={() => setPaused(false)}
            onPointerLeave={() => setPaused(false)}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
              touchX.current = null;
            }}
          >
            <div className="viewer__bars" aria-hidden="true">
              {story.slides.map((_, i) => (
                <span key={i} className="viewer__bar">
                  <span
                    key={`${open}-${slide}`}
                    className={`viewer__fill${i < slide ? " is-done" : ""}${i === slide ? " is-active" : ""}`}
                    style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                  />
                </span>
              ))}
            </div>

            <div className="viewer__head">
              <span className="viewer__avatar" aria-hidden="true">
                {story.mark}
              </span>
              <span className="viewer__name">{story.label}</span>
              <button ref={closeBtn} type="button" className="viewer__close" onClick={close} aria-label="Bağla">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {story.slides.map((sl, i) => (
              <div key={i} className={`viewer__slide${i === slide ? " is-current" : ""}`} aria-hidden={i !== slide}>
                {sl.image && <img className="viewer__img" src={sl.image} alt="" />}
                <div className="viewer__text">
                  {sl.kicker && <p className="viewer__kicker">{sl.kicker}</p>}
                  <p className="viewer__title">{sl.title}</p>
                  {sl.body && <p className="viewer__body">{sl.body}</p>}
                  {sl.cta && (
                    <a
                      className="btn btn--white"
                      href={sl.cta.href}
                      onClick={() => sl.cta?.href.startsWith("#") && close()}
                      tabIndex={i === slide ? 0 : -1}
                      {...(sl.cta.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                    >
                      {sl.cta.label}
                    </a>
                  )}
                </div>
              </div>
            ))}

            <button type="button" className="viewer__tap viewer__tap--prev" onClick={prev} aria-label="Əvvəlki" />
            <button type="button" className="viewer__tap viewer__tap--next" onClick={next} aria-label="Növbəti" />
          </div>
        </div>
      )}
    </>
  );
}
