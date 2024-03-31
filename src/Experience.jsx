import { OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./lights/lights";

const Experience = () => {
    return (
        <>
            <Lights />
            <OrbitControls makeDefault />
            <World />
        </>
    )
}

export default Experience;