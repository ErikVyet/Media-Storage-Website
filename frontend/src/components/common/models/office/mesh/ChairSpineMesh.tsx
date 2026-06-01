import { Edges } from "@react-three/drei";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { Color, Euler, Quaternion, Vector3, type BufferGeometry, type Material, type MaterialEventMap } from "three";

type ChairSpineMeshProps = {
    geometry: BufferGeometry,
    material: Material<MaterialEventMap> | Material<MaterialEventMap>[],
    position?: Vector3,
    scale?: Vector3,
    rotation?: Euler
}

function ChairSpineMesh({ geometry, material, position = new Vector3(0, 0, 0), scale = new Vector3(1, 1, 1), rotation = new Euler(0, 0, 0) }: ChairSpineMeshProps) {
    const rigidBodyRef = useRef<RapierRigidBody>(null!);

    const [isHovered, setIsHovered] = useState(false);
    const [isGrabbing, setIsGrabbing] = useState(false);

    const currentAngleZ = useRef(rotation.z);
    const speed = useRef(0);

    const acceleration = 0.0002;  // How fast it gains speed while grabbing
    const maxSpeed = 0.05; // Speed limit cap
    const friction = 0.98; // Slowdown rate (0.99 = spins forever, 0.90 = stops very quickly)

    useFrame(() => {
        const rigidBody = rigidBodyRef.current;
        if (isGrabbing) {
            speed.current = Math.min(speed.current + acceleration, maxSpeed);
        } 
        else {
            speed.current *= friction;
            if (speed.current < 0.0001) {
                speed.current = 0;
            }
        }
        currentAngleZ.current += speed.current;
        const nextRotation = new Euler(Math.PI * 1.5, rotation.y, currentAngleZ.current);
        const quaternionTarget = new Quaternion().setFromEuler(nextRotation);
        rigidBody.setNextKinematicRotation(quaternionTarget);
    });

    const handlePointerDown = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        document.body.style.cursor = "grabbing";
        setIsGrabbing(true);
    }
    const handlePointerUp = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        document.body.style.cursor = "default";
        setIsGrabbing(false);
    }
    const handlePointerOver = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        document.body.style.cursor = "pointer";
        setIsHovered(true);
    }
    const handlePointerOut = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        document.body.style.cursor = "default";
        setIsHovered(false);
    }

    return (
        <RigidBody ref={rigidBodyRef} type="kinematicPosition" position={position} scale={scale} rotation={rotation} colliders={"trimesh"}>
            <mesh geometry={geometry} material={material} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onClick={(_event: ThreeEvent<MouseEvent>) => _event.stopPropagation()}>
                {isHovered && <Edges color={Color.NAMES.aqua} />}
            </mesh>
        </RigidBody>
    );
}

export default ChairSpineMesh;