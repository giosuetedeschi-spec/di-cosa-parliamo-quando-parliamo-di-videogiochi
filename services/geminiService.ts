
import { GoogleGenAI, Type } from "@google/genai";
import { GameConcept } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateGameConcept = async (philosophicalPrompt: string): Promise<GameConcept> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Basandoti sulla riflessione filosofica: "${philosophicalPrompt}", crea un concetto per un videogioco d'avanguardia che ancora non esiste. Focalizzati su meccaniche espressive e significati profondi.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Il titolo evocativo del gioco" },
          philosophy: { type: Type.STRING, description: "La tesi filosofica alla base del gioco" },
          mechanics: { type: Type.STRING, description: "Come le regole del gioco esprimono questa tesi" },
          worldDescription: { type: Type.STRING, description: "Una breve descrizione dell'atmosfera del mondo" }
        },
        required: ["title", "philosophy", "mechanics", "worldDescription"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    throw new Error("Impossibile generare il concetto al momento.");
  }
};
