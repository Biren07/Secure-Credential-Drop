import express from "express";
import {
  createSecret,
  getSecret,
} from "../controllers/secretController.js";

import botProtection from "../middleware/botProtection.js";

const router = express.Router();

router.post("/create", createSecret);


router.post("/:token/reveal", botProtection, getSecret);

export default router;