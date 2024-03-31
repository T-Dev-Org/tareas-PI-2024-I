import { useControls } from "leva";
import { useMemo } from "react";
import { Color } from "three";

const Lights = () => {

  // Las opciones que queremos configurar en Leva
  const optionsSpotLight = useMemo(() => {
    return {
      intensitySL: { value: 100, min: 0, max: 100, step: 1 },
      colorSL: { value: "#df00ff" },
      positionZSL: { value: 8, min: 0, max: 100, step: 1 },
      positionXSL: { value: 10, min: -100, max: 100, step: 1 },
      positionYSL: { value: 5, min: -100, max: 100, step: 1 },
    }
  }, [])

  // Obtener los parametros que se estan ajustando
  const { intensitySL, colorSL, positionZSL, positionXSL, positionYSL } = useControls("Spot Light", optionsSpotLight)


  return <>
    {/* Luz ambiente, no es una luz explicita así que 
    NO es capaz de generar sombras */}
    <ambientLight
      // color={new Color("#8F00FF")}
      intensity={1}
    />
    {/* Luz direccional es como el sol, como si estuviera re lejos y produjera rayos paralelos
    Produce sombras  */}
    <directionalLight
      castShadow={true}
      color={new Color("#FFF700")}
      position={[2, 10, 0]}
      intensity={2}
    />

    {/* Point light es un punto que se lanza a todas las direcciones, es mas costosa porque en cada frame se calcula 
    Produce sombras*/}
    {/* <pointLight
      position={[0, 2, 0]}
      color={new Color("#8F00FF")}
      intensity={10}
    /> */}
    {/* Spotlight es como la luz de los carros, si puede generar sombras*/}
    <spotLight
      position={[positionYSL, positionZSL, positionXSL]}
      angle={Math.PI / 3}
      color={colorSL}
      intensity={intensitySL}
    />
    {/* Es una luz que se pone directamente de los objetos, 
    NO produce sombras */}
    <hemisphereLight
      position={[0, 2, 0]}
      skyColor={new Color(0xFFFFFF)}
      groundColor={new Color(0x8F00FF)}
      intensity={1}
    />
  </>
}

export default Lights;