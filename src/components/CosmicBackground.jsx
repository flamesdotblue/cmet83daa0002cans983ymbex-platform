import React, { useMemo } from 'react';

export default function CosmicBackground({ jitter = false }) {
  const stars = useMemo(() => {
    const arr = [];
    const count = 140;
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 4,
      });
    }
    return arr;
  }, []);

  const constellations = useMemo(() => {
    // A few abstract constellation points to connect
    return [
      [ [10,20], [16,32], [25,28], [30,42], [38,38] ],
      [ [70,14], [64,26], [58,34], [62,48], [72,52] ],
      [ [48,70], [55,66], [60,72], [66,68], [74,74] ],
    ];
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className={`absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-fuchsia-950 ${jitter ? 'animate-[wibble_5s_ease-in-out_infinite]' : ''}`}></div>

      <div className="absolute inset-0">
        {stars.map(s => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white/80 shadow-[0_0_6px_2px_rgba(255,255,255,0.3)]"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              opacity: 0.9,
              animation: `starTwinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
              transform: jitter ? 'translateZ(0)' : undefined,
            }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full mix-blend-screen opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
        {constellations.map((points, i) => (
          <g key={i} className="constellation-line" style={{ animationDelay: `${i * 1}s` }}>
            {points.map(([x,y], idx) => (
              <circle key={idx} cx={x} cy={y} r={0.6} fill="white" />
            ))}
            <polyline
              points={points.map(p => p.join(',')).join(' ')}
              fill="none"
              stroke="url(#grad)"
              strokeWidth={0.15}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(236,72,153,0.15),transparent_60%)]" />
    </div>
  );
}
