"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { events, type EventItem } from "@/content/site";

// Tədbir pəncərəsi: şəkil, məlumat və keçid linki
function EventModal({ event, onClose }: { event: EventItem; onClose: () => void }) {
  const closeBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="emodal" role="dialog" aria-modal="true" aria-label={event.title} onClick={onClose}>
      <div className="emodal__card" onClick={(e) => e.stopPropagation()}>
        <button ref={closeBtn} type="button" className="emodal__close" onClick={onClose} aria-label="Bağla">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="emodal__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={event.image} alt={`${event.title} afişası`} />
        </div>
        <div className="emodal__body">
          <p className="emodal__kind">{event.kind}</p>
          <h2 className="emodal__title">{event.title}</h2>
          <dl className="emodal__meta">
            <div>
              <dt>Tarix</dt>
              <dd>{event.date}</dd>
            </div>
            <div>
              <dt>Saat</dt>
              <dd>{event.time}</dd>
            </div>
            <div>
              <dt>Məkan</dt>
              <dd>{event.place}</dd>
            </div>
          </dl>
          <p className="emodal__text">{event.text}</p>
          {event.points.length > 0 && (
            <ul className="ticks emodal__points">
              {event.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
          <a className="btn btn--blue" href={event.link} target="_blank" rel="noopener">
            {event.linkLabel}
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="2.200" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function useEventModal() {
  const [open, setOpen] = useState<EventItem | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const show = (e: EventItem, el: HTMLElement) => {
    opener.current = el;
    setOpen(e);
  };
  const modal = open && (
    <EventModal
      event={open}
      onClose={() => {
        setOpen(null);
        opener.current?.focus();
      }}
    />
  );
  return { show, modal };
}

// Ekranın sağ tərəfində dayanan tədbir kartları
export function EventsFloat() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const { show, modal } = useEventModal();

  // Tədbirlər səhifəsində kartlar onsuz da səhifənin özündədir
  if (events.length === 0 || pathname === "/tedbirler") return null;

  return (
    <>
      {hidden ? (
        <button type="button" className="efloat__reopen" onClick={() => setHidden(false)}>
          Tədbirlər <span>{events.length}</span>
        </button>
      ) : (
        <aside className="efloat" aria-label="Yaxınlaşan tədbirlər">
          <div className="efloat__head">
            <p>Yaxınlaşan tədbirlər</p>
            <button type="button" onClick={() => setHidden(true)} aria-label="Tədbir kartlarını gizlət">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.400" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ul>
            {events.map((e) => (
              <li key={e.id}>
                <button type="button" className="ecard" onClick={(ev) => show(e, ev.currentTarget)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.image} alt="" />
                  <span className="ecard__text">
                    <span className="ecard__date">
                      {e.date} · {e.time}
                    </span>
                    <span className="ecard__title">{e.short}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}
      {modal}
    </>
  );
}

// Tədbirlər səhifəsindəki böyük kartlar
export function EventsGrid() {
  const { show, modal } = useEventModal();
  return (
    <>
      <ul className="egrid">
        {events.map((e) => (
          <li key={e.id}>
            <button type="button" className="etile" onClick={(ev) => show(e, ev.currentTarget)}>
              <span className="etile__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={e.image} alt="" loading="lazy" />
              </span>
              <span className="etile__body">
                <span className="ecard__date">
                  {e.date} · {e.time}
                </span>
                <span className="etile__title">{e.title}</span>
                <span className="etile__place">{e.place}</span>
                <span className="more">Ətraflı</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {modal}
    </>
  );
}
