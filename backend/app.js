// app.js

const express = require("express");
const cors = require("cors");

// Import Routes
const chatRoutes = require("./routes/chat");

const app = express();

/* ----------------------------
   Middlewares
-----------------------------*/

// Enable CORS
app.use(cors());

// Parse JSON body
app.use(express.json());

// Parse URL Encoded Data
app.use(express.urlencoded({ extended: true }));


/* ----------------------------
   Health Check
-----------------------------*/

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Cortex Backend is running 🚀"
    });
});


/* ----------------------------
   API Routes
-----------------------------*/

app.use("/api/chat", chatRoutes);


/* ----------------------------
   404 Handler
-----------------------------*/

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

module.exports = app;