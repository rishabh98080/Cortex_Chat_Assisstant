# Cortex_Chat_Assisstant


# Cortex AI - Intelligent Energy Management Assistant

Cortex AI is an AI-powered chatbot built for industrial Energy Management Systems (EMS). It combines real-time telemetry, historical energy data, and multimodal AI capabilities to help users understand energy consumption, analyze electrical parameters, and interpret uploaded graphs using natural language.

The system is designed to simplify complex electrical concepts for non-technical users while also providing detailed insights for engineers.

---

## Features

- AI-powered conversational assistant
- Industrial energy telemetry analysis
- Image-based graph interpretation using Gemini Vision
- Excel-based telemetry data integration
- Context-aware responses based on user intent
- Educational explanations of electrical concepts
- Personalized recommendations for improving energy efficiency
- Human-readable energy reports
- Modern React chat interface

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS
- Axios

### Backend

- Node.js
- Express.js
- Multer
- XLSX
- Google Gemini API

---

## Project Structure

```
Cortex
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── Data
│   │   └── Demo Data.xlsx
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
│   └── package.json
│
└── README.md
```

---

## How It Works

### 1. User Interaction

Users can:

- Ask questions about energy usage
- Upload graphs for analysis
- Learn electrical concepts
- Request recommendations for improving efficiency

---

### 2. Data Processing

The backend:

- Reads telemetry data from Excel
- Extracts relevant measurements
- Builds an intelligent prompt
- Optionally attaches uploaded images
- Sends the request to Google's Gemini model

---

### 3. AI Response

Gemini determines the user's intent and can:

- Analyze telemetry
- Explain technical concepts
- Interpret uploaded graphs
- Suggest energy-saving measures
- Generate structured reports

---

## Supported User Intents

### Energy Analysis

Examples

- Analyze today's power consumption
- Why is my power factor low?
- Compare voltage across phases

---

### Graph Analysis

Upload an image and ask:

- Analyze this graph
- Explain the trend
- What anomaly do you observe?

---

### Educational Questions

Examples

- What is power factor?
- Explain reactive power
- Difference between kW and kVA

---

### Recommendations

Examples

- How can I reduce energy consumption?
- How do I improve power factor?
- Suggest efficiency improvements

---

## Image Analysis

Cortex AI supports multimodal input.

Users can upload:

- Power consumption graphs
- Temperature charts
- CPU/RAM utilization graphs
- Energy dashboards
- Trend plots

The AI analyzes the uploaded graph independently and only uses telemetry data when it is relevant to the user's question.

---

## Installation

### Clone Repository

```bash
git clone git@github.com:rishabh98080/Cortex_Chat_Assisstant.git

cd Cortex
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Create a `.env` file:

```env
PORT=5000

GEMINI_API_KEY=YOUR_API_KEY

MODEL=gemini-2.5-flash
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## API Endpoint

### POST

```
/api/chat
```

Supports

```
multipart/form-data
```

Parameters

| Name | Type | Description |
|------|------|-------------|
| message | String | User query |
| image | File | Optional uploaded graph |

---

## Example Requests

### Text Query

```
What is the current power factor?
```

### Educational Query

```
Explain reactive power.
```

### Image Query

```
Analyze this graph.
```

---

## Key Functionalities

- Natural Language Understanding
- Intent Detection
- Telemetry Analysis
- Graph Interpretation
- Recommendation Generation
- Educational Assistance
- Industrial Energy Monitoring

---

## Future Enhancements

- Real-time IoT integration
- Time-series database support
- Live smart meter connectivity
- Predictive energy analytics
- Automated anomaly detection
- Multi-facility monitoring
- Voice interaction
- User authentication
- Historical trend visualization
- Report export (PDF/Excel)

---

## Screenshots

<img width="1907" height="973" alt="Screenshot From 2026-07-08 11-22-44" src="https://github.com/user-attachments/assets/24a8749e-10b7-4fc2-8994-28f4c0409433" />

<img width="1907" height="973" alt="image" src="https://github.com/user-attachments/assets/9f0a4405-5237-425b-842e-66f77026b338" />


---

## License

This project is intended for educational and internship demonstration purposes.

---

## Author

**Rishabh Kumar**

GitHub: https://github.com/rishabh98080
