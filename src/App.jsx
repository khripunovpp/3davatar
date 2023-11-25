import {Canvas} from "@react-three/fiber";
import './App.scss';
import {OrbitControls} from "@react-three/drei";
import {Me} from "./Me.jsx";

function App() {
  return (
    <Canvas shadows gl={{
      preserveDrawingBuffer: true,
    }}>
      <OrbitControls maxPolarAngle={Math.PI / 2} makeDefault/>
      <Me/>
    </Canvas>
  )
}

export default App
