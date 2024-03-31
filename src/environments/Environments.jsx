import { Cloud, Environment, Sky, Sparkles, Stars } from "@react-three/drei";

export default function Environments(props) {
  return <>
    {/* <Environment
      files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
      path="/assets/cubemaps/umlanga_sunrise/"
      preset={null}
      background={false}
      ground={{
        height: 20,
        scale: 300,
        radius: 300
      }}
    /> */}
    <Sky
      sunPosition={[0, 0, -1]} // El sol debajo del horizonte
      inclination={0.2} // Iluminacion de atardecer
      azimuth={180} // Angulo azimutal para  la direccion de la luz
    />
    <Sparkles
      color={"yellow"}
      count={100}
      size={4}
      scale={15}
      speed={0.5}   // Animacion de rotacion sobre un eje
    />
    <Cloud
      opacity={0.5} // Animacion de rotacion sobre su propio eje
      speed={0}
      width={50}
      depth={50}
      segments={15}
      scale={1}
      position={[0, 10, 0]}
    />
    <Stars
      speed={5}     // Animacion de parpadeo
      radius={100}  // Radio del campo de estrellas
      depth={20}    // Profundidad media default=50
      count={1000}  // Cantidad de estrellas
      factor={3}    // Tamaño de las estrellas
    />

  </>
}