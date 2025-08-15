import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import SkillsSummary from "./sections/SkillsSummary"
import About from "./sections/About";
import Projects from "./sections/Projects";
import ContactSummary from "./sections/ContactSummary";
import {Contact} from "./sections/Contact";
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <SkillsSummary />
      <About />
      <Projects/>
      <ContactSummary/>
      <Contact/>
    </>
  )
}

export default App
