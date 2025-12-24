import dotenv from "dotenv";
dotenv.config();

import { loadConfig } from "./config";
import { WeatherClient } from "./api/weatherClient";
import { registerTools } from "./tools";
import { MCPServer } from "./server";

const config = loadConfig();

function log(level: string, message: string, meta?: any) {
  console.log(\`[\${level.toUpperCase()}] \${message}\`, meta || "");
}

const client = new WeatherClient(config.apiKey, config.baseUrl);
const tools = registerTools(client);

const server = new MCPServer(config.port, tools, log);
server.start();
