import React, { useState, useEffect } from "react";
import * as THREE from "three";

export default function Line(): any {
  //Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();

  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);
  scene.add(line);
  renderer.render(scene, camera);
}
