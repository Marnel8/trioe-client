"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Loader from "./loader/Loader";

const TrioeScene = () => {
	const sceneRef = useRef<HTMLDivElement | null>(null);
	const mixerRef = useRef<THREE.AnimationMixer | null>(null);
	const controlsRef = useRef<OrbitControls | null>(null);
	const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
	const sceneObjRef = useRef<THREE.Scene | null>(null);
	const modelRef = useRef<THREE.Group | null>(null);
	const frameIdRef = useRef<number>(0);
	const mountedRef = useRef<boolean>(true);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!sceneRef.current) return;

		mountedRef.current = true;

		const scene = new THREE.Scene();
		sceneObjRef.current = scene;
		const clock = new THREE.Clock();
		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 500);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
			powerPreference: "high-performance",
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		rendererRef.current = renderer;

		sceneRef.current.appendChild(renderer.domElement);

		const updateSize = () => {
			if (!sceneRef.current || !renderer) return;

			const width = sceneRef.current.clientWidth;
			const height = sceneRef.current.clientHeight;

			camera.aspect = width / height;
			camera.updateProjectionMatrix();

			renderer.setSize(width, height, false);
		};

		updateSize();
		window.addEventListener("resize", updateSize);

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
		directionalLight.position.set(5, 5, 5);
		scene.add(directionalLight);

		const backLight = new THREE.DirectionalLight(0xffffff, 1);
		backLight.position.set(-5, 3, -5);
		scene.add(backLight);

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(ambientLight);

		const loader = new GLTFLoader();
		const modelUrl = "/models/trioe.glb";

		loader.load(
			modelUrl,
			(gltf) => {
				if (!mountedRef.current) return;

				const model = gltf.scene;
				modelRef.current = model;
				scene.add(model);

				const smallerScale = window.innerWidth < 1024 ? 0.02 : 0.03;
				model.position.set(-1, 10, 0);
				model.rotation.set(0, Math.PI, 0);
				model.scale.set(smallerScale, smallerScale, smallerScale);

				model.traverse((child) => {
					if ((child as THREE.Mesh).isMesh) {
						const mesh = child as THREE.Mesh;
						if (mesh.geometry) {
							mesh.geometry.computeBoundingSphere();
							mesh.geometry.computeBoundingBox();
						}
						if (mesh.material) {
							(mesh.material as THREE.Material).dispose();
						}
					}
				});

				mixerRef.current = new THREE.AnimationMixer(model);

				if (gltf.animations.length) {
					gltf.animations.forEach((clip) => {
						const action = mixerRef.current?.clipAction(clip);
						if (action) {
							action.timeScale = 0.5;
							action.play();
						}
					});
				}

				const box = new THREE.Box3().setFromObject(model);
				const center = box.getCenter(new THREE.Vector3());
				const size = box.getSize(new THREE.Vector3());
				const maxDim = Math.max(size.x, size.y, size.z);
				camera.position.set(
					center.x,
					center.y + maxDim * 0.2,
					center.z + maxDim * 1.2
				);
				camera.lookAt(
					new THREE.Vector3(center.x, center.y + maxDim * 0.1, center.z)
				);

				controlsRef.current!.target.set(
					center.x,
					center.y + maxDim * 0.1,
					center.z
				);
				controlsRef.current!.update();

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
						model.rotation.y =
							initialRotation + progress * (targetRotation - initialRotation);

						if (progress < 1) {
							frameIdRef.current = requestAnimationFrame(rotate);
						} else {
							setTimeout(() => {
								if (mountedRef.current) {
									setIsLoading(false);
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
					setIsLoading(false);
				}
			}
		);

		camera.position.set(0, 2, 8);
		camera.lookAt(0, 2, 0);

		controlsRef.current = new OrbitControls(camera, renderer.domElement);
		controlsRef.current.enableDamping = true;
		controlsRef.current.dampingFactor = 0.05;
		controlsRef.current.minDistance = 2;
		controlsRef.current.maxDistance = 10;
		controlsRef.current.maxPolarAngle = Math.PI * 0.75;
		controlsRef.current.minPolarAngle = 0;

		const animate = () => {
			if (!mountedRef.current) return;

			frameIdRef.current = requestAnimationFrame(animate);

			controlsRef.current?.update();

			if (mixerRef.current) {
				mixerRef.current.update(clock.getDelta());
			}

			renderer.render(scene, camera);
		};

		return () => {
			mountedRef.current = false;
			cancelAnimationFrame(frameIdRef.current);
			window.removeEventListener("resize", updateSize);

			if (mixerRef.current) {
				mixerRef.current.stopAllAction();
				mixerRef.current = null;
			}

			if (controlsRef.current) {
				controlsRef.current.enabled = false;
				controlsRef.current = null;
			}

			if (modelRef.current) {
				sceneObjRef.current?.remove(modelRef.current);
				modelRef.current = null;
			}

			if (sceneObjRef.current) {
				while (sceneObjRef.current.children.length > 0) {
					sceneObjRef.current.remove(sceneObjRef.current.children[0]);
				}
				sceneObjRef.current = null;
			}

			if (rendererRef.current) {
				if (rendererRef.current.domElement.parentNode) {
					rendererRef.current.domElement.parentNode.removeChild(
						rendererRef.current.domElement
					);
				}

				rendererRef.current.setSize(1, 1);
				rendererRef.current.dispose();
				rendererRef.current = null;
			}

			THREE.Cache.clear();
		};
	}, []);

	return (
		<Suspense fallback={<Loader />}>
			<div
				className={`w-full h-[100%] lg:w-[80%] lg:h-[80%] z-50 absolute transition-opacity duration-200 ${
					isLoading ? "opacity-0" : "opacity-100"
				}`}
				ref={sceneRef}
			/>
		</Suspense>
	);
};

export default TrioeScene;
