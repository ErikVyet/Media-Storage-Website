import { useEffect, useState } from "react";
import { Color } from "three";

type ComputerScreenMeshProps = {
    isActive?: boolean
}

function ComputerScreenMesh({ isActive = false }: ComputerScreenMeshProps) {
    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.src = "/src/assets/videos/once_human.mp4";
        vid.crossOrigin = "anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.playsInline = true;
        return vid;
    });

    useEffect(() => {
        if (isActive && video != null) {
            video.play();
        } 
        else if (!isActive && video != null) {
            video.pause();
        }
    }, [isActive, video]);

    return (
        <mesh receiveShadow position={[-1.495, -0.05, 5.1]} rotation={[Math.PI / 2, Math.PI, 0]}>
            <planeGeometry args={[1.16, 0.98]} />
            {isActive ? (
                <meshBasicMaterial color={Color.NAMES.white} toneMapped={false}>
                    <videoTexture attach={"map"} args={[video]} />
                </meshBasicMaterial>
            ) : <meshBasicMaterial color={Color.NAMES.black} />}
        </mesh>
    );
}

export default ComputerScreenMesh;