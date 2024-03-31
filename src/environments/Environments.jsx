import { Environment, Sky, Sparkles } from "@react-three/drei";

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

  </>
}