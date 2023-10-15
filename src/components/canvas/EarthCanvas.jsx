import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import CanvasLoader from "../Loader";

const Earth = () => {

}

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{preserveDrawingBuffer: true}}
            camera={{}}
        >
            <Suspense fallback={<CanvasLoader/}>>
                <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                />
                </Suspense>
                </Canvas>
                );
            }

                      export default EarthCanvas;
