import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import { db } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Dummy Q&A API
const predefinedQA = [
  { question: "What services do you offer?", answer: "We provide AI automation, chatbot integration, and data scraping solutions." },
  { question: "How can I contact support?", answer: "You can reach us at support@example.com." },
  { question: "What is your pricing model?", answer: "Our pricing is flexible and depends on the service package you choose." },
  { question: "What is your business model?", answer: "We provide Fintech services" },
];

app.get("/api/questions", (req, res) => {
  res.json(predefinedQA);
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Start server AFTER DB connects
db().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT} 🚀`);
  });
});