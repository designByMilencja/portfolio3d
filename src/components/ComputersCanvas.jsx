import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "./Loader.jsx";




const Computers = () => {
    const triangle = useGLTF('./triangular_animated_portal/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={121} groundColor="green"/>
            <pointLight intensity={1}/>
            <primitive object={triangle.scene}/>
        </mesh>
    );
}
const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{position: [5, 3, 50], fov: 8}}
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
