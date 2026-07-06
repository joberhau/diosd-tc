import { news } from '../data/content'

export default function News() {
  return (
    <section id="hirek" className="bg-club-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
              Friss hírek
            </p>
            <h2 className="font-display text-4xl tracking-wide text-club-ink">
              Mi történt a klubban
            </h2>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((n) => (
            <article
              key={n.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = `https://picsum.photos/seed/diosd-news-${n.id}/640/420`
                  }}
                />
                <span className="absolute left-3 top-3 rounded-full bg-club-red px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {n.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <time className="text-xs font-semibold uppercase tracking-wide text-club-ink/50">
                  {new Date(n.date).toLocaleDateString('hu-HU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="mt-2 font-display text-base leading-snug tracking-wide text-club-ink">
                  {n.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-club-ink/70">
                  {n.excerpt}
                </p>
                <span className="mt-4 text-sm font-bold text-club-red">
                  Tovább olvasom →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
