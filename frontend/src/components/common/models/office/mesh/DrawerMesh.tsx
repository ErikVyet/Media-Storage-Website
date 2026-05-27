import { Edges } from "@react-three/drei";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { Color } from "three";
import { Euler, Vector3, type BufferGeometry, type Material, type MaterialEventMap } from "three"

type DrawerMeshProps = {
    geometry: BufferGeometry,
    material: Material<MaterialEventMap> | Material<MaterialEventMap>[],
    position?: Vector3,
    scale?: Vector3,
    rotation?: Euler
}

function DrawerMesh({ geometry, material, position = new Vector3(0, 0, 0), scale = new Vector3(1, 1, 1), rotation = new Euler(0, 0, 0) }: DrawerMeshProps) {
    const rigidBodyRef = useRef<RapierRigidBody>(null!);
    
    const [isHovered, setIsHovered] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const startPosition = position.clone().add(new Vector3(1, 0.345, -3));
    const endPosition = startPosition.clone().add(new Vector3(0, 0, -2));

    const currentPos = useRef(startPosition.clone());
    const velocity = useRef(new Vector3(0, 0, 0))

    const stiffness = 0.1; // Higher = faster snap
    const damping = 0.5; // Lower = more bouncy, Higher = stops faster

    useFrame(() => {
        if (rigidBodyRef.current) {
            const rigidBody = rigidBodyRef.current;
            const targetPosition = isOpened ? endPosition : startPosition;

            // Calculate spring physics vectors
            const distance = new Vector3().subVectors(targetPosition, currentPos.current);
            const force = distance.multiplyScalar(stiffness);

            // Calculate spring physics vectors
            velocity.current.add(force).multiplyScalar(damping);
            
            // Step our position tracker forward cleanly
            currentPos.current.add(velocity.current);
            rigidBody.setNextKinematicTranslation(currentPos.current);
        }
    });

    const handleClick = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        setIsOpened(!isOpened);
    };
    const handlePointerHover = (_event: ThreeEvent<MouseEvent>) => {
        _event.stopPropagation();
        setIsHovered(true);
        document.body.style.cursor = "pointer";
    }
    const handlePointerOut = (_event: ThreeEvent<MouseEvent>) => {
        setIsHovered(false);
        document.body.style.cursor = "default";
    }

    return (
        <RigidBody ref={rigidBodyRef} type="kinematicPosition" position={position} scale={scale} rotation={rotation}>
            <mesh geometry={geometry} material={material} onClick={handleClick} onPointerOver={handlePointerHover} onPointerOut={handlePointerOut} >
                {isHovered && <Edges color={Color.NAMES.aqua}/>}
            </mesh>
        </RigidBody>
    );
}

export default DrawerMesh;