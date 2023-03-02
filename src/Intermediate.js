import commonjs from '@rollup/plugin-commonjs';
import React, { Component } from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {SSAOShader} from 'three/examples/js/shaders/SSAOShader';

var current3DScene;

function setCurrent3DScene(getScene){
    current3DScene = getScene;
}

function getCurrent3DScene(){
    return loaded.scene;
}