import { useThree } from "@react-three/fiber";
import React, { useState } from "react";
import ReactDOM from "react-dom";
//import { useCharacterCustomization } from "../contexts/CharacterCustomizationContext";
import { CameraControls } from "./CameraControls";
import { App } from "/src/App";
import Woman from "./Woman";
import Graduate from "./Graduate";
import Urban from "./Urban";
import Beisbol from "./Beisbol";
import Skirt from "./Skirt";
import './OutfitStyles.scss';
import { cameraMode } from "./Interface";
import { CameraModes } from "../contexts/CharacterCustomizationContext";
import { renderReactDom } from "/src/main.jsx";

var outfitNum = 0;

const Experience = () => {
  const gl = useThree((state) => state.gl);

  /*const { takeScreenshot, setTakeScreenshot } = useCharacterCustomization();
  useEffect(() => {
    if (takeScreenshot) {
      screenshot();
      setTakeScreenshot(false);
    }
  }, [takeScreenshot]);

  const screenshot = () => {
    const link = document.createElement("a");
    link.setAttribute("download", "My NINART Outfit.png");
    link.setAttribute(
      "href",
      gl.domElement
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();
  };
*/
  console.log("BROMOMENTO: " + outfitNum);

  if (outfitNum == 0) {

  return (
    <>
      <CameraControls />
      <ambientLight />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <group position={[0, -1, 0]} receiveShadow>
          <Woman name={'NudeModel'} className={'Woman'} style={'Woman'} />       
      </group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );

  }

  if (outfitNum == 1) {

    return (
      <>
        <CameraControls />
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <group position={[0, -1, 0]} receiveShadow>
          <Graduate name={'GraduateModel'} className={'Graduate'} style={'Graduate'} />
        </group>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </>
    );
  
    }

    if (outfitNum == 2) {

      return (
        <>
          <CameraControls />
          <ambientLight />
          <directionalLight
            position={[-5, 5, 5]}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <group position={[0, -1, 0]} receiveShadow>
            <Urban name={'UrbanModel'} className={'Urban'} style={'Urban'} />
          </group>
          <mesh
            rotation={[-0.5 * Math.PI, 0, 0]}
            position={[0, -1, 0]}
            receiveShadow
          >
            <planeBufferGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>
        </>
      );
    
      }

      if (outfitNum == 3) {

        return (
          <>
            <CameraControls />
            <ambientLight />
            <directionalLight
              position={[-5, 5, 5]}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <group position={[0, -1, 0]} receiveShadow>
              <Skirt name={'SkirtModel'} className={'Skirt'} style={'Skirt'} />
            </group>
            <mesh
              rotation={[-0.5 * Math.PI, 0, 0]}
              position={[0, -1, 0]}
              receiveShadow
            >
              <planeBufferGeometry args={[10, 10, 1, 1]} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>
          </>
        );
      
        }

        else {

          return (
            <>
              <CameraControls />
              <ambientLight />
              <directionalLight
                position={[-5, 5, 5]}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />
              <group position={[0, -1, 0]} receiveShadow>
                <Beisbol name={'BeisbolModel'} className={'Beisbol'} style={'Beisbol'} />
              </group>
              <mesh
                rotation={[-0.5 * Math.PI, 0, 0]}
                position={[0, -1, 0]}
                receiveShadow
              >
                <planeBufferGeometry args={[10, 10, 1, 1]} />
                <shadowMaterial transparent opacity={0.2} />
              </mesh>
            </>
          );
        
    }
};

export const expNextOutfit = () => {
  console.log("NEXT OUTFIT; CURRENT WAS " + outfitNum)
  if (outfitNum == 4) outfitNum = 1;
  else outfitNum++;
  useForceUpdate();
  console.log("forzeao");
};

export const expPrevOutfit = () => {
  console.log("PREVIOUS OUTFIT; CURRENT WAS " + outfitNum)
  if (outfitNum == 0 || outfitNum == 1) outfitNum = 4;
  else outfitNum--;
  useForceUpdate();
};

import { MantineProvider } from "@mantine/core";

function useForceUpdate(){
  renderReactDom();
}

export default Experience;
