import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
  const boxRef = useRef(null);

  useFrame((state, delta) => {
    boxRef.current.rotation.x += 1 * delta;
  })

  return (
    <>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls makeDefault />
      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </>
  )
}

export default Experience;

// // Este es el controlador principal

// const Experience = ({title, subtitle}) => {
//   return(
//     <div>
//       <h1 className="title"> {title} </h1>
//       <span> {subtitle} </span>
//     </div>
//   )
// }

// // Exporta un valor unico
// export default Experience; 

// // Exporta multiples valores
// // export {add, multiply, substract, divide}; 