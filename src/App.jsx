import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import SkillsSummary from "./sections/SkillsSummary"
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <SkillsSummary />
      <About />
      <Projects/>
      <section id="about" className="min-h-screen"></section>
    </>
  )
}

export default App
