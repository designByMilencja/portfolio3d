'use client'
import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "./Loader.jsx";




const Computers = () => {
    const triangle = useGLTF('./triangular_animated_portal/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={91} groundColor="#FF8347"/>
            <pointLight intensity={1}/>
            <primitive object={triangle.scene}/>
        </mesh>
    );
}
const ComputersCanvas = () => {
    return (
        <Canvas
            className="cursor-pointer"
            frameloop="demand"
            shadows
            camera={{position: [15, 30, 30], fov: 4}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}/>
                <Computers/>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
}
export default ComputersCanvas;
