import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { soundManager } from '../../utils/audio';
import { CARDS_DATA } from '../../data/cardsData';

// High-Definition 60 FPS Procedural Sci-Fi Motion Graphics Canvas Texture
function createCardCanvasTexture(item) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d');

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const update = (time) => {
    // 1. SOLID High-Contrast Cybernetic Card Plate (Zero background bleed-through)
    ctx.fillStyle = '#060a1c';
    ctx.fillRect(0, 0, 1024, 640);

    // Deep illuminated ambient gradient radiating from category accent
    const bgGrad = ctx.createRadialGradient(240, 160, 10, 512, 320, 680);
    bgGrad.addColorStop(0, `${item.accent}33`);
    bgGrad.addColorStop(0.5, '#070f28');
    bgGrad.addColorStop(1, '#030510');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1024, 640);

    // Subtle Digital Grid Matrix
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 32; x < 992; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 20);
      ctx.lineTo(x, 620);
      ctx.stroke();
    }
    for (let y = 20; y < 620; y += 32) {
      ctx.beginPath();
      ctx.moveTo(32, y);
      ctx.lineTo(992, y);
      ctx.stroke();
    }

    // =========================================================================
    // 2. RIGHT COLUMN: FULL-HEIGHT EXPANSIVE MOTION GRAPHICS WINDOW (x: 452 -> 988, y: 36 -> 604)
    // =========================================================================
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(452, 36, 536, 568, 22);
    ctx.clip();

    // Motion window backdrop
    const winGrad = ctx.createLinearGradient(452, 36, 988, 604);
    winGrad.addColorStop(0, '#04081c');
    winGrad.addColorStop(1, '#01030d');
    ctx.fillStyle = winGrad;
    ctx.fillRect(452, 36, 536, 568);

    // Center coordinates for graphics inside right window
    const cx = 720;
    const cy = 290;

    ctx.shadowBlur = 18;
    ctx.shadowColor = item.accent;

    if (item.videoType === 'pulse') {
      // -------------------------------------------------------------
      // HEALTHCARE: 3D Rotating DNA Double Helix & Precision ECG Wave
      // -------------------------------------------------------------
      const strandCount = 18;
      ctx.lineWidth = 2;
      for (let s = 0; s < strandCount; s++) {
        const tOffset = s * 0.38 + time * 2.6;
        const xPos = cx - 150 + s * 17.5;
        const yOffset = Math.sin(tOffset) * 72;
        const zDepth = Math.cos(tOffset);

        const y1 = cy - 20 + yOffset;
        const y2 = cy - 20 - yOffset;

        // Base-pair ladder rung
        const rungAlpha = 0.2 + (zDepth + 1) * 0.2;
        ctx.strokeStyle = `rgba(255, 255, 255, ${rungAlpha})`;
        ctx.beginPath();
        ctx.moveTo(xPos, y1);
        ctx.lineTo(xPos, y2);
        ctx.stroke();

        // Node 1 (Emerald/Cyan)
        const rad1 = 4.5 + (zDepth + 1) * 2.2;
        ctx.fillStyle = item.accent;
        ctx.beginPath();
        ctx.arc(xPos, y1, rad1, 0, Math.PI * 2);
        ctx.fill();

        // Node 2 (Secondary)
        const rad2 = 4.5 + (-zDepth + 1) * 2.2;
        ctx.fillStyle = item.secondary;
        ctx.beginPath();
        ctx.arc(xPos, y2, rad2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Real-time Medical ECG Heartbeat Waveform
      ctx.strokeStyle = item.accent;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      const ecgCycle = 400;
      for (let x = 452; x < 988; x += 4) {
        const localX = (x - 452 + time * 140) % ecgCycle;
        let spike = 0;
        if (localX > 140 && localX < 160) spike = Math.sin(((localX - 140) / 20) * Math.PI) * 14;
        else if (localX >= 160 && localX < 170) spike = -Math.sin(((localX - 160) / 10) * Math.PI) * 18;
        else if (localX >= 170 && localX < 185) spike = Math.sin(((localX - 170) / 15) * Math.PI) * 64;
        else if (localX >= 185 && localX < 195) spike = -Math.sin(((localX - 185) / 10) * Math.PI) * 24;
        else if (localX >= 195 && localX < 230) spike = Math.sin(((localX - 195) / 35) * Math.PI) * 18;

        const y = 475 - spike;
        if (x === 452) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Telemetry badge at bottom of visual window
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(16, 185, 129, 0.22)';
      ctx.fillRect(472, 532, 340, 32);
      ctx.strokeStyle = item.accent;
      ctx.lineWidth = 1;
      ctx.strokeRect(472, 532, 340, 32);
      ctx.fillStyle = '#10b981';
      ctx.font = '700 12px "JetBrains Mono", monospace';
      ctx.fillText('● 500K+ HCPS // 65+ MEDICAL SPECIALTIES', 486, 553);

    } else if (item.videoType === 'shield') {
      // -------------------------------------------------------------
      // VERITRUST™: 3D Holographic Cybernetic Defense Matrix & Radar
      // -------------------------------------------------------------
      for (let r = 1; r <= 3; r++) {
        ctx.strokeStyle = r % 2 === 0 ? item.accent : item.secondary;
        ctx.lineWidth = 2.4;
        const rad = r * 42 + Math.sin(time * 2.5 + r) * 6;
        const rot = time * (r % 2 === 0 ? 1.2 : -1.2) + r;

        ctx.beginPath();
        for (let h = 0; h < 6; h++) {
          const ang = rot + (h / 6) * Math.PI * 2;
          const hx = cx + Math.cos(ang) * rad;
          const hy = cy + Math.sin(ang) * rad;
          if (h === 0) ctx.moveTo(hx, hy);
          else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Center glowing core emblem
      ctx.fillStyle = item.accent;
      ctx.beginPath();
      ctx.arc(cx, cy, 22 + Math.sin(time * 4) * 3, 0, Math.PI * 2);
      ctx.fill();

      // Sweeping radar beam with phosphor trail
      const sweep = time * 3.5;
      const gradSweep = ctx.createRadialGradient(cx, cy, 8, cx, cy, 145);
      gradSweep.addColorStop(0, 'rgba(168, 85, 247, 0.5)');
      gradSweep.addColorStop(1, 'transparent');
      ctx.fillStyle = gradSweep;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, 145, sweep, sweep + 0.65);
      ctx.closePath();
      ctx.fill();

      // Cryptographic hash telemetry at bottom
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(168, 85, 247, 0.22)';
      ctx.fillRect(472, 532, 430, 32);
      ctx.strokeStyle = item.accent;
      ctx.lineWidth = 1;
      ctx.strokeRect(472, 532, 430, 32);
      ctx.fillStyle = '#c084fc';
      ctx.font = '700 12px "JetBrains Mono", monospace';
      ctx.fillText('● VERITRUST™ // 99.4% BOT TRAP ACTIVE', 486, 553);

    } else if (item.videoType === 'waves') {
      // -------------------------------------------------------------
      // CONSUMER & FMCG: Multi-Harmonic Spectrum Waves & Bubbles
      // -------------------------------------------------------------
      for (let w = 0; w < 5; w++) {
        ctx.strokeStyle = w % 2 === 0 ? item.accent : item.secondary;
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        for (let x = 452; x < 988; x += 8) {
          const wavePhase = time * (2.4 + w * 0.4) + w * 1.1;
          const y = cy + Math.sin(x * 0.022 + wavePhase) * (32 + w * 6) + Math.cos(x * 0.012 - time * 1.8) * 20;
          if (x === 452) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Rising virality bubbles
      for (let b = 0; b < 7; b++) {
        const bx = 472 + ((b * 75 + time * 55) % 470);
        const by = cy + Math.sin(b * 2 + time * 3) * 80;
        const bRad = 4 + Math.sin(time * 3 + b) * 2.5;
        ctx.fillStyle = b % 2 ? item.accent : item.secondary;
        ctx.beginPath();
        ctx.arc(bx, by, bRad, 0, Math.PI * 2);
        ctx.fill();
      }

      // Velocity Bar Meter at bottom
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(472, 532, 340, 32);
      const velW = 160 + Math.sin(time * 4) * 80;
      ctx.fillStyle = item.accent;
      ctx.fillRect(472, 532, velW, 32);
      ctx.fillStyle = '#ffffff';
      ctx.font = '700 12px "JetBrains Mono", monospace';
      ctx.fillText('● FMCG MOMENTUM: +48.2% VIRAL', 486, 553);

    } else if (item.videoType === 'network') {
      // -------------------------------------------------------------
      // B2B ENTERPRISE: Constellation Neural Graph with Photon Packets
      // -------------------------------------------------------------
      const nodeCount = 10;
      const nodes = [];
      for (let n = 0; n < nodeCount; n++) {
        const ang = (n / nodeCount) * Math.PI * 2 + time * 0.35;
        const rad = 95 + Math.sin(time * 2.2 + n * 1.5) * 32;
        nodes.push({
          x: cx + Math.cos(ang) * rad,
          y: cy + Math.sin(ang) * (rad * 0.75),
          id: n
        });
      }

      // Connecting synapsing lines
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
      ctx.lineWidth = 1.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Synapse Nodes
      nodes.forEach((nd, idx) => {
        ctx.fillStyle = idx % 2 === 0 ? item.accent : item.secondary;
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, 7, 0, Math.PI * 2);
        ctx.fill();
      });

      // Traveling photon packets
      for (let p = 0; p < 3; p++) {
        const pOffset = (time * 1.8 + p * 1.3) % nodes.length;
        const fromIdx = Math.floor(pOffset);
        const toIdx = (fromIdx + 1) % nodes.length;
        const frac = pOffset - fromIdx;
        const px = nodes[fromIdx].x + (nodes[toIdx].x - nodes[fromIdx].x) * frac;
        const py = nodes[fromIdx].y + (nodes[toIdx].y - nodes[fromIdx].y) * frac;

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(px, py, 4.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Telemetry badge at bottom
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(245, 158, 11, 0.22)';
      ctx.fillRect(472, 532, 380, 32);
      ctx.strokeStyle = item.accent;
      ctx.lineWidth = 1;
      ctx.strokeRect(472, 532, 380, 32);
      ctx.fillStyle = '#fbbf24';
      ctx.font = '700 12px "JetBrains Mono", monospace';
      ctx.fillText('● 12,000+ C-SUITE // IT DECISION MAKERS', 486, 553);

    } else {
      // -------------------------------------------------------------
      // GLOBAL REACH: 3D Rotating Wireframe Earth & Arcing Flight Paths
      // -------------------------------------------------------------
      const globeRadius = 105;

      // Rotating Longitude Ellipses
      for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI + time * 0.4;
        const width = Math.cos(ang) * globeRadius;
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.ellipse(cx, cy - 10, Math.abs(width), globeRadius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Latitude Rings
      for (let lat = -2; lat <= 2; lat++) {
        const latY = cy - 10 + (lat / 3) * (globeRadius * 0.85);
        const latW = Math.sqrt(Math.max(0, globeRadius * globeRadius - (latY - (cy - 10)) * (latY - (cy - 10))));
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.ellipse(cx, latY, latW, latW * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Outer glowing atmosphere rim
      ctx.strokeStyle = item.accent;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.arc(cx, cy - 10, globeRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Pulsing City Beacons
      const cities = [
        { label: 'HQ: LUCKNOW', x: cx + 18, y: cy - 5, hq: true },
        { label: 'NYC', x: cx - 62, y: cy - 40 },
        { label: 'LON', x: cx - 24, y: cy - 50 },
        { label: 'TOK', x: cx + 68, y: cy - 28 },
        { label: 'DXB', x: cx - 5, y: cy - 2 }
      ];

      cities.forEach((c) => {
        const pulse = (time * 4) % 1;
        ctx.fillStyle = c.hq ? '#38bdf8' : '#ffffff';
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.hq ? 7 : 4.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `${item.accent}${Math.floor((1 - pulse) * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.arc(c.x, c.y, pulse * (c.hq ? 26 : 16), 0, Math.PI * 2);
        ctx.stroke();
      });

      // Arcing Flight Conduits from Lucknow HQ
      const hq = cities[0];
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
      ctx.lineWidth = 1.6;
      for (let k = 1; k < cities.length; k++) {
        const dest = cities[k];
        ctx.beginPath();
        ctx.moveTo(hq.x, hq.y);
        ctx.quadraticCurveTo((hq.x + dest.x) / 2, Math.min(hq.y, dest.y) - 28, dest.x, dest.y);
        ctx.stroke();
      }

      // Telemetry badge at bottom
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.fillRect(472, 532, 380, 32);
      ctx.strokeStyle = item.accent;
      ctx.lineWidth = 1;
      ctx.strokeRect(472, 532, 380, 32);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '700 12px "JetBrains Mono", monospace';
      ctx.fillText('● 70+ NATIONS // 40M+ VERIFIED RESPONDENTS', 486, 553);
    }

    // Sweeping Laser Scanline down the entire visual window
    const scanY = 36 + ((time * 120) % 568);
    const laserGrad = ctx.createLinearGradient(452, scanY, 988, scanY);
    laserGrad.addColorStop(0, 'transparent');
    laserGrad.addColorStop(0.5, item.accent);
    laserGrad.addColorStop(1, 'transparent');
    ctx.strokeStyle = laserGrad;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(452, scanY);
    ctx.lineTo(988, scanY);
    ctx.stroke();

    // Top-Right REC Watermark inside viewport
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(472, 52, 230, 32);
    ctx.strokeStyle = item.accent;
    ctx.lineWidth = 1;
    ctx.strokeRect(472, 52, 230, 32);

    const recAlpha = 0.5 + Math.sin(time * 6) * 0.5;
    ctx.fillStyle = `rgba(239, 68, 68, ${recAlpha})`;
    ctx.beginPath();
    ctx.arc(488, 68, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 12px "JetBrains Mono", monospace';
    ctx.fillText(`REC [${item.videoLabel}]`, 502, 72);

    ctx.restore(); // Exit right column clipping

    // =========================================================================
    // 3. LEFT COLUMN: CRISP TYPOGRAPHY, METRIC TILES & CTA (x: 40 -> 426)
    // =========================================================================
    // Category Tag Pill
    ctx.fillStyle = `${item.accent}25`;
    ctx.beginPath();
    ctx.roundRect(40, 38, 250, 34, 17);
    ctx.fill();
    ctx.strokeStyle = item.accent;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = item.accent;
    ctx.font = '700 13px "JetBrains Mono", monospace';
    ctx.fillText(`● ${item.tag.toUpperCase()}`, 56, 60);

    // Title (Huge, High-Contrast White)
    ctx.shadowColor = item.accent;
    ctx.shadowBlur = 12;
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 38px "Space Grotesk", sans-serif';
    ctx.fillText(item.title, 40, 122);
    ctx.shadowBlur = 0;

    // Subtitle
    ctx.fillStyle = item.accent;
    ctx.font = '700 19px "Space Grotesk", sans-serif';
    ctx.fillText(item.subtitle, 40, 158);

    // Strategic Description Paragraph
    ctx.fillStyle = 'rgba(226, 232, 240, 0.9)';
    ctx.font = '400 16px "Space Grotesk", sans-serif';
    const words = item.description.split(' ');
    let line = '';
    let curY = 200;
    for (let n = 0; n < words.length; n++) {
      const test = line + words[n] + ' ';
      if (ctx.measureText(test).width > 380 && n > 0) {
        ctx.fillText(line, 40, curY);
        line = words[n] + ' ';
        curY += 24;
      } else {
        line = test;
      }
    }
    ctx.fillText(line, 40, curY);

    // Two Large, Prominent Metric Tiles (No overlap with right column!)
    if (item.metrics && item.metrics.length >= 2) {
      item.metrics.slice(0, 2).forEach((m, idx) => {
        const bx = 40 + idx * 195;
        const by = 345;
        const bw = 180;
        const bh = 95;

        ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
        ctx.beginPath();
        ctx.roundRect(bx, by, bw, bh, 14);
        ctx.fill();

        ctx.strokeStyle = `${item.accent}55`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = 'rgba(203, 213, 225, 0.8)';
        ctx.font = '600 11px "JetBrains Mono", monospace';
        ctx.fillText(m.label.toUpperCase(), bx + 14, by + 30);

        ctx.fillStyle = item.accent;
        ctx.font = '800 24px "JetBrains Mono", monospace';
        ctx.fillText(m.val, bx + 14, by + 68);
      });
    }

    // Bottom Action Pill Button
    ctx.fillStyle = `${item.accent}22`;
    ctx.beginPath();
    ctx.roundRect(40, 475, 385, 52, 26);
    ctx.fill();
    ctx.strokeStyle = item.accent;
    ctx.lineWidth = 1.8;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 14px "JetBrains Mono", monospace';
    ctx.fillText('CLICK CARD TO OPEN FULL DOSSIER →', 62, 507);

    // VeriTrust Audit Watermark
    ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
    ctx.font = '600 11px "JetBrains Mono", monospace';
    ctx.fillText('VERITRUST™ VERIFIED // FAHAD ALI // LUCKNOW HQ', 42, 565);

    // =========================================================================
    // 4. OUTER GLOWING BORDER & CORNER SCI-FI RETICLES
    // =========================================================================
    ctx.strokeStyle = item.accent;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.roundRect(8, 8, 1008, 624, 24);
    ctx.stroke();

    // Corner Reticle Brackets
    const bracketSize = 24;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    // Top-left
    ctx.beginPath();
    ctx.moveTo(8, 8 + bracketSize);
    ctx.lineTo(8, 8);
    ctx.lineTo(8 + bracketSize, 8);
    ctx.stroke();
    // Top-right
    ctx.beginPath();
    ctx.moveTo(1016 - bracketSize, 8);
    ctx.lineTo(1016, 8);
    ctx.lineTo(1016, 8 + bracketSize);
    ctx.stroke();
    // Bottom-left
    ctx.beginPath();
    ctx.moveTo(8, 632 - bracketSize);
    ctx.lineTo(8, 632);
    ctx.lineTo(8 + bracketSize, 632);
    ctx.stroke();
    // Bottom-right
    ctx.beginPath();
    ctx.moveTo(1016 - bracketSize, 632);
    ctx.lineTo(1016, 632);
    ctx.lineTo(1016, 632 - bracketSize);
    ctx.stroke();

    texture.needsUpdate = true;
  };

  return { texture, update };
}

export default function Carousel3DScene({ onCardSelect, activeIndex, onIndexChange, onTintChange }) {
  const containerRef = useRef(null);
  const scrollPosRef = useRef(0);
  const targetScrollPosRef = useRef(0);
  const velocityRef = useRef(0);
  const lastActiveIntRef = useRef(0);

  useEffect(() => {
    if (activeIndex !== undefined && activeIndex !== lastActiveIntRef.current) {
      targetScrollPosRef.current = activeIndex;
    }
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 15);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Dynamic Point Lights (Center singularity + Focal plane)
    const centerCoreLight = new THREE.PointLight('#38bdf8', 1.8, 30);
    centerCoreLight.position.set(0, 0, -6);
    scene.add(centerCoreLight);

    const activeCardLight = new THREE.PointLight('#38bdf8', 2.8, 28);
    activeCardLight.position.set(1.5, 2, 8);
    scene.add(activeCardLight);

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.95);
    scene.add(ambientLight);

    // 3. Central Living Swirling Cosmic Whirlpool / Cyclone (Pushed to background)
    const vortexGroup = new THREE.Group();
    vortexGroup.position.set(0, 0, -8);
    scene.add(vortexGroup);

    const pCount = 8000;
    const pPositions = new Float32Array(pCount * 3);
    const pColors = new Float32Array(pCount * 3);

    // Metadata arrays for 4-arm logarithmic spiral cyclone physics
    const baseRadii = new Float32Array(pCount);
    const baseThetas = new Float32Array(pCount);
    const baseYs = new Float32Array(pCount);
    const speeds = new Float32Array(pCount);
    const armIndices = new Float32Array(pCount);

    const colorCoreWhite = new THREE.Color('#f8fafc'); // Starlight White
    const colorCyan = new THREE.Color('#38bdf8');      // Ice Azure
    const colorTeal = new THREE.Color('#06b6d4');      // Deep Ocean Teal
    const colorIndigo = new THREE.Color('#6366f1');    // Royal Indigo
    const colorLavender = new THREE.Color('#818cf8');  // Soft Slate Lavender

    for (let i = 0; i < pCount; i++) {
      const arm = i % 4; // 4 distinct spiral arms of the cyclone
      armIndices[i] = arm;

      // Radial distribution with dense core and expansive spiral arms
      const r = Math.pow(Math.random(), 1.5) * 8.5 + 0.8;
      baseRadii[i] = r;

      // Logarithmic spiral angle + arm offset + natural turbulence jitter
      const armOffset = (arm * Math.PI) / 2;
      const spiralCurvature = Math.log(r + 0.3) * 2.2;
      const jitter = (Math.random() - 0.5) * 0.45;
      const theta = armOffset + spiralCurvature + jitter;
      baseThetas[i] = theta;

      // Vertical distribution: Whirlpool funnel suction towards center!
      const funnelDepth = r < 3.2 ? -Math.pow((3.2 - r) / 3.2, 1.8) * 3.2 : 0;
      const verticalSpread = (Math.random() - 0.5) * (1.2 + r * 0.35);
      baseYs[i] = funnelDepth + verticalSpread;
      speeds[i] = 0.85 + Math.random() * 0.35;

      const x = r * Math.cos(theta);
      const y = baseYs[i];
      const z = r * Math.sin(theta) * 0.88;

      pPositions[i * 3] = x;
      pPositions[i * 3 + 1] = y;
      pPositions[i * 3 + 2] = z;

      // Sophisticated executive color distribution
      let col;
      if (r < 1.6) col = colorCoreWhite;
      else if (arm === 0) col = colorCyan;
      else if (arm === 1) col = colorIndigo;
      else if (arm === 2) col = colorTeal;
      else col = colorLavender;

      pColors[i * 3] = col.r;
      pColors[i * 3 + 1] = col.g;
      pColors[i * 3 + 2] = col.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending
    });
    const vortexMesh = new THREE.Points(pGeo, pMat);
    vortexGroup.add(vortexMesh);

    // Central Glowing Singularity Core Sphere (Subtle, refined)
    const coreGeo = new THREE.SphereGeometry(1.0, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#38bdf8'),
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      wireframe: true
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    vortexGroup.add(coreMesh);

    // 4. Two Tilted Celestial Orbital Energy Rings (Accretion Disks)
    const ringCount = 1200;
    const ringPositions = new Float32Array(ringCount * 3);
    const ringColors = new Float32Array(ringCount * 3);

    for (let i = 0; i < ringCount; i++) {
      const isSecondRing = i > ringCount / 2;
      const rad = 7.5 + Math.random() * 2.2;
      const ang = (i / (ringCount / 2)) * Math.PI * 2;
      const tilt = isSecondRing ? -0.48 : 0.62;

      const rx = Math.cos(ang) * rad;
      const rz = Math.sin(ang) * rad;
      const ry = Math.sin(ang) * rad * Math.sin(tilt) + (Math.random() - 0.5) * 0.5;

      ringPositions[i * 3] = rx;
      ringPositions[i * 3 + 1] = ry;
      ringPositions[i * 3 + 2] = rz;

      const rCol = isSecondRing ? colorIndigo : colorCyan;
      ringColors[i * 3] = rCol.r;
      ringColors[i * 3 + 1] = rCol.g;
      ringColors[i * 3 + 2] = rCol.b;
    }

    const ringGeo = new THREE.BufferGeometry();
    ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    ringGeo.setAttribute('color', new THREE.BufferAttribute(ringColors, 3));

    const ringMat = new THREE.PointsMaterial({
      size: 0.10,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const ringMesh = new THREE.Points(ringGeo, ringMat);
    vortexGroup.add(ringMesh);

    // 5. Deep Background Ambient Dust (Kept behind cards)
    const emberCount = 280;
    const emberPos = new Float32Array(emberCount * 3);
    for (let i = 0; i < emberCount; i++) {
      emberPos[i * 3] = (Math.random() - 0.5) * 44;
      emberPos[i * 3 + 1] = (Math.random() - 0.5) * 26;
      emberPos[i * 3 + 2] = -4 - Math.random() * 18; // Always behind cards!
    }
    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
    const emberMat = new THREE.PointsMaterial({
      size: 0.14,
      color: new THREE.Color('#38bdf8'),
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const emberMesh = new THREE.Points(emberGeo, emberMat);
    scene.add(emberMesh);

    // 6. 3D Project Cards Setup — Massive, Crisp High-Definition Studio Monitors
    const cardsGroup = new THREE.Group();
    scene.add(cardsGroup);

    // Prominent, expansive card dimensions (Fills ~55% of viewport height & width)
    const CARD_W = 10.8;
    const CARD_H = 6.6;
    const cardGeometry = new THREE.PlaneGeometry(CARD_W, CARD_H);
    const edges = new THREE.EdgesGeometry(cardGeometry);

    const cardEntries = CARDS_DATA.map((item, idx) => {
      const { texture, update } = createCardCanvasTexture(item);
      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.FrontSide,
        depthWrite: true,
        depthTest: true,
        opacity: 1.0
      });
      const mesh = new THREE.Mesh(cardGeometry, mat);
      mesh.renderOrder = 20; // Renders IN FRONT of background particles!
      mesh.userData = { index: idx, item };

      // Glowing outer border frame
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(item.accent),
        transparent: true,
        opacity: 0.95
      });
      const line = new THREE.LineSegments(edges, lineMat);
      line.renderOrder = 21;
      mesh.add(line);

      cardsGroup.add(mesh);
      return { mesh, update, item, lineMat };
    });

    // 7. Interactive Vertical Dragging & Mouse Wheel / Touch Controls
    let isDragging = false;
    let startPointer = { x: 0, y: 0 };
    let lastPointer = { x: 0, y: 0 };
    const mouseNorm = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      isDragging = true;
      startPointer = { x: e.clientX, y: e.clientY };
      lastPointer = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseNorm.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNorm.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - lastPointer.x;
        const deltaY = e.clientY - lastPointer.y;

        // Up/down dragging is primary: Dragging UP (deltaY < 0) advances cards forward (scroll down)
        // Dragging DOWN (deltaY > 0) moves cards backward (scroll up)
        // Left/Right drag also contributes naturally: Left = forward, Right = backward
        velocityRef.current += (-deltaY * 0.0034) + (-deltaX * 0.0016);

        lastPointer = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      if (isDragging) {
        isDragging = false;
        targetScrollPosRef.current = Math.round(scrollPosRef.current + velocityRef.current * 3.5);
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const deltaY = e.deltaY || 0;
      const deltaX = e.deltaX || 0;

      // Mouse wheel / Trackpad:
      // Scrolling DOWN (deltaY > 0) advances cards forward, revolving them in 3D
      // Scrolling UP (deltaY < 0) moves cards backward
      velocityRef.current += (deltaY * 0.0022) + (deltaX * 0.001);
      targetScrollPosRef.current = Math.round(scrollPosRef.current + velocityRef.current * 4.2);
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length === 1) {
        isDragging = true;
        startPointer = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        lastPointer = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - lastPointer.x;
        const deltaY = e.touches[0].clientY - lastPointer.y;

        velocityRef.current += (-deltaY * 0.0038) + (-deltaX * 0.0018);
        lastPointer = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        isDragging = false;
        targetScrollPosRef.current = Math.round(scrollPosRef.current + velocityRef.current * 3.5);
      }
    };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    const handleClick = (e) => {
      if (Math.hypot(e.clientX - startPointer.x, e.clientY - startPointer.y) > 8) return;

      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const meshes = cardEntries.map(c => c.mesh);
      const hits = raycaster.intersectObjects(meshes);

      if (hits.length > 0) {
        const topHit = hits[0].object;
        const hitIdx = topHit.userData.index;
        soundManager.playClick();
        targetScrollPosRef.current = hitIdx;
        if (onCardSelect) onCardSelect(topHit.userData.item);
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('click', handleClick);

    // 8. Animation Loop with Organic Keplerian Vortex & 3D Whirlpool Flight Path
    let animId;
    const clock = new THREE.Clock();
    const numCards = CARDS_DATA.length;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle physics damping (more friction = smoother, controlled glide)
      scrollPosRef.current += velocityRef.current;
      velocityRef.current *= 0.84;

      if (!isDragging && Math.abs(velocityRef.current) < 0.003) {
        scrollPosRef.current += (targetScrollPosRef.current - scrollPosRef.current) * 0.075;
      }

      // Active card index change & audio sound effects
      const activeInt = Math.round(scrollPosRef.current);
      const normalizedActive = ((activeInt % numCards) + numCards) % numCards;

      if (normalizedActive !== lastActiveIntRef.current) {
        lastActiveIntRef.current = normalizedActive;
        soundManager.playTick();
        soundManager.playSwoosh();
        const activeAccent = CARDS_DATA[normalizedActive].accent;
        activeCardLight.color.set(activeAccent);
        centerCoreLight.color.set(activeAccent);
        if (onIndexChange) onIndexChange(normalizedActive);
        if (onTintChange) onTintChange(activeAccent);
      }

      // -------------------------------------------------------------
      // Dynamic Keplerian Fluid Vortex Simulation (Calm, Majestic Swirl)
      // -------------------------------------------------------------
      const posAttr = vortexMesh.geometry.attributes.position;
      const positions = posAttr.array;

      for (let i = 0; i < pCount; i++) {
        const r0 = baseRadii[i];
        const theta0 = baseThetas[i];
        const y0 = baseYs[i];
        const spd = speeds[i];

        // Slower, hypnotic Keplerian spin (reduced speed by ~60%)
        const spinSpeed = (0.20 / (Math.sqrt(r0) + 0.32)) * spd;
        const curTheta = theta0 + elapsedTime * spinSpeed;

        // Gentle breathing radial expansion
        const r = r0 * (1.0 + Math.sin(elapsedTime * 0.9 + y0 * 0.3) * 0.04);

        // Hydrodynamic vertical undulation waves & funnel suction
        const funnelY = r < 3.2 ? -Math.pow((3.2 - r) / 3.2, 1.8) * 2.8 : 0;
        const waveY = Math.sin(curTheta * 2.5 + elapsedTime * 0.8) * 0.5;
        const curY = y0 * Math.cos(elapsedTime * 0.5 + r0 * 0.25) + funnelY + waveY;

        positions[i * 3] = r * Math.cos(curTheta);
        positions[i * 3 + 1] = curY;
        positions[i * 3 + 2] = r * Math.sin(curTheta) * 0.88;
      }
      posAttr.needsUpdate = true;

      // Pulse Central Singularity Core (Slow, subtle respiration)
      const corePulse = 1.0 + Math.sin(elapsedTime * 1.4) * 0.08;
      coreMesh.scale.set(corePulse, corePulse, corePulse);
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.z = Math.sin(elapsedTime * 0.3) * 0.2;

      // Rotate tilted rings & vortex group slowly and majestically
      ringMesh.rotation.y = elapsedTime * 0.16;
      vortexGroup.rotation.x = Math.sin(elapsedTime * 0.25) * 0.08;
      vortexGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.35;

      // Drift floating embers slowly through space
      emberMesh.rotation.y = elapsedTime * 0.025;
      emberMesh.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      // -------------------------------------------------------------
      // 3D CARDS REVOLVING ARC ("Upar-Neeche Scroll + 3D Ghoomna")
      // -------------------------------------------------------------
      cardEntries.forEach((entry, i) => {
        let offset = (i - scrollPosRef.current) % numCards;
        if (offset > numCards / 2) offset -= numCards;
        if (offset < -numCards / 2) offset += numCards;

        // Spacing angle around 3D cylindrical turntable
        const phi = offset * 0.46; // ~26 degrees per card
        const arcRadius = 13.2;

        // Coordinates: Active card (offset = 0) is placed at center-right (x = 1.0)
        const x = 1.0 + Math.sin(phi) * arcRadius + offset * 0.5;
        const z = 1.5 + (Math.cos(phi) - 1.0) * (arcRadius * 0.85) - Math.abs(offset) * 2.2;
        const y = -offset * 1.8 + Math.sin(elapsedTime * 0.8 + i * 1.1) * 0.1;

        entry.mesh.position.set(x, y, z);

        // 3D Revolving Rotations ("jaise jaise neeche scroll kre card ghume"):
        // Yaw (Y-axis): turns inward towards camera
        entry.mesh.rotation.y = -0.15 - phi * 0.82 + mouseNorm.x * 0.05;

        // Pitch (X-axis): rolls dynamically with scroll velocity and tilts with vertical offset
        entry.mesh.rotation.x = -offset * 0.12 + velocityRef.current * 3.4 + mouseNorm.y * 0.05;

        // Roll / Bank (Z-axis): gentle banking angle along arc
        entry.mesh.rotation.z = -offset * 0.08;

        // Scale & Opacity with Depth
        const dist = Math.abs(offset);
        const scale = Math.max(0.62, 1.0 - dist * 0.15);
        entry.mesh.scale.set(scale, scale, scale);

        // Active card is 100% solid, neighbor cards remain 80%+ solid for high visibility
        const opacity = Math.max(0.55, 1.0 - dist * 0.20);
        entry.mesh.material.opacity = opacity;
        entry.lineMat.opacity = dist < 0.6 ? 0.95 : 0.45;

        // Update real-time procedural video canvas texture at 60 FPS
        entry.update(elapsedTime);
      });

      // Camera parallax tracking cursor smoothly (weighted damping)
      camera.position.x += (mouseNorm.x * 2.2 - camera.position.x) * 0.035;
      camera.position.y += (0.5 + mouseNorm.y * 1.6 - camera.position.y) * 0.035;
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
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('click', handleClick);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none"
    />
  );
}

