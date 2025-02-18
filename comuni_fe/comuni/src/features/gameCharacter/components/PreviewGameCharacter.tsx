import React, { useEffect, useRef } from "react"
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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    let hairMesh: THREE.Mesh, bodyMesh: THREE.Mesh, leftLegMesh: THREE.Mesh, rightLegMesh: THREE.Mesh

    const createHairMesh = (type: string, color: string) => {
      const geometry =
        type === "short"
          ? new THREE.SphereGeometry(0.5, 32, 32)
          : type === "long"
          ? new THREE.BoxGeometry(0.5, 1, 0.5)
          : new THREE.ConeGeometry(0.5, 1, 32)
      const material = new THREE.MeshStandardMaterial({ color })
      return new THREE.Mesh(geometry, material)
    }

    const createBodyMesh = (type: string, color: string) => {
      const geometry =
        type === "slim"
          ? new THREE.BoxGeometry(0.8, 1.5, 0.4)
          : type === "muscular"
          ? new THREE.BoxGeometry(1.2, 1.5, 0.6)
          : new THREE.SphereGeometry(0.8, 32, 32)
      const material = new THREE.MeshStandardMaterial({ color })
      return new THREE.Mesh(geometry, material)
    }

    const createLegMesh = (type: string, color: string) => {
      const geometry =
        type === "thin"
          ? new THREE.CylinderGeometry(0.15, 0.15, 1, 32)
          : type === "muscular"
          ? new THREE.CylinderGeometry(0.25, 0.2, 1, 32)
          : new THREE.BoxGeometry(0.3, 1, 0.3)
      const material = new THREE.MeshStandardMaterial({ color })
      return new THREE.Mesh(geometry, material)
    }

    const updateCharacter = () => {
      // Remove previous meshes if they exist
      if (hairMesh) scene.remove(hairMesh)
      if (bodyMesh) scene.remove(bodyMesh)
      if (leftLegMesh) scene.remove(leftLegMesh)
      if (rightLegMesh) scene.remove(rightLegMesh)

      // Create new meshes with updated properties
      hairMesh = createHairMesh(hairType, hairColor)
      bodyMesh = createBodyMesh(bodyType, bodyColor)
      leftLegMesh = createLegMesh(legType, legColor)
      rightLegMesh = createLegMesh(legType, legColor)

      // Position meshes
      hairMesh.position.set(0, 0.5, 0)
      bodyMesh.position.set(0, -0.5, 0)
      leftLegMesh.position.set(-0.3, -1.25, 0)
      rightLegMesh.position.set(0.3, -1.25, 0)

      // Add meshes to scene
      scene.add(hairMesh, bodyMesh, leftLegMesh, rightLegMesh)
    }

    // Initial update
    updateCharacter()

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      // Cleanup on component unmount
      renderer.dispose()
      scene.clear()
    }
  }, [hairColor, hairType, bodyColor, bodyType, legColor, legType])

  return <canvas ref={canvasRef} />
}

export default PreviewGameCharacter
