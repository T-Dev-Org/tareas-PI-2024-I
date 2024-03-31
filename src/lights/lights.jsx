import { Color } from "three";

const Lights = () => {
  return <>
    {/* Luz ambiente, no es una luz explicita así que 
    NO es capaz de generar sombras */}
    <ambientLight
      // color={new Color("#8F00FF")}
      intensity={0.5}
    />
    {/* Luz direccional es como el sol, como si estuviera re lejos y produjera rayos paralelos
    Produce sombras  */}
    <directionalLight
      castShadow={true}
      color={new Color("#FFF700")}
      position={[2, 10, 0]}
      intensity={10}
    />

    {/* Point light es un punto que se lanza a todas las direcciones, es mas costosa porque en cada frame se calcula 
    Produce sombras*/}
    {/* <pointLight
      position={[0, 2, 0]}
      color={new Color("#8F00FF")}
      intensity={10}
    /> */}
    {/* Spotlight es como la luz de los carros, si puede generar sombras*/}
    {/* <spotLight
      position={[0, 3, 0]}
      angle={Math.PI / 3}
      color={"yellow"}
      intensity={10}
    /> */}
    {/* Es una luz que se pone directamente de los objetos, 
    NO produce sombras */}
    <hemisphereLight
      position={[0, 2, 0]}
      skyColor={new Color(0xFFFFFF)}
      groundColor={new Color(0x8F00FF)}
      intensity={3}
    />
  </>
}

export default Lights;