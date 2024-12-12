"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const TrioeScene = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneObjRef = useRef<THREE.Scene | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const frameIdRef = useRef<number>(0);

  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    sceneObjRef.current = scene;
    const clock = new THREE.Clock();
    const camera = new THREE.PerspectiveCamera(
      75,
      1, // We'll update this in the resize handler
      0.1,
      500
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
    rendererRef.current = renderer;

    // Instead of appending to body, append to our container
    sceneRef.current.appendChild(renderer.domElement);

    // Initial size setup
    const updateSize = () => {
      if (!sceneRef.current || !renderer) return;

      const width = sceneRef.current.clientWidth;
      const height = sceneRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height, false); // Added false to prevent style changes
    };

    // Call once for initial setup
    updateSize();

    // Add resize listener
    window.addEventListener("resize", updateSize);

    // Updated lighting setup
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Increased intensity
    directionalLight.position.set(5, 5, 5); // Adjusted position for front-right lighting
    scene.add(directionalLight);

    // Add a second directional light for back lighting
    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(-5, 3, -5); // Position it behind and slightly above
    scene.add(backLight);

    // Increased ambient light intensity for better overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Changed color to white and adjusted intensity
    scene.add(ambientLight);

    // Load the GLB Model
    const loader = new GLTFLoader();
    const modelUrl = "/models/trioe.glb"; // Update this path to the location of your model

    loader.load(
      modelUrl,
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        scene.add(model);

        // Adjust scale based on screen width
        const smallerScale = window.innerWidth < 1024 ? 0.02 : 0.03;
        model.scale.set(smallerScale, smallerScale, smallerScale);
        model.rotation.set(0, Math.PI, 0);
        
        // Calculate proper position based on bounding box
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        // Center the model
        model.position.set(-center.x, -center.y, -center.z);

        // Set camera position relative to the centered model
        camera.position.set(
          0,
          maxDim * 0.2,
          maxDim * 1.2
        );
        camera.lookAt(0, maxDim * 0.1, 0);

        // Update controls target
        controlsRef.current!.target.set(0, maxDim * 0.1, 0);
        controlsRef.current!.update();

        // Optimize geometries
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            // Optimize geometries
            if (mesh.geometry) {
              mesh.geometry.computeBoundingSphere();
              mesh.geometry.computeBoundingBox();
            }
            // Optimize materials
            if (mesh.material) {
              (mesh.material as THREE.Material).dispose();
            }
          }
        });

        // Setup animation mixer
        mixerRef.current = new THREE.AnimationMixer(model);

        // Play all animations at reduced speed
        if (gltf.animations.length) {
          gltf.animations.forEach((clip) => {
            const action = mixerRef.current?.clipAction(clip);
            if (action) {
              action.timeScale = 0.5; // Reduce animation speed to half
              action.play();
            }
          });
        }

        // Rotate the model once before starting the animation loop
        const rotateOnce = () => {
          const duration = 2; // Duration of the rotation in seconds
          const startTime = clock.getElapsedTime();
          const initialRotation = model.rotation.y;
          const targetRotation = initialRotation + Math.PI * 2; // Rotate 360 degrees

          const rotate = () => {
            const elapsedTime = clock.getElapsedTime() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            model.rotation.y = initialRotation + progress * (targetRotation - initialRotation);

            if (progress < 1) {
              requestAnimationFrame(rotate);
            } else {
              // Add 2-second delay before starting the animation
              setTimeout(() => {
                animate(); // Start the main animation loop after delay
              }, 2000);
            }
          };

          rotate();
        };

        rotateOnce();
      },
      // Progress handler (optional)
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // Error handler
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Initial camera position (fallback before model loads)
    camera.position.set(0, 2, 8); // Adjusted y up and z further back
    camera.lookAt(0, 2, 0); // Look at a point at the same height as camera

    // Adjust OrbitControls settings
    controlsRef.current = new OrbitControls(camera, renderer.domElement);
    controlsRef.current.enableDamping = true;
    controlsRef.current.dampingFactor = 0.05;
    controlsRef.current.minDistance = 2; // Reduced from 3
    controlsRef.current.maxDistance = 10; // Reduced from 20
    controlsRef.current.maxPolarAngle = Math.PI * 0.75; // Allow more downward rotation
    controlsRef.current.minPolarAngle = 0;

    // Update animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      controlsRef.current?.update();

      if (mixerRef.current) {
        mixerRef.current.update(clock.getDelta());
      }

      renderer.render(scene, camera);
    };

    animate();

    // Enhanced cleanup
    return () => {
      window.removeEventListener("resize", updateSize);

      cancelAnimationFrame(frameIdRef.current);

      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();
      }

      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((material) => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      }

      controlsRef.current?.dispose();
      sceneObjRef.current?.clear();

      if (sceneRef.current?.contains(renderer.domElement)) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div 
    className="w-full h-[100%] lg:w-[80%] lg:h-[80%] z-50 absolute" 
    ref={sceneRef} 
  />;
};

export default TrioeScene;
