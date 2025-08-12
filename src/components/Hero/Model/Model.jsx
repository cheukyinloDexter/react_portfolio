import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Model = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      0.1,
      500
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight
    );
    containerRef.current.appendChild(renderer.domElement);

    // Add OrbitControls for camera interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Add lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    scene.add(hemiLight);

    // Load the texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      "/models/saba/textures/saba_main_baseColor.png", // Path to the texture
      () => {
        console.log("Texture loaded successfully");
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the texture:", error);
      }
    );

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load(
      "/models/saba/scene.gltf",
      (gltf) => {
        const object = gltf.scene;

        // Apply the texture to all meshes in the model
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
              map: texture, // Apply the loaded texture
            });
          }
        });

        object.scale.set(1.5, 1.5, 1.5); // Adjust scale to fit the container
        object.position.set(0, -0.5, 0); // Adjust position to center the model
        scene.add(object);

            // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      object.rotation.x += 0.01;
      object.rotation.y += 0.02;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // // Add a rotating cube for debugging purposes
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // // Animation loop
    // const animate = () => {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.02;
    //   controls.update();
    //   renderer.render(scene, camera);
    // };
    // animate();

    // Handle window resize
    const handleWindowResize = () => {
      camera.aspect =
        containerRef.current.offsetWidth / containerRef.current.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.offsetWidth,
        containerRef.current.offsetHeight
      );
    };
    window.addEventListener("resize", handleWindowResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      controls.dispose();
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default Model;
