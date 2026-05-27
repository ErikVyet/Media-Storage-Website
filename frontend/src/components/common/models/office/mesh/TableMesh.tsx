import type { ThreeEvent } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { Euler, Material, Vector3, type BufferGeometry, type MaterialEventMap } from "three"

type TableMeshProps = {
    geometry: BufferGeometry,
    material: Material<MaterialEventMap> | Material<MaterialEventMap>[],
    position?: Vector3,
    scale?: Vector3,
    rotation?: Euler
}

function TableMesh({ geometry, material, position = new Vector3(0, 0, 0), scale = new Vector3(1, 1, 1), rotation = new Euler(0, 0, 0) }: TableMeshProps) {
    return (
        <RigidBody type="fixed" colliders={"trimesh"} position={position} scale={scale} rotation={rotation}>
            <mesh geometry={geometry} material={material} onPointerOver={(_event: ThreeEvent<MouseEvent>) => _event.stopPropagation()}/>
        </RigidBody>
    );
}

export default TableMesh;