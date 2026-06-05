"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RainDrop {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  wind: number;
  thickness: number;
}

interface MudParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
}

const STORY_PANELS = [
  {
    id: "craft-1",
    step: "01",
    tag: "Handmade",
    title: "Mitti se shuru",
    subtitle: "Artisan haath se pehla shape banati hai",
    image: "/assets/ganesha/scenes/crafting-1.png",
    accent: "#f9a8d4",
  },
  {
    id: "craft-2",
    step: "02",
    tag: "Shaping",
    title: "Haath se form",
    subtitle: "Dheere dheere Ganesh ji ka roop aata hai",
    image: "/assets/ganesha/scenes/crafting-2.png",
    accent: "#c4b5fd",
  },
  {
    id: "craft-3",
    step: "03",
    tag: "Carving",
    title: "Fine details",
    subtitle: "Har line, har curve — sirf haath se",
    image: "/assets/ganesha/scenes/crafting-3.png",
    accent: "#fdba74",
  },
  {
    id: "complete",
    step: "04",
    tag: "Complete",
    title: "Ganesh ji poora",
    subtitle: "Handmade clay idol taiyaar hai",
    image: "/assets/ganesha/scenes/final.png",
    accent: "#fde68a",
  },
  {
    id: "dissolve",
    step: "05",
    tag: "Visarjan",
    title: "Barish aati hai",
    subtitle: "Dheere dheere mitti mein mil jati hai",
    image: "/assets/ganesha/scenes/final.png",
    accent: "#93c5fd",
    dissolve: true,
  },
  {
    id: "plant",
    step: "06",
    tag: "Rebirth",
    title: "Nayi zindagi",
    subtitle: "Usi jagah se plant ugta hai aur bada hota hai",
    image: "/assets/ganesha/plant-sprout.png",
    accent: "#86efac",
    plant: true,
  },
] as const;

export function ScrollAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const rainRef = useRef<RainDrop[]>([]);
  const mudRef = useRef<MudParticle[]>([]);
  const frameRef = useRef(0);
  const idolZoneRef = useRef({ cx: 0, baseY: 0 });

  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !track || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let horizontalTween: gsap.core.Tween | null = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      idolZoneRef.current = {
        cx: rect.width / 2,
        baseY: rect.height * 0.62,
      };
    };

    const spawnRain = (w: number, intensity: number) => {
      const n = Math.floor(3 + intensity * 16);
      for (let i = 0; i < n; i++) {
        rainRef.current.push({
          x: Math.random() * w,
          y: -30 - Math.random() * 100,
          length: 14 + Math.random() * 28 * intensity,
          speed: 10 + Math.random() * 14 * intensity,
          opacity: 0.12 + Math.random() * 0.5 * intensity,
          wind: -0.9 + Math.random() * 0.7,
          thickness: 0.8 + Math.random() * 1.2,
        });
      }
    };

    const spawnMud = (cx: number, cy: number, n: number) => {
      for (let i = 0; i < n; i++) {
        mudRef.current.push({
          x: cx + (Math.random() - 0.5) * 100,
          y: cy + (Math.random() - 0.5) * 50,
          vx: (Math.random() - 0.5) * 2,
          vy: 0.4 + Math.random() * 2,
          size: 2 + Math.random() * 6,
          life: 0,
          maxLife: 70 + Math.random() * 80,
        });
      }
    };

    const drawRain = (d: RainDrop) => {
      const g = ctx.createLinearGradient(d.x, d.y, d.x + d.wind * 4, d.y + d.length);
      g.addColorStop(0, "rgba(200,225,255,0)");
      g.addColorStop(0.2, `rgba(190,220,255,${d.opacity})`);
      g.addColorStop(1, `rgba(140,190,240,${d.opacity * 0.5})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = d.thickness;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x + d.wind * 4, d.y + d.length);
      ctx.stroke();
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const p = progressRef.current;
      const rainIntensity = Math.max(0, Math.min(1, (p - 0.55) / 0.45));
      const dissolveIntensity = Math.max(0, Math.min(1, (p - 0.62) / 0.2));
      const zone = idolZoneRef.current;

      ctx.clearRect(0, 0, w, h);

      if (rainIntensity > 0.05 && frameRef.current % 2 === 0) {
        spawnRain(w, rainIntensity * 0.8);
      }

      if (dissolveIntensity > 0.3 && frameRef.current % 4 === 0) {
        spawnMud(zone.cx, zone.baseY - 20, 1 + Math.floor(dissolveIntensity * 2));
      }

      rainRef.current = rainRef.current.filter((d) => {
        d.y += d.speed;
        d.x += d.wind;
        if (d.y < h + 40) {
          drawRain(d);
          return true;
        }
        return false;
      });

      mudRef.current = mudRef.current.filter((m) => {
        m.life++;
        m.x += m.vx;
        m.y += m.vy;
        m.vy += 0.04;
        const a = 1 - m.life / m.maxLife;
        if (m.life < m.maxLife) {
          ctx.fillStyle = `rgba(100,65,38,${a * 0.7})`;
          ctx.beginPath();
          ctx.ellipse(m.x, m.y, m.size, m.size * 0.55, 0, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });

      frameRef.current++;
      animId = requestAnimationFrame(draw);
    };

    const ctx_gsap = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".story-panel");
      const getScrollDistance = () => track.scrollWidth - window.innerWidth;

      horizontalTween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            progressRef.current = self.progress;
            setScrollProgress(self.progress);
            const step = Math.min(
              STORY_PANELS.length - 1,
              Math.floor(self.progress * STORY_PANELS.length)
            );
            setActiveStep(step);
          },
        },
      });

      panels.forEach((panel) => {
        const tag = panel.querySelector(".panel-tag");
        const title = panel.querySelector(".panel-title");
        const subtitle = panel.querySelector(".panel-subtitle");
        const visual = panel.querySelector(".panel-visual");

        if (!tag || !title || !subtitle || !visual || !horizontalTween) return;

        gsap.fromTo(
          [tag, title, subtitle],
          { x: 140, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left 85%",
              end: "left 45%",
              scrub: 0.6,
            },
          }
        );

        gsap.fromTo(
          visual,
          { x: 200, opacity: 0, scale: 0.88 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: horizontalTween,
              start: "left 80%",
              end: "left 35%",
              scrub: 0.8,
            },
          }
        );
      });
    }, wrapper);

    resize();
    draw();
    window.addEventListener("resize", () => {
      resize();
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      ctx_gsap.revert();
    };
  }, []);

  const dissolveAmount = Math.max(0, Math.min(1, (scrollProgress - 0.62) / 0.18));
  const plantScale = 0.3 + Math.max(0, Math.min(1, (scrollProgress - 0.78) / 0.22)) * 0.85;

  return (
    <div ref={wrapperRef} className="relative h-screen overflow-hidden">
      {/* Fixed background — sunset */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/ganesha/bg-sunset.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
      </div>

      {/* Horizontal track — scroll se right → left */}
      <div ref={trackRef} className="relative z-10 flex h-full will-change-transform">
        {STORY_PANELS.map((panel, i) => (
          <div
            key={panel.id}
            className="story-panel relative flex h-full w-screen flex-shrink-0 items-center px-6 sm:px-12 lg:px-20"
          >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Text — GSAP style pills */}
              <div className="panel-content order-2 lg:order-1">
                <span
                  className="panel-tag inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black"
                  style={{ background: panel.accent }}
                >
                  {panel.tag}
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                  Step {panel.step}
                </p>
                <h2 className="panel-title mt-2 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {panel.title}
                </h2>
                <p className="panel-subtitle mt-4 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
                  {panel.subtitle}
                </p>
              </div>

              {/* Visual */}
              <div className="panel-visual order-1 flex justify-center lg:order-2">
                <div
                  className="relative w-[min(300px,78vw)] sm:w-[min(360px,70vw)]"
                  style={
                    "dissolve" in panel && panel.dissolve
                      ? {
                          filter: `blur(${dissolveAmount * 8}px)`,
                          clipPath: `inset(0 0 ${dissolveAmount * 72}% 0)`,
                          opacity: 1 - dissolveAmount * 0.9,
                        }
                      : "plant" in panel && panel.plant
                        ? {
                            transform: `scale(${plantScale})`,
                            transformOrigin: "bottom center",
                          }
                        : undefined
                  }
                >
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    width={720}
                    height={720}
                    className="h-auto w-full rounded-2xl shadow-2xl ring-1 ring-white/20"
                    priority={i < 2}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rain overlay — last panels */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
        style={{ opacity: scrollProgress > 0.55 ? 1 : 0 }}
      />

      {/* Step dots — no scrollbar */}
      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3 px-4">
        <div className="flex gap-2">
          {STORY_PANELS.map((panel, i) => (
            <div
              key={panel.id}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === activeStep ? 28 : 8,
                background:
                  i === activeStep
                    ? STORY_PANELS[i].accent
                    : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>
        <p className="text-xs tracking-widest text-white/50">
          Scroll ↓ — panels right se left ↙
        </p>
      </div>
    </div>
  );
}
