/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useCharacterCustomization } from "../contexts/CharacterCustomizationContext";

function Skirt(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/skirt.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group {...props} dispose={null}>
      <group scale={0.0015}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          name="Personaje_1"
          geometry={nodes.Personaje_1.geometry}
          material={materials.Piel}
          skeleton={nodes.Personaje_1.skeleton}
          morphTargetDictionary={nodes.Personaje_1.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_1.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_2"
          geometry={nodes.Personaje_2.geometry}
          material={materials.Piel2}
          skeleton={nodes.Personaje_2.skeleton}
          morphTargetDictionary={nodes.Personaje_2.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_2.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_3"
          geometry={nodes.Personaje_3.geometry}
          material={materials.Cejas}
          skeleton={nodes.Personaje_3.skeleton}
          morphTargetDictionary={nodes.Personaje_3.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_3.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_4"
          geometry={nodes.Personaje_4.geometry}
          material={materials.Dientes}
          skeleton={nodes.Personaje_4.skeleton}
          morphTargetDictionary={nodes.Personaje_4.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_4.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_5"
          geometry={nodes.Personaje_5.geometry}
          material={materials.Pelo}
          skeleton={nodes.Personaje_5.skeleton}
          morphTargetDictionary={nodes.Personaje_5.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_5.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_6"
          geometry={nodes.Personaje_6.geometry}
          material={materials.Pupila}
          skeleton={nodes.Personaje_6.skeleton}
          morphTargetDictionary={nodes.Personaje_6.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_6.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje_7"
          geometry={nodes.Personaje_7.geometry}
          material={materials.Globo}
          skeleton={nodes.Personaje_7.skeleton}
          morphTargetDictionary={nodes.Personaje_7.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje_7.morphTargetInfluences}
        />
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
          material={materials.Joyas}
          skeleton={nodes.Personaje002_1.skeleton}
          morphTargetDictionary={nodes.Personaje002_1.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje002_1.morphTargetInfluences}
        />
      </group>
      <group scale={0.0015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cloth_shape_0004.geometry}
          material={materials.Chaqueta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cloth_shape_0004_1.geometry}
          material={materials.Punos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cloth_shape_0004_2.geometry}
          material={materials.Camiseta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cloth_shape_0004_3.geometry}
          material={materials.Falda}
        />
      </group>
    </group>
  );  
}

useGLTF.preload("./models/skirt.glb");

export default Skirt;
