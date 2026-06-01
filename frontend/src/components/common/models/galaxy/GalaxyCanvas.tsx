import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import GalaxyScene from "./GalaxyScene";

function GalaxyCanvas() {
    return (
        <Canvas camera={{ fov: 75, position: [0, 20, 30] }}>
            <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2}/>
            <GalaxyScene a={2} b={0.8} theta={10 * Math.PI} size={2000} maxSpreadX={1.2} maxSpreadZ={1.2} />
            <Stars/>
            <EffectComposer>
                <Bloom luminanceThreshold={1.0} luminanceSmoothing={0.9} intensity={1}/>
            </EffectComposer>
        </Canvas>
    );
}

export default GalaxyCanvas;