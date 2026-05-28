import { Edges } from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { Color, Euler, Vector3, type BufferGeometry, type Material, type MaterialEventMap } from "three";

type KeyboardMeshProps = {
    geometry: BufferGeometry,
    material: Material<MaterialEventMap> | Material<MaterialEventMap>[],
    position?: Vector3,
    scale?: Vector3,
    rotation?: Euler,
    isKeyPressed: boolean,
    setIsKeyPressed: Dispatch<SetStateAction<boolean>>,
}

function KeyboardMesh({ geometry, material, position = new Vector3(0, 0, 0), scale = new Vector3(1, 1, 1), rotation = new Euler(0, 0, 0), isKeyPressed, setIsKeyPressed }: KeyboardMeshProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
        audioRef.current = new Audio("/src/assets/sounds/keypress.mp3");
        audioRef.current.volume = 0.3;
    }, []);

    const handleClick = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
        setIsKeyPressed(!isKeyPressed);
        console.log(isKeyPressed);
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

    return (
        <RigidBody type="dynamic" position={position} scale={scale} rotation={rotation} colliders={"trimesh"}>
            <mesh geometry={geometry} material={material} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onClick={handleClick}>
                {isHovered && <Edges color={Color.NAMES.aqua}/>}
            </mesh>
        </RigidBody>
    );
}

export default KeyboardMesh;