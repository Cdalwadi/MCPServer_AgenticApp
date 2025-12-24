export interface AppConfig {
  apiKey: string;
  baseUrl: string;
  port: number;
  logLevel: string;
}

export function loadConfig(): AppConfig {
  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = process.env.WEATHER_API_URL;
  const port = Number(process.env.PORT || 3001);
  const logLevel = process.env.LOG_LEVEL || "info";

  if (!apiKey) throw new Error("WEATHER_API_KEY is required");
  if (!baseUrl) throw new Error("WEATHER_API_URL is required");

  return { apiKey, baseUrl, port, logLevel };
}
