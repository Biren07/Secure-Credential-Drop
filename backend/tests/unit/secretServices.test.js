import { jest } from "@jest/globals";
import { createSecret, getSecret } from "../../src/services/secretServices.js";
import Secret from "../../src/models/Secret.js";

// Mock the crypto module
jest.mock("crypto", () => ({
  randomBytes: jest.fn(),
  createHash: jest.fn(() => ({
    update: jest.fn().mockReturnThis(),
    digest: jest.fn(() => Buffer.from("mock-key")),
  })),
  createCipheriv: jest.fn(() => ({
    update: jest.fn(() => "encrypted"),
    final: jest.fn(() => "-part"),
  })),
  createDecipheriv: jest.fn(() => ({
    update: jest.fn(() => "decrypted"),
    final: jest.fn(() => ""),
  })),
}));

jest.mock("../../src/models/Secret.js");

describe("Secret Services", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createSecret", () => {
    test("should create and return a secret token", async () => {
      const text = "my secret";
      const ttl = 300;
      const mockToken = "6d6f636b2d746f6b656e2d313233"; // hex representation of "mock-token-123"
      const mockBuffer = Buffer.from("mock-token-123");

      // Mock crypto.randomBytes to return predictable value
      const crypto = await import("crypto");
      crypto.randomBytes.mockReturnValue(mockBuffer);

      Secret.create.mockResolvedValue({
        encryptedText: "encrypted-text",
        token: mockToken,
        expiresAt: new Date(),
      });

      const result = await createSecret(text, ttl);

      expect(result).toBe(mockToken);
      expect(crypto.randomBytes).toHaveBeenCalledWith(32);
      expect(Secret.create).toHaveBeenCalledWith({
        encryptedText: expect.any(String),
        token: mockToken,
        expiresAt: expect.any(Date),
      });
    });

    test("should create secret with correct expiration time", async () => {
      const text = "my secret";
      const ttl = 600; // 10 minutes
      const now = Date.now();
      const mockToken = "mock-token";
      const mockBuffer = Buffer.from(mockToken);

      const crypto = await import("crypto");
      crypto.randomBytes.mockReturnValue(mockBuffer);

      Secret.create.mockResolvedValue({
        encryptedText: "encrypted-text",
        token: "mock-token",
        expiresAt: new Date(),
      });

      await createSecret(text, ttl);

      const createCall = Secret.create.mock.calls[0][0];
      const expectedExpiry = new Date(now + ttl * 1000);
      expect(createCall.expiresAt.getTime()).toBeCloseTo(expectedExpiry.getTime(), -2); // Allow 2ms difference
    });
  });

  describe("getSecret", () => {
    test("should return decrypted secret and burn it", async () => {
      const token = "valid-token";
      const encryptedText = "encrypted-secret";
      const decryptedText = "my secret";

      const mockSecret = {
        encryptedText,
        token,
        isBurned: false,
        expiresAt: new Date(Date.now() + 3600000), // 1 hour from now
      };

      Secret.findOneAndUpdate.mockResolvedValue({
        ...mockSecret,
        isBurned: true,
      });

      // Mock decrypt function
      const { decrypt } = await import("../../src/utils/encryption.js");
      jest.spyOn(await import("../../src/utils/encryption.js"), "decrypt").mockReturnValue(decryptedText);

      const result = await getSecret(token);

      expect(result).toBe(decryptedText);
      expect(Secret.findOneAndUpdate).toHaveBeenCalledWith(
        {
          token,
          isBurned: false,
          expiresAt: { $gt: expect.any(Date) },
        },
        { isBurned: true },
        { new: true }
      );
    });

    test("should return null for non-existent secret", async () => {
      const token = "invalid-token";

      Secret.findOneAndUpdate.mockResolvedValue(null);

      const result = await getSecret(token);

      expect(result).toBeNull();
    });

    test("should return null for already burned secret", async () => {
      const token = "burned-token";

      Secret.findOneAndUpdate.mockResolvedValue(null); // No document updated

      const result = await getSecret(token);

      expect(result).toBeNull();
    });

    test("should return null for expired secret", async () => {
      const token = "expired-token";

      Secret.findOneAndUpdate.mockResolvedValue(null); // No document updated due to expiration

      const result = await getSecret(token);

      expect(result).toBeNull();
    });
  });
});