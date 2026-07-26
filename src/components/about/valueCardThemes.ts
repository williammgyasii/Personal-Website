export interface ValueCardTheme {
  surface: string;
  border: string;
  glow: string;
  accent: string;
  watermarkGradient: string;
}

export const valueCardThemes: Record<string, ValueCardTheme> = {
  "system-design": {
    surface:
      "linear-gradient(145deg, rgba(88, 86, 214, 0.14) 0%, rgba(255, 255, 255, 0.97) 55%, #ffffff 100%)",
    border: "rgba(88, 86, 214, 0.24)",
    glow: "rgba(88, 86, 214, 0.32)",
    accent: "#5856d6",
    watermarkGradient:
      "linear-gradient(135deg, rgba(88, 86, 214, 0.42) 0%, rgba(120, 118, 230, 0.14) 60%, rgba(255, 255, 255, 0.04) 100%)",
  },
  "ships-not-slides": {
    surface:
      "linear-gradient(145deg, rgba(0, 113, 227, 0.14) 0%, rgba(255, 255, 255, 0.97) 55%, #ffffff 100%)",
    border: "rgba(0, 113, 227, 0.22)",
    glow: "rgba(0, 113, 227, 0.32)",
    accent: "#0071e3",
    watermarkGradient:
      "linear-gradient(135deg, rgba(0, 113, 227, 0.4) 0%, rgba(41, 151, 255, 0.14) 60%, rgba(255, 255, 255, 0.04) 100%)",
  },
  "full-stack-ownership": {
    surface:
      "linear-gradient(145deg, rgba(48, 176, 199, 0.14) 0%, rgba(255, 255, 255, 0.97) 55%, #ffffff 100%)",
    border: "rgba(48, 176, 199, 0.24)",
    glow: "rgba(48, 176, 199, 0.3)",
    accent: "#248ea3",
    watermarkGradient:
      "linear-gradient(135deg, rgba(48, 176, 199, 0.42) 0%, rgba(72, 196, 218, 0.14) 60%, rgba(255, 255, 255, 0.04) 100%)",
  },
  "ai-guardrails": {
    surface:
      "linear-gradient(145deg, rgba(175, 82, 222, 0.14) 0%, rgba(255, 255, 255, 0.97) 55%, #ffffff 100%)",
    border: "rgba(175, 82, 222, 0.24)",
    glow: "rgba(175, 82, 222, 0.3)",
    accent: "#9b44c4",
    watermarkGradient:
      "linear-gradient(135deg, rgba(175, 82, 222, 0.42) 0%, rgba(196, 120, 232, 0.14) 60%, rgba(255, 255, 255, 0.04) 100%)",
  },
  "product-impact": {
    surface:
      "linear-gradient(145deg, rgba(255, 149, 0, 0.14) 0%, rgba(255, 255, 255, 0.97) 55%, #ffffff 100%)",
    border: "rgba(255, 149, 0, 0.24)",
    glow: "rgba(255, 149, 0, 0.28)",
    accent: "#c77700",
    watermarkGradient:
      "linear-gradient(135deg, rgba(255, 149, 0, 0.42) 0%, rgba(255, 179, 64, 0.14) 60%, rgba(255, 255, 255, 0.04) 100%)",
  },
};

export const defaultValueCardTheme = valueCardThemes["system-design"];
