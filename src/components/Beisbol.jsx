/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import { useCharacterCustomization } from "../contexts/CharacterCustomizationContext";
import './OutfitStyles.scss';

function Beisbol(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/beisbol.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group {...props} dispose={null}>
      <group scale={0.0015}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          name="Ombligo"
          geometry={nodes.Ombligo.geometry}
          material={materials.Piel2}
          skeleton={nodes.Ombligo.skeleton}
          morphTargetDictionary={nodes.Ombligo.morphTargetDictionary}
          morphTargetInfluences={nodes.Ombligo.morphTargetInfluences}
        />
        <skinnedMesh
          name="Personaje001"
          geometry={nodes.Personaje001.geometry}
          material={materials.Dientes}
          skeleton={nodes.Personaje001.skeleton}
          morphTargetDictionary={nodes.Personaje001.morphTargetDictionary}
          morphTargetInfluences={nodes.Personaje001.morphTargetInfluences}
        />
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cloth_parent002.geometry}
        material={materials.M2}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cloth_parent003.geometry}
        material={materials.M6}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cloth_parent001.geometry}
        material={materials.M2}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Costuras.geometry}
        material={materials.Cejas}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cloth_parent.geometry}
        material={materials["Material.004"]}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pantalones.geometry}
        material={materials.Denim}
        scale={0.0015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cloth_parent005.geometry}
        material={materials["Material.002"]}
        scale={0.0015}
      />
    </group>
  );
}

useGLTF.preload("./models/beisbol.glb");

export default Beisbol;