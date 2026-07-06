import { asset } from '../lib/asset'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-club-ink"
    >
      <img
        src="https://loremflickr.com/1600/1000/soccer,stadium?lock=99"
        alt="Diósdi TC stadion"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = 'https://picsum.photos/seed/diosd-hero/1600/1000'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-club-ink via-club-ink/70 to-club-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-club-red/20 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 text-center">
        <img
          src={asset('crest.png')}
          alt="Diósdi Torna Club"
          className="mx-auto mb-6 h-28 w-28 drop-shadow-2xl sm:h-32 sm:w-32"
        />
        <p className="mb-4 inline-block rounded-full border border-club-red/60 bg-club-red/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-club-red">
          Pest Megyei I. osztály · Alapítva 1919
        </p>
        <h1 className="font-display text-5xl leading-[0.95] tracking-wide text-white sm:text-7xl md:text-8xl">
          DIÓSDI <span className="text-club-red">TC</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
          Szív, közösség, futball. Szurkolj velünk minden hazai meccsen –
          hajrá Diósd!
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#meccs"
            className="rounded-full bg-club-red px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-club-red/30 transition hover:scale-105 hover:bg-club-red-dark"
          >
            Következő mérkőzés
          </a>
          <a
            href="#csapat"
            className="rounded-full border-2 border-white/70 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:scale-105 hover:bg-white hover:text-club-ink"
          >
            Ismerd meg a csapatot
          </a>
        </div>
      </div>

      <a
        href="#kovetkezo"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs uppercase tracking-widest">Görgess</span>
        <span className="h-9 w-5 rounded-full border-2 border-white/60 p-1">
          <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-club-red" />
        </span>
      </a>
    </section>
  )
}
