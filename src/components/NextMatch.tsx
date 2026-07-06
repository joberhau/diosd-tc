import { nextMatch, stats } from '../data/content'

export default function NextMatch() {
  const dateObj = new Date(`${nextMatch.date}T${nextMatch.time}:00`)
  const formatted = dateObj.toLocaleDateString('hu-HU', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <section id="meccs" className="bg-club-ink py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 rounded-3xl bg-gradient-to-br from-club-red to-club-red-dark p-8 shadow-2xl md:grid-cols-[2fr_1fr] md:p-12">
          <div id="kovetkezo">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              {nextMatch.competition} · Következő mérkőzés
            </p>
            <div className="mt-6 flex items-center justify-between gap-4 sm:gap-10">
              <div className="flex flex-1 flex-col items-center gap-2 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white font-display text-lg text-club-red sm:h-20 sm:w-20 sm:text-xl">
                  DTC
                </span>
                <span className="font-display text-base text-white sm:text-lg">
                  {nextMatch.home}
                </span>
              </div>
              <span className="font-display text-3xl text-white/70 sm:text-4xl">
                VS
              </span>
              <div className="flex flex-1 flex-col items-center gap-2 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 font-display text-lg text-white ring-2 ring-white/40 sm:h-20 sm:w-20 sm:text-xl">
                  ÉV
                </span>
                <span className="font-display text-base text-white sm:text-lg">
                  {nextMatch.away}
                </span>
              </div>
            </div>
            <p className="mt-8 text-center text-white/90 md:text-left">
              <span className="font-semibold capitalize">{formatted}</span>
              {' · '}
              {nextMatch.time} · {nextMatch.venue}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 border-t border-white/20 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center justify-between text-white">
                <span className="text-xs uppercase tracking-wide text-white/70">
                  {s.label}
                </span>
                <span className="font-display text-lg">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
