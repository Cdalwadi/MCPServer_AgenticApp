# MCP Weather Server

A lightweight, self‑hosted **Model Context Protocol (MCP) server** that exposes your weather‑forecast API as MCP tools.  
This allows LLMs and agent frameworks to call your weather data directly through a standardized interface.

Clients run this server inside their own environment and connect it to their preferred MCP‑compatible LLM (e.g., Claude Desktop, Cursor, etc.).

---

## 🚀 Features

- MCP‑compatible WebSocket server  
- Tools for:
  - Current weather by latitude/longitude  
  - Multi‑day forecast  
- JSON Schema–validated tool inputs  
- Simple configuration via environment variables  
- No external dependencies required to run the server (beyond Node.js)  
- Ready for Docker, CI, and cloud deployment  

---

## 📦 Project Structure

\`\`\`
mcp-weather-server/
├── src/
│   ├── api/                 # Weather API client wrapper
│   ├── tools/               # MCP tool implementations
│   ├── schemas/             # JSON Schemas for tool inputs
│   ├── types/               # MCP type definitions
│   ├── server.ts            # MCP WebSocket server
│   ├── config.ts            # Environment config loader
│   └── index.ts             # Entrypoint
├── test/                    # Jest test placeholders
├── sdk-js/                  # Optional JS SDK (client helper)
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
\`\`\`

---

## 🛠️ Requirements

- Node.js 20+
- A valid API key for your weather service
- Access to your weather API base URL

---

## ⚙️ Configuration

Copy the example environment file:

\`\`\`bash
cp .env.example .env
\`\`\`

Then edit \`.env\`:

\`\`\`
WEATHER_API_KEY=your_api_key_here
WEATHER_API_URL=https://api.yourweather.com
PORT=3001
LOG_LEVEL=info
\`\`\`

---

## ▶️ Running the Server

### Development mode

\`\`\`bash
npm run dev
\`\`\`

### Build & run

\`\`\`bash
npm run build
npm start
\`\`\`

The server will start on:

\`\`\`
ws://localhost:3001
\`\`\`

---

## 🌤️ Available MCP Tools

### \`getCurrentWeather\`

Retrieve current weather conditions for a specific latitude/longitude.

**Input:**

\`\`\`json
{
  "lat": 38.9,
  "lon": -77.0
}
\`\`\`

**Output (example):**

\`\`\`json
{
  "summary": "Current weather at (38.9, -77)",
  "data": { ... }
}
\`\`\`

---

### \`getForecast\`

Retrieve a multi‑day forecast for a location.

**Input:**

\`\`\`json
{
  "lat": 38.9,
  "lon": -77.0,
  "days": 5
}
\`\`\`

**Output (example):**

\`\`\`json
{
  "summary": "5‑day forecast for (38.9, -77)",
  "data": { ... }
}
\`\`\`

---

## 🧪 Testing

\`\`\`bash
npm test
\`\`\`

---

## 🐳 Docker (Optional)

A Dockerfile is included.

Build:

\`\`\`bash
docker build -t mcp-weather-server .
\`\`\`

Run:

\`\`\`bash
docker run -p 3001:3001 \\
  -e WEATHER_API_KEY=your_api_key \\
  -e WEATHER_API_URL=https://api.yourweather.com \\
  mcp-weather-server
\`\`\`

---

## 🔒 Security Notes

- Host this server inside your network or VPC  
- Protect access with firewall rules or mTLS if exposing externally  
- Rotate API keys regularly  
- Avoid exposing your weather API key in logs or client‑side code  

---

## 📄 License

MIT License.  
Feel free to fork, modify, and integrate into your own systems.

---

## 🤝 Contributing

Pull requests and issues are welcome.  
If you extend the toolset or add new weather endpoints, feel free to contribute back.
