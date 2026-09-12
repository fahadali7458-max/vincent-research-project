import React, { useEffect, useRef } from 'react';

export default function BackgroundGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 1. Cosmic Constellation Stars
    const count = 90;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.4 + 0.2,
        twinkleSpeed: Math.random() * 2 + 1,
        color: Math.random() > 0.6 ? '#00f0ff' : Math.random() > 0.3 ? '#8b5cf6' : '#ec4899'
      });
    }

    let animId;
    let time = 0;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Deep space atmospheric ambient glow
      const cx = width / 2;
      const cy = height / 2;
      const bgGlow = ctx.createRadialGradient(cx, cy, 60, cx, cy, width * 0.65);
      bgGlow.addColorStop(0, 'rgba(11, 22, 58, 0.4)');
      bgGlow.addColorStop(0.5, 'rgba(5, 10, 30, 0.2)');
      bgGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Perspective cybernetic grid vanishing into the center
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.035)';
      ctx.lineWidth = 1;

      // Radial perspective beams from center
      const beamCount = 24;
      for (let b = 0; b < beamCount; b++) {
        const ang = (b / beamCount) * Math.PI * 2 + time * 0.02;
        const outerR = Math.hypot(width, height) * 0.7;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(ang) * 120, cy + Math.sin(ang) * 120);
        ctx.lineTo(cx + Math.cos(ang) * outerR, cy + Math.sin(ang) * outerR);
        ctx.stroke();
      }

      // Concentric elliptical rings expanding outward
      for (let r = 0; r < 4; r++) {
        const ringRad = ((time * 25 + r * 160) % 640) + 120;
        const alpha = Math.max(0, (1 - ringRad / 760) * 0.04);
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.ellipse(cx, cy, ringRad * 1.5, ringRad * 0.85, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // Cosmic Star Particles with Twinkle
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        const currentAlpha = p1.baseAlpha + Math.sin(time * p1.twinkleSpeed) * 0.15;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = Math.max(0.1, currentAlpha);
        ctx.fill();

        // Connect nearby stars with subtle laser threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#00f0ff';
            ctx.globalAlpha = (1 - dist / 110) * 0.1;
            ctx.stroke();
          }
        }
      }
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
