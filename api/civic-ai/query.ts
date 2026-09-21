import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { question, language = "en", contextTopic } = req.body ?? {};

    if (!question || typeof question !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'question' parameter." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "The Civic AI service is not configured on the server.",
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const requestedLanguage =
      language === "ar"
        ? "Modern Standard Arabic with clear, professional civic vocabulary"
        : language === "fr"
          ? "French with clear, professional civic vocabulary"
          : "English with clear, professional civic vocabulary";

    const systemInstruction = `You are the non-partisan AI Policy Analyst for the "Morocco Policy Monitor" (مرصد السياسات العمومية), an independent civic-information platform.

Core mandate:
- Provide objective, evidence-based civic and public-policy explanations about Morocco.
- Never take political sides, endorse parties or candidates, or tell citizens what to think.
- Distinguish clearly between government promises, legislation, implementation, outputs, citizen outcomes, and impacts.
- Prefer official Moroccan sources and institutional mechanisms such as HCP, Bank Al-Maghrib, Ministry of Economy and Finance, Cour des Comptes, Bulletin Officiel, and the Constitution.
- When figures or claims may have changed, state the relevant date and note methodological limitations rather than presenting uncertain information as current fact.
- Distinguish documented facts from interpretation and clearly attribute contested claims.
- Answer in ${requestedLanguage}.
- Structure the answer with concise headings or bullet points when useful.
- If the available information is insufficient, say so explicitly rather than inventing evidence.`;

    const prompt = `Topic context: ${contextTopic || "General Moroccan Public Policy & Civic Governance"}

User question:
${question}

Provide a neutral, useful civic explanation. Where relevant, identify the institutional mechanism, the evidence needed to verify a claim, and important limitations.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.3,
      },
    });

    return res.status(200).json({
      answer: response.text || "No response was generated.",
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Civic AI endpoint error:", error);
    return res.status(500).json({
      error: error?.message || "Failed to generate policy analysis.",
    });
  }
}
