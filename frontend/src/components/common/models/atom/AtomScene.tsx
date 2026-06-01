import ElectronMesh from "./mesh/ElectronMesh";
import NuclearMesh from "./mesh/NuclearMesh";

type AtomSceneProps = {
    scale?: number
}

function AtomScene({ scale = 1 }: AtomSceneProps) {
    const eRotations = [
        { x: 0, y: 0, z: 0 },
        { x: 0, y: -Math.PI / 3, z: 0 },
        { x: 0, y: Math.PI / 3, z: 0 }
    ];
    
    return (
        <group scale={scale}>
            <NuclearMesh />
            {eRotations.map((rotation, index) => 
                <ElectronMesh  angle={(Math.PI / 2) * index} a={7} b={5} rotateX={rotation.x} rotateY={rotation.y} rotateZ={rotation.z} key={index} />
            )}
        </group>
    );
}

export default AtomScene;