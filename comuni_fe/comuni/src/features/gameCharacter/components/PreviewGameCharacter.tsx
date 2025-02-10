import React from "react"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

interface PreviewGameCharacterProps {
  hairColor: string
  hairType: string
  bodyColor: string
  bodyType: string
  legColor: string
  legType: string
}

const PreviewGameCharacter: React.FC<PreviewGameCharacterProps> = ({
  hairColor,
  hairType,
  bodyColor,
  bodyType,
  legColor,
  legType,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true })
    renderer.setSize(300, 300)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const hairMesh = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), new THREE.MeshStandardMaterial())
    hairMesh.position.set(0, 1.2, 0)
    scene.add(hairMesh)

    const bodyMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.5, 0.4), new THREE.MeshStandardMaterial())
    scene.add(bodyMesh)

    const leftLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1, 32), new THREE.MeshStandardMaterial())
    const rightLegMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1, 32), new THREE.MeshStandardMaterial())
    leftLegMesh.position.set(-0.3, -1.25, 0)
    rightLegMesh.position.set(0.3, -1.25, 0)
    scene.add(leftLegMesh)
    scene.add(rightLegMesh)

    const updateCharacterParts = () => {
      // Hair
      switch (hairType) {
        case "short":
          hairMesh.scale.set(1, 0.5, 1) // 짧은 머리
          break
        case "long":
          hairMesh.scale.set(1, 1.5, 1) // 긴 머리
          break
        default:
          hairMesh.scale.set(1, 1, 1) // 기본 길이
      }
      hairMesh.material.color.set(hairColor)
    
      // Body
      switch (bodyType) {
        case "slim":
          bodyMesh.scale.set(0.8, 1.2, 0.8) // 슬림한 몸
          break
        case "muscular":
          bodyMesh.scale.set(1.5, 1.2, 1.5) // 근육형 몸
          break
        default:
          bodyMesh.scale.set(1, 1, 1) // 기본 크기
      }
      bodyMesh.material.color.set(bodyColor)
    
       // Legs
      let legHeight;

      switch (legType) {
        case "short":
          legHeight = 0.8; // short 다리 높이
          break;
        case "long":
          legHeight = 1.5; // long 다리 높이
          break;
        default:
          legHeight = 1; // 기본 다리 높이
      }

      // 높이값을 geometry에 적용
      leftLegMesh.geometry = new THREE.CylinderGeometry(0.15, 0.15, legHeight, 32);
      rightLegMesh.geometry = new THREE.CylinderGeometry(0.15, 0.15, legHeight, 32);

      leftLegMesh.material.color.set(legColor);
      rightLegMesh.material.color.set(legColor);
    }
    
    updateCharacterParts()

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      renderer.dispose()
      scene.clear()
    }
  }, [hairColor, hairType, bodyColor, bodyType, legColor, legType])

  return <canvas ref={canvasRef} />
}

export default PreviewGameCharacter

