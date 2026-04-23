import { encrypt, decrypt } from "../../src/utils/encryption.js";

describe("Encryption Utils", () => {
  test("should encrypt and decrypt text correctly", () => {
    const originalText = "This is a secret message";
    const encrypted = encrypt(originalText);
    const decrypted = decrypt(encrypted);

    expect(decrypted).toBe(originalText);
  });

  test("should encrypt and decrypt empty string", () => {
    const originalText = "";
    const encrypted = encrypt(originalText);
    const decrypted = decrypt(encrypted);

    expect(decrypted).toBe(originalText);
  });

  test("should encrypt and decrypt special characters", () => {
    const originalText = "Special chars: !@#$%^&*()_+{}|:<>?[]\\;',./";
    const encrypted = encrypt(originalText);
    const decrypted = decrypt(encrypted);

    expect(decrypted).toBe(originalText);
  });

  test("should encrypt and decrypt unicode characters", () => {
    const originalText = "Unicode: 你好世界 🌍";
    const encrypted = encrypt(originalText);
    const decrypted = decrypt(encrypted);

    expect(decrypted).toBe(originalText);
  });

  test("should produce different encrypted outputs for same input", () => {
    const text = "same text";
    const encrypted1 = encrypt(text);
    const encrypted2 = encrypt(text);

    // Due to random IV, encrypted outputs should be different
    expect(encrypted1).not.toBe(encrypted2);
    // But should decrypt to same text
    expect(decrypt(encrypted1)).toBe(text);
    expect(decrypt(encrypted2)).toBe(text);
  });
});