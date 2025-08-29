import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useProgress, Html, Wireframe } from "@react-three/drei";
import styles from "./Model.module.css";
import { color } from "three/tsl";
import * as THREE from "three";

function GltfModel(props) {
  const gltf = useGLTF("/models/Dexter.glb");
  return <primitive object={gltf.scene} {...props}/>;
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white' }}>
        Loading: {Math.round(progress)}%
      </div>
    </Html>
  );
}

export default function Model() {
  return (
    <div className={styles.modelViewer}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 } } dpr={[0.1, 0.7]} gl={{ antialias: false }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={<Loader />}>
          <GltfModel position={[0, -7.5, 0]} rotation={[-90, 0, 0]} scale={3.5} />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
