// types/index.ts

export interface CreateSecretResponse {
  url: string;
}

export interface GetSecretResponse {
  text?: string;
  message?: string;
}