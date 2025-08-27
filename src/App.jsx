import React, { useMemo, useState } from 'react';
import CosmicBackground from './components/CosmicBackground.jsx';
import OrbitingMercury from './components/OrbitingMercury.jsx';
import OracleAnswer from './components/OracleAnswer.jsx';
import RitualControls from './components/RitualControls.jsx';

export default function App() {
  const [date, setDate] = useState(() => new Date());
  const [extraGlitch, setExtraGlitch] = useState(false);
  const [spinFaster, setSpinFaster] = useState(false);

  const verdict = useMemo(() => {
    // Divination by vibes: intentionally esoteric and a little unhinged
    const d = new Date(date);
    const seed = d.getUTCFullYear() * 3721 + (d.getUTCMonth() + 1) * 97 + d.getUTCDate();
    const vibe = (seed % 9);
    if (vibe === 0 || vibe === 3 || vibe === 6) return 'Yes';
    if (vibe === 1 || vibe === 4 || vibe === 7) return 'No';
    return 'Kinda';
  }, [date]);

  const snark = useMemo(() => {
    if (verdict === 'Yes') return "Obviously. Hide your emails and your ex's contact.";
    if (verdict === 'No') return "No. It's just you. But, like, in a cosmic way.";
    return "Schrödinger's retrograde. Both your calendar and your chakras are confused.";
  }, [verdict]);

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-black text-white ${extraGlitch ? 'saturate-150 contrast-125' : ''}`}>
      <CosmicBackground jitter={extraGlitch} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6">
        <div className="pointer-events-none select-none text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-amber-300 animate-[pulse_3s_ease-in-out_infinite]">Is Mercury in retrograde?</span>
          </h1>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 w-full max-w-5xl items-center">
          <div className="order-2 md:order-1">
            <OracleAnswer verdict={verdict} snark={snark} glitch={extraGlitch} />

            <RitualControls
              date={date}
              onDateChange={setDate}
              extraGlitch={extraGlitch}
              onToggleGlitch={() => setExtraGlitch(v => !v)}
              spinFaster={spinFaster}
              onToggleSpin={() => setSpinFaster(v => !v)}
            />
          </div>

          <div className="order-1 md:order-2 mx-auto">
            <OrbitingMercury verdict={verdict} spinFaster={spinFaster} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes starTwinkle { 0%,100%{opacity:0.2} 50%{opacity:1} }
        @keyframes floaty { 0%{transform:translateY(0)} 50%{transform:translateY(-6px)} 100%{transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes hue { 0%{filter:hue-rotate(0deg)} 100%{filter:hue-rotate(360deg)} }
        @keyframes wibble { 0%{transform:translate(0,0)} 25%{transform:translate(1px,-1px)} 50%{transform:translate(-1px,1px)} 75%{transform:translate(2px,0)} 100%{transform:translate(0,0)} }
        .glitchy { animation: hue 12s linear infinite; }
        .answer-glow { background-size: 200% 200%; animation: shimmer 3s linear infinite; }
        .constellation-line { animation: starTwinkle 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
