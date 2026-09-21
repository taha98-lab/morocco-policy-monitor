const GEMINI_MODEL = "gemini-3.6-flash";

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
        error: "GEMINI_API_KEY is not configured for this Vercel deployment. Add it under Project Settings → Environment Variables for Production, then redeploy.",
      });
    }

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
- Distinguish government promises, legislation, implementation, outputs, citizen outcomes, and impacts.
- Prefer official Moroccan sources such as HCP, Bank Al-Maghrib, Ministry of Economy and Finance, Cour des Comptes, Bulletin Officiel, and the Constitution.
- When figures may have changed, state the relevant date and methodological limitations.
- Distinguish documented facts from interpretation and attribute contested claims.
- Answer in ${requestedLanguage}.
- If evidence is insufficient, say so explicitly rather than inventing evidence.`;

    const prompt = `Topic context: ${contextTopic || "General Moroccan Public Policy & Civic Governance"}

User question:
${question}

Provide a neutral, useful civic explanation. Where relevant, identify the institutional mechanism, evidence needed to verify a claim, and important limitations.`;

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.3 },
        }),
      }
    );

    const payload = await geminiResponse.json();

    if (!geminiResponse.ok) {
      const providerMessage =
        payload?.error?.message || `Gemini returned HTTP ${geminiResponse.status}.`;
      console.error("Gemini API error:", payload);
      return res.status(502).json({
        error: `AI provider error: ${providerMessage}`,
      });
    }

    const answer =
      payload?.candidates?.[0]?.content?.parts
        ?.map((part: any) => part?.text || "")
        .join("")
        .trim() || "";

    if (!answer) {
      return res.status(502).json({
        error: "The AI provider returned an empty response.",
      });
    }

    return res.status(200).json({
      answer,
      model: GEMINI_MODEL,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Civic AI endpoint error:", error);
    return res.status(500).json({
      error: error?.message || "Failed to generate policy analysis.",
    });
  }
}
