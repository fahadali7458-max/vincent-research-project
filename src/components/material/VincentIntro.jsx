import React, { useState, useEffect, useRef } from 'react';

export default function VincentIntro({ onComplete }) {
  const canvasRef = useRef(null);
  const [isDissolving, setIsDissolving] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  const handleSkip = () => {
    setIsDone(true);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (onComplete) onComplete();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false }); // High performance opaque canvas

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = (canvas.width = Math.round(window.innerWidth * dpr));
    let H = (canvas.height = Math.round(window.innerHeight * dpr));

    const handleResize = () => {
      if (!canvas) return;
      const currentDpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.width = Math.round(window.innerWidth * currentDpr);
      H = canvas.height = Math.round(window.innerHeight * currentDpr);
    };
    window.addEventListener('resize', handleResize);

    // Color Palette: Pure Pearl White + Electric Neon Blues & Cyans + Deep Sapphires
    const spectrumColors = [
      '#FFFFFF', '#FFFFFF', '#F0F9FF', // Pure Pearl White
      '#00F0FF', '#38BDF8', '#00B4D8', // Electric Cyan & Sky Blue
      '#0284C7', '#0369A1', '#0077B6', // Oceanic Blue
      '#2563EB', '#1D4ED8', '#60A5FA', // Deep Sapphire & Laser Blue
      '#7DF9FF', '#A5F3FC'             // High-Voltage Shimmer
    ];

    // Generate 130 dense vertical light ribbons (Netflix spectrum effect)
    // Pre-allocated for zero garbage collection during 60/120fps render loop
    const count = 130;
    const ribbons = new Array(count);
    for (let i = 0; i < count; i++) {
      const norm = (i / (count - 1)) * 2 - 1;
      const sign = norm < 0 ? -1 : 1;
      const u = sign * Math.pow(Math.abs(norm), 1.25);
      ribbons[i] = {
        u: u,
        w: (Math.random() * 8 + 4) * dpr,
        color: spectrumColors[Math.floor(Math.random() * spectrumColors.length)],
        alpha: Math.random() * 0.45 + 0.55,
        speed: Math.random() * 0.7 + 0.65
      };
    }

    // Timeline Choreography:
    // Phase 1 (0 - 650ms): Pearl White 'V' forms in center with soft halo
    // Phase 2 (650 - 1850ms): 'V' glides right-to-left, unmasking "INCENT RESEARCH" in reverted typography
    // Phase 3 (1850 - 2150ms): Full "VINCENT RESEARCH" locks in with laser shimmer
    // Phase 4 (2150 - 3300ms): "Wahi se intro start ho" - Netflix Spectrum Ribbons Eruption & Zoom
    // Phase 5 (3300 - 3800ms): Smooth dissolve into live website
    const PHASE1_END = 650;
    const PHASE2_END = 1850;
    const PHASE3_END = 2150;
    const PHASE4_END = 3300;
    const DURATION = 3800;

    const render = (now) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;

      // 1. Instant black background clear
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, W, H);

      // Typography metrics setup
      const targetFontSize = Math.min(Math.round(W * 0.048), 66 * dpr);
      ctx.font = `800 ${targetFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Plus Jakarta Sans", sans-serif`;
      ctx.textBaseline = 'middle';

      const vMetrics = ctx.measureText('V');
      const vWidth = vMetrics.width;
      const incentWidth = ctx.measureText('INCENT').width;
      const spaceWidth = ctx.measureText(' ').width;
      const researchWidth = ctx.measureText('RESEARCH').width;
      const fullLogoWidth = vWidth + incentWidth + spaceWidth + researchWidth;

      const finalStartX = (W - fullLogoWidth) / 2;
      const finalVx = finalStartX;
      const centerVx = W / 2 - vWidth / 2;

      if (elapsed < PHASE1_END) {
        // =========================================================================
        // PHASE 1: Pure Pearl White 'V' in Center of Pitch-Black Void
        // =========================================================================
        const p = Math.min(elapsed / 450, 1);
        const scale = 0.94 + (elapsed / PHASE1_END) * 0.06;

        // Subtle ambient white halo behind V
        const glowRadius = Math.min(W * 0.16, 200 * dpr);
        const vGrad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, glowRadius);
        vGrad.addColorStop(0, `rgba(255, 255, 255, ${0.32 * p})`);
        vGrad.addColorStop(0.4, `rgba(0, 240, 255, ${0.12 * p})`);
        vGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = vGrad;
        ctx.fillRect(W / 2 - glowRadius, H / 2 - glowRadius, glowRadius * 2, glowRadius * 2);

        ctx.save();
        ctx.translate(W / 2, H / 2);
        ctx.scale(scale, scale);

        const vLargeSize = Math.min(Math.round(W * 0.09), 110 * dpr);
        ctx.font = `900 ${vLargeSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = 'center';

        ctx.fillStyle = `rgba(0, 240, 255, ${0.3 * p})`;
        ctx.fillText('V', 0, 0);

        ctx.fillStyle = `rgba(255, 255, 255, ${p})`;
        ctx.fillText('V', 0, 0);

        ctx.restore();

      } else if (elapsed < PHASE2_END) {
        // =========================================================================
        // PHASE 2: 'V' Glides Right-to-Left & Reveals "INCENT RESEARCH" (Reverted Typography)
        // =========================================================================
        const moveElapsed = elapsed - PHASE1_END;
        const moveDuration = PHASE2_END - PHASE1_END;
        const t = Math.min(moveElapsed / moveDuration, 1);

        // Smooth cubic in-out curve
        const easeMove = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        // Interpolate V's X position from Center to Left (Right-to-Left movement)
        const currentVx = centerVx + (finalVx - centerVx) * easeMove;

        // Interpolate font size from large V to wordmark size
        const vLargeSize = Math.min(Math.round(W * 0.09), 110 * dpr);
        const currentVSize = vLargeSize + (targetFontSize - vLargeSize) * easeMove;

        // 1. Draw the gliding "V"
        ctx.save();
        ctx.font = `900 ${currentVSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = 'left';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('V', currentVx, H / 2);
        ctx.restore();

        // 2. Reverted Typography Reveal:
        // As V moves to the left, "INCENT RESEARCH" smoothly expands out to its right
        if (easeMove > 0.04) {
          ctx.save();
          const textRevealProgress = Math.min((easeMove - 0.04) / 0.96, 1);
          const currentTextWidth = (fullLogoWidth - vWidth) * textRevealProgress;
          const textStartX = currentVx + vWidth;

          // Reverted Typography Background Aura / Inverted Container Box
          const bgBoxGrad = ctx.createLinearGradient(textStartX, 0, textStartX + currentTextWidth, 0);
          bgBoxGrad.addColorStop(0, 'rgba(0, 240, 255, 0.12)');
          bgBoxGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.06)');
          bgBoxGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = bgBoxGrad;
          ctx.fillRect(textStartX, H / 2 - targetFontSize * 0.85, currentTextWidth, targetFontSize * 1.7);

          // Clip to the expanding text container
          ctx.beginPath();
          ctx.rect(textStartX, H / 2 - targetFontSize * 1.2, currentTextWidth, targetFontSize * 2.4);
          ctx.clip();

          // "INCENT" in pure Pearl White
          ctx.font = `800 ${targetFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Plus Jakarta Sans", sans-serif`;
          ctx.textAlign = 'left';
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(textRevealProgress * 1.4, 1)})`;
          ctx.fillText('INCENT', textStartX, H / 2);

          // "RESEARCH" in Electric Neon Cyan (Reverted high-contrast typography)
          const researchX = textStartX + incentWidth + spaceWidth;
          ctx.fillStyle = `rgba(0, 240, 255, ${Math.min(textRevealProgress * 1.4, 1)})`;
          ctx.fillText('RESEARCH', researchX, H / 2);

          ctx.restore();

          // Underline laser trace (sweeps smoothly alongside the text)
          ctx.fillStyle = 'rgba(0, 240, 255, 0.85)';
          ctx.fillRect(currentVx, H / 2 + targetFontSize * 0.65, vWidth + currentTextWidth, 2.5 * dpr);

          // Trailing bright laser cursor on the reveal front
          const cursorX = textStartX + currentTextWidth;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
          ctx.fillRect(cursorX - 1.5 * dpr, H / 2 - targetFontSize * 0.7, 3 * dpr, targetFontSize * 1.4);
        }

      } else if (elapsed < PHASE3_END) {
        // =========================================================================
        // PHASE 3: Complete "VINCENT RESEARCH" Locked in Full Glory
        // =========================================================================
        const holdProgress = (elapsed - PHASE2_END) / (PHASE3_END - PHASE2_END);

        ctx.save();
        ctx.font = `800 ${targetFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = 'left';

        // "V"
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('V', finalStartX, H / 2);

        // "INCENT"
        ctx.fillText('INCENT', finalStartX + vWidth, H / 2);

        // "RESEARCH" in Neon Cyan
        const researchX = finalStartX + vWidth + incentWidth + spaceWidth;
        ctx.fillStyle = '#00F0FF';
        ctx.fillText('RESEARCH', researchX, H / 2);

        // Underline laser
        ctx.fillStyle = 'rgba(0, 240, 255, 0.85)';
        ctx.fillRect(finalStartX, H / 2 + targetFontSize * 0.65, fullLogoWidth, 2.5 * dpr);

        // Shimmer sweep across the full logo
        const shimmerX = finalStartX + holdProgress * fullLogoWidth;
        const shimmerGrad = ctx.createLinearGradient(shimmerX - 80 * dpr, 0, shimmerX + 80 * dpr, 0);
        shimmerGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        shimmerGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.85)');
        shimmerGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = shimmerGrad;
        ctx.fillRect(finalStartX, H / 2 - targetFontSize * 0.9, fullLogoWidth, targetFontSize * 1.8);

        ctx.restore();

      } else if (elapsed < PHASE4_END) {
        // =========================================================================
        // PHASE 4: "WAHI SE INTRO START HO" - NETFLIX SPECTRUM RIBBONS ERUPTION
        // 120 FPS Additive Blending (Zero shadowBlur - 100% GPU Shader Accelerated)
        // =========================================================================
        const burstElapsed = elapsed - PHASE3_END;
        const burstDuration = PHASE4_END - PHASE3_END;
        const burstProgress = Math.min(burstElapsed / burstDuration, 1);
        const easeZoom = Math.pow(burstProgress, 2.3);

        // Logo rapidly dissolves & zooms outward as ribbons erupt
        const logoAlpha = Math.max(1 - burstProgress * 3.5, 0);
        if (logoAlpha > 0) {
          ctx.save();
          const zoomScale = 1.0 + burstProgress * 2.2;
          ctx.translate(W / 2, H / 2);
          ctx.scale(zoomScale, zoomScale);
          ctx.font = `800 ${targetFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Plus Jakarta Sans", sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillStyle = `rgba(255, 255, 255, ${logoAlpha})`;
          ctx.fillText('VINCENT RESEARCH', 0, 0);
          ctx.restore();
        }

        // Additive Blending: Overlapping Cyan, White, Blue ribbons glow naturally without lag!
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        for (let i = 0; i < count; i++) {
          const r = ribbons[i];
          const spreadMult = 1 + easeZoom * 5.2 * r.speed;
          const x = W / 2 + r.u * (W * 0.35) * spreadMult;
          const currentW = r.w * (1 + easeZoom * 3.6);

          let alpha = r.alpha * Math.min(burstProgress * 5.0, 1);
          if (burstProgress > 0.74) {
            alpha *= (1 - (burstProgress - 0.74) / 0.26);
          }

          // Cull offscreen ribbons for instant execution
          if (x > -currentW * 3 && x < W + currentW * 3 && alpha > 0.01) {
            // Pass 1: Soft ambient glow beam (wider, soft alpha)
            ctx.fillStyle = r.color;
            ctx.globalAlpha = alpha * 0.28;
            ctx.fillRect(x - currentW * 1.5, 0, currentW * 3.0, H);

            // Pass 2: High-intensity laser core (sharp, solid alpha)
            ctx.globalAlpha = alpha * 0.88;
            ctx.fillRect(x - currentW * 0.5, 0, currentW, H);
          }
        }

        // Center Hyperspace Bloom Flash (Single hardware radial gradient)
        if (burstProgress > 0.38) {
          const bloomP = (burstProgress - 0.38) / 0.62;
          const radius = W * Math.pow(bloomP, 1.25) * 0.95;
          const grad = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, radius);
          grad.addColorStop(0, `rgba(255, 255, 255, ${bloomP * 0.92})`);
          grad.addColorStop(0.2, `rgba(0, 240, 255, ${bloomP * 0.75})`);
          grad.addColorStop(0.65, `rgba(0, 180, 216, ${bloomP * 0.28})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = grad;
          ctx.globalAlpha = 1;
          ctx.fillRect(0, 0, W, H);
        }

        ctx.restore();

      } else if (elapsed < DURATION) {
        // =========================================================================
        // PHASE 5: Seamless Dissolve into Vincent Research Homepage
        // =========================================================================
        setIsDissolving(true);
      } else {
        // Complete - Unmount Intro Immediately
        setIsDone(true);
        if (onComplete) onComplete();
        return;
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (isDone) return null;

  return (
    <div 
      onClick={handleSkip}
      className={`fixed inset-0 z-[99999] bg-black overflow-hidden select-none cursor-pointer transition-opacity duration-600 ease-out ${
        isDissolving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block"
      />

      {/* Discreet Skip Button Top Right */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          handleSkip();
        }}
        className="absolute top-6 right-6 z-20 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white/70 hover:text-white text-xs font-mono tracking-wider transition-all backdrop-blur-md flex items-center gap-1.5 group"
      >
        <span>SKIP</span>
        <span className="text-[#00F0FF] group-hover:translate-x-0.5 transition-transform">⇥</span>
      </button>

      {/* Subtle Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-neutral-600 tracking-widest uppercase pointer-events-none">
        Click to skip
      </div>
    </div>
  );
}
