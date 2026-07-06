const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-.354-.028-.766-.043-1.19-.043-.665 0-1.243.089-1.75.297-1.31.599-1.317 1.917-1.317 2.926l-.001 1.088h2.912l-.017.146-.421 3.522h-2.51v7.99C21.638 23.243 24 20.06 24 12.303c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 7.757 2.362 10.94 9.101 11.388z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.058-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.014 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.9 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.9 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.441 1.441 0 1 1-2.883.001 1.441 1.441 0 0 1 2.883-.001z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@diosditc',
    path: 'M16.6 5.82c-1.05-1.1-1.62-2.53-1.62-4H12.4v14.06a2.59 2.59 0 0 1-4.59 1.61 2.59 2.59 0 0 1 2.7-4.24V9.66a5.99 5.99 0 0 0-5.03 9.94 5.99 5.99 0 0 0 10.53-3.94V9.28a8.29 8.29 0 0 0 4.85 1.56V8.24a4.85 4.85 0 0 1-3.86-2.42z',
  },
]

export default function Footer() {
  return (
    <footer id="kapcsolat" className="bg-club-cream pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 border-t border-club-ink/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/crest.png" alt="Diósdi Torna Club" className="h-11 w-11" />
              <span className="font-display text-xl tracking-wide text-club-ink">
                DIÓSDI TC
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-club-ink/60">
              Diósdi Torna Club – közösségi futballklub 1919 óta. Hajrá
              Diósd!
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wide text-club-ink">
              Elérhetőség
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-club-ink/60">
              <li>2049 Diósd, Ady Endre u. 1.</li>
              <li>info@diosdtc.hu</li>
              <li>+36 23 555 123</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wide text-club-ink">
              Gyors linkek
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-club-ink/60">
              <li><a href="#hirek" className="hover:text-club-red">Hírek</a></li>
              <li><a href="#csapat" className="hover:text-club-red">Csapat</a></li>
              <li><a href="#szponzorok" className="hover:text-club-red">Szponzorok</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-wide text-club-ink">
              Kövess minket
            </h4>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-club-ink/5 text-club-ink/60 transition hover:bg-club-red hover:text-white"
                  aria-label={s.label}
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-club-ink/10 py-6 text-center text-xs text-club-ink/40">
          © {new Date().getFullYear()} Diósdi TC. Minden jog fenntartva. Demó
          weboldal.
        </div>
      </div>
    </footer>
  )
}
