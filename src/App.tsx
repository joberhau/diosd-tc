import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NextMatch from './components/NextMatch'
import News from './components/News'
import Team from './components/Team'
import Coaches from './components/Coaches'
import Academy from './components/Academy'
import JoinUs from './components/JoinUs'
import Sponsors from './components/Sponsors'
import Shop from './components/Shop'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NextMatch />
        <News />
        <Team />
        <Coaches />
        <Academy />
        <JoinUs />
        <Sponsors />
        <Shop />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
