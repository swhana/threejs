import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ImportModel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    //Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("white"); //배경색
    //Light
    const pointLight = new THREE.PointLight(0xffffff, 10);
    scene.add(pointLight); //scene에 light 추가
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight); //scene에 light 추가
    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    scene.add(directionalLight); //scene에 light 추가

    //Camera
    const camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 10); //x, y, z 카메라축

    const controls = new OrbitControls(camera, canvasRef.current!);
    controls.update();

    //Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      antialias: true,
    });
    renderer.outputEncoding = THREE.sRGBEncoding; //gltf파일 색상 인코딩
    //이거 넣어야 모델이 안깨짐
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); //화면 크기

    //Model Loader
    const loader = new GLTFLoader();
    loader.load(
      "/src/assets/ferrari/scene.gltf",
      //모델 로딩에 성공했을 경우 gltf.scene을 scene에 추가
      function (gltf) {
        scene.add(gltf.scene);
        renderer.render(scene, camera);

        //animation
        const animate = () => {
          requestAnimationFrame(animate);
          // gltf.scene.rotation.x += 0.01;
          gltf.scene.rotation.y += 0.005;
          // gltf.scene.rotation.z += 0.01;
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }, []);

  return <canvas ref={canvasRef} />;
}
