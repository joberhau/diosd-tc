import { academyGroups } from '../data/content'

export default function Academy() {
  return (
    <section id="utanpotlas" className="bg-club-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
              Jövő bajnokai
            </p>
            <h2 className="font-display text-4xl tracking-wide text-club-ink">
              Utánpótlás akadémia
            </h2>
            <p className="mt-4 max-w-xl text-club-ink/70">
              A Diósdi TC-nél 4 éves kortól várjuk a focizni vágyó
              gyerekeket. Játékos edzések, versenyszellem és közösség –
              itt kezdődik minden nagy karrier.
            </p>
          </div>
          <a
            href="#jelentkezes"
            className="inline-block w-fit rounded-full bg-club-red px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:scale-105 hover:bg-club-red-dark lg:justify-self-end"
          >
            Jelentkezz próbaedzésre
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {academyGroups.map((g) => (
            <div
              key={g.id}
              className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={g.image}
                  alt={`${g.group} korosztály`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = `https://picsum.photos/seed/diosd-academy-${g.id}/500/380`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-club-ink via-club-ink/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-club-red px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {g.group}
                </span>
              </div>
              <div className="bg-white p-5">
                <p className="font-display text-base tracking-wide text-club-ink">
                  {g.name}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-club-ink/50">
                  {g.schedule}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
