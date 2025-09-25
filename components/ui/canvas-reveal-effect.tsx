"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import { Canvas, useFrame } from "@react-three/fiber";

type GlobeConfig = {
  globeColor: string;
  showAtmosphere: boolean;
  atmosphereColor: string;
  atmosphereAltitude: number;
  emissive: string;
  emissiveIntensity: number;
  shininess: number;
};

type PointData = {
  lat: number;
  lng: number;
  size: number;
  color: string;
};

type WorldProps = {
  globeConfig: GlobeConfig;
  data: PointData[];
};

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const defaultProps: GlobeConfig = {
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
  };

  const mergedConfig = { ...defaultProps, ...globeConfig };

  useEffect(() => {
    if (globeRef.current && !isInitialized) {
      const globe = globeRef.current;

      // Atmosphere setup
      globe
        .showAtmosphere(mergedConfig.showAtmosphere)
        .atmosphereColor(mergedConfig.atmosphereColor)
        .atmosphereAltitude(mergedConfig.atmosphereAltitude);

      // Points data with safe casts
      globe
        .pointsData(data)
        .pointColor(((point: PointData) => point.color) as any)
        .pointAltitude(((point: PointData) => point.size) as any)
        .pointRadius(0.2);

      setIsInitialized(true);
    }
  }, [globeConfig, data, isInitialized, mergedConfig]);

  // Auto-rotate the globe
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={
          new ThreeGlobe().globeMaterial(
            new THREE.MeshPhongMaterial({
              color: mergedConfig.globeColor,
              emissive: mergedConfig.emissive,
              emissiveIntensity: mergedConfig.emissiveIntensity,
              shininess: mergedConfig.shininess,
            })
          )
        }
        ref={globeRef}
      />
    </group>
  );
}

export default function GlobeCanvas({
  globeConfig,
  data,
}: {
  globeConfig: GlobeConfig;
  data: PointData[];
}) {
  return (
    <Canvas camera={{ position: [0, 0, 400], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={1.5} />
      <Globe globeConfig={globeConfig} data={data} />
    </Canvas>
  );
}
