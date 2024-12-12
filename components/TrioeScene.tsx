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
  const mountedRef = useRef<boolean>(true);

  useEffect(() => {
    if (!sceneRef.current) return;

    mountedRef.current = true;

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
        if (!mountedRef.current) return;

        const model = gltf.scene;
        modelRef.current = model;
        scene.add(model);

        // Adjust scale based on screen width
        const smallerScale = window.innerWidth < 1024 ? 0.02 : 0.03; // Smaller scale for large and below screens
        model.position.set(-1, 10, 0);
        model.rotation.set(0, Math.PI, 0);
        model.scale.set(smallerScale, smallerScale, smallerScale);

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

        // Adjust camera position for a better view
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(
          center.x,
          center.y + maxDim * 0.2, // Reduced vertical offset from 0.4 to 0.2
          center.z + maxDim * 1.2  // Increased distance from 0.8 to 1.2 for a more level view
        );
        camera.lookAt(new THREE.Vector3(center.x, center.y + maxDim * 0.1, center.z)); // Adjust lookAt to be slightly above center

        // Update controls target to match new lookAt point
        controlsRef.current!.target.set(center.x, center.y + maxDim * 0.1, center.z);
        controlsRef.current!.update();

        // Rotate the model once before starting the animation loop
        const rotateOnce = () => {
          if (!mountedRef.current) return;
          
          const duration = 2;
          const startTime = clock.getElapsedTime();
          const initialRotation = model.rotation.y;
          const targetRotation = initialRotation + Math.PI * 2;

          const rotate = () => {
            if (!mountedRef.current) return;
            
            const elapsedTime = clock.getElapsedTime() - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            model.rotation.y = initialRotation + progress * (targetRotation - initialRotation);

            if (progress < 1) {
              frameIdRef.current = requestAnimationFrame(rotate);
            } else {
              setTimeout(() => {
                if (mountedRef.current) {
                  animate();
                }
              }, 2000);
            }
          };

          rotate();
        };

        rotateOnce();
      },
      undefined,
      (error) => {
        if (mountedRef.current) {
          console.error("An error occurred while loading the model:", error);
        }
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
      if (!mountedRef.current) return;
      
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
      // Immediately stop all rendering operations
      mountedRef.current = false;
      cancelAnimationFrame(frameIdRef.current);
      
      // Remove event listeners
      window.removeEventListener("resize", updateSize);

      // Stop all animations
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }

      // Disable controls
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
        controlsRef.current = null;
      }

      // Remove model from scene first
      if (modelRef.current) {
        sceneObjRef.current?.remove(modelRef.current);
        modelRef.current = null;
      }

      // Clear scene
      if (sceneObjRef.current) {
        while(sceneObjRef.current.children.length > 0) { 
          sceneObjRef.current.remove(sceneObjRef.current.children[0]);
        }
        sceneObjRef.current = null;
      }

      // Handle renderer cleanup
      if (rendererRef.current) {
        // Remove from DOM first
        if (rendererRef.current.domElement.parentNode) {
          rendererRef.current.domElement.parentNode.removeChild(rendererRef.current.domElement);
        }
        
        // Set size to 1x1 to minimize resources
        rendererRef.current.setSize(1, 1);
        rendererRef.current.dispose();
        rendererRef.current = null;
      }

      // Clear Three.js cache
      THREE.Cache.clear();
    };
  }, []);

  return <div 
    className="w-full h-[100%] lg:w-[80%] lg:h-[80%] z-50 absolute" 
    ref={sceneRef} 
  />;
};

export default TrioeScene;
