"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const TrioeScene = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null); // To reference the container div for the scene
  const mixerRef = useRef<THREE.AnimationMixer | null>(null); // Move this to component level
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      1, // We'll update this in the resize handler
      0.1,
      500
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    // Instead of appending to body, append to our container
    sceneRef.current.appendChild(renderer.domElement);
    
    // Initial size setup
    const updateSize = () => {
      const container = sceneRef.current;
      if (!container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    // Call once for initial setup
    updateSize();
    
    // Add resize listener
    window.addEventListener('resize', updateSize);

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
        scene.add(model);

        // Setup animation mixer
        mixerRef.current = new THREE.AnimationMixer(model);
        
        // Play all animations
        if (gltf.animations.length) {
          gltf.animations.forEach((clip) => {
            mixerRef.current?.clipAction(clip).play();
          });
        }

        // Center the model and adjust rotation
        model.position.set(0, 0, 0);
        model.rotation.set(0, 0, 0);
        model.scale.set(0.1, 0.1, 0.1); // Reduced from 0.2 to 0.1 to make the model smaller

        // Optional: Auto-adjust camera to fit model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(center.x, center.y + maxDim * 0.3, center.z + maxDim * 0.6); // Reduced multipliers
        camera.lookAt(center);
        
        // Update controls target to model center
        controlsRef.current!.target.copy(center);
        controlsRef.current!.update();
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

    // Adjust camera position for better full view
    camera.position.set(0, 1, 4); // Reduced z distance from 8 to 4

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
      requestAnimationFrame(animate);

      // Update controls in animation loop
      controlsRef.current?.update();

      // Update the mixer on each frame
      if (mixerRef.current) {
        mixerRef.current.update(0.016); // Assuming 60fps (1/60 ≈ 0.016)
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      renderer.dispose();
      controlsRef.current?.dispose(); // Clean up controls
      if (sceneRef.current?.contains(renderer.domElement)) {
        sceneRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div  className="w-full h-[100%] z-50 absolute" ref={sceneRef} />;
};
  
export default TrioeScene;
