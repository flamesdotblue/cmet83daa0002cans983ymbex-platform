import React from 'react';

export default function OrbitingMercury({ verdict, spinFaster }) {
  const retro = verdict === 'Yes' || verdict === 'Kinda';
  const speed = spinFaster ? 4 : 9;

  return (
    <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-rose-300 shadow-[0_0_50px_20px_rgba(255,196,0,0.15)] animate-[floaty_6s_ease-in-out_infinite]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[80%] w-[80%] rounded-full border border-cyan-300/30 blur-[0.4px]" />
        <div className="absolute h-[65%] w-[65%] rounded-full border border-fuchsia-300/20 blur-[0.4px]" />
        <div className="absolute h-[50%] w-[50%] rounded-full border border-indigo-300/10 blur-[0.4px]" />
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center ${retro ? 'glitchy' : ''}`}
        style={{
          animation: `spin ${speed}s linear infinite`,
          transformOrigin: 'center',
          animationDirection: retro ? 'reverse' : 'normal',
          filter: retro ? 'drop-shadow(0 0 12px rgba(168,85,247,0.6))' : 'drop-shadow(0 0 10px rgba(34,211,238,0.4))',
        }}
      >
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-[10%] -translate-x-1/2 -translate-y-1/2">
            <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-gradient-to-tr from-gray-200 via-slate-300 to-zinc-400 shadow-[0_0_20px_8px_rgba(147,197,253,0.25)]" />
            <div className="absolute -inset-2 rounded-full border border-white/10" />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center text-xs text-white/60">
        <span className="inline-flex items-center gap-1 uppercase tracking-widest">
          <span className="h-1 w-1 rounded-full bg-fuchsia-300 animate-pulse" />
          {retro ? 'retrograde simulation engaged' : 'direct motion simulation'}
        </span>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </div>
  );
}
