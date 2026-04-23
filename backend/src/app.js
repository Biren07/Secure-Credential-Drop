import dotenv from "dotenv";
dotenv.config(); // ✅ MUST be FIRST LINE

import express from "express";
import mongoose from "mongoose";
import secretRoutes from "./routes/secretRoutes.js";
import cors from "cors";

const app = express();
app.use(cors({
  origin: process.env.BASE_URL,
}));
app.use(express.json());
app.use("/secret", secretRoutes);

// Debug
console.log("MONGO_URI in app.js:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

export default app;