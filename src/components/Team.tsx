import { players } from '../data/content'

const gradients = [
  'from-club-red to-club-red-dark',
  'from-club-ink to-club-red-dark',
  'from-club-red-dark to-club-ink',
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function Team() {
  return (
    <section id="csapat" className="bg-club-ink py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
            2026/27-es keret
          </p>
          <h2 className="font-display text-4xl tracking-wide text-white">
            Az első csapat
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {players.map((p, i) => (
            <div
              key={p.id}
              className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl p-5 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:ring-white/30"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} opacity-90`}
              />
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 transition group-hover:scale-125" />

              <span className="relative font-display text-2xl text-white/70">
                {p.number}
              </span>

              <div className="relative flex flex-col items-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 font-display text-2xl text-white ring-2 ring-white/40">
                  {initials(p.name)}
                </span>
              </div>

              <div className="relative text-center">
                <p className="font-display text-base tracking-wide text-white">
                  {p.name}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  {p.pos}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
