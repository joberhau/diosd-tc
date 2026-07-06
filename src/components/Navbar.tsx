import { useEffect, useState } from 'react'
import { asset } from '../lib/asset'

const links = [
  { href: '#hirek', label: 'Hírek' },
  { href: '#csapat', label: 'Csapat' },
  { href: '#edzok', label: 'Edzők' },
  { href: '#utanpotlas', label: 'Utánpótlás' },
  { href: '#jelentkezes', label: 'Jelentkezés' },
  { href: '#meccs', label: 'Mérkőzések' },
  { href: '#szponzorok', label: 'Szponzorok' },
  { href: '#bolt', label: 'Bolt' },
  { href: '#galeria', label: 'Galéria' },
  { href: '#kapcsolat', label: 'Kapcsolat' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-club-ink/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-4">
        <a href="#" className="flex shrink-0 items-center gap-3">
          <img src={asset('crest.png')} alt="Diósdi Torna Club" className="h-11 w-11 shrink-0" />
          <span className="whitespace-nowrap font-display text-xl tracking-wide text-white">
            DIÓSDI TC
          </span>
        </a>

        <ul className="hidden items-center gap-4 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-white/85 transition hover:text-club-red"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kapcsolat"
          className="hidden shrink-0 rounded-full bg-club-red px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-club-red xl:inline-block"
        >
          Jegyek
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
          aria-label="Menü"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 bg-club-ink px-6 pb-6 xl:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-semibold uppercase tracking-wide text-white/85 hover:text-club-red"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
