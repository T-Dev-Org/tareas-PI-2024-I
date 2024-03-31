import { BakeShadows, OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./lights/lights";
import Environments from "./environments/Environments";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

const Experience = () => {
    return (
        <>
            <Perf position="top-left" />
            <OrbitControls makeDefault />
            <BakeShadows />

            <Suspense fallback={null}>
                <Environments />
                <Lights />
                <World />
            </Suspense>

        </>
    )
}

export default Experience;