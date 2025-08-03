import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const SkillsSummary = () => {

    useGSAP(() => {
        gsap.to("#skills-title-1", {
            xPercent: 50,
            scrollTrigger: {
                target: "#skills-title-1",
                scrub: true

            }
        })

        gsap.to("#skills-title-2", {
            xPercent: -30,
            scrollTrigger: {
                target: "#skills-title-1",
                scrub: true

            }
        })

        gsap.to("#skills-title-3", {
            xPercent: 30,
            scrollTrigger: {
                target: "#skills-title-1",
                scrub: true

            }
        })

        gsap.to("#skills-title-4", {
            xPercent: -100,
            scrollTrigger: {
                target: "#skills-title-1",
                scrub: true

            }
        })


    })
    return (
        <section className="flex flex-col mt-20 overflow-hidden items-center font-light leading-snug text-center mb-42 contact-text-responsive">
            <div id="skills-title-1">
                <p>Architechture</p>
            </div>

            <div id="skills-title-2" className="flex items-center justify-center gap-4 translate-x-20">

                <p className="font-medium">Development</p>
                <div className="skills-border-responsive"></div>
                <p>Deployment</p>

            </div>

            <div id="skills-title-3" className="flex items-center justify-center gap-4 -translate-x-20">

                <p>APIs</p>
                <div className="skills-border-responsive" />
                <p className="italic">Frontend</p>
                <div className="skills-border-responsive" />
                <p>Scalabilty</p>

            </div>

            <div id="skills-title-4" className="translate-x-28">
                <p>Databases</p>
            </div>

        </section>
    )
}

export default SkillsSummary