export interface ContactCardTheme {
  surface: string;
  border: string;
  glow: string;
  accent: string;
  watermarkGradient: string;
}

export const contactCardThemes: Record<string, ContactCardTheme> = {
  email: {
    surface:
      "linear-gradient(145deg, rgba(0, 113, 227, 0.14) 0%, rgba(255, 255, 255, 0.97) 55%, #ffffff 100%)",
    border: "rgba(0, 113, 227, 0.22)",
    glow: "rgba(0, 113, 227, 0.32)",
    accent: "#0071e3",
    watermarkGradient:
      "linear-gradient(135deg, rgba(0, 113, 227, 0.4) 0%, rgba(41, 151, 255, 0.14) 60%, rgba(255, 255, 255, 0.04) 100%)",
  },
  github: {
    surface:
      "linear-gradient(145deg, rgba(29, 29, 31, 0.08) 0%, rgba(255, 255, 255, 0.97) 55%, #ffffff 100%)",
    border: "rgba(29, 29, 31, 0.14)",
    glow: "rgba(29, 29, 31, 0.12)",
    accent: "#1d1d1f",
    watermarkGradient:
      "linear-gradient(135deg, rgba(29, 29, 31, 0.28) 0%, rgba(29, 29, 31, 0.1) 60%, rgba(255, 255, 255, 0.04) 100%)",
  },
  linkedin: {
    surface:
      "linear-gradient(145deg, rgba(10, 102, 194, 0.12) 0%, rgba(255, 255, 255, 0.97) 55%, #ffffff 100%)",
    border: "rgba(10, 102, 194, 0.2)",
    glow: "rgba(10, 102, 194, 0.22)",
    accent: "#0a66c2",
    watermarkGradient:
      "linear-gradient(135deg, rgba(10, 102, 194, 0.36) 0%, rgba(10, 102, 194, 0.12) 60%, rgba(255, 255, 255, 0.04) 100%)",
  },
};

export const defaultContactCardTheme = contactCardThemes.email;
