import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SectorWave3D({ sectorKey = 'ai' }) {
  const containerRef = useRef(null);
  const currentSectorRef = useRef(sectorKey);

  // Keep ref in sync
  useEffect(() => {
    currentSectorRef.current = sectorKey;
  }, [sectorKey]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 45, 70);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Grid Dimensions
    const GRID_X = 45;
    const GRID_Z = 35;
    const SEPARATION = 3.2;
    const numPoints = GRID_X * GRID_Z;

    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    // Initial Coordinates
    let index = 0;
    for (let ix = 0; ix < GRID_X; ix++) {
      for (let iz = 0; iz < GRID_Z; iz++) {
        positions[index * 3] = (ix - GRID_X / 2) * SEPARATION;
        positions[index * 3 + 1] = 0;
        positions[index * 3 + 2] = (iz - GRID_Z / 2) * SEPARATION;

        colors[index * 3] = 0;
        colors[index * 3 + 1] = 0.9;
        colors[index * 3 + 2] = 1.0;
        index++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let count = 0;
    let animId;

    // Sector Visual Configuration profiles
    const sectorThemes = {
      ai: {
        speed: 0.04,
        frequency: 0.28,
        amplitude: 6.5,
        primaryColor: new THREE.Color('#00f0ff'), // Electric Cyan
        secondaryColor: new THREE.Color('#3b82f6') // Blue
      },
      consumer: {
        speed: 0.03,
        frequency: 0.22,
        amplitude: 5.0,
        primaryColor: new THREE.Color('#ec4899'), // Pink
        secondaryColor: new THREE.Color('#8b5cf6') // Purple
      },
      fintech: {
        speed: 0.05,
        frequency: 0.35,
        amplitude: 7.8,
        primaryColor: new THREE.Color('#f59e0b'), // Amber / Gold
        secondaryColor: new THREE.Color('#06b6d4') // Cyan
      },
      energy: {
        speed: 0.025,
        frequency: 0.18,
        amplitude: 4.5,
        primaryColor: new THREE.Color('#10b981'), // Emerald
        secondaryColor: new THREE.Color('#14b8a6') // Teal
      }
    };

    let curTheme = sectorThemes.ai;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const targetTheme = sectorThemes[currentSectorRef.current] || sectorThemes.ai;
      curTheme = {
        speed: curTheme.speed + (targetTheme.speed - curTheme.speed) * 0.05,
        frequency: curTheme.frequency + (targetTheme.frequency - curTheme.frequency) * 0.05,
        amplitude: curTheme.amplitude + (targetTheme.amplitude - curTheme.amplitude) * 0.05,
        primaryColor: curTheme.primaryColor.lerp(targetTheme.primaryColor, 0.05),
        secondaryColor: curTheme.secondaryColor.lerp(targetTheme.secondaryColor, 0.05)
      };

      count += curTheme.speed;
      const posAttr = geometry.attributes.position;
      const colAttr = geometry.attributes.color;

      let pIndex = 0;
      for (let ix = 0; ix < GRID_X; ix++) {
        for (let iz = 0; iz < GRID_Z; iz++) {
          // Complex mathematical wave representing multi-dimensional market signals
          const wave1 = Math.sin(ix * curTheme.frequency + count) * Math.cos(iz * curTheme.frequency + count);
          const wave2 = Math.sin((ix + iz) * 0.15 + count * 1.3) * 0.5;
          const mouseDist = Math.hypot(
            (ix - GRID_X / 2) / (GRID_X / 2) - mouseX,
            (iz - GRID_Z / 2) / (GRID_Z / 2) - mouseY
          );
          const mouseRipple = Math.exp(-mouseDist * 3.5) * Math.sin(mouseDist * 12 - count * 4) * 3.0;

          const y = (wave1 + wave2) * curTheme.amplitude + mouseRipple;
          posAttr.array[pIndex * 3 + 1] = y;

          // Color gradient mapped to altitude (height of wave)
          const normalizedY = (y + curTheme.amplitude) / (curTheme.amplitude * 2);
          const mixedCol = curTheme.primaryColor.clone().lerp(curTheme.secondaryColor, Math.max(0, Math.min(1, normalizedY)));

          colAttr.array[pIndex * 3] = mixedCol.r;
          colAttr.array[pIndex * 3 + 1] = mixedCol.g;
          colAttr.array[pIndex * 3 + 2] = mixedCol.b;

          pIndex++;
        }
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Subtle camera tilt following mouse
      camera.position.x += (mouseX * 15 - camera.position.x) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-950/40 backdrop-blur-lg">
      <div ref={containerRef} className="w-full h-full min-h-[360px] cursor-crosshair" />
      <div className="absolute top-3 left-4 pointer-events-none flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span className="text-[10px] font-mono text-cyan-300 tracking-wider uppercase">
          LIVE DATA TOPOLOGY: 3D FREQUENCY MATRIX
        </span>
      </div>
      <div className="absolute bottom-3 right-4 pointer-events-none text-[10px] font-mono text-slate-400">
        INTERACTIVE 3D MESH • HOVER TO PERTURB
      </div>
    </div>
  );
}
