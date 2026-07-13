import { Header } from '../components/layout/Header.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { About } from '../sections/About.jsx'
import { Experience } from '../sections/Experience.jsx'
import { Hero } from '../sections/Hero.jsx'
import { SelectedWork } from '../sections/SelectedWork.jsx'

export function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  )
}
