import React from 'react';

export default function OracleAnswer({ verdict, snark, glitch }) {
  const color = verdict === 'Yes' ? 'from-fuchsia-400 to-rose-300' : verdict === 'No' ? 'from-cyan-300 to-indigo-300' : 'from-amber-300 to-pink-300';

  return (
    <div className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_50px_rgba(167,139,250,0.15)] backdrop-blur ${glitch ? 'animate-[wibble_6s_ease-in-out_infinite]' : ''}`}>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-fuchsia-400 to-cyan-300 animate-spin [animation-duration:6s]" />
        <div className="text-left">
          <div className={`answer-glow inline-block bg-gradient-to-r ${color} bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight`}>
            {verdict}
          </div>
          <div className="mt-2 text-sm text-white/80 md:text-base">{snark}</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-widest text-white/50">
        <Badge text="crystals consulted" active={verdict !== 'No'} />
        <Badge text="wifi-moon synced" active={true} />
        <Badge text="glitches blessed" active={glitch} />
      </div>
    </div>
  );
}

function Badge({ text, active }) {
  return (
    <div className={`rounded-md border px-2 py-1 text-center ${active ? 'border-fuchsia-400/40 bg-fuchsia-400/10' : 'border-white/10 bg-white/5'}`}>{text}</div>
  );
}
