import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import World from "./world/World";
import Sus from "./characters/Sus";

const Experience = () => {
    const boxRef = useRef(null);

    return (
        <>
            <ambientLight />
            <directionalLight position={[0, 10, 5]} />
            <OrbitControls makeDefault />
            <World />
            <Sus />
        </>
    )
}

export default Experience;