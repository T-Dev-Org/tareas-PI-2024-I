import { Environment } from "@react-three/drei";

export default function Environments(props) {
  return <>
    <Environment
      files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
      path="/assets/cubemaps/umlanga_sunrise/"
      preset={null}
      background={true}
    />
  </>
}