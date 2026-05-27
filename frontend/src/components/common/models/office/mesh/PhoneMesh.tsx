import { RigidBody } from "@react-three/rapier";
import { Euler, Vector3, type BufferGeometry, type Material, type MaterialEventMap } from "three";

type PhoneMeshProps = {
    geometry: BufferGeometry,
    material: Material<MaterialEventMap> | Material<MaterialEventMap>[],
    position?: Vector3,
    scale?: Vector3,
    rotation?: Euler
}

function PhoneMesh({ geometry, material, position = new Vector3(0, 0, 0), scale = new Vector3(1, 1, 1), rotation = new Euler(0, 0, 0) }: PhoneMeshProps) {
    return (
        <RigidBody type="dynamic" position={position} scale={scale} rotation={rotation} colliders={"trimesh"}>
            <mesh geometry={geometry} material={material} />
        </RigidBody>
    );
}

export default PhoneMesh;