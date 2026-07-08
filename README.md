# Cortex AI – Intelligent Energy Management Assistant

An AI-powered assistant for industrial Energy Management Systems (EMS) that combines telemetry analysis, multimodal AI, and natural language interaction to help users monitor energy consumption, interpret graphs, understand electrical concepts, and generate actionable insights.

---

# Project Overview

Cortex AI is an intelligent assistant developed to simplify industrial energy monitoring and analysis. Traditional Energy Management Systems generate large amounts of telemetry data that often require domain expertise to interpret. Cortex AI bridges this gap by allowing users to interact with energy data using natural language.

The application integrates historical telemetry data, uploaded graphs, and Google's Gemini multimodal model to provide meaningful insights, educational explanations, and energy optimization recommendations.

---

# Problem Statement

Industrial facilities continuously generate electrical telemetry such as voltage, current, power factor, frequency, and energy consumption. Although this data is valuable, interpreting it often requires specialized engineering knowledge.

The objective of this project is to develop an AI-powered assistant that can:

- Explain complex electrical parameters in simple language.
- Analyze facility telemetry.
- Interpret uploaded graphs and dashboards.
- Answer educational electrical questions.
- Suggest practical energy-saving recommendations.

---

# Features

## Telemetry Analysis

- Reads telemetry data from Excel.
- Explains electrical measurements.
- Detects abnormal readings.
- Generates structured energy reports.

---

## AI Chatbot

- Natural language interaction.
- Context-aware responses.
- Human-friendly explanations.
- Intent-based response generation.

---

## Image-Based Graph Analysis

Supports uploaded images such as:

- Energy consumption graphs
- Temperature trends
- CPU/RAM utilization charts
- Industrial dashboards

Gemini Vision analyzes uploaded graphs independently and correlates them with telemetry when relevant.

---

## Educational Assistant

Explains concepts such as:

- Power Factor
- Active & Reactive Power
- Voltage
- Current
- Frequency
- Energy Consumption
- Electrical Efficiency

---

## Energy Recommendations

Suggests methods to:

- Improve Power Factor
- Reduce Energy Consumption
- Increase Operational Efficiency
- Identify abnormal energy usage

---

# Tech Stack

## Frontend

- React
- Vite
- JavaScript
- CSS

---

## Backend

- Node.js
- Express.js
- Multer
- XLSX
- dotenv

---

## AI

- Google Gemini API
- Gemini 2.5 Flash

---

## Development Tools

- VS Code
- Git
- GitHub
- Postman

---

# Architecture / Workflow

```
                  User
                    │
                    ▼
           React Frontend (Vite)
                    │
                    ▼
          Express Backend API
                    │
     ┌──────────────┴──────────────┐
     │                             │
Telemetry Service            Image Upload
 (Excel Reader)                 (Multer)
     │                             │
     └──────────────┬──────────────┘
                    │
              Prompt Builder
                    │
                    ▼
          Google Gemini API
                    │
                    ▼
          AI Generated Response
                    │
                    ▼
          React Chat Interface
```

---

# Project Structure

```
CORTEX
│
├── backend
│   ├── Data
│   │   ├── Demo Data.xlsx
│   │   ├── graph1.png
│   │   ├── graph2.png
│   │   ├── graph3.png
│   │   ├── graph4.png
│   │   ├── graph5.png
│   │   ├── graph6.png
│   │   └── graph7.png
│   │
│   ├── routes
│   │   └── chat.js
│   │
│   ├── services
│   │   ├── excelService.js
│   │   ├── llmService.js
│   │   └── promptService.js
│   │
│   ├── app.js
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   ├── services
│   └── package.json
│
└── README.md
```

---

# Installation & Local Setup

## Clone Repository

```bash
git clone git@github.com:rishabh98080/Cortex_Chat_Assisstant.git

cd Cortex
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file.

```env
PORT=5000

GEMINI_API_KEY=YOUR_API_KEY

MODEL=gemini-2.5-flash
```

Run the backend.

```bash
npm run dev
```

---

# **Setup on Local Machine**

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

The frontend will run on:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

# Deployment Details

### Frontend

- Vercel

### Backend

- Vercel (Serverless Functions)

### AI Model

- Google Gemini API (Gemini 2.5 Flash)

---

# Team Members

| Name | Role | Responsibilities |
|------|------|------------------|
| **Rishabh Kumar** | Full Stack Developer & AI Integration | Designed and developed the frontend and backend, integrated the Google Gemini API, implemented telemetry processing, prompt engineering, chatbot workflow, image analysis, API development, and deployment. |
| **Sakshi Harsh** | Research & Architectural Design | Conducted domain research, contributed to system architecture design, assisted in defining project requirements, workflow planning, feature ideation, and overall solution design. |

---

# Assumptions

- Telemetry is available in a structured Excel format.
- Uploaded graphs are clear and readable.
- Users provide meaningful questions related to telemetry or uploaded images.
- Gemini API is available and reachable.
- Internet connectivity is required for AI inference.

---

# Current Limitations

- Uses Excel instead of a real-time telemetry database.
- No integration with live smart meters or IoT devices.
- Limited conversation memory.
- No authentication or role-based access control.
- Graph interpretation depends on Gemini Vision and image quality.
- Historical trend analysis is limited.
- No predictive analytics or anomaly detection.
- Supports a single facility at a time.

---

# Future Improvements

- Smart Meter Integration
- Time-Series Database (InfluxDB / TimescaleDB)
- Real-Time IoT Streaming
- AI Agent Architecture
- Retrieval-Augmented Generation (RAG)
- Predictive Maintenance
- Automated Anomaly Detection
- Role-Based Access Control
- Multi-Plant Monitoring
- PDF & Excel Report Generation
- Live Dashboard
- Voice Assistant

---

# License

This project was developed for educational and internship demonstration purposes.

---

# Author

**Rishabh Kumar**

GitHub: https://github.com/rishabh98080
