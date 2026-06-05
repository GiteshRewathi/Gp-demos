"use client";

import { useEffect, useRef, useState } from "react";

interface ClayChunk {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
  cx: number;
  cy: number;
  ex: number;
  ey: number;
  erotation: number;
}

const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function ExplodedClayGanesha({
  imageSrc = "/assets/ganesha/clay-natural.png",
}: {
  imageSrc?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chunksRef = useRef<ClayChunk[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const cellSizeRef = useRef({ w: 0, h: 0 });
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const explodedRef = useRef(false);
  const animIdRef = useRef(0);
  const timeRef = useRef(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    const buildChunks = (iw: number, ih: number, displayW: number) => {
      const displayH = (ih / iw) * displayW;
      const cols = 20;
      const rows = 26;
      const cellW = iw / cols;
      const cellH = ih / rows;
      const chunks: ClayChunk[] = [];
      const centerX = displayW / 2;
      const centerY = displayH / 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const sx = col * cellW;
          const sy = row * cellH;
          const cx = (col + 0.5) * (displayW / cols);
          const cy = (row + 0.5) * (displayH / rows);
          const dx = cx - centerX;
          const dy = cy - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const spread = 0.7 + Math.random() * 0.9;

          chunks.push({
            sx,
            sy,
            sw: cellW + 1,
            sh: cellH + 1,
            cx,
            cy,
            ex: (dx / dist) * (50 + Math.random() * 90) * spread,
            ey: (dy / dist) * (50 + Math.random() * 90) * spread,
            erotation: (Math.random() - 0.5) * 0.7,
          });
        }
      }
      cellSizeRef.current = { w: displayW / cols, h: displayH / rows };
      return { chunks, displayH };
    };

    let displayW = 0;
    let displayH = 0;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      displayW = Math.min(rect.width, 440);
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = displayW * dpr;
      canvas.height = (displayH || displayW * 1.15) * dpr;
      canvas.style.width = `${displayW}px`;
      canvas.style.height = `${displayH || displayW * 1.15}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    img.onload = () => {
      imageRef.current = img;
      displayW = Math.min(wrap.getBoundingClientRect().width, 440);
      const result = buildChunks(img.width, img.height, displayW);
      chunksRef.current = result.chunks;
      displayH = result.displayH;
      resize();
      setLoaded(true);
    };

    const draw = () => {
      if (!imageRef.current || !chunksRef.current.length) return;

      const p = ease(progressRef.current);
      const t = timeRef.current;
      const breathe = Math.sin(t * 0.8) * 3;
      const sway = Math.sin(t * 0.5) * 1.5;

      ctx.clearRect(0, 0, displayW, displayH);

      const glow = ctx.createRadialGradient(
        displayW / 2,
        displayH / 2,
        0,
        displayW / 2,
        displayH / 2,
        displayW * 0.55
      );
      glow.addColorStop(0, "rgba(139, 21, 56, 0.06)");
      glow.addColorStop(1, "rgba(139, 21, 56, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, displayW, displayH);

      const { w: dw, h: dh } = cellSizeRef.current;

      chunksRef.current.forEach((chunk) => {
        const ox = chunk.ex * p + sway * (1 - p);
        const oy = chunk.ey * p + breathe * (1 - p);
        const rot = chunk.erotation * p;

        ctx.save();
        ctx.translate(chunk.cx + ox, chunk.cy + oy);
        ctx.rotate(rot);
        ctx.drawImage(
          imageRef.current!,
          chunk.sx,
          chunk.sy,
          chunk.sw,
          chunk.sh,
          -dw / 2,
          -dh / 2,
          dw,
          dh
        );
        ctx.restore();
      });

      if (p > 0.15 && p < 0.9) {
        for (let i = 0; i < 3; i++) {
          ctx.fillStyle = `rgba(160, 110, 70, ${0.12 * p})`;
          ctx.beginPath();
          ctx.arc(
            displayW / 2 + (Math.random() - 0.5) * 80,
            displayH / 2 + (Math.random() - 0.5) * 80,
            1 + Math.random() * 2.5,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }
    };

    const animate = () => {
      timeRef.current += 0.016;
      const diff = targetRef.current - progressRef.current;
      progressRef.current += diff * 0.028;
      draw();
      animIdRef.current = requestAnimationFrame(animate);
    };

    const setExploded = (value: boolean) => {
      explodedRef.current = value;
      targetRef.current = value ? 1 : 0;
    };

    const onActivate = () => setExploded(true);
    const onLeave = () => setExploded(false);

    wrap.addEventListener("click", onActivate);
    wrap.addEventListener("mouseenter", onActivate);
    wrap.addEventListener("mouseleave", onLeave);
    wrap.addEventListener("touchstart", onActivate, { passive: true });
    wrap.addEventListener("touchend", onLeave, { passive: true });

    window.addEventListener("resize", resize);
    animIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animIdRef.current);
      wrap.removeEventListener("click", onActivate);
      wrap.removeEventListener("mouseenter", onActivate);
      wrap.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, [imageSrc]);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        ref={wrapRef}
        className="relative cursor-pointer select-none rounded-2xl overflow-hidden "
        style={{ width: "100%", maxWidth: 440 }}
      >
        {!loaded && (
          <div className="w-full aspect-[4/5] bg-[var(--muted)] animate-pulse" />
        )}
        <canvas
          ref={canvasRef}
          className={`mx-auto block ${loaded ? "opacity-100" : "opacity-0 absolute"}`}
        />
      </div>
    </div>
  );
}
