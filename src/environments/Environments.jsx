import { Environment } from "@react-three/drei";

export default function Environments(props) {
  return <>
    <Environment
      preset="night"
      background={true}
    />
  </>
}