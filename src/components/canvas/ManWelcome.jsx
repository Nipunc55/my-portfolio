/** @format */

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Man = ({ isMobile }) => {
  const man = useGLTF("./desktop_pc/office_man_1.gltf");

  let mixer;

  useEffect(() => {
    if (man.animations.length) {
      mixer = new THREE.AnimationMixer(man.scene);
      const action = mixer.clipAction(man.animations[0]);
      // action.loop = THREE.LoopRepeat;
      action.play();
      // console.log(action);
      action.halt(6);

      // setTimeout(() => {
      // 	const _action = mixer.clipAction(man.animations[1]);
      // 	action.play();
      // }, 6000);
      man.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        console.log(clip.name);

        //
        // if (clip.name == 'idle') console.log(clip.name);
        // action.play();
        // action.play();
      });
    }

    return () => {
      console.log("component unmount");
      // Clean up the animation mixer when the component unmounts
      mixer.stopAllAction();
    };
  }, []);
  useFrame((state, delta) => {
    // console.log('use Frame');
    if (mixer) {
      mixer.update(delta);
    }
  });
  return (
    <mesh>
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
        position={isMobile ? [0, -3, -2.2] : [1, -4, -5]}
        rotation={[0, Math.PI / 3, 0]}
      />
    </mesh>
  );
};

const ManWelcome = () => {
  const [isMobile, setIsMobile] = useState(false);

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
          // frameloop='demand'
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            {/* <OrbitControls
							enableZoom={false}
							maxPolarAngle={Math.PI / 2}
							minPolarAngle={Math.PI / 2}
						/> */}
            <Man isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
};

export default ManWelcome;
