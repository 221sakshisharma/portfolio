import {useRef} from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export const AnimatedTextLines = ({text, className, withScrollTrigger=false}) => {

    const linesRefs = useRef([])

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: withScrollTrigger ? {
                trigger: linesRefs.current,
                start: "top 90%",
            } : undefined
        })
        .from(linesRefs.current, {
            autoAlpha: 0,
            stagger: 0.2,
            duration: 2,
            y: 50, 
            ease: "back.out"
        })
    })

    const lines = text.split("\n").filter(line => line.trim() != "")

    return <div className={className}>
        {lines.map((line, i) => 
            <span ref={(el) => linesRefs.current[i] = el} key={i} className="block leading-xs tracking-wide text-pretty">{line}</span>
        )}
    </div>
}

export default AnimatedTextLines;