export const news = [
  {
    id: 1,
    title: 'U11-eseink megnyerték a tavaszi kupát',
    excerpt:
      'Veretlenül menetelt végig a tornán a Serdülő csoportunk, a döntőben 4-2-re győzték le a Sóskút SE korosztályos csapatát.',
    date: '2026-07-01',
    tag: 'Utánpótlás',
    image: 'https://loremflickr.com/640/420/kids,soccer?lock=41',
  },
  {
    id: 2,
    title: 'Nyári foci tábor indul az utánpótlásnak',
    excerpt:
      'Egyhetes napközis táborral készülünk augusztusban a Bombó és Csibe csoportos gyerekeknek, edzéssel, kirándulással.',
    date: '2026-06-30',
    tag: 'Utánpótlás',
    image: 'https://loremflickr.com/640/420/children,football?lock=42',
  },
  {
    id: 3,
    title: 'Magabiztos győzelem a rangadón',
    excerpt:
      'A Diósdi TC 3-1-re verte a Sóskút SE csapatát egy fordulatokban gazdag mérkőzésen a hazai pályán.',
    date: '2026-06-28',
    tag: 'Mérkőzés',
    image: 'https://loremflickr.com/640/420/soccer,match?lock=1',
  },
  {
    id: 4,
    title: 'Új utánpótlás program indul ősztől',
    excerpt:
      'Bővül az egyesület utánpótlás bázisa, U9-es és U11-es korosztályban is toborzót hirdetünk.',
    date: '2026-06-22',
    tag: 'Klubhír',
    image: 'https://loremflickr.com/640/420/soccer,team?lock=2',
  },
  {
    id: 5,
    title: 'Több mint 40 gyerek jelentkezett a toborzónkra',
    excerpt:
      'A tavaszi utánpótlás toborzó minden várakozást felülmúlt, ősztől új U7-es csoportot is indítunk a nagy érdeklődésre való tekintettel.',
    date: '2026-06-18',
    tag: 'Utánpótlás',
    image: 'https://loremflickr.com/640/420/youth,soccer?lock=43',
  },
  {
    id: 6,
    title: 'Megújult öltözőkkel várjuk a szurkolókat',
    excerpt:
      'Elkészült a pályaudvar melletti öltözőépület felújítása, korszerű körülmények fogadják a csapatot.',
    date: '2026-06-15',
    tag: 'Klubélet',
    image: 'https://loremflickr.com/640/420/stadium,locker?lock=3',
  },
  {
    id: 7,
    title: 'Szezonzáró family day a pályán',
    excerpt:
      'Ugrálóvár, tombola és kispályás torna várja a családokat a szezon utolsó hazai hétvégéjén.',
    date: '2026-06-08',
    tag: 'Esemény',
    image: 'https://loremflickr.com/640/420/soccer,fans?lock=4',
  },
]

export const players = [
  { id: 1, name: 'Nagy Bence', pos: 'Kapus', number: 1, image: 'https://loremflickr.com/400/500/soccer,goalkeeper?lock=11' },
  { id: 2, name: 'Kovács Máté', pos: 'Védő', number: 4, image: 'https://loremflickr.com/400/500/soccer,player?lock=12' },
  { id: 3, name: 'Tóth Levente', pos: 'Középpályás', number: 8, image: 'https://loremflickr.com/400/500/soccer,player?lock=13' },
  { id: 4, name: 'Szabó Ádám', pos: 'Csatár', number: 9, image: 'https://loremflickr.com/400/500/soccer,player?lock=14' },
  { id: 5, name: 'Varga Zoltán', pos: 'Védő', number: 5, image: 'https://loremflickr.com/400/500/soccer,player?lock=15' },
  { id: 6, name: 'Horváth Dániel', pos: 'Szélső', number: 11, image: 'https://loremflickr.com/400/500/soccer,player?lock=16' },
  { id: 7, name: 'Farkas Bálint', pos: 'Középpályás', number: 6, image: 'https://loremflickr.com/400/500/soccer,player?lock=17' },
  { id: 8, name: 'Molnár Gergő', pos: 'Csatár', number: 7, image: 'https://loremflickr.com/400/500/soccer,player?lock=18' },
]

export const gallery = [
  'https://loremflickr.com/600/600/soccer,celebration?lock=21',
  'https://loremflickr.com/600/600/soccer,stadium?lock=22',
  'https://loremflickr.com/600/600/soccer,fans?lock=23',
  'https://loremflickr.com/600/600/soccer,ball?lock=24',
  'https://loremflickr.com/600/600/soccer,pitch?lock=25',
  'https://loremflickr.com/600/600/soccer,team?lock=26',
]

export const nextMatch = {
  home: 'Diósdi TC',
  away: 'Érd VSE II.',
  date: '2026-07-12',
  time: '17:00',
  venue: 'Diósdi Sportpálya',
  competition: 'Pest Megyei I. osztály',
}

export const stats = [
  { label: 'Alapítva', value: '1919' },
  { label: 'Osztály', value: 'Megyei I.' },
  { label: 'Hazai pálya', value: 'Diósd, Ady E. u.' },
  { label: 'Szurkolók', value: '1200+' },
]

export const sponsors = ['MECSEKÉP', 'DIÓSD PÉK', 'AGROLINE', 'BENCE VILLANY', 'KŐ-MŰ KFT', 'ZÖLDÚT UTAZÁSI']

export const shopItems = [
  {
    id: 1,
    name: 'Hazai mez 2026/27',
    price: '14 990 Ft',
    image: '/jersey-home.png',
    kind: 'photo' as const,
  },
  {
    id: 2,
    name: 'Vendég mez 2026/27',
    price: '14 990 Ft',
    kind: 'jersey' as const,
  },
  {
    id: 3,
    name: 'Szurkolói sál',
    price: '4 990 Ft',
    kind: 'scarf' as const,
  },
  {
    id: 4,
    name: 'Klub sapka',
    price: '5 990 Ft',
    kind: 'cap' as const,
  },
]

export const coaches = [
  {
    id: 1,
    name: 'Fejér Gábor',
    role: 'Vezetőedző',
    license: 'UEFA B licenc',
    bio: '12 éve dolgozik edzőként, 2023-ban vezette fel a csapatot a Megyei I. osztályba. Korábban a Sóskút SE másodedzője volt.',
  },
  {
    id: 2,
    name: 'Balogh Krisztina',
    role: 'Utánpótlás szakmai igazgató',
    license: 'MLSZ grassroots licenc',
    bio: 'Az ő irányítása alatt bővült 40 fő fölé az utánpótlás bázis az elmúlt két évben. Korábban maga is a klub játékosa volt.',
  },
  {
    id: 3,
    name: 'Németh Róbert',
    role: 'Kapusedző',
    license: 'UEFA kapusedző B',
    bio: 'Egykori másodosztályú kapus, 6 éve foglalkozik a klub hálóőreinek képzésével minden korosztályban.',
  },
  {
    id: 4,
    name: 'Simon Attila',
    role: 'U13 edző',
    license: 'MLSZ C licenc',
    bio: '8 éve neveli a helyi gyerekeket, három korosztályos bajnoki cím fűződik a nevéhez az U13-as csapattal.',
  },
]

export const academyGroups = [
  {
    id: 1,
    group: 'U7',
    name: 'Bombó csoport',
    schedule: 'Kedd, csütörtök 17:00',
    image: 'https://loremflickr.com/500/380/kids,soccer?lock=31',
  },
  {
    id: 2,
    group: 'U9',
    name: 'Csibe csoport',
    schedule: 'Hétfő, szerda 17:30',
    image: '/utanpotlas-1.png',
  },
  {
    id: 3,
    group: 'U11',
    name: 'Serdülő csoport',
    schedule: 'Kedd, csütörtök 18:00',
    image: 'https://loremflickr.com/500/380/youth,soccer?lock=33',
  },
  {
    id: 4,
    group: 'U13',
    name: 'Ifi előkészítő',
    schedule: 'Hétfő, szerda, péntek 18:30',
    image: 'https://loremflickr.com/500/380/junior,football?lock=34',
  },
]
