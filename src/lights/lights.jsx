import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { Color, SpotLightHelper } from "three";

const Lights = () => {
  // Las lineas guias de nuestros objetos
  const spotLightRef = useRef(null)
  useHelper(spotLightRef, SpotLightHelper)

  // Las opciones que queremos configurar en Leva
  const optionsSpotLight = useMemo(() => {
    return {
      intensitySL: { value: 100, min: 0, max: 100, step: 1 },
      colorSL: { value: "#df00ff" },
      positionZSL: { value: 5, min: 0, max: 50, step: 1 },
      positionXSL: { value: 0, min: -50, max: 50, step: 1 },
      positionYSL: { value: 0, min: -50, max: 50, step: 1 },
      castShadowSL: true
    }
  }, [])

  // Obtener los parametros que se estan ajustando
  const { intensitySL, colorSL, positionZSL, positionXSL, positionYSL, castShadowSL } = useControls("Spot Light", optionsSpotLight)


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
      castShadow={castShadowSL}
      ref={spotLightRef}
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