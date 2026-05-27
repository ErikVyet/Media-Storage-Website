import { RigidBody } from "@react-three/rapier";
import { Euler, Vector3, type BufferGeometry, type Material, type MaterialEventMap } from "three";

type CaseMeshProps = {
    geometry: BufferGeometry,
    material: Material<MaterialEventMap> | Material<MaterialEventMap>[],
    position?: Vector3,
    scale?: Vector3,
    rotation?: Euler
}

function CaseMesh({ geometry, material, position = new Vector3(0, 0, 0), scale = new Vector3(1, 1, 1), rotation = new Euler(0, 0, 0) }: CaseMeshProps) {
    return (
        <RigidBody type="fixed" position={position} scale={scale} rotation={rotation} colliders={"trimesh"}>
            <mesh geometry={geometry} material={material} />
        </RigidBody>
    );
}

export default CaseMesh;