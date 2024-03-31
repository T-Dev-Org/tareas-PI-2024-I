import { OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./lights/lights";
import Environments from "./environments/Environments";
import { Perf } from "r3f-perf";

const Experience = () => {
    return (
        <>
            <Perf position="top-left" />
            <Environments />
            <Lights />
            <OrbitControls makeDefault />
            <World />
        </>
    )
}

export default Experience;