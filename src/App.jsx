import Navbar from "./components/Navbar"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from "./components/Hero"
import { useEffect } from "react"
import Luminarians from "./components/Luminarians"
import About from "./components/About"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Appointment from "./components/Appointment"
import Questions from "./components/Questions"
import Footer from "./components/Footer"
import ScrollToTopButton from "./components/ScrollToTopButton"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    });
  }, []);
  return (
    <div>
      <Navbar/>
      <Hero />
      <Luminarians />
      <About />
      <Services />
      <Testimonials />
      <Appointment />
      <Questions />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App