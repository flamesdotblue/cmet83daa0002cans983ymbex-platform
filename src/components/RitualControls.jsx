import React from 'react';

export default function RitualControls({ date, onDateChange, extraGlitch, onToggleGlitch, spinFaster, onToggleSpin }) {
  const onInputChange = (e) => {
    const v = e.target.value;
    if (!v) return;
    const d = new Date(v + 'T12:00:00');
    if (!isNaN(d.getTime())) onDateChange(d);
  };

  const todayISO = new Date(date).toISOString().slice(0,10);

  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-widest text-white/60">choose a moment in time</span>
          <input
            type="date"
            value={todayISO}
            onChange={onInputChange}
            className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-0 focus:border-fuchsia-400/40 focus:bg-black/50"
          />
        </label>

        <div className="flex gap-2">
          <button
            onClick={onToggleSpin}
            className={`rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wider transition ${spinFaster ? 'bg-cyan-500 text-black' : 'bg-cyan-300/20 text-cyan-200 border border-cyan-300/30 hover:bg-cyan-300/30'}`}
            title="Increase cosmic angular velocity"
          >
            cosmic spinner
          </button>

          <button
            onClick={onToggleGlitch}
            className={`rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wider transition ${extraGlitch ? 'bg-fuchsia-500 text-black' : 'bg-fuchsia-300/20 text-fuchsia-200 border border-fuchsia-300/30 hover:bg-fuchsia-300/30'}`}
            title="Cleanse (and corrupt) the vibes simultaneously"
          >
            cleanse cache with sage
          </button>
        </div>
      </div>

      <div className="mt-4 text-xs text-white/50">
        Disclaimer: This oracle derives truth from vibes, math, and glitter. Consult actual ephemerides for accuracy; consult yourself for everything else.
      </div>
    </div>
  );
}
