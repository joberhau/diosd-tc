import { coaches } from '../data/content'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function Coaches() {
  return (
    <section id="edzok" className="bg-club-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
            Szakmai stáb
          </p>
          <h2 className="font-display text-4xl tracking-wide text-club-ink">
            Edzőink
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((c) => (
            <div
              key={c.id}
              className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-club-red to-club-red-dark font-display text-2xl text-white ring-2 ring-club-red/20">
                {initials(c.name)}
              </span>
              <p className="mt-4 font-display text-lg tracking-wide text-club-ink">
                {c.name}
              </p>
              <p className="text-xs font-bold uppercase tracking-wide text-club-red">
                {c.role}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-club-ink/40">
                {c.license}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-club-ink/70">
                {c.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
