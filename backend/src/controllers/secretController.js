import * as secretService from "../services/secretServices.js";

export const createSecret = async (req, res) => {
  try {
    const { text, ttl } = req.body;

    if (!text || !ttl) {
      return res.status(400).json({ message: "Text and TTL required" });
    }

    const token = await secretService.createSecret(text, ttl);

    res.json({
      url: `${process.env.BASE_URL}/secret/${token}`,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getSecret = async (req, res) => {
  try {
    const { token } = req.params;

    const secret = await secretService.getSecret(token);

    if (!secret) {
      return res.status(404).json({
        message: "Secret expired or already viewed",
      });
    }

    res.json({ text: secret });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};