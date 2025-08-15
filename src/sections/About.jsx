import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import {useRef} from "react"
import AnimatedTextLines from "../components/AnimatedTextLines";

import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


const About = () => {

  const imgRef = useRef(null);

  useGSAP(() => {

     gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current,
        // scrub: true,
        start: "top 50%",
      },
    });
    
  })

  
    const text = `passionate about building software 
  that is both technically sound and impactful`;

  const aboutText = `💡 Solid foundation in CS fundamentals, data structures, algorithms, and modern software practices.  

  🖥️ Proficient in React and Tailwind, crafting responsive, intuitive, and polished interfaces.  

  🤖 Experienced in building ML and deep learning models, along with end-to-end AI solutions.  

  ⚙️ Driven to transform complex challenges into clean, reliable, and scalable systems.  

  🚀 Focused on building technology that endures, adapts, and truly delivers value.`

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection title={"About"} subtitle={"Code with purpose, Built to scale"} text={text} textColor={"text-white"} withScrollTrigger={true} />
<div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 lg:flex-row">        <img ref={imgRef}
          src="images/profilebw.png"
          alt="profile"
          className="w-md md:w-xs rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} withScrollTrigger={true} className={"w-full font-light tracking-wide text-white/80 leading-9 text-md md:text-xl md:leading-10 md:tracking-wider "}/>
      </div>

      
    </section>

  )
}

export default About