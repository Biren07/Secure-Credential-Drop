import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = crypto.createHash("sha256").update("super-secret-key").digest();

export const encrypt = (text) => {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  return iv.toString("hex") + ":" + encrypted;
};

export const decrypt = (text) => {
  const [ivHex, encryptedText] = text.split(":");

  const iv = Buffer.from(ivHex, "hex");

  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};