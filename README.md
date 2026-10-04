---
title: HeartFlow OS Backend
emoji: 🫀
colorFrom: gray
colorTo: red
sdk: docker
pinned: false
---

<div align="center">
  <h1>🫀 HeartFlow OS</h1>
  <p><strong>Edge-Native Cardiovascular Telemetry & MLOps Engine</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Next.js-16+-black.svg?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-61DAFB.svg?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/FastAPI-0.111.0+-009688.svg?style=for-the-badge&logo=fastapi" alt="FastAPI" />
    <img src="https://img.shields.io/badge/Scikit--Learn-1.5.1+-F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-Learn" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License" />
  </p>
</div>

---

## 📖 Overview

HeartFlow OS is a production-grade telemetry application engineered for **real-time cardiovascular inference**. It bridges the gap between cloud-scale machine learning and low-power embedded devices. 

By ingesting high-frequency patient vitals over WebSockets, evaluating them against a distributed machine-learning ensemble, and physically compiling these models into zero-dependency C-code, HeartFlow OS provides an end-to-end pipeline from clinical dashboard to microcontroller execution.

## ⚡ Tech Stack

| Domain | Technologies Used | Purpose |
| :--- | :--- | :--- |
| **Frontend** | Next.js 16 (App Router), React 19, Framer Motion | High-throughput, 60fps telemetry rendering and UI |
| **Backend Core** | FastAPI, Python 3.10+, Uvicorn | Async WebSocket orchestration and RESTful MLOps APIs |
| **Machine Learning** | Scikit-Learn, SHAP | Soft-voting ensemble (RF, SVM, KNN, LogReg, MLP) |
| **Database** | SQLite, `aiosqlite` | Non-blocking, asynchronous prediction logging |
| **Edge Compiler** | Custom Python AST Transpiler | Generates `malloc`-free, INT8 quantized C-code for MCUs |

## ✨ Key Features

- **60Hz Telemetry Interface**: A brutally fast Next.js dashboard leveraging React 19 and native WebSockets to render SVG telemetry sweeps without dropping frames.
- **Edge Inference & TinyML**: Transpiles complex `scikit-learn` decision boundaries into highly optimized, dependency-free C-code designed for constrained environments (bypassing dynamic memory allocation).
- **INT8 Quantization Engine**: Algorithmically scales 64-bit floating-point weights to 8-bit integers, shrinking the flash memory footprint by up to **75%** without meaningful accuracy loss.
- **Soft-Voting ML Ensemble**: Fuses predictions from five distinct model architectures to generate resilient probability distributions rather than opaque binary classifications.
- **Zero-Downtime MLOps**: Exposes a `/retrain` pipeline allowing for dynamic CSV uploads. It automatically imputes missing data, scales features, and retrains the entire ensemble in a background thread—hot-swapping the intelligence engine without interrupting active WebSocket streams.

## 🏗 System Architecture

The architecture adheres to a strictly decoupled design pattern split across the React client, FastAPI core, and C-compiler edge. 

For a comprehensive deep-dive into data flows, system topography, and Mermaid diagrams, please read the [**Architecture Guide**](./ARCHITECTURE.md).

## 🚀 Quickstart

### 1. Initialize the Core (Backend)

Requires Python 3.10 or higher.

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .\.venv\Scripts\activate
pip install -r requirements.txt

# Initialize the SQLite database and train the baseline ensemble
python models.py

# Launch the async server
uvicorn main:app --reload --port 8000
```

### 2. Initialize the Client (Frontend)

Requires Node.js 18 or higher.

```bash
cd frontend
npm install
npm run dev
```

Navigate to `http://localhost:3000` to monitor live telemetry streams, access MLOps retraining pipelines, and export your INT8 TinyML headers.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
