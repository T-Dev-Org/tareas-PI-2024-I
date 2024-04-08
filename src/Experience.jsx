import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import AnimatedFloorGroup from "./floor/AnimatedFloorGroup";
import World from "./world/World";
import { Cat } from "./world/cat/Cat";

const Experience = () => {
    const boxRef = useRef(null);

    return (
        <>
            <ambientLight />
            <directionalLight position={[0, 10, 5]} />
            <OrbitControls
                makeDefault
                cameraPosition={[10000, 10000, 10000]}
                target={[0, 0, 80]}
            />
            <World />
            <Cat />
            <AnimatedFloorGroup />
        </>
    )
}

export default Experience;