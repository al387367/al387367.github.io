import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Experience from "./components/Experience";
import Interface from "./components/Interface";

export function App() {

  return (
    <>
      <Canvas
        camera={{ position: [0, 1.7, 3.5], fov: 50 }}
        shadows
        gl={{ preserveDrawingBuffer: true }}
      >
        <Experience />
      </Canvas>
      <Interface />
    </>
  );

}

export default App;