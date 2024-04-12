/** @format */

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  TransformControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";
import { useSnapshot } from "valtio";
import { state } from "./store";
import { easing } from "maath";
const Man = ({ isMobile, clicked }) => {
  const man = useGLTF("./desktop_pc/office_man_1.gltf");

  let mixer;
  useEffect(() => {}, [clicked]);
  useEffect(() => {
    if (man.animations.length) {
      mixer = new THREE.AnimationMixer(man.scene);
      const action = mixer.clipAction(man.animations[0]);
      // action.loop = THREE.LoopRepeat;
      // action.play();
      // console.log(action);
      // action.halt(6);

      // setTimeout(() => {
      // 	const _action = mixer.clipAction(man.animations[1]);
      // 	action.play();
      // }, 6000);
      man.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);

        //
        if (clip.name == "salute") {
          action.setLoop(1, 1);
        }
        action.play();
        // console.log(action);
      });
    }

    return () => {
      // console.log("component unmount");
      // Clean up the animation mixer when the component unmounts
      mixer.stopAllAction();
    };
  }, [man, clicked]);

  useFrame((state, delta) => {
    if (mixer) {
      // console.log("use frame");
      mixer.update(delta);
    }
  });
  const handleMouseEnter = () => {
    console.log("mouse hover");
    // setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("mouse hover leave");
    // setIsHovered(false);
  };
  return (
    <mesh onPointerOut={handleMouseEnter} onPointerOver={handleMouseLeave}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-10, 60, 10]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={man.scene}
        scale={isMobile ? 0.7 : 1}
        // position={isMobile ? [-3, -3, -2.2] : [1, -4, -5]}
        position={isMobile ? [-10, -8, -1] : [1, -4, -5]}
        rotation={[0, Math.PI / 3, 0]}
      />
    </mesh>
  );
};

const ManWelcome = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState(false);
  const canvasRef = useRef(null);
  const handleClick = (event) => {
    // console.log(event);
    setClicked((pre) => !pre);
  };
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Canvas
          ref={canvasRef}
          // frameloop='demand'
          onClick={handleClick}
          onFocus={handleClick}
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            {/* <OrbitControls
              enableZoom={false}
              maxPolarAngle={0}
              minPolarAngle={Math.PI / 2}
            /> */}
            {/* <TransformControls /> */}
            <CameraRig>
              <Man isMobile={isMobile} clicked={clicked} />
            </CameraRig>
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
};
function CameraRig({ children }) {
  const group = useRef();
  const snap = useSnapshot(state);
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [20, 3, 5], 0.25, delta);
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 80, -state.pointer.x / 80, 0],
      0.15,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}
export default ManWelcome;
