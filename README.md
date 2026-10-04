---
title: HeartFlow OS Backend
emoji: 🫀
colorFrom: gray
colorTo: red
sdk: docker
pinned: false
---

# HeartFlow OS

HeartFlow OS is a telemetry application for real-time cardiovascular inference. It ingests patient vitals and evaluates them against a machine-learning ensemble to compute diagnostic probabilities. It also compiles these models into C-code headers for edge devices.

![Next.js](https://img.shields.io/badge/Next.js-16+-black.svg?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB.svg?style=flat&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.111.0+-009688.svg?style=flat&logo=fastapi)
![Scikit-Learn](https://img.shields.io/badge/scikit--learn-1.5.1+-F7931E.svg?style=flat&logo=scikit-learn)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Overview

HeartFlow OS runs clinical telemetry at 60Hz. It uses native WebSockets in a Next.js dashboard to render telemetry sweeps without dropping frames. The backend transpiles scikit-learn models into `malloc`-free C-code for constrained microcontrollers.

### Key features

- **Telemetry interface**: A Next.js 16 dashboard renders 60fps SVG telemetry sweeps using React 19 and WebSockets.
- **Edge inference**: The system transpiles `scikit-learn` models into dependency-free C-code. It avoids dynamic memory allocation.
- **INT8 quantization**: The backend algorithmically scales 64-bit floating-point weights to 8-bit integers. This shrinks the flash memory footprint by 75%.
- **Soft-voting ensemble**: Five model architectures (Random Forest, SVM, KNN, Logistic Regression, MLP) fuse predictions into a probability distribution.
- **Zero-downtime MLOps**: You can upload CSVs to the `/retrain` pipeline. It imputes data and retrains the ensemble in the background without dropping WebSocket connections.

## System architecture

The architecture uses a decoupled pattern split across the React client, FastAPI core, and C-compiler edge. Read the [architecture guide](./ARCHITECTURE.md) for data flows and design rationale.

### Repository topology

```text
HEARTFLOW_OS/
├── backend/               # FastAPI core, aiosqlite, async ML pipelines, C-compiler
│   ├── ensemble.py        # Core intelligence and soft-voting aggregations
│   ├── main.py            # Websocket ingress, REST APIs, and background routines
│   └── preprocessing.py   # State-preserving MLOps data imputation and scaling
├── frontend/              # Next.js 16 UI, React Context, Framer Motion
│   ├── src/app/           # Route segments (Dashboard, Simulator, Architecture)
│   └── src/components/    # Memoized, brutalist UI components for 60fps rendering
├── model/                 # Local LRU cache of serialized model states (.pkl)
└── data/                  # Immutable patient cohort datasets for MLOps
```

## Quickstart

### 1. Initialize the core

You need Python 3.10+ installed.

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python models.py
uvicorn main:app --reload --port 8000
```

### 2. Initialize the client

You need Node.js 18+ installed.

```bash
cd frontend
npm install
npm run dev
```

Navigate to `http://localhost:3000` to monitor telemetry streams, access MLOps pipelines, and export INT8 headers.

## License

Distributed under the MIT License. See `LICENSE` for more information.
