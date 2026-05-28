import { Edges } from "@react-three/drei";
import { useThree, type ThreeEvent } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useState } from "react";
import { Color, Euler, Vector3, type BufferGeometry, type Material, type MaterialEventMap } from "three";

type ComputerMeshProps = {
    geometry: BufferGeometry,
    material: Material<MaterialEventMap> | Material<MaterialEventMap>[],
    position?: Vector3,
    scale?: Vector3,
    rotation?: Euler
}

function ComputerMesh({ geometry, material, position = new Vector3(0, 0, 0), scale = new Vector3(1, 1, 1), rotation = new Euler(0, 0, 0) }: ComputerMeshProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

    const { camera } = useThree();

    const startPosition = new Vector3(-3, 10, -10);
    const endPosition = new Vector3(-0.5, 5, -3.9);

    const handleClick = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        if (!isZoomed) {
            camera.position.copy(endPosition);
            camera.lookAt(new Vector3(-0.5, 5, 0));
        }
        else {
            camera.position.copy(startPosition);
            camera.lookAt(new Vector3(0, 0, 0));
        }
        setIsZoomed(!isZoomed);
    };
    const handlePointerOver = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        document.body.style.cursor = "pointer";
        setIsHovered(true);
    };
    const handlePointerOut = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        document.body.style.cursor = "default";
        setIsHovered(false);
    };

    window.addEventListener("keydown", (_event: KeyboardEvent) => {
        if (_event.key === "Escape") {
            camera.position.copy(startPosition);
            camera.lookAt(new Vector3(0, 0, 0));
            setIsZoomed(false);
        }
    });
    
    return (
        <RigidBody type="fixed" position={position} scale={scale} rotation={rotation} colliders={"trimesh"}>
            <mesh geometry={geometry} material={material} castShadow receiveShadow onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onClick={handleClick}>
                {isHovered && <Edges color={Color.NAMES.blue}/>}
            </mesh>
        </RigidBody>
    );
}

export default ComputerMesh;