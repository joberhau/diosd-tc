import { sponsors } from '../data/content'

function CanIcon() {
  return (
    <svg viewBox="0 0 120 220" className="h-56 w-auto drop-shadow-2xl">
      <defs>
        <linearGradient id="can-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8f0b21" />
          <stop offset="45%" stopColor="#e8213f" />
          <stop offset="100%" stopColor="#c8102e" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="100" height="200" rx="18" fill="url(#can-body)" />
      <rect x="10" y="10" width="100" height="26" rx="13" fill="#f7f5f0" opacity="0.9" />
      <rect x="10" y="184" width="100" height="26" rx="13" fill="#8f0b21" opacity="0.7" />
      <text
        x="60"
        y="118"
        textAnchor="middle"
        fontFamily="Anton, sans-serif"
        fontSize="26"
        fill="#f7f5f0"
        letterSpacing="1"
      >
        FRESH
      </text>
      <text
        x="60"
        y="145"
        textAnchor="middle"
        fontFamily="Anton, sans-serif"
        fontSize="26"
        fill="#f7f5f0"
        letterSpacing="1"
      >
        UP
      </text>
      <circle cx="30" cy="70" r="4" fill="#f7f5f0" opacity="0.6" />
      <circle cx="90" cy="90" r="3" fill="#f7f5f0" opacity="0.5" />
      <circle cx="80" cy="60" r="2" fill="#f7f5f0" opacity="0.5" />
    </svg>
  )
}

function JerseyIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-56 w-auto drop-shadow-2xl">
      <path
        d="M60 20 L10 45 L28 80 L45 68 L45 180 L155 180 L155 68 L172 80 L190 45 L140 20 C140 38 118 50 100 50 C82 50 60 38 60 20Z"
        fill="#101014"
        stroke="#c8102e"
        strokeWidth="4"
      />
      <path
        d="M92 50 C82 46 68 36 62 24 L70 22 C76 34 88 42 100 44 C112 42 124 34 130 22 L138 24 C132 36 118 46 108 50 C102 52 98 52 92 50Z"
        fill="#c8102e"
      />
      <rect x="90" y="70" width="20" height="90" fill="#c8102e" opacity="0.15" />
      <text
        x="100"
        y="120"
        textAnchor="middle"
        fontFamily="Anton, sans-serif"
        fontSize="34"
        fill="#c8102e"
      >
        7
      </text>
    </svg>
  )
}

function BarberIcon() {
  return (
    <svg viewBox="0 0 160 220" className="h-56 w-auto drop-shadow-2xl">
      <rect x="65" y="10" width="30" height="14" rx="4" fill="#101014" />
      <rect x="60" y="24" width="40" height="150" rx="20" fill="#f7f5f0" stroke="#101014" strokeWidth="3" />
      <clipPath id="pole-clip">
        <rect x="60" y="24" width="40" height="150" rx="20" />
      </clipPath>
      <g clipPath="url(#pole-clip)">
        {[-40, -10, 20, 50, 80, 110, 140, 170].map((y, i) => (
          <polygon
            key={i}
            points={`40,${y} 120,${y - 30} 120,${y - 15} 40,${y + 15}`}
            fill={i % 2 === 0 ? '#c8102e' : '#1d4ed8'}
          />
        ))}
      </g>
      <rect x="65" y="184" width="30" height="14" rx="4" fill="#101014" />
      <circle cx="80" cy="205" r="10" fill="#101014" />
      <g transform="translate(105 150) rotate(20)">
        <circle cx="0" cy="0" r="9" fill="none" stroke="#101014" strokeWidth="4" />
        <circle cx="26" cy="14" r="9" fill="none" stroke="#101014" strokeWidth="4" />
        <line x1="8" y1="4" x2="55" y2="-30" stroke="#101014" strokeWidth="4" />
        <line x1="8" y1="10" x2="55" y2="46" stroke="#101014" strokeWidth="4" />
      </g>
    </svg>
  )
}

export default function Sponsors() {
  return (
    <section id="szponzorok" className="bg-club-cream py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
            Hálásan köszönjük
          </p>
          <h2 className="font-display text-4xl tracking-wide text-club-ink">
            Támogatóink
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative flex items-center gap-6 overflow-hidden rounded-3xl bg-club-ink p-8 sm:p-10">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-club-red/20 blur-3xl" />
            <div className="relative flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
                Hivatalos frissítő partner
              </p>
              <h3 className="mt-2 font-display text-3xl tracking-wide text-white">
                FreshUp
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                A Diósdi TC minden hazai meccsén ott van a kispadon –
                frissítő erő 90 percen át, extra energiával a hosszabbításra.
              </p>
              <a
                href="#"
                className="mt-6 inline-block rounded-full bg-club-red px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-club-ink"
              >
                Fedezd fel az ízeket
              </a>
            </div>
            <div className="relative hidden shrink-0 sm:block">
              <CanIcon />
            </div>
          </div>

          <div className="relative flex items-center gap-6 overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:p-10">
            <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-club-red/10 blur-3xl" />
            <div className="relative hidden shrink-0 sm:block">
              <JerseyIcon />
            </div>
            <div className="relative flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
                Hivatalos sportruházati partner
              </p>
              <h3 className="mt-2 font-display text-3xl tracking-wide text-club-ink">
                ProSport
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-club-ink/70">
                A Diósdi TC mezeit és edzőruháit a ProSport készíti –
                szereld fel magad te is bajnok módra a klubbolt kínálatából.
              </p>
              <a
                href="#"
                className="mt-6 inline-block rounded-full bg-club-ink px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-club-red"
              >
                Nézd meg a kollekciót
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-8 flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5 sm:flex-row sm:p-10">
          <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-club-red/10 blur-3xl" />
          <div className="relative shrink-0">
            <BarberIcon />
          </div>
          <div className="relative flex-1 text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
              Ajánlott partnerünk
            </p>
            <h3 className="mt-2 font-display text-3xl tracking-wide text-club-ink">
              HB Barber Shop
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-club-ink/70">
              Exkluzív élmény minden vágásban – férfi és gyerek hajvágás,
              szakálligazítás Diósdon. 2049 Diósd, Pacsirta utca 29.
            </p>
            <a
              href="https://hb-barber-shop.salonic.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-club-ink px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-club-red"
            >
              Foglalj időpontot
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-club-ink/10 pt-10">
          {sponsors.map((s) => (
            <span
              key={s}
              className="font-display text-lg tracking-wide text-club-ink/40 transition hover:text-club-red"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
