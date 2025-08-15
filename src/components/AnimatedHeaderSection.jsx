import { useRef } from "react"
import AnimatedTextLines from "./AnimatedTextLines"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


const AnimatedHeaderSection = ({
    title,
    subtitle,
    text,
    textColor,
    withScrollTrigger = false
}) => {

    const contextRef = useRef(null)
    const headerRef = useRef(null)

    useGSAP(() => {
        gsap.timeline({scrollTrigger: withScrollTrigger ? {
            trigger: contextRef.current,
        }: undefined})
            .from(contextRef.current, {
                autoAlpha: 0,
                y: "50vh",
                duration: 1,
                ease: "circ.out"
            })
            .from(headerRef.current, {
                autoAlpha: 0,
                y: 200,
                duration: 1,
                ease: "circ.out"
            }, "<+0.2")
    }, [])

    const shouldSplitTitle = title.includes(" ");
    const titleParts = shouldSplitTitle ? title.split(" ") : [title];

    
    return (
        <div ref={contextRef}>
            {/* Creating a mask */}
            <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
                <div
                    ref={headerRef}
                    className="flex flex-col justify-center gap-10 pt-16 sm:gap-14"
                >
                    <p
                        className={`text-sm font-light tracking-[0.5rem] uppercase px-8 ${textColor}`}
                    >
                        {subtitle}
                    </p>
                    <div className="px-8">
                        <h1
                            className={`flex flex-col gap-12 uppercase banner-text-responsive sm:gap-16 md:block ${textColor}`}
                        >
                            {titleParts.map((part, index) => (
                                <span key={index}>
                                    {part}
                                </span>
                            ))}
                        </h1>
                    </div>
                </div>
            </div>

            <div className={`relative px-8 ${textColor}`}>
                <div className="absolute inset-x-0 border"></div>  {/*this is the line css*/}
                <div className="py-12 sm:py-16">
                    <AnimatedTextLines text={text} className={`font-light text-right uppercase value-text-responsive ${textColor}`} />
                </div>
            </div>
        </div>

    )
}

export default AnimatedHeaderSection