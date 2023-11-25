import {Canvas} from "@react-three/fiber";
import './App.scss';
import {OrbitControls, Stats, StatsGl} from "@react-three/drei";
import {Me} from "./Me.jsx";

function App() {
  return (
    <Canvas shadows gl={{
      preserveDrawingBuffer: true,
    }}>
      <gridHelper/>
      <gridHelper rotation-x={Math.PI / 2} position-y={0}/>
      <Stats/>
      <StatsGl/>
      <OrbitControls enableDamping={true}
                     maxPolarAngle={1.5}
                     minPolarAngle={1}
                     maxAzimuthAngle={.2}
                     minAzimuthAngle={-.2}
                     enableZoom={false}
                     makeDefault/>
      <directionalLight position={[0, 1, 1]} intensity={5} theatreKey={'light'}/>
      <directionalLight position={[0, -1, 1]} intensity={5} theatreKey={'light'}/>
      <Me/>
    </Canvas>
  )
}

export default App
