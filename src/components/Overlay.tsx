"use client";

import {
  motion,
  MotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type OverlayProps = {
  scrollYProgress: MotionValue<number>;
};

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.18,
  });

  const introOpacity = useTransform(smoothProgress, [0, 0.08, 0.2], [1, 1, 0]);
  const introY = useTransform(smoothProgress, [0, 0.2], [0, -90]);

  const buildOpacity = useTransform(
    smoothProgress,
    [0.2, 0.3, 0.42, 0.52],
    [0, 1, 1, 0],
  );
  const buildY = useTransform(smoothProgress, [0.2, 0.52], [70, -90]);

  const bridgeOpacity = useTransform(
    smoothProgress,
    [0.5, 0.6, 0.72, 0.84],
    [0, 1, 1, 0],
  );
  const bridgeY = useTransform(smoothProgress, [0.5, 0.84], [80, -80]);
  const indicatorY = useTransform(smoothProgress, [0, 1], ["-100%", "220%"]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 text-[0.65rem] uppercase tracking-[0.28em] text-white/45 md:px-10">
          <span>Richa Jain</span>
          <span>Portfolio</span>
        </div>

        <motion.div
          className="absolute inset-0 grid place-items-center px-6 text-center"
          style={{ opacity: introOpacity, y: introY }}
        >
          <div className="max-w-6xl">
            <h1 className="text-4xl font-semibold leading-[0.95] text-white sm:text-5xl md:text-7xl lg:text-8xl">
              Richa Sudhirkumar Jain
            </h1>
            <p className="mt-5 text-xl font-medium text-white/78 sm:text-2xl md:text-4xl">
              Data Analyst
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/58 sm:text-lg md:text-2xl md:leading-9">
              Transforming data into insights that drive business decisions.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-start px-6 md:px-[10vw]"
          style={{ opacity: buildOpacity, y: buildY }}
        >
          <h2 className="max-w-2xl text-4xl font-semibold leading-none text-white md:text-7xl">
            I uncover
            <span className="block">hidden insights.</span>
          </h2>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-end px-6 md:px-[10vw]"
          style={{ opacity: bridgeOpacity, y: bridgeY }}
        >
          <h2 className="max-w-2xl text-right text-4xl font-semibold leading-none text-white md:text-7xl">
            Driving smarter
            <span className="block">business decisions.</span>
          </h2>
        </motion.div>

        <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center">
          <div className="h-14 w-px overflow-hidden bg-white/15">
            <motion.div
              className="h-1/2 w-full bg-white/70"
              style={{ y: indicatorY }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
