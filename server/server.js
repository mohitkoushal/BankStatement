require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

// Handling CORS policy
const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
};
app.use(cors(corsOptions));

// Serve static files from the "public" directory
app.use("/public", express.static('./public'));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api", router);

// Start the server
const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
