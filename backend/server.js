// server.js

require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("=================================");
    console.log(`🚀 Cortex Backend Running`);
    console.log(`🌐 http://localhost:${PORT}`);
    console.log("=================================");
});