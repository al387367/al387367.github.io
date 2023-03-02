/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useCharacterCustomization } from "../contexts/CharacterCustomizationContext";

function Urban(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/urban.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group {...props} dispose={null}>
      <group scale={0.0015}>
        <primitive object={nodes.mixamorigHips} />
        <primitive object={nodes.neutral_bone} />
        <skinnedMesh
          name="Personaje002"
          geometry={nodes.Personaje002.geometry}
          material={materials.Piel}
          skeleton={nodes.Personaje002.skeleton}
          morphTargetDictionary={nodes.Personaje002.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje002.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje002_1"
          geometry={nodes.Personaje002_1.geometry}
          material={materials.Piel2}
          skeleton={nodes.Personaje002_1.skeleton}
          morphTargetDictionary={nodes.Personaje002_1.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje002_1.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje002_2"
          geometry={nodes.Personaje002_2.geometry}
          material={materials.Joyas}
          skeleton={nodes.Personaje002_2.skeleton}
          morphTargetDictionary={nodes.Personaje002_2.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje002_2.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje002_3"
          geometry={nodes.Personaje002_3.geometry}
          material={materials.Cejas}
          skeleton={nodes.Personaje002_3.skeleton}
          morphTargetDictionary={nodes.Personaje002_3.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje002_3.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje002_4"
          geometry={nodes.Personaje002_4.geometry}
          material={materials.Dientes}
          skeleton={nodes.Personaje002_4.skeleton}
          morphTargetDictionary={nodes.Personaje002_4.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje002_4.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje002_5"
          geometry={nodes.Personaje002_5.geometry}
          material={materials.Pelo}
          skeleton={nodes.Personaje002_5.skeleton}
          morphTargetDictionary={nodes.Personaje002_5.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje002_5.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje002_6"
          geometry={nodes.Personaje002_6.geometry}
          material={materials.Pupila}
          skeleton={nodes.Personaje002_6.skeleton}
          morphTargetDictionary={nodes.Personaje002_6.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje002_6.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje002_7"
          geometry={nodes.Personaje002_7.geometry}
          material={materials.Globo}
          skeleton={nodes.Personaje002_7.skeleton}
          morphTargetDictionary={nodes.Personaje002_7.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje002_7.morphTargetInfluences}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Puños.geometry}
        material={materials["Material.004"]}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sudadera.geometry}
        material={materials.Sudadera}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Botones.geometry}
        material={materials.Sudadera}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pantalones.geometry}
        material={materials["Material.003"]}
        scale={0.0015}
      />
    </group>
  );
}

useGLTF.preload("./models/urban.glb");

export default Urban;
