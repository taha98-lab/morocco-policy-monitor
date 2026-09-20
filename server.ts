import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "1mb" }));

// Lazy initialization of Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not configured in server environment.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    app: "Morocco Policy Monitor",
    founder: "Taha Khobizi",
    geminiConfigured: !!process.env.GEMINI_API_KEY,
  });
});

// Civic AI Policy Assistant endpoint
app.post("/api/civic-ai/query", async (req, res) => {
  try {
    const { question, language = "en", contextTopic } = req.body;

    if (!question || typeof question !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'question' parameter." });
    }

    const ai = getGeminiClient();

    const systemInstruction = `You are the non-partisan AI Policy Analyst for the "Morocco Policy Monitor" (مرصد السياسات العمومية), an independent civic platform founded by Taha Khobizi.
Core Mandate:
- Provide objective, evidence-based, transparent civic and public-policy explanations about Morocco.
- Never take political sides or tell citizens what to think.
- Frame all answers around: What was promised/legislated, official data sources (HCP, Bank Al-Maghrib, Ministry of Economy and Finance, Cour des Comptes, Bulletin Officiel), budgetary allocations (Loi de Finances), and measurable public outcomes.
- Clearly separate policy outputs (laws passed, hospitals built) from citizen outcomes (purchasing power, employment quality, poverty rates).
- Explicitly mention statistical uncertainties, source dates, and methodology notes when discussing numbers.
- Answer in the requested language: ${language === "ar" ? "Modern Standard Arabic with high clarity and professional civic vocabulary" : "English with clear, dignified civic precision"}. If the user asks in French or another language, accommodate naturally.
- Keep responses well-structured, scannable (with bold headings or concise bullet points), informative, and grounded in official Moroccan governance mechanisms (e.g., 2011 Constitution articles, Loi Organique relative à la Loi de Finances - LOLF, etc.).`;

    const prompt = `Topic context: ${contextTopic || "General Moroccan Public Policy & Civic Governance"}
User Inquiry: ${question}

Please provide an objective, evidence-grounded civic breakdown citing relevant Moroccan institutional mechanisms, official data sources, and analytical caveats.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.3,
      },
    });

    const reply = response.text || "No response generated.";
    return res.json({ answer: reply, timestamp: new Date().toISOString() });
  } catch (error: any) {
    console.error("Civic AI endpoint error:", error);
    return res.status(500).json({
      error: error?.message || "Failed to generate policy analysis.",
    });
  }
});

// Vite middleware or static serving
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Morocco Policy Monitor server running on http://0.0.0.0:${PORT}`);
  });
}

start();
