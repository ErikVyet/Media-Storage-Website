import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AtomScene from "./AtomScene";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function AtomCanvas() {
    return (
        <Canvas camera={{ fov: 90, position: [6, 12, 4] }}>
            <OrbitControls enablePan={false} enableZoom={false} />
            <AtomScene />
            <EffectComposer>
                <Bloom luminanceThreshold={1.0} luminanceSmoothing={0.9} intensity={1}/>
            </EffectComposer>
        </Canvas>
    );
}

export default AtomCanvas;