import { gallery } from '../data/content'

export default function Gallery() {
  return (
    <section id="galeria" className="bg-club-ink py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
            Pillanatok a pályáról
          </p>
          <h2 className="font-display text-4xl tracking-wide text-white">
            Galéria
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((src, i) => (
            <div
              key={src}
              className={`group overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt="Diósdi TC galéria"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = `https://picsum.photos/seed/diosd-gallery-${i}/600/600`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
