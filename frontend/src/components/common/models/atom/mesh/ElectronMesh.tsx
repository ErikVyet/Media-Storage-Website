import { Edges } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, Euler, Mesh } from "three";

type ElectronMeshProps = {
    angle?: number,
    centerX?: number,
    centerY?: number,
    a: number, // width
    b: number, // height
    speed?: number,
    rotateX?: number,
    rotateY?: number,
    rotateZ?: number,
    displayPath?: boolean,
    dashed?: boolean
}

function ElectronMesh({ angle = 0, centerX = 0, centerY = 0, a, b, speed = 2, rotateX = 0, rotateY = 0, rotateZ = 0, displayPath = true, dashed = false }: ElectronMeshProps) {
    const electronRef = useRef<Mesh>(null);
    const angleRef = useRef(angle);
    
    const rotation = useMemo(() => {
        return new Euler(rotateX, rotateY, rotateZ);
    }, [rotateX, rotateY, rotateZ]);

    useFrame((_, delta) => {
        const electron = electronRef.current;
        if (electron) {
            angleRef.current += delta * speed;
            const newX = centerX + (a * Math.cos(angleRef.current)); // x = centerX + (a * cos(theta))
            const newY = centerY + (b * Math.sin(angleRef.current)); // y = centerY + (b * sin(theta))
            electron.position.set(newX, newY, electron.position.z);
        }
    });

    return (
        <group rotation={rotation}>
            <mesh ref={electronRef} scale={0.4} receiveShadow castShadow>
                <sphereGeometry />
                <meshStandardMaterial emissive={Color.NAMES.gray}/>
            </mesh>
            <mesh scale={[7, 5, 1]}>
                <circleGeometry args={[1, 64]} />
                <meshBasicMaterial transparent side={2} attach="material-0" />
                {displayPath && <Edges color={Color.NAMES.lightgray} dashed={dashed} dashSize={1} dashScale={8} linewidth={2} />}
            </mesh>
        </group>
    );
}

export default ElectronMesh;