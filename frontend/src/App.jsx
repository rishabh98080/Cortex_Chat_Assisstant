import { useState } from "react";
import "./App.css";
import ChatWidget from "./ChatWidget";
import graph1 from "./assets/Data/graph1.png";
import graph2 from "./assets/Data/graph2.png";
import graph3 from "./assets/Data/graph3.png";
import graph4 from "./assets/Data/graph4.png";
import graph5 from "./assets/Data/graph5.png";
import graph6 from "./assets/Data/graph6.png";
import graph7 from "./assets/Data/graph7.png";

const graphs = [
  graph1,
  graph2,
  graph3,
  graph4,
  graph5,
  graph6,
  graph7
];

function App() {

  const [open, setOpen] = useState(false);
  const [selectedGraph, setSelectedGraph] = useState(null);

  const analyzeGraph = (graphs) => {
    console.timeLog(selectedGraph)
      setSelectedGraph(graphs);
  };
  return (
    <div className="app">

      {/* ---------------- HERO ---------------- */}

      <section className="hero">

        <span className="tag">
          AI Powered Energy Intelligence
        </span>

        <h1>
          Cortex AI
        </h1>

        <p>
          An intelligent energy analytics assistant capable of understanding
          telemetry, interpreting industrial graphs, detecting anomalies,
          and providing actionable recommendations for energy optimization.
        </p>

      </section>

      {/* ---------------- GRAPH GALLERY ---------------- */}

      <section className="gallery">

        <div className="gallery-header">

          <h2>Interactive Graph Intelligence</h2>

          <p>
            Click on any graph and let Cortex AI automatically interpret
            the visualization, explain important observations,
            identify anomalies, and generate recommendations.
          </p>

        </div>
        <div className="graph-grid">
          {graphs.map((graph, index) => (
              <div key={index} className="graph-card">
                  <img
                      src={graph}
                      alt={`Graph ${index + 1}`}
                      onClick={() => analyzeGraph(graph)}
                  />
              </div>
          ))}
        </div>

      </section>

      {/* Floating AI Chat */}
      


      <ChatWidget
          open={open}
          setOpen={setOpen}
          selectedGraph={selectedGraph}
      />

    </div>
  );
}

export default App;