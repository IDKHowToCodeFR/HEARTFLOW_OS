"use client";

import { motion } from "framer-motion";

const easeFluid: [number, number, number, number] = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeFluid } }
};

export default function Architecture() {
  return (
    <main className="min-h-[100dvh] bg-canvas-cream flex flex-col font-mono selection:bg-hazard selection:text-white pb-16">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-[1000px] mx-auto w-full px-4 md:px-8 py-8 md:py-16 flex-1 flex flex-col"
      >
        <motion.header variants={fadeUp} className="mb-8 md:mb-12 border-b-4 border-ink pb-8 flex justify-between items-end">
          <div>
            <div className="text-[12px] text-hazard font-bold tracking-[0.1em] mb-4">
              /// DOCS_AND_SPECS
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,6rem)] leading-tight">
              SYSTEM<br />ARCHITECTURE
            </h1>
          </div>
        </motion.header>

        <motion.div variants={fadeUp} className="border-2 border-ink bg-white p-6 md:p-8 mb-8 hover:border-hazard transition-colors">
          <h2 className="text-[16px] md:text-[18px] font-sans font-black tracking-[-0.02em] uppercase text-ink mb-6 border-b-2 border-ink pb-4">
            [ 01 ] Client Plane (Frontend)
          </h2>
          <p className="text-[13px] md:text-[14px] text-slate uppercase leading-relaxed mb-4">
            Engineered using Next.js 16 (App Router). The UI adheres to an Industrial Brutalist aesthetic utilizing hard grids, monochromatic blueprints, and high-contrast hazard states. A global Telemetry Provider manages native WebSocket streams with exponential backoff and UI-level auto-reconnection, rendered via hardware-accelerated SVG paths.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="border-2 border-ink bg-white p-6 md:p-8 mb-8 hover:border-hazard transition-colors">
          <h2 className="text-[16px] md:text-[18px] font-sans font-black tracking-[-0.02em] uppercase text-ink mb-6 border-b-2 border-ink pb-4">
            [ 02 ] Core Plane (Backend)
          </h2>
          <p className="text-[13px] md:text-[14px] text-slate uppercase leading-relaxed mb-4">
            Built on FastAPI (Python 3.10+) maximizing async throughput. Full-stack orchestration is containerized via Docker Compose. A state-machine driven data simulator generates correlated, volatile telemetry streams. Storage employs aiosqlite for non-blocking database writes to track historical classifications without stalling the event loop.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="border-2 border-ink bg-white p-6 md:p-8 mb-8 hover:border-hazard transition-colors">
          <h2 className="text-[16px] md:text-[18px] font-sans font-black tracking-[-0.02em] uppercase text-ink mb-6 border-b-2 border-ink pb-4">
            [ 03 ] Intelligence Pipeline (MLOps)
          </h2>
          <p className="text-[13px] md:text-[14px] text-slate uppercase leading-relaxed mb-4">
            Clinical precision is achieved via a 5-model soft-voting ensemble (RF, KNN, SVM, LogReg, MLP). The `/retrain` pipeline implements a strict CI/CD gate: it evaluates newly uploaded datasets against a test holdout, and automatically rolls back if the F1-score degrades. Winning models are logged to a JSON registry and hot-swapped globally.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="border-2 border-ink bg-white p-6 md:p-8 mb-8 hover:border-hazard transition-colors">
          <h2 className="text-[16px] md:text-[18px] font-sans font-black tracking-[-0.02em] uppercase text-ink mb-6 border-b-2 border-ink pb-4">
            [ 04 ] Edge Compilation (TinyML)
          </h2>
          <p className="text-[13px] md:text-[14px] text-slate uppercase leading-relaxed mb-4">
            The backend transpiles trained SciKit-Learn tree models directly into standalone zero-dependency C-headers (`model.h`). Floating-point thresholds are quantized to INT8, shrinking payload footprints by ~75%. A PlatformIO firmware wrapper handles deployment to ESP32/Arduino, guaranteed by an automated structural integrity testing script.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
