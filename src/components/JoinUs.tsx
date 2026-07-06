import { useState, type FormEvent } from 'react'

const benefits = [
  {
    title: 'Minden korosztálynak van helye',
    text: '4 éves kortól a felnőtt csapatig várunk mindenkit, tudásszinttől függetlenül.',
  },
  {
    title: 'Tapasztalt, licences edzői stáb',
    text: 'UEFA és MLSZ licences szakemberek foglalkoznak veled az első perctől.',
  },
  {
    title: 'Családias közösség',
    text: 'Nem csak edzés – közös táborok, family day-ek és egy csapatként szurkolunk egymásnak.',
  },
  {
    title: 'Ingyenes próbaedzés',
    text: 'Nézz be egy edzésre kötelezettség nélkül, mielőtt döntesz – szeretettel várunk.',
  },
]

const ageOptions = ['Gyerek (4–13 év)', 'Ifjúsági (14–18 év)', 'Felnőtt']

export default function JoinUs() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const age = form.get('age')
    const contact = form.get('contact')
    const message = form.get('message')

    const body = [
      `Név: ${name}`,
      `Korosztály: ${age}`,
      `Elérhetőség: ${contact}`,
      message ? `Üzenet: ${message}` : null,
    ]
      .filter(Boolean)
      .join('%0D%0A')

    window.location.href = `mailto:info@diosdtc.hu?subject=${encodeURIComponent(
      'Jelentkezés a Diósdi TC-hez',
    )}&body=${body}`

    setSent(true)
  }

  return (
    <section id="jelentkezes" className="bg-club-ink py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-club-red">
            Gyere közénk
          </p>
          <h2 className="font-display text-4xl tracking-wide text-white">
            Csatlakozz a Diósdi TC-hez!
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Akár most kezdenéd a focit, akár visszatérnél a pályára – kicsik
            és nagyok, kezdők és rutinosak egyaránt szeretettel várunk.
            Jelentkezz lent, és felvesszük veled a kapcsolatot!
          </p>

          <ul className="mt-8 space-y-5">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-club-red/15 text-club-red">
                  ✓
                </span>
                <div>
                  <p className="font-display text-base tracking-wide text-white">
                    {b.title}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-club-cream p-8 shadow-2xl sm:p-10">
          <h3 className="font-display text-2xl tracking-wide text-club-ink">
            Jelentkezés
          </h3>
          <p className="mt-2 text-sm text-club-ink/60">
            Töltsd ki az alábbi űrlapot, és hamarosan jelentkezünk.
          </p>

          {sent ? (
            <div className="mt-8 rounded-xl bg-club-red/10 p-6 text-center">
              <p className="font-display text-lg text-club-ink">
                Köszönjük a jelentkezést!
              </p>
              <p className="mt-2 text-sm text-club-ink/60">
                Megnyílt az email kliensed az üzenet elküldéséhez – ha nem,
                írj nekünk közvetlenül az{' '}
                <a href="mailto:info@diosdtc.hu" className="font-semibold text-club-red">
                  info@diosdtc.hu
                </a>{' '}
                címre.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-club-ink/60">
                  Név
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Teljes név"
                  className="w-full rounded-lg border border-club-ink/15 bg-white px-4 py-2.5 text-sm text-club-ink outline-none ring-club-red/40 focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-club-ink/60">
                  Korosztály
                </label>
                <select
                  name="age"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-club-ink/15 bg-white px-4 py-2.5 text-sm text-club-ink outline-none ring-club-red/40 focus:ring-2"
                >
                  <option value="" disabled>
                    Válassz korosztályt
                  </option>
                  {ageOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-club-ink/60">
                  Telefon vagy email
                </label>
                <input
                  name="contact"
                  required
                  type="text"
                  placeholder="pl. +36 30 123 4567"
                  className="w-full rounded-lg border border-club-ink/15 bg-white px-4 py-2.5 text-sm text-club-ink outline-none ring-club-red/40 focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-club-ink/60">
                  Üzenet (opcionális)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Mesélj magadról pár szóban..."
                  className="w-full rounded-lg border border-club-ink/15 bg-white px-4 py-2.5 text-sm text-club-ink outline-none ring-club-red/40 focus:ring-2"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-club-red px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-club-red-dark"
              >
                Jelentkezem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
