import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, Points } from "three";
import { randFloat } from "three/src/math/MathUtils.js";

type GalaxySceneProps = {
    a?: number, // Starting point of the spiral (usually 0) to simplify
    b?: number, // The distance of each curves
    theta: number // Represent the number of turns (1 full turn = 2pi)
    size?: number // Number of points
    maxSpreadX?: number,
    maxSpreadY?: number,
    maxSpreadZ?: number
};

// Archimedean Spiral:
// x = (a + b0)cos0
// y = (a + b0)sin0

function GalaxyScene({ a = 0, b = 0.5, theta, size = 1000, maxSpreadX = 1, maxSpreadY = 0.5, maxSpreadZ = 1 }: GalaxySceneProps) {
    const pointsRef = useRef<Points>(null!);

    const vertices = useMemo(() => {
        const step = theta / size;
        const points: number[] = [];
        for (let i = 0; i < theta; i += step) {
            points.push(...[
                (a + b * i) * Math.cos(i) * randFloat(1, maxSpreadX), // x
                randFloat(0, maxSpreadY), // y
                (a + b * i) * Math.sin(i) * randFloat(1, maxSpreadZ) // z
            ]);
        }
        return new Float32Array(points);
    }, [a, b, theta, size, maxSpreadX, maxSpreadY, maxSpreadZ]);

    useFrame(() => {
        const points = pointsRef.current;
        if (points) {
            points.rotateY(0.0005);
        }
    });

    return (
        <group>
            <mesh scale={2}>
                <sphereGeometry />
                <meshStandardMaterial emissive={Color.NAMES.lightyellow} emissiveIntensity={1.7} />
            </mesh>
            <points ref={pointsRef} receiveShadow castShadow>
                <bufferGeometry>
                    <bufferAttribute attach={"attributes-position"} args={[vertices, 3]}/>
                </bufferGeometry>
                <pointsMaterial color={Color.NAMES.white} size={0.15}/>
            </points>
        </group>
    );
}

export default GalaxyScene;