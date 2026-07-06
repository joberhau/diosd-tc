import { shopItems } from '../data/content'

function AwayJerseyIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-40 w-auto">
      <path
        d="M60 20 L10 45 L28 80 L45 68 L45 180 L155 180 L155 68 L172 80 L190 45 L140 20 C140 38 118 50 100 50 C82 50 60 38 60 20Z"
        fill="#f7f5f0"
        stroke="#101014"
        strokeWidth="4"
      />
      <path
        d="M92 50 C82 46 68 36 62 24 L70 22 C76 34 88 42 100 44 C112 42 124 34 130 22 L138 24 C132 36 118 46 108 50 C102 52 98 52 92 50Z"
        fill="#c8102e"
      />
      <rect x="90" y="70" width="20" height="90" fill="#101014" opacity="0.1" />
      <text x="100" y="120" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="34" fill="#101014">
        4
      </text>
    </svg>
  )
}

function ScarfIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-40 w-auto">
      <rect x="30" y="60" width="140" height="60" rx="4" fill="#c8102e" />
      <rect x="30" y="60" width="140" height="12" fill="#101014" />
      <rect x="30" y="96" width="140" height="12" fill="#f7f5f0" />
      <rect x="20" y="120" width="26" height="60" fill="#c8102e" />
      <rect x="20" y="120" width="26" height="10" fill="#101014" />
      <rect x="154" y="120" width="26" height="60" fill="#c8102e" />
      <rect x="154" y="120" width="26" height="10" fill="#101014" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={22 + i * 6} y="180" width="3" height="14" fill="#101014" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={156 + i * 6} y="180" width="3" height="14" fill="#101014" />
      ))}
      <text x="100" y="95" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="16" fill="#f7f5f0">
        DTC
      </text>
    </svg>
  )
}

function CapIcon() {
  return (
    <svg viewBox="0 0 200 200" className="h-40 w-auto">
      <path d="M40 110 A60 60 0 0 1 160 110 Z" fill="#c8102e" stroke="#101014" strokeWidth="4" />
      <path d="M40 110 L10 122 A70 15 0 0 0 160 122 L160 110Z" fill="#101014" />
      <circle cx="100" cy="95" r="14" fill="#f7f5f0" stroke="#101014" strokeWidth="3" />
      <circle cx="100" cy="70" r="5" fill="#f7f5f0" />
    </svg>
  )
}

const icons = {
  jersey: AwayJerseyIcon,
  scarf: ScarfIcon,
  cap: CapIcon,
}

export default function Shop() {
  return (
    <section id="bolt" className="bg-club-ink py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
            Szurkolói bolt
          </p>
          <h2 className="font-display text-4xl tracking-wide text-white">
            Klubbolt
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Hivatalos Diósdi TC termékek – szereld fel magad bajnok módra,
            és támogasd a klubot minden vásárlással.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shopItems.map((item) => {
            const Icon = item.kind === 'photo' ? null : icons[item.kind]
            return (
              <div
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-club-cream ring-1 ring-white/10"
              >
                <div className="flex h-56 items-center justify-center bg-white">
                  {item.kind === 'photo' ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    Icon && <Icon />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-display text-base tracking-wide text-club-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-club-red">
                    {item.price}
                  </p>
                  <a
                    href={`mailto:info@diosdtc.hu?subject=${encodeURIComponent(
                      `Rendelés: ${item.name}`,
                    )}`}
                    className="mt-4 rounded-full bg-club-ink px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-white transition hover:bg-club-red"
                  >
                    Megrendelem
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
