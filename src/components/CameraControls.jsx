import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CameraModes
} from "../contexts/CharacterCustomizationContext";


import { useRef } from "react";
import * as THREE from "three";

const cameraPositions = {
  [CameraModes.HEAD]: {
    position: new THREE.Vector3(0, 0.5, 1),
    target: new THREE.Vector3(0, 0.5, 0),
  },
  [CameraModes.TOP]: {
    position: new THREE.Vector3(-0.5, 0.7, 1.5),
    target: new THREE.Vector3(0, 0.2, 0),
  },
  [CameraModes.BOTTOM]: {
    position: new THREE.Vector3(0, 1.7, 3.5),
    target: new THREE.Vector3(0, 0.0, 0),
  },
};

import * as INTERFACE from "/src/components/Interface";

export const CameraControls = () => {
  const orbitControls = useRef();

  useFrame((state, delta) => {
    if (INTERFACE.cameraMode === CameraModes.FREE) {
      return;
    }
    state.camera.position.lerp(cameraPositions[CameraModes.BOTTOM].position, 3 * delta);
    orbitControls.current.target.lerp(
      cameraPositions[CameraModes.BOTTOM].target,
      3 * delta
    );
  });

  return (
    <>
      <OrbitControls
        ref={orbitControls}
        onStart={() => {
          INTERFACE.cameraMode = CameraModes.FREE;
        }}
      />
    </>
  );
};
