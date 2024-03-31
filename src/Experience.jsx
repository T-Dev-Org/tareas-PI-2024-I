import { OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./lights/lights";
import Environments from "./environments/Environments";

const Experience = () => {
    return (
        <>
            <Environments />
            <Lights />
            <OrbitControls makeDefault />
            <World />
        </>
    )
}

export default Experience;