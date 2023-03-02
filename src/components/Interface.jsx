import { Affix, Button, Group } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconCamera } from "@tabler/icons";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";
import {
  CameraModes,
  useCharacterCustomization,
} from "../contexts/CharacterCustomizationContext"
import { BottomConfigurator } from "./BottomConfigurator";
import { expNextOutfit, expPrevOutfit } from "./Experience";
import MAIN from "/src/main.jsx";

export var cameraMode = CameraModes.FREE; 

const Interface = () => {  
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  const { cameraMode, setCameraMode, setTakeScreenshot } =
    useCharacterCustomization();
    return (
      <>
      <data>
        <img className="arrow-button-left-def" onClick={() => clickLeftArrow() && setCameraMode(CameraModes.BOTTOM) && setAnimationIndex(0)}></img>
      </data>
  
      <data>
        <img className="arrow-button-right-def" onClick={() => clickRightArrow() && setCameraMode(CameraModes.BOTTOM) && setAnimationIndex(0)}></img>
      </data>
        
      </>
    );
};

const clickLeftArrow= () => {  
  expPrevOutfit();
  prevOutfit();
  <BottomConfigurator />
  cameraMode = CameraModes.BOTTOM;

}

const clickRightArrow= () => {  
  expNextOutfit();
  nextOutfit();
  <BottomConfigurator />
  cameraMode = CameraModes.BOTTOM;
}

export default Interface;
