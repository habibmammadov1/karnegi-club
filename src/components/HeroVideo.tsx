"use client";

import { useRef, useState } from "react";

// Ana səhifənin yuxarısındakı video. Brauzerlər səsli avtomatik oxutmanı blokladığı üçün
// video səssiz başlayır, səsi istifadəçi düymə ilə açır.
export default function HeroVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const video = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  const toggleSound = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      // Səs açılanda videonu əvvəldən göstər
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    setMuted(v.muted);
  };

  const togglePlay = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="hvideo">
      <video
        ref={video}
        className="hvideo__media"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onClick={togglePlay}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      />
      <div className="hvideo__controls">
        <button type="button" className="hvideo__btn" onClick={togglePlay} aria-label={paused ? "Videonu davam etdir" : "Videonu dayandır"}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            {paused ? <path fill="currentColor" d="M8 5v14l11-7z" /> : <path fill="currentColor" d="M7 5h4v14H7zM13 5h4v14h-4z" />}
          </svg>
        </button>
        <button type="button" className="hvideo__btn hvideo__btn--sound" onClick={toggleSound} aria-pressed={!muted}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path fill="currentColor" d="M4 9v6h4l5 4V5L8 9H4z" />
            {muted ? (
              <path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M16 8.500a5 5 0 010 7M18.500 6a8.500 8.500 0 010 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
          {muted ? "Səsi aç" : "Səsi bağla"}
        </button>
      </div>
    </div>
  );
}
