import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import World from "./world/World";

const Experience = () => {
    const boxRef = useRef(null);

    return (
        <>
            <ambientLight />
            <directionalLight position={[0, 10, 5]} />
            <OrbitControls makeDefault />
            <World />
        </>
    )
}

export default Experience;