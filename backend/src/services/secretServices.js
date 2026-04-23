import crypto from "crypto";
import Secret from "../models/Secret.js";
import { encrypt, decrypt } from "../utils/encryption.js";

export const createSecret = async (text, ttl) => {
  const token = crypto.randomBytes(32).toString("hex");

  const encryptedText = encrypt(text);

  await Secret.create({
    encryptedText,
    token,
    expiresAt: new Date(Date.now() + ttl * 1000),
  });

  return token;
};

export const getSecret = async (token) => {
  const secret = await Secret.findOneAndUpdate(
    {
      token,
      isBurned: false,
      expiresAt: { $gt: new Date() },
    },
    { isBurned: true },
    { new: true }
  );

  if (!secret) return null;

  return decrypt(secret.encryptedText);
};