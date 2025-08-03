import { useEffect, useRef, useState } from "react";
import { socials } from "../data"
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll"
import gsap from "gsap"

const Navbar = () => {

    const navRef = useRef(null);
    const linkedRef = useRef([]);
    const contactRef = useRef(null);
    const topLineRef = useRef(null);
    const bottomLineRef = useRef(null);
    const tl = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    // for not showing the menu button whenever the user scrolls through the page
    const [showMenu, setShowMenu] = useState(true);

    useGSAP(() => {
        // setting the initial state

        // methods -> .to //.from // .fromto // set
        // target, vars, posi tion
        gsap.set(navRef.current, { xPercent: 100, duration: 3 });
        gsap.set([linkedRef.current, contactRef.current], {
            // autoalpha controls oapcity and visibility
            autoAlpha: 0,
            x: 20,
        })

        // timeline object that will play on pressing the menu button
        tl.current = gsap.timeline({ paused: true })
            .to(navRef.current, { xPercent: 0, duration: 1, ease: "power3.out" })
            .to(topLineRef.current, { rotate: 45, duration: 0.3, y: 3.3, ease: "power2.inOut" }, "<")
            .to(bottomLineRef.current, { rotate: -45, duration: 0.3, y: -3.3, ease: "power2.inOut" }, "<")
            .to([linkedRef.current, contactRef.current], { autoAlpha: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }, "<")  // < is a position parameter that says that this animation will satrt on the start of prev one

    })

    useEffect(() => {
        let lastScroll = window.scrollY // probably 0 when the navbar mounted

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            // show menu either when we are going up or we are near the top

            setShowMenu(currentScroll < lastScroll || currentScroll < 20)

            lastScroll = currentScroll;
        }
        // passive: true is for boosting scrolling performance
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const toggleOpen = () => {
        if (isOpen) {
            tl.current.reverse()
        } else {
            tl.current.play();
        }
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav
                ref={navRef} className=' fixed z-50 flex flex-col justify-between w-full h-full bg-black px-10 py-8 uppercase text-white/80 gap-y-10 md:w-1/2 md:left-1/2'>
                <div className='flex flex-col text-5xl gap-y-2 md:text-6xl lg-text-8xl'>
                    {["home", "about", "services", "work", "contact"].map((section, i) =>
                        <div key={i} ref={(el) => linkedRef.current[i] = el}>
                            <Link to={section} smooth className='transition-all duration-300 cursor-pointer hover:text-white'>{section}</Link>
                        </div>
                    )}
                </div>

                <div ref={contactRef} className="flex flex-col flex-wrap justify-between gap-8 md:flex-row font-light antialiased">
                    <div>
                        <p className="text-sm tracking-wider text-white/60">E-mail</p>
                        <p className="text-xs leading-loose lowercase tracking-widest">sakshisharma220106@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-sm tracking-wider text-white/60">Social Media</p>
                        <div className="flex flex-col flex-wrap md:flex-row md:gap-x-2 text-sm">
                            {socials.map((social, i) =>

                                <a key={i} href={social.url} className="text-xs leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300">
                                    {"{"}{social.name}{"}"}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <div style={showMenu ? { clipPath: "circle(50% at 50% 50%)" } : { clipPath: "circle(0% at 50% 50%)" }} onClick={toggleOpen} className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10">
                <span ref={topLineRef} className="block w-8 h-0.5 bg-primary rounded-full origin-center"></span>
                <span ref={bottomLineRef} className="block w-8 h-0.5 bg-primary rounded-full origin-center"></span>
            </div>
        </>
    )
}

export default Navbar