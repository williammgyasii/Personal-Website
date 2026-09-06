export interface ContactCardTheme {
  surface: string;
  border: string;
  glow: string;
  accent: string;
  watermarkGradient: string;
}

const paper = "#f2f1ed";

export const contactCardThemes: Record<string, ContactCardTheme> = {
  email: {
    surface: `linear-gradient(145deg, rgba(255, 91, 46, 0.14) 0%, rgba(242, 241, 237, 0.97) 55%, ${paper} 100%)`,
    border: "rgba(255, 91, 46, 0.28)",
    glow: "rgba(255, 91, 46, 0.28)",
    accent: "#ff5b2e",
    watermarkGradient:
      "linear-gradient(135deg, rgba(255, 91, 46, 0.4) 0%, rgba(217, 255, 83, 0.14) 60%, rgba(242, 241, 237, 0.04) 100%)",
  },
  github: {
    surface: `linear-gradient(145deg, rgba(17, 17, 15, 0.08) 0%, rgba(242, 241, 237, 0.97) 55%, ${paper} 100%)`,
    border: "rgba(17, 17, 15, 0.16)",
    glow: "rgba(17, 17, 15, 0.1)",
    accent: "#11110f",
    watermarkGradient:
      "linear-gradient(135deg, rgba(17, 17, 15, 0.28) 0%, rgba(17, 17, 15, 0.1) 60%, rgba(242, 241, 237, 0.04) 100%)",
  },
  linkedin: {
    surface: `linear-gradient(145deg, rgba(255, 91, 46, 0.1) 0%, rgba(242, 241, 237, 0.97) 55%, ${paper} 100%)`,
    border: "rgba(255, 91, 46, 0.22)",
    glow: "rgba(255, 91, 46, 0.2)",
    accent: "#ff5b2e",
    watermarkGradient:
      "linear-gradient(135deg, rgba(255, 91, 46, 0.32) 0%, rgba(217, 255, 83, 0.12) 60%, rgba(242, 241, 237, 0.04) 100%)",
  },
};

export const defaultContactCardTheme = contactCardThemes.email;
