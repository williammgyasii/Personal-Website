export interface ValueCardTheme {
  surface: string;
  border: string;
  glow: string;
  accent: string;
  watermarkGradient: string;
}

const paper = "#f2f1ed";

export const valueCardThemes: Record<string, ValueCardTheme> = {
  "system-design": {
    surface: `linear-gradient(145deg, rgba(255, 91, 46, 0.14) 0%, rgba(242, 241, 237, 0.97) 55%, ${paper} 100%)`,
    border: "rgba(255, 91, 46, 0.24)",
    glow: "rgba(255, 91, 46, 0.28)",
    accent: "#ff5b2e",
    watermarkGradient:
      "linear-gradient(135deg, rgba(255, 91, 46, 0.42) 0%, rgba(217, 255, 83, 0.14) 60%, rgba(242, 241, 237, 0.04) 100%)",
  },
  "ships-not-slides": {
    surface: `linear-gradient(145deg, rgba(17, 17, 15, 0.08) 0%, rgba(242, 241, 237, 0.97) 55%, ${paper} 100%)`,
    border: "rgba(17, 17, 15, 0.16)",
    glow: "rgba(17, 17, 15, 0.12)",
    accent: "#11110f",
    watermarkGradient:
      "linear-gradient(135deg, rgba(17, 17, 15, 0.28) 0%, rgba(255, 91, 46, 0.12) 60%, rgba(242, 241, 237, 0.04) 100%)",
  },
  "full-stack-ownership": {
    surface: `linear-gradient(145deg, rgba(217, 255, 83, 0.2) 0%, rgba(242, 241, 237, 0.97) 55%, ${paper} 100%)`,
    border: "rgba(17, 17, 15, 0.16)",
    glow: "rgba(217, 255, 83, 0.24)",
    accent: "#11110f",
    watermarkGradient:
      "linear-gradient(135deg, rgba(217, 255, 83, 0.36) 0%, rgba(255, 91, 46, 0.12) 60%, rgba(242, 241, 237, 0.04) 100%)",
  },
  "ai-guardrails": {
    surface: `linear-gradient(145deg, rgba(255, 91, 46, 0.12) 0%, rgba(242, 241, 237, 0.97) 55%, ${paper} 100%)`,
    border: "rgba(255, 91, 46, 0.22)",
    glow: "rgba(255, 91, 46, 0.24)",
    accent: "#ff5b2e",
    watermarkGradient:
      "linear-gradient(135deg, rgba(255, 91, 46, 0.36) 0%, rgba(217, 255, 83, 0.12) 60%, rgba(242, 241, 237, 0.04) 100%)",
  },
  "product-impact": {
    surface: `linear-gradient(145deg, rgba(17, 17, 15, 0.07) 0%, rgba(242, 241, 237, 0.97) 55%, ${paper} 100%)`,
    border: "rgba(17, 17, 15, 0.16)",
    glow: "rgba(255, 91, 46, 0.2)",
    accent: "#ff5b2e",
    watermarkGradient:
      "linear-gradient(135deg, rgba(255, 91, 46, 0.32) 0%, rgba(17, 17, 15, 0.1) 60%, rgba(242, 241, 237, 0.04) 100%)",
  },
};

export const defaultValueCardTheme = valueCardThemes["system-design"];
