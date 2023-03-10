/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useCharacterCustomization } from "../contexts/CharacterCustomizationContext";
import '/src/style.css';

function Graduate(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/graduate.glb");
  const { actions } = useAnimations(animations, group);

  return (
    <group {...props} dispose={null} style={"Graduate"}>
      <group scale={0.0015}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
        className={"Graduate"}
          name="Personaje_1"
          style={{color: "red"}}
          geometry={nodes.Personaje_1.geometry}
          material={materials.Piel}
          skeleton={nodes.Personaje_1.skeleton}
          morphTargetDictionary={nodes.Personaje_1.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_1.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_2"
          style={{color: "red"}}
          geometry={nodes.Personaje_2.geometry}
          material={materials.Piel2}
          skeleton={nodes.Personaje_2.skeleton}
          morphTargetDictionary={nodes.Personaje_2.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_2.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_3"
          geometry={nodes.Personaje_3.geometry}
          material={materials.Joyas}
          skeleton={nodes.Personaje_3.skeleton}
          morphTargetDictionary={nodes.Personaje_3.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_3.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_4"
          geometry={nodes.Personaje_4.geometry}
          material={materials.Cejas}
          skeleton={nodes.Personaje_4.skeleton}
          morphTargetDictionary={nodes.Personaje_4.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_4.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_5"
          geometry={nodes.Personaje_5.geometry}
          material={materials.Dientes}
          skeleton={nodes.Personaje_5.skeleton}
          morphTargetDictionary={nodes.Personaje_5.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_5.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_6"
          geometry={nodes.Personaje_6.geometry}
          material={materials.Pelo}
          skeleton={nodes.Personaje_6.skeleton}
          morphTargetDictionary={nodes.Personaje_6.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_6.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_7"
          geometry={nodes.Personaje_7.geometry}
          material={materials.Pupila}
          skeleton={nodes.Personaje_7.skeleton}
          morphTargetDictionary={nodes.Personaje_7.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_7.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_8"
          geometry={nodes.Personaje_8.geometry}
          material={materials.Globo}
          skeleton={nodes.Personaje_8.skeleton}
          morphTargetDictionary={nodes.Personaje_8.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_8.morphTargetInfluences}
        />
      </group>
      <group position={[-1.55, 9.55, 2.12]} rotation={[1.76, -0.04, 0.43]} scale={0.0015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Cristal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Joyas}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Beca.geometry}
        material={materials.Beca}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cloth_parent.geometry}
        material={materials.Toga}
        scale={0.0015}
      />
    </group>
  );
}

useGLTF.preload("./models/graduate.glb");

export default Graduate;
