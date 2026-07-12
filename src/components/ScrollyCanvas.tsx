"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";

const FRAME_COUNT = 100;
const FRAME_PATH = "/sequence/frame_";
const FRAME_SUFFIX = "_delay-0.067s.webp";
const BACKGROUND = "#121212";

const getFrameSrc = (index: number) =>
  `${FRAME_PATH}${index.toString().padStart(3, "0")}${FRAME_SUFFIX}`;

export default function ScrollyCanvas() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const viewportRef = useRef({ width: 0, height: 0 });

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    const img = imagesRef.current[index];
    const { width, height } = viewportRef.current;

    if (!canvas || !ctx || !img || !width || !height) return;

    const canvasAspect = width / height;
    const imageAspect = img.naturalWidth / img.naturalHeight;

    let renderWidth = width;
    let renderHeight = height;
    let x = 0;
    let y = 0;

    if (canvasAspect > imageAspect) {
      renderHeight = width / imageAspect;
      y = (height - renderHeight) / 2;
    } else {
      renderWidth = height * imageAspect;
      x = (width - renderWidth) / 2;
    }

    ctx.fillStyle = BACKGROUND;
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, x, y, renderWidth, renderHeight);
  }, []);

  const sizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    viewportRef.current = { width, height };
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    contextRef.current = canvas.getContext("2d");
    sizeCanvas();

    window.addEventListener("resize", sizeCanvas);
    return () => window.removeEventListener("resize", sizeCanvas);
  }, [sizeCanvas]);

  useEffect(() => {
    let isCancelled = false;
    let loaded = 0;

    const preload = async () => {
      const imagePromises = Array.from({ length: FRAME_COUNT }, (_, index) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.decoding = "async";
          img.src = getFrameSrc(index);

          img.onload = async () => {
            try {
              if (img.decode) await img.decode();
            } catch {
              // The image is already usable after onload; decode can fail on some browsers.
            }

            loaded += 1;
            if (!isCancelled) {
              imagesRef.current[index] = img;
              setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));
            }
            resolve(img);
          };

          img.onerror = () => {
            reject(new Error(`Could not load ${getFrameSrc(index)}`));
          };
        });
      });

      try {
        const images = await Promise.all(imagePromises);
        if (isCancelled) return;

        imagesRef.current = images;
        currentFrameRef.current = Math.round(frameIndex.get());
        setIsLoaded(true);
        requestAnimationFrame(() => drawFrame(currentFrameRef.current));
      } catch (error) {
        console.error(error);
      }
    };

    preload();

    return () => {
      isCancelled = true;
    };
  }, [drawFrame, frameIndex]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isLoaded) return;

    const nextFrame = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(latest)),
    );

    if (nextFrame === currentFrameRef.current) return;

    currentFrameRef.current = nextFrame;
    requestAnimationFrame(() => drawFrame(nextFrame));
  });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-[500vh] scroll-mt-0 overflow-clip bg-[#121212]"
      aria-label="Introductory scrollytelling animation"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_35%,rgba(18,18,18,0.18)_68%,rgba(18,18,18,0.76)_100%)]" />
      </div>

      <Overlay scrollYProgress={scrollYProgress} />

      {!isLoaded && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#121212] text-white">
          <div className="w-64">
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/50">
              <span>Loading frames</span>
              <span>{loadProgress}%</span>
            </div>
            <div className="h-px w-full overflow-hidden bg-white/10">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
