import { OrbitControls } from "@react-three/drei";
import World from "./world/World";
import { Color } from "three";

const Experience = () => {
    return (
        <>
            <ambientLight
                // color={new Color("#8F00FF")}
                intensity={0.1}
            />

            {/* <directionalLight
                color={new Color("#FFF700")}
                position={[2, 10, 0]}
                intensity={10}
            /> */}

            {/* Point light es mas costosa porque en cada frame se calcula */}
            <pointLight
                position={[0, 2, 0]}
                color={new Color("#8F00FF")}
                intensity={10}
            />
            <OrbitControls makeDefault />
            <World />
        </>
    )
}

export default Experience;