import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Global Market Hub Coordinates for Vincent Research (70+ Countries Coverage)
export const MARKET_HUBS = [
  { id: 'ind', name: 'India (HQ)', lat: 26.8467, lon: 80.9462, respondents: '12M+', accuracy: '99.4%', status: 'Primary Hub', speed: 'Real-time' },
  { id: 'nyc', name: 'New York (US)', lat: 40.7128, lon: -74.006, respondents: '8.5M+', accuracy: '99.2%', status: 'B2B & HCPs', speed: '< 24h Turnaround' },
  { id: 'lon', name: 'London (UK)', lat: 51.5074, lon: -0.1278, respondents: '4.8M+', accuracy: '98.9%', status: 'EMEA Nexus', speed: 'High Velocity' },
  { id: 'ber', name: 'Berlin (EU)', lat: 52.5200, lon: 13.4050, respondents: '3.9M+', accuracy: '99.1%', status: 'GDPR Verified', speed: 'Live Telemetry' },
  { id: 'dub', name: 'Dubai (MENA)', lat: 25.2048, lon: 55.2708, respondents: '2.4M+', accuracy: '98.7%', status: 'Gulf Insights', speed: 'Active' },
  { id: 'sin', name: 'Singapore (APAC)', lat: 1.3521, lon: 103.8198, respondents: '3.6M+', accuracy: '99.3%', status: 'APAC Gateway', speed: 'Real-time' },
  { id: 'tok', name: 'Tokyo (Japan)', lat: 35.6762, lon: 139.6503, respondents: '2.8M+', accuracy: '99.5%', status: 'East Asia', speed: 'Active' },
  { id: 'syd', name: 'Sydney (ANZ)', lat: -33.8688, lon: 151.2093, respondents: '1.9M+', accuracy: '99.0%', status: 'ANZ Panel', speed: 'Active' }
];

function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export default function Hero3DScene({ onSelectHub, selectedHubId }) {
  const containerRef = useRef(null);
  const [hoveredHub, setHoveredHub] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const globeGroupRef = useRef(null);
  const targetRotationRef = useRef({ x: 0.2, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 320);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    const GLOBE_RADIUS = 95;

    // 4,500 Particle Spherical Distribution
    const particleCount = 4500;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const colorCyan = new THREE.Color('#00f0ff');
    const colorBlue = new THREE.Color('#3b82f6');
    const colorPurple = new THREE.Color('#8b5cf6');

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = GLOBE_RADIUS * Math.cos(phi);
      const z = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      const mixedColor = colorCyan.clone().lerp(
        Math.random() > 0.5 ? colorBlue : colorPurple,
        Math.random() * 0.7
      );
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const particleGlobe = new THREE.Points(particleGeometry, particleMaterial);
    globeGroup.add(particleGlobe);

    // Core Occlusion Sphere
    const coreGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 0.98, 36, 36);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x050d24,
      transparent: true,
      opacity: 0.92
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // Outer Wireframe Grid
    const wireGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 24, 24);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    globeGroup.add(wireMesh);

    // Orbital Rings
    const ringGroup = new THREE.Group();
    globeGroup.add(ringGroup);

    const createOrbitRing = (radius, tiltX, tiltY, color) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.6, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = tiltX;
      ringMesh.rotation.y = tiltY;
      ringGroup.add(ringMesh);

      const beaconGeo = new THREE.SphereGeometry(1.8, 16, 16);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        blending: THREE.AdditiveBlending
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      ringGroup.add(beacon);

      return { mesh: ringMesh, beacon, radius, tiltX, tiltY, speed: (Math.random() * 0.01 + 0.008) };
    };

    const orbits = [
      createOrbitRing(GLOBE_RADIUS * 1.25, Math.PI / 3, Math.PI / 6, 0x00f0ff),
      createOrbitRing(GLOBE_RADIUS * 1.45, -Math.PI / 4, Math.PI / 3, 0x8b5cf6)
    ];

    // Market Hub Pins
    const hubMarkers = [];
    const pinGroup = new THREE.Group();
    globeGroup.add(pinGroup);

    MARKET_HUBS.forEach((hub) => {
      const pos = latLonToVector3(hub.lat, hub.lon, GLOBE_RADIUS);

      const markerGeo = new THREE.SphereGeometry(2.5, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({
        color: hub.id === 'ind' ? 0x00ffcc : 0x00f0ff,
        blending: THREE.AdditiveBlending
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(pos);
      marker.userData = hub;

      const haloGeo = new THREE.RingGeometry(3, 4.8, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(pos);
      halo.lookAt(pos.clone().multiplyScalar(2));

      pinGroup.add(marker);
      pinGroup.add(halo);

      hubMarkers.push({ marker, halo, hub, basePos: pos });
    });

    // Connecting Arcs (India HQ to Global Pan-Continental Hubs)
    const arcConnections = [
      ['ind', 'nyc'],
      ['ind', 'lon'],
      ['ind', 'dub'],
      ['ind', 'sin'],
      ['ind', 'tok'],
      ['lon', 'ber'],
      ['sin', 'syd'],
      ['nyc', 'lon']
    ];

    const animatedPackets = [];

    arcConnections.forEach(([fromId, toId]) => {
      const hubA = MARKET_HUBS.find(h => h.id === fromId);
      const hubB = MARKET_HUBS.find(h => h.id === toId);
      if (!hubA || !hubB) return;

      const pA = latLonToVector3(hubA.lat, hubA.lon, GLOBE_RADIUS);
      const pB = latLonToVector3(hubB.lat, hubB.lon, GLOBE_RADIUS);

      const mid = pA.clone().add(pB).multiplyScalar(0.5);
      const distance = pA.distanceTo(pB);
      const altitude = GLOBE_RADIUS + distance * 0.25;
      mid.normalize().multiplyScalar(altitude);

      const curve = new THREE.QuadraticBezierCurve3(pA, mid, pB);
      const curvePoints = curve.getPoints(40);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending
      });
      const arcLine = new THREE.Line(curveGeo, curveMat);
      globeGroup.add(arcLine);

      const packetGeo = new THREE.SphereGeometry(1.3, 8, 8);
      const packetMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        blending: THREE.AdditiveBlending
      });
      const packet = new THREE.Mesh(packetGeo, packetMat);
      globeGroup.add(packet);

      animatedPackets.push({
        mesh: packet,
        curve,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004
      });
    });

    // Pointer events
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      isDragging = true;
      prevPointer = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.x = x;
      mouse.y = y;

      if (isDragging) {
        const deltaX = e.clientX - prevPointer.x;
        const deltaY = e.clientY - prevPointer.y;
        targetRotationRef.current.y += deltaX * 0.005;
        targetRotationRef.current.x += deltaY * 0.005;
        targetRotationRef.current.x = Math.max(-Math.PI * 0.35, Math.min(Math.PI * 0.35, targetRotationRef.current.x));
        prevPointer = { x: e.clientX, y: e.clientY };
        setAutoRotate(false);
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (autoRotate && !isDragging) {
        targetRotationRef.current.y += 0.0025;
      }
      globeGroup.rotation.y += (targetRotationRef.current.y - globeGroup.rotation.y) * 0.05;
      globeGroup.rotation.x += (targetRotationRef.current.x - globeGroup.rotation.x) * 0.05;

      orbits.forEach((orb, i) => {
        const angle = elapsedTime * orb.speed * 8 + i * 2;
        const x = Math.cos(angle) * orb.radius;
        const y = Math.sin(angle) * orb.radius;
        const vec = new THREE.Vector3(x, y, 0);
        vec.applyAxisAngle(new THREE.Vector3(1, 0, 0), orb.tiltX);
        vec.applyAxisAngle(new THREE.Vector3(0, 1, 0), orb.tiltY);
        orb.beacon.position.copy(vec);
      });

      animatedPackets.forEach((pkt) => {
        pkt.progress = (pkt.progress + pkt.speed) % 1;
        const pt = pkt.curve.getPoint(pkt.progress);
        pkt.mesh.position.copy(pt);
      });

      hubMarkers.forEach((item, index) => {
        const pulse = 1 + Math.sin(elapsedTime * 4 + index) * 0.25;
        item.halo.scale.set(pulse, pulse, pulse);
      });

      raycaster.setFromCamera(mouse, camera);
      const markerMeshes = hubMarkers.map(item => item.marker);
      const intersects = raycaster.intersectObjects(markerMeshes);

      if (intersects.length > 0) {
        const topHit = intersects[0].object;
        const hitHub = topHit.userData;
        setHoveredHub(hitHub);

        const screenPos = topHit.getWorldPosition(new THREE.Vector3());
        screenPos.project(camera);
        const sx = ((screenPos.x + 1) / 2) * container.clientWidth;
        const sy = ((-screenPos.y + 1) / 2) * container.clientHeight;
        setTooltipPos({ x: sx, y: sy });
      } else {
        setHoveredHub(null);
      }

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
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate]);

  const focusHub = (hub) => {
    setAutoRotate(false);
    const lonRad = (hub.lon * Math.PI) / 180;
    const latRad = (hub.lat * Math.PI) / 180;
    targetRotationRef.current.y = -lonRad - Math.PI / 2;
    targetRotationRef.current.x = latRad * 0.5;
    if (onSelectHub) onSelectHub(hub);
  };

  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[720px] flex items-center justify-center select-none overflow-hidden">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating HUD Tooltip */}
      {hoveredHub && (
        <div
          className="pointer-events-none absolute z-20 transform -translate-x-1/2 -translate-y-full mb-4 transition-all duration-150 ease-out"
          style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
        >
          <div className="glass-panel p-4 rounded-xl border border-cyan-400/40 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl w-60">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                {hoveredHub.name}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                {hoveredHub.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              <div>
                <div className="text-slate-400 text-[9px] uppercase">Verified Panel</div>
                <div className="text-white font-bold text-sm text-cyan-300">{hoveredHub.respondents}</div>
              </div>
              <div>
                <div className="text-slate-400 text-[9px] uppercase">VeriTrust™ Rate</div>
                <div className="text-emerald-400 font-bold text-sm">{hoveredHub.accuracy}</div>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-slate-400 font-mono">
              <span>Delivery Velocity:</span>
              <span className="text-slate-200">{hoveredHub.speed}</span>
            </div>
          </div>
        </div>
      )}

      {/* Hub Quick Focus Pill Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-wrap justify-center items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/20 max-w-[95vw]">
        <span className="text-[11px] font-mono text-cyan-400 mr-1 hidden sm:inline-block">HUB FOCUS:</span>
        {MARKET_HUBS.slice(0, 5).map((hub) => (
          <button
            key={hub.id}
            onClick={() => focusHub(hub)}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-full transition-all ${
              selectedHubId === hub.id
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white'
            }`}
          >
            {hub.name}
          </button>
        ))}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`px-2.5 py-1 text-[11px] font-mono rounded-full transition-all ${
            autoRotate ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30' : 'bg-white/5 text-slate-400'
          }`}
        >
          {autoRotate ? 'Auto-Rotate ON' : 'Paused'}
        </button>
      </div>

      <div className="absolute top-4 left-4 z-10 pointer-events-none hidden md:block">
        <div className="text-[10px] font-mono text-cyan-400/80 bg-slate-950/50 backdrop-blur px-2.5 py-1 rounded border border-cyan-500/20">
          VINCENT RESEARCH // 70+ COUNTRIES CONNECTED
        </div>
      </div>
      <div className="absolute top-4 right-4 z-10 pointer-events-none hidden md:block">
        <div className="text-[10px] font-mono text-purple-400/80 bg-slate-950/50 backdrop-blur px-2.5 py-1 rounded border border-purple-500/20">
          VERITRUST™ VERIFICATION: ONLINE [40M+ PANEL]
        </div>
      </div>
    </div>
  );
}
