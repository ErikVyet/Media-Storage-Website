import { useGLTF } from "@react-three/drei";
import { Euler, Mesh, Vector3 } from "three";
import TableMesh from "./mesh/TableMesh";
import DrawerMesh from "./mesh/DrawerMesh";
import PhoneMesh from "./mesh/PhoneMesh";
import PhoneTubeMesh from "./mesh/PhoneTubeMesh";
import FolderMesh from "./mesh/FolderMesh";
import ChairMesh from "./mesh/ChairMesh";
import ChairSpineMesh from "./mesh/ChairSpineMesh";
import CaseMesh from "./mesh/CaseMesh";
import ComputerMesh from "./mesh/ComputerMesh";
import KeyboardMesh from "./mesh/KeyboardMesh";
import CactusMesh from "./mesh/CactusMesh";

function OfficeScene() {
    const { nodes } = useGLTF("/src/assets/models/office.glb");
    
    const Cactus_mCactus_0 = { mesh: nodes.Cactus_mCactus_0 as Mesh, position: new Vector3(-3.75, 0, 3.72), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, -0.5) };
    
    const Case_mPC_0 = { mesh: nodes.Case_mPC_0 as Mesh, position: new Vector3(-1.5, -0.7, 4), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    const Computer_mPC_0 = { mesh: nodes.Computer_mPC_0 as Mesh, position: new Vector3(-1.5, -0.7, 4), scale: new Vector3(0.8, 0.8, 0.8), rotation: new Euler(0, 0, 0) };
    const Keyboard_mPC_0 = { mesh: nodes.Keyboard_mPC_0 as Mesh, position: new Vector3(-0.3, 1.1, 3.72), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    
    const Chair_mChair_0 = { mesh: nodes.Chair_mChair_0 as Mesh, position: new Vector3(-0.4, 3.3, 0), scale: new Vector3(4, 4, 4), rotation: new Euler(0, 0, 0) };
    const ChairSpine_mChair_0 = { mesh: nodes.ChairSpine_mChair_0 as Mesh, position: new Vector3(-0.4, 3.3, 2.4), scale: new Vector3(4, 4, 4), rotation: new Euler(0, 0, 0) };
    
    const Folder001_mFolder_0 = { mesh: nodes.Folder001_mFolder_0 as Mesh, position: new Vector3(0.4, -0.7, 4.22), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    const Folder002_mFolder_0 = { mesh: nodes.Folder002_mFolder_0 as Mesh, position: new Vector3(0.7, -0.7, 4.22), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    const Folder003_mFolder_0 = { mesh: nodes.Folder003_mFolder_0 as Mesh, position: new Vector3(1, -0.7, 4.22), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    const Folder004_mFolder_0 = { mesh: nodes.Folder004_mFolder_0 as Mesh, position: new Vector3(1.3, -0.7, 4.22), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    const Folder_mFolder_0 = { mesh: nodes.Folder_mFolder_0 as Mesh, position: new Vector3(0.2, -0.7, 4.22), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    
    const Phone_mPhone_0 = { mesh: nodes.Phone_mPhone_0 as Mesh, position: new Vector3(-3.3, 1.2, 3.72), scale: new Vector3(0.3, 0.3, 0.3), rotation: new Euler(0, 0, -0.8) };
    const _Tube_mPhone_0 = { mesh: nodes._Tube_mPhone_0 as Mesh, position: new Vector3(-2.5, 1.2, 3.9), scale: new Vector3(1, 1, 1), rotation: new Euler(0.35, 0, 0) };
    
    const Table_mTable_0 = { mesh: nodes.Table_mTable_0 as Mesh, position: new Vector3(0, 0, 0), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    
    const drawer_mTable_0 = { mesh: nodes.drawer_mTable_0 as Mesh, position: new Vector3(-3.415, 0.35, 0.7), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    const drawer2_mTable_0 = { mesh: nodes.drawer2_mTable_0 as Mesh, position: new Vector3(-3.415, 0.35, 0.7), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };
    const drawer3_mTable_0 = { mesh: nodes.drawer3_mTable_0 as Mesh, position: new Vector3(-3.415, 0.35, 0.7), scale: new Vector3(1, 1, 1), rotation: new Euler(0, 0, 0) };

    return (
        <group position={[1, 0, -2]} rotation={[-Math.PI / 2, 0, 0]} >
            <TableMesh geometry={Table_mTable_0.mesh.geometry} material={Table_mTable_0.mesh.material} position={Table_mTable_0.position} scale={Table_mTable_0.scale} rotation={Table_mTable_0.rotation} />
            <DrawerMesh geometry={drawer_mTable_0.mesh.geometry} material={drawer_mTable_0.mesh.material} position={drawer_mTable_0.position} scale={drawer_mTable_0.scale} rotation={drawer_mTable_0.rotation} />
            <DrawerMesh geometry={drawer2_mTable_0.mesh.geometry} material={drawer2_mTable_0.mesh.material} position={drawer2_mTable_0.position} scale={drawer2_mTable_0.scale} rotation={drawer2_mTable_0.rotation} />
            <DrawerMesh geometry={drawer3_mTable_0.mesh.geometry} material={drawer3_mTable_0.mesh.material} position={drawer3_mTable_0.position} scale={drawer3_mTable_0.scale} rotation={drawer3_mTable_0.rotation} />
            <PhoneMesh geometry={Phone_mPhone_0.mesh.geometry} material={Phone_mPhone_0.mesh.material} position={Phone_mPhone_0.position} scale={Phone_mPhone_0.scale} rotation={Phone_mPhone_0.rotation} />
            <PhoneTubeMesh geometry={_Tube_mPhone_0.mesh.geometry} material={_Tube_mPhone_0.mesh.material} position={_Tube_mPhone_0.position} scale={_Tube_mPhone_0.scale} rotation={_Tube_mPhone_0.rotation} />
            <FolderMesh geometry={Folder001_mFolder_0.mesh.geometry} material={Folder001_mFolder_0.mesh.material} position={Folder001_mFolder_0.position} scale={Folder001_mFolder_0.scale} rotation={Folder001_mFolder_0.rotation} />
            <FolderMesh geometry={Folder002_mFolder_0.mesh.geometry} material={Folder002_mFolder_0.mesh.material} position={Folder002_mFolder_0.position} scale={Folder002_mFolder_0.scale} rotation={Folder002_mFolder_0.rotation} />
            <FolderMesh geometry={Folder003_mFolder_0.mesh.geometry} material={Folder003_mFolder_0.mesh.material} position={Folder003_mFolder_0.position} scale={Folder003_mFolder_0.scale} rotation={Folder003_mFolder_0.rotation} />
            <FolderMesh geometry={Folder004_mFolder_0.mesh.geometry} material={Folder004_mFolder_0.mesh.material} position={Folder004_mFolder_0.position} scale={Folder004_mFolder_0.scale} rotation={Folder004_mFolder_0.rotation} />
            <FolderMesh geometry={Folder_mFolder_0.mesh.geometry} material={Folder_mFolder_0.mesh.material} position={Folder_mFolder_0.position} scale={Folder_mFolder_0.scale} rotation={Folder_mFolder_0.rotation} />
            <ChairMesh geometry={Chair_mChair_0.mesh.geometry} material={Chair_mChair_0.mesh.material} position={Chair_mChair_0.position} scale={Chair_mChair_0.scale} rotation={Chair_mChair_0.rotation} />
            <ChairSpineMesh geometry={ChairSpine_mChair_0.mesh.geometry} material={ChairSpine_mChair_0.mesh.material} position={ChairSpine_mChair_0.position} scale={ChairSpine_mChair_0.scale} rotation={ChairSpine_mChair_0.rotation} />
            <CaseMesh geometry={Case_mPC_0.mesh.geometry} material={Case_mPC_0.mesh.material} position={Case_mPC_0.position} scale={Case_mPC_0.scale} rotation={Case_mPC_0.rotation} />
            <ComputerMesh geometry={Computer_mPC_0.mesh.geometry} material={Computer_mPC_0.mesh.material} position={Computer_mPC_0.position} scale={Computer_mPC_0.scale} rotation={Computer_mPC_0.rotation} />
            <KeyboardMesh geometry={Keyboard_mPC_0.mesh.geometry} material={Keyboard_mPC_0.mesh.material} position={Keyboard_mPC_0.position} scale={Keyboard_mPC_0.scale} rotation={Keyboard_mPC_0.rotation} />
            <CactusMesh geometry={Cactus_mCactus_0.mesh.geometry} material={Cactus_mCactus_0.mesh.material} position={Cactus_mCactus_0.position} scale={Cactus_mCactus_0.scale} rotation={Cactus_mCactus_0.rotation} />
        </group>
    );
}

export default OfficeScene;