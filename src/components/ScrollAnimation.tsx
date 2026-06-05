"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IDOL_SRC = "/assets/ganesha/ganesha-transparent.png";
const PLANT_SRC = "/assets/ganesha/plant-transparent.png";

interface RainDrop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  wind: number;
}

interface Drip {
  x: number;
  y: number;
  vy: number;
  size: number;
  life: number;
}

const smooth = (t: number) => t * t * (3 - 2 * t);

export function ScrollAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const idolRef = useRef<HTMLDivElement>(null);
  const idolImgRef = useRef<HTMLImageElement>(null);
  const meltCanvasRef = useRef<HTMLCanvasElement>(null);
  const plantRef = useRef<HTMLDivElement>(null);
  const rainCanvasRef = useRef<HTMLCanvasElement>(null);

  const progressRef = useRef(0);
  const rainRef = useRef<RainDrop[]>([]);
  const dripsRef = useRef<Drip[]>([]);
  const frameRef = useRef(0);
  const idolRectRef = useRef({ cx: 0, top: 0, bottom: 0, w: 0 });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const idol = idolRef.current;
    const idolImg = idolImgRef.current;
    const meltCanvas = meltCanvasRef.current;
    const plant = plantRef.current;
    const rainCanvas = rainCanvasRef.current;

    if (!section || !pin || !idol || !idolImg || !meltCanvas || !plant || !rainCanvas) return;

    const meltCtx = meltCanvas.getContext("2d");
    const rainCtx = rainCanvas.getContext("2d");
    if (!meltCtx || !rainCtx) return;

    let animId = 0;

    const updateRects = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rainRect = rainCanvas.getBoundingClientRect();
      const idolBox = idol.getBoundingClientRect();
      const pinRect = pin.getBoundingClientRect();

      rainCanvas.width = rainRect.width * dpr;
      rainCanvas.height = rainRect.height * dpr;
      rainCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      meltCanvas.width = idolBox.width * dpr;
      meltCanvas.height = idolBox.height * dpr;
      meltCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

      idolRectRef.current = {
        cx: idolBox.left - pinRect.left + idolBox.width / 2,
        top: idolBox.top - pinRect.top,
        bottom: idolBox.bottom - pinRect.top,
        w: idolBox.width,
      };
    };

    /** Pure section par start se dikhe — kam → thodi zyada → scroll ke end par bhari */
    const getRainIntensity = (p: number) => {
      const t = Math.max(0, Math.min(1, p));
      return 0.22 + Math.pow(t, 1.45) * 0.78;
    };

    const spawnRain = (w: number, h: number, intensity: number) => {
      const spawnEvery = Math.max(2, Math.floor(16 - intensity * 13));
      if (frameRef.current % spawnEvery !== 0) return;

      const count = Math.floor(3 + intensity * intensity * 34);
      for (let i = 0; i < count; i++) {
        rainRef.current.push({
          x: Math.random() * w,
          y: -10 - Math.random() * h * 0.2,
          length: 10 + Math.random() * (12 + intensity * 32),
          speed: 0.9 + Math.random() * (1.8 + intensity * 16),
          opacity: 0.12 + Math.random() * (0.14 + intensity * 0.48),
          wind: -0.14 + Math.random() * (0.18 + intensity * 0.55),
        });
      }
    };

    const spawnDrip = (cx: number, top: number, bottom: number, intensity: number) => {
      if (intensity < 0.06) return;
      dripsRef.current.push({
        x: cx + (Math.random() - 0.5) * idolRectRef.current.w * 0.7,
        y: top + Math.random() * (bottom - top) * 0.5,
        vy: 0.2 + Math.random() * (0.5 + intensity),
        size: 1.5 + Math.random() * (2 + intensity * 4),
        life: 0,
      });
    };

    const drawMeltOverlay = (melt: number) => {
      const w = meltCanvas.width / Math.min(window.devicePixelRatio, 2);
      const h = meltCanvas.height / Math.min(window.devicePixelRatio, 2);
      meltCtx.clearRect(0, 0, w, h);
      if (melt < 0.02) return;

      const meltLine = h * (1 - melt * 0.92);
      const grd = meltCtx.createLinearGradient(0, meltLine - 40, 0, h);
      grd.addColorStop(0, "rgba(90,58,32,0)");
      grd.addColorStop(0.4, `rgba(100,65,38,${melt * 0.5})`);
      grd.addColorStop(1, `rgba(75,48,28,${melt * 0.85})`);
      meltCtx.fillStyle = grd;
      meltCtx.fillRect(0, meltLine - 20, w, h - meltLine + 40);
    };

    const draw = () => {
      const rainRect = rainCanvas.getBoundingClientRect();
      const w = rainRect.width;
      const h = rainRect.height;
      const p = progressRef.current;
      const rainIntensity = getRainIntensity(p);
      const meltIntensity = Math.max(0, Math.min(1, (p - 0.78) / 0.28));
      const zone = idolRectRef.current;

      rainCtx.clearRect(0, 0, w, h);
      spawnRain(w, h, rainIntensity);

      const maxDrops = Math.floor(35 + rainIntensity * 320);
      if (rainRef.current.length > maxDrops) {
        rainRef.current.splice(0, rainRef.current.length - maxDrops);
      }

      if (meltIntensity > 0.08 && frameRef.current % 12 === 0) {
        spawnDrip(zone.cx, zone.top, zone.bottom, meltIntensity);
      }

      if (rainIntensity > 0.2) {
        rainCtx.fillStyle = `rgba(170,200,235,${(rainIntensity - 0.18) * 0.035})`;
        rainCtx.fillRect(0, 0, w, h);
      }
      if (rainIntensity > 0.55) {
        rainCtx.fillStyle = `rgba(120,160,210,${(rainIntensity - 0.5) * 0.09})`;
        rainCtx.fillRect(0, 0, w, h);
      }
      if (rainIntensity > 0.82) {
        rainCtx.fillStyle = `rgba(90,130,175,${(rainIntensity - 0.78) * 0.1})`;
        rainCtx.fillRect(0, 0, w, h);
      }

      rainRef.current = rainRef.current.filter((d) => {
        d.y += d.speed;
        d.x += d.wind;
        if (d.y < h + 40) {
          const g = rainCtx.createLinearGradient(d.x, d.y, d.x + d.wind * 2, d.y + d.length);
          g.addColorStop(0, "rgba(200,225,255,0)");
          g.addColorStop(0.3, `rgba(190,220,255,${d.opacity})`);
          g.addColorStop(1, `rgba(140,190,240,${d.opacity * 0.35})`);
          rainCtx.strokeStyle = g;
          rainCtx.lineWidth = 0.8 + rainIntensity * 1.3;
          rainCtx.lineCap = "round";
          rainCtx.beginPath();
          rainCtx.moveTo(d.x, d.y);
          rainCtx.lineTo(d.x + d.wind * 2, d.y + d.length);
          rainCtx.stroke();
          return true;
        }
        return false;
      });

      dripsRef.current = dripsRef.current.filter((d) => {
        d.life++;
        d.y += d.vy;
        if (d.life < 90) {
          rainCtx.fillStyle = `rgba(95,60,35,${0.4 - d.life / 200})`;
          rainCtx.beginPath();
          rainCtx.ellipse(d.x, d.y, d.size, d.size * 1.4, 0, 0, Math.PI * 2);
          rainCtx.fill();
          return true;
        }
        return false;
      });

      drawMeltOverlay(meltIntensity);
      frameRef.current++;
      animId = requestAnimationFrame(draw);
    };

    const dropDistance = () => Math.min(window.innerHeight * 0.55, 420);

    gsap.set(idol, { y: -dropDistance(), opacity: 0, scale: 0.92 });
    gsap.set(idolImg, { clipPath: "inset(0 0 0% 0)", filter: "brightness(1) saturate(1)" });
    gsap.set(plant, { opacity: 0, scale: 0.15, y: 30 });

    const ctx_gsap = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * 8}`,
          pin: pin,
          scrub: 2.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            progressRef.current = self.progress;
            setScrollProgress(self.progress);
          },
        },
      });

      // Ganesh — bahut dheere, smooth fade + niche (ek dum pop nahi)
      tl.to(idol, { y: -dropDistance() * 0.55, opacity: 0.08, duration: 0.18, ease: "power1.out" }, 0);
      tl.to(idol, { y: -dropDistance() * 0.15, opacity: 0.45, duration: 0.22, ease: "power1.inOut" }, 0.14);
      tl.to(idol, { y: 0, opacity: 1, scale: 1, duration: 0.42, ease: "power1.inOut" }, 0.32);

      // Barish + pighalna — clay color preserve (Ganesh land hone ke baad)
      tl.to(idolImg, { filter: "brightness(0.95) saturate(0.95)", duration: 0.08 }, 0.76);
      tl.to(
        idolImg,
        { filter: "blur(2px) brightness(0.82) saturate(0.8)", clipPath: "inset(0 0 0% 0)", duration: 0.3, ease: "power1.inOut" },
        0.82
      );
      tl.to(
        idolImg,
        { clipPath: "inset(0 0 88% 0)", duration: 0.3, ease: "none" },
        0.84
      );
      tl.to(idol, { opacity: 0, duration: 0.12, ease: "power1.in" }, 0.92);

      // Original plant image — transparent
      tl.to(plant, { opacity: 1, scale: 0.35, y: 0, duration: 0.14, ease: "power2.out" }, 0.94);
      tl.to(plant, { scale: 1, duration: 0.26, ease: "power1.out" }, 1.02);
    }, section);

    updateRects();
    draw();

    const onResize = () => {
      updateRects();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      ctx_gsap.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/ganesha/sunset-spiritual.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>

        {/* Mountain peak par — center-bottom */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div
            ref={idolRef}
            className="absolute left-1/2 w-[min(140px,32vw)] sm:w-[min(700px,28vw)] -translate-x-1/2"
            style={{ bottom: "34vh", opacity: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={idolImgRef}
              src={IDOL_SRC}
              alt="Handmade mitti ka Ganesh"
              className="h-auto w-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              style={{ background: "transparent" }}
              draggable={false}
            />
            <canvas
              ref={meltCanvasRef}
              className="absolute inset-0 h-full w-full pointer-events-none"
            />
          </div>

          <div
            ref={plantRef}
            className="absolute left-1/2 w-[min(200px,46vw)] sm:w-[min(400px,40vw)] -translate-x-1/2 origin-bottom"
            style={{ bottom: "32vh", opacity: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PLANT_SRC}
              alt="Plant growing"
              className="h-auto w-full"
              style={{ background: "transparent" }}
              draggable={false}
            />
          </div>
        </div>

        <canvas
          ref={rainCanvasRef}
          className="pointer-events-none absolute inset-0 z-20 h-full w-full"
          style={{ opacity: scrollProgress >= 0 ? 1 : 0 }}
        />
      </div>
    </section>
  );
}
