import { Color, Vector3 } from "three";

function NuclearMesh() {

    const neutrons = [
        { position: new Vector3(1, -1, 0) },
        { position: new Vector3(-1, -1, 0) },
        { position: new Vector3(0, 0, 1) },
        { position: new Vector3(0, 0, -1) },
    ];
    const protons = [
        { position: new Vector3(0, -0.75, -0.75) },
        { position: new Vector3(0, -0.75, 0.75) },
        { position: new Vector3(0.75, 0, 0) },
        { position: new Vector3(-0.75, 0, 0) },
    ];

    return (
        <group>
            {neutrons.map((neutron, index) =>
                <mesh position={neutron.position} key={index}>
                    <sphereGeometry />
                    <meshStandardMaterial color={Color.NAMES.deepskyblue} emissive={Color.NAMES.deepskyblue} emissiveIntensity={1.2} />
                </mesh>
            )}
            {protons.map((proton, index) =>
                <mesh position={proton.position} key={index}>
                    <sphereGeometry />
                    <meshStandardMaterial color={Color.NAMES.red} emissive={Color.NAMES.red} emissiveIntensity={1.2} />
                </mesh>
            )}
        </group>
    );
}

export default NuclearMesh;