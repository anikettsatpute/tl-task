import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default function Plane() {
  const gltf = useLoader(GLTFLoader, "/model.gltf");
  return (
    <div className="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <mesh>
            <primitive object={gltf.scene}></primitive>
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              zoomSpeed={0.6}
              panSpeed={0.5}
              rotateSpeed={0.4}
            />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
