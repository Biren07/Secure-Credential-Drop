import { CreateSecretResponse, GetSecretResponse } from "../types";

const BASE_URL = "https://secure-credential-drop.onrender.com";

/**
 * Create secret
 */
export const createSecret = async (
  text: string,
  ttl: number
): Promise<CreateSecretResponse> => {
  const res = await fetch(`${BASE_URL}/secret/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, ttl }),
  });

  return res.json();
};

/**
 * Reveal secret (FIXED)
 */
export const getSecret = async (
  token: string
): Promise<GetSecretResponse> => {
  const res = await fetch(
    `${BASE_URL}/secret/${token}/reveal`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
};