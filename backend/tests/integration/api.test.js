import request from "supertest";
import { jest } from "@jest/globals";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import secretRoutes from "../../src/routes/secretRoutes.js";
import Secret from "../../src/models/Secret.js";


jest.mock("../../src/models/Secret.js");

// Create test app
const app = express();
app.use(cors());
app.use(express.json());
app.use("/secret", secretRoutes);

// Mock environment variables
process.env.BASE_URL = "http://localhost:3000";

describe("Secret API Integration Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("POST /secret/create", () => {
    test("should create a secret and return URL", async () => {
      const text = "test secret";
      const ttl = 300;

      Secret.create.mockResolvedValue({
        encryptedText: "encrypted-text",
        token: "some-token",
        expiresAt: new Date(),
      });

      const response = await request(app)
        .post("/secret/create")
        .send({ text, ttl })
        .expect(200);

      expect(response.body).toHaveProperty("url");
      expect(response.body.url).toMatch(/^http:\/\/localhost:3000\/secret\/.+$/);
      expect(Secret.create).toHaveBeenCalledTimes(1);
    });

    test("should return 400 for missing text", async () => {
      const response = await request(app)
        .post("/secret/create")
        .send({ ttl: 300 })
        .expect(400);

      expect(response.body.message).toBe("Text and TTL required");
    });

    test("should return 400 for missing ttl", async () => {
      const response = await request(app)
        .post("/secret/create")
        .send({ text: "secret" })
        .expect(400);

      expect(response.body.message).toBe("Text and TTL required");
    });

    test("should handle server errors", async () => {
      Secret.create.mockRejectedValue(new Error("Database error"));

      const response = await request(app)
        .post("/secret/create")
        .send({ text: "secret", ttl: 300 })
        .expect(500);

      expect(response.body.message).toBe("Server error");
    });
  });

  describe("GET /secret/:token", () => {
    test("should return secret and burn it", async () => {
      const token = "valid-token";
      const encryptedText = "encrypted-secret";
      const decryptedText = "my secret";

      const mockSecret = {
        encryptedText,
        token,
        isBurned: false,
        expiresAt: new Date(Date.now() + 3600000),
      };

      Secret.findOneAndUpdate.mockResolvedValue({
        ...mockSecret,
        isBurned: true,
      });

      // Mock decrypt function
      const { decrypt } = await import("../../src/utils/encryption.js");
      jest.spyOn(await import("../../src/utils/encryption.js"), "decrypt").mockReturnValue(decryptedText);

      const response = await request(app)
        .get(`/secret/${token}`)
        .expect(200);

      expect(response.body).toHaveProperty("text", decryptedText);
      expect(Secret.findOneAndUpdate).toHaveBeenCalledTimes(1);
    });

    test("should return 404 for non-existent secret", async () => {
      const token = "invalid-token";

      Secret.findOneAndUpdate.mockResolvedValue(null);

      const response = await request(app)
        .get(`/secret/${token}`)
        .expect(404);

      expect(response.body.message).toBe("Secret expired or already viewed");
    });

    test("should block bot user agents", async () => {
      const token = "some-token";

      const response = await request(app)
        .get(`/secret/${token}`)
        .set("User-Agent", "Googlebot/2.1")
        .expect(403);

      expect(response.body.message).toBe("Bots are blocked");
    });

    test("should allow legitimate user agents", async () => {
      const token = "valid-token";
      const decryptedText = "secret content";

      Secret.findOneAndUpdate.mockResolvedValue({
        encryptedText: "encrypted",
        token,
        isBurned: false,
        expiresAt: new Date(Date.now() + 3600000),
      });

      const { decrypt } = await import("../../src/utils/encryption.js");
      jest.spyOn(await import("../../src/utils/encryption.js"), "decrypt").mockReturnValue(decryptedText);

      const response = await request(app)
        .get(`/secret/${token}`)
        .set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
        .expect(200);

      expect(response.body).toHaveProperty("text", decryptedText);
    });

    test("should handle server errors", async () => {
      const token = "error-token";

      Secret.findOneAndUpdate.mockRejectedValue(new Error("Database error"));

      const response = await request(app)
        .get(`/secret/${token}`)
        .expect(500);

      expect(response.body.message).toBe("Server error");
    });
  });
});