import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import OfficeScene from "./OfficeScene";

function OfficeCanvas() {
    return (
        <Canvas camera={{ fov: 55, position: [-3, 10, -10] }} className="size-120! justify-self-center">
            <ambientLight intensity={1.5}/>
            <Physics>
                <OfficeScene/>
                <RigidBody type="fixed" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh receiveShadow>
                        <planeGeometry args={[100, 100]} />
                        <shadowMaterial opacity={0.3} />
                    </mesh>
                </RigidBody>
            </Physics>
        </Canvas>
    );
}

export default OfficeCanvas;