// Hero-dakı “səs dalğası”: səhifə açılanda bir dəfə sakitlikdən səsə keçir.
const BARS = [
  4, 6, 5, 9, 14, 22, 30, 18, 26, 40, 34, 52, 44, 60, 48, 72, 56, 80, 64, 92, 70, 84, 96, 76, 100, 82, 68, 88, 60, 74, 52, 66, 44, 58, 36, 46, 28, 38, 22, 30,
  16, 24, 12, 18, 9, 12, 6, 5,
];

export default function VoiceWave() {
  return (
    <div className="wave" aria-hidden="true">
      {BARS.map((h, i) => (
        <span key={i} className="wave__bar" style={{ "--h": `${h}%`, "--i": i } as React.CSSProperties} />
      ))}
    </div>
  );
}
