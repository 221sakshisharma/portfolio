import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
    
    const isMobile = useMediaQuery({ maxWidth: 853 })

    const aboutText = `I'm an enthusiastic developer who loves
    bringing ideas to life with clean, responsive
    designs and meaningful user experiences`

    return (
        <section id="home" className='flex flex-col justify-end min-h-screen'>
            <AnimatedHeaderSection subtitle={"404 Not Found"} title={"Sakshi"} text={aboutText}/>
            {/* defensive design pattern to always ensure full coverage */}
            <figure className="absolute inset-0 -z-50" style={
                { width: "100vw", height: "100vh" }
            }>
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 10], fov: 17.5, near: 0.1, far: 100 }}
                    style={{ pointerEvents: 'auto' }}
                >
                    <ambientLight intensity={0.5} />
                    <Float>
                        <Planet scale={isMobile ? 0.7 : 1} />
                    </Float>
                    <Environment resolution={256}>
                        <group rotation={[-Math.PI / 3, 4, 1]}>
                            <Lightformer form={"circle"} intensity={2} position={[0, 5, -9]} scale={10} />
                            <Lightformer form={"circle"} intensity={2} position={[0, 3, 1]} scale={10} />
                            <Lightformer form={"circle"} intensity={2} position={[-5, -1, -1]} scale={10} />
                            <Lightformer form={"circle"} intensity={2} position={[10, 1, 0]} scale={16} />
                        </group>
                    </Environment>
                    {/* <OrbitControls
                        makeDefault
                        enableZoom={false}
                        autoRotate={false}
                        enablePan={false}
                    /> */}
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero