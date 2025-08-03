import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

export function Planet(props) {
    const planetRef = useRef(null)
    // useGSAP(() => {
    //     // planetRef.
    // }, []) 
  const { nodes, materials } = useGLTF('/models/Planet.glb')
  return (
    <group {...props} ref={planetRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.002']}
        rotation={[0, 0, 0.74146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials['Material.001']}
        rotation={[-0.12404, 0.1231, -0.77774]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere2.geometry}
        material={materials['Material.001']}
        position={[0.64703, 1.03047, -0.72365]}
        rotation={[0, 0, 0.74146]}
        scale={0.22262}
      />
    </group>
  )
}

useGLTF.preload('/models/Planet.glb')
