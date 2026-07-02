# Heart Health Monitoring Dashboard

A user-friendly web application for monitoring heart health metrics and predicting patient risks using Machine Learning. This project features a responsive Streamlit frontend and a robust FastAPI backend.

## 🌟 Key Engineering Achievements (Project Highlights)

From a systems engineering and machine learning perspective, this platform demonstrates several advanced concepts:

- **TinyML & Edge Computing Deployment**: Designed with hardware constraints in mind, this project transpiles complex Python ML models into highly optimized, dependency-free **C-code headers**. By utilizing **INT8 Quantization**, the system mathematically compresses 64-bit floating-point weights down to 8-bit integers, reducing the memory footprint by ~75%. This allows predictive models to be deployed directly onto severely resource-constrained microcontrollers (like the ESP32 or ARM Cortex-M) ensuring offline, ultra-low latency, and privacy-preserving inference right at the edge.
- **Dynamic Hardware Profiling**: The deployment engine actively calculates predictive heuristics, such as expected inference latency (in microseconds) and flash memory payload size, mapped against specific embedded hardware profiles (e.g., Arduino Nano 33 BLE, Raspberry Pi Pico) before the code is even exported.
- **Interpretable AI (SHAP)**: To solve the "black box" problem common in healthcare tech, the backend generates real-time SHAP (SHapley Additive exPlanations) values. This provides explicit, feature-level transparency into *why* the AI made a specific clinical decision, building essential trust with end-users.
- **Robust Model Ensembling**: Rather than relying on a single algorithm, the system features a Soft-Voting Ensemble architecture that aggregates predictions across five distinct model architectures (KNN, SVM, Logistic Regression, Random Forest, and a Neural Network) to maximize predictive accuracy and minimize bias.

---

## 🏗️ System Architecture

We designed the system with strict decoupling between the client UI and the heavy-lifting ML pipeline. Doing this lets us scale instances efficiently while enabling simple API integration for other health services later on.

```mermaid
flowchart TD
    %% Define styles
    classDef frontend fill:#ff4b4b,stroke:#a30000,stroke-width:2px,color:#fff;
    classDef backend fill:#009688,stroke:#004d40,stroke-width:2px,color:#fff;
    classDef ml_node fill:#f2c94c,stroke:#b28900,stroke-width:2px,color:#333;
    classDef edge_tech fill:#2d9cdb,stroke:#106093,stroke-width:2px,color:#fff;
    classDef db fill:#9b59b6,stroke:#4a235a,stroke-width:2px,color:#fff;

    %% Core Components
    UI[🖥️ Streamlit Frontend<br/>Interactive Dashboard]:::frontend
    API[⚙️ FastAPI Backend<br/>Routing & API Logic]:::backend
    DB[(🗄️ SQLite DB<br/>Patient History)]:::db

    UI <-->|REST API JSON| API
    API <-->|Read / Write| DB

    %% ML Subgraph
    subgraph ML [🧠 Machine Learning & Inference Pipeline]
        ENS{Ensemble Engine<br/>Soft-Voting}:::ml_node
        Models[Classifiers:<br/>RF, SVM, LogReg, NN, KNN]:::ml_node
        SHAP[🔍 SHAP Explainer]:::ml_node
    end

    %% Edge Quantization Subgraph
    subgraph Quantization [⚡ Hardware Export]
        TRANS[C-Code Transpiler<br/>INT8 Quantization]:::edge_tech
        HEADER((tinyml_model.h)):::edge_tech
        MCU>ESP32 / Cortex-M Node]:::edge_tech
    end

    API -->|Predict Request| ENS
    ENS --> Models
    API -->|Explain Request| SHAP
    SHAP -.-> Models
    API -->|Export Request| TRANS
    TRANS --> HEADER
    HEADER -->|Flash Firmware| MCU
```

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
- Python 3.9 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IDKHowToCodeFR/TinyML-Heart-Health-Monitoring-Dashboard.git
   cd TinyML-Heart-Health-Monitoring-Dashboard
   ```

2. **Install Dependencies:**
   Ensure you have all required libraries installed.
   ```bash
   pip install -r requirements.txt
   pip install -r backend/requirements.txt
   pip install -r frontend/requirements.txt
   ```

3. **Train Initial Models:**
   Before starting the system, generate the initial machine learning models.
   ```bash
   cd backend
   python models.py
   cd ..
   ```

## 💻 Usage

### Quick Start (Windows)
If you are on Windows, simply run the included batch file to start both the frontend and backend automatically:
```bash
run.bat
```

### Manual Start
1. **Start the Backend:**
   ```bash
   cd backend
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```
2. **Start the Frontend:**
   Open a new terminal window and run:
   ```bash
   cd frontend
   streamlit run Home.py
   ```

### Docker
If you prefer Docker, you can spin up the entire project with one command:
```bash
docker-compose up --build
```
Once running, open your browser and go to `http://localhost:8501`.

## 📜 License
This project is licensed under the MIT License.
