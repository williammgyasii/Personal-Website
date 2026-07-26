export interface ExpertiseCardTheme {
  surface: string;
  border: string;
  glow: string;
  badge: string;
  badgeText: string;
  title: string;
  pill: string;
  pillBorder: string;
  watermarkGradient: string;
}

export const expertiseCardThemes: Record<string, ExpertiseCardTheme> = {
  frontend: {
    surface: "linear-gradient(145deg, rgba(0, 113, 227, 0.14) 0%, rgba(255, 255, 255, 0.96) 52%, #ffffff 100%)",
    border: "rgba(0, 113, 227, 0.22)",
    glow: "rgba(0, 113, 227, 0.35)",
    badge: "rgba(0, 113, 227, 0.12)",
    badgeText: "#0071e3",
    title: "#0071e3",
    pill: "rgba(0, 113, 227, 0.08)",
    pillBorder: "rgba(0, 113, 227, 0.2)",
    watermarkGradient:
      "linear-gradient(135deg, rgba(0, 113, 227, 0.38) 0%, rgba(41, 151, 255, 0.14) 55%, rgba(255, 255, 255, 0.04) 100%)",
  },
  backend: {
    surface: "linear-gradient(145deg, rgba(88, 86, 214, 0.16) 0%, rgba(255, 255, 255, 0.96) 52%, #ffffff 100%)",
    border: "rgba(88, 86, 214, 0.22)",
    glow: "rgba(88, 86, 214, 0.32)",
    badge: "rgba(88, 86, 214, 0.12)",
    badgeText: "#5856d6",
    title: "#5856d6",
    pill: "rgba(88, 86, 214, 0.08)",
    pillBorder: "rgba(88, 86, 214, 0.2)",
    watermarkGradient:
      "linear-gradient(135deg, rgba(88, 86, 214, 0.4) 0%, rgba(120, 118, 230, 0.16) 55%, rgba(255, 255, 255, 0.04) 100%)",
  },
  database: {
    surface: "linear-gradient(145deg, rgba(48, 176, 199, 0.16) 0%, rgba(255, 255, 255, 0.96) 52%, #ffffff 100%)",
    border: "rgba(48, 176, 199, 0.24)",
    glow: "rgba(48, 176, 199, 0.32)",
    badge: "rgba(48, 176, 199, 0.12)",
    badgeText: "#248ea3",
    title: "#248ea3",
    pill: "rgba(48, 176, 199, 0.08)",
    pillBorder: "rgba(48, 176, 199, 0.22)",
    watermarkGradient:
      "linear-gradient(135deg, rgba(48, 176, 199, 0.42) 0%, rgba(72, 196, 218, 0.16) 55%, rgba(255, 255, 255, 0.04) 100%)",
  },
  cloud: {
    surface: "linear-gradient(145deg, rgba(50, 173, 230, 0.16) 0%, rgba(255, 255, 255, 0.96) 52%, #ffffff 100%)",
    border: "rgba(50, 173, 230, 0.24)",
    glow: "rgba(50, 173, 230, 0.32)",
    badge: "rgba(50, 173, 230, 0.12)",
    badgeText: "#1e9fd4",
    title: "#1e9fd4",
    pill: "rgba(50, 173, 230, 0.08)",
    pillBorder: "rgba(50, 173, 230, 0.22)",
    watermarkGradient:
      "linear-gradient(135deg, rgba(50, 173, 230, 0.42) 0%, rgba(90, 196, 245, 0.16) 55%, rgba(255, 255, 255, 0.04) 100%)",
  },
  "mobile-desktop": {
    surface: "linear-gradient(145deg, rgba(255, 149, 0, 0.16) 0%, rgba(255, 255, 255, 0.96) 52%, #ffffff 100%)",
    border: "rgba(255, 149, 0, 0.24)",
    glow: "rgba(255, 149, 0, 0.3)",
    badge: "rgba(255, 149, 0, 0.12)",
    badgeText: "#c77700",
    title: "#c77700",
    pill: "rgba(255, 149, 0, 0.08)",
    pillBorder: "rgba(255, 149, 0, 0.22)",
    watermarkGradient:
      "linear-gradient(135deg, rgba(255, 149, 0, 0.42) 0%, rgba(255, 179, 64, 0.16) 55%, rgba(255, 255, 255, 0.04) 100%)",
  },
  ai: {
    surface: "linear-gradient(145deg, rgba(175, 82, 222, 0.16) 0%, rgba(255, 255, 255, 0.96) 52%, #ffffff 100%)",
    border: "rgba(175, 82, 222, 0.24)",
    glow: "rgba(175, 82, 222, 0.3)",
    badge: "rgba(175, 82, 222, 0.12)",
    badgeText: "#9b44c4",
    title: "#9b44c4",
    pill: "rgba(175, 82, 222, 0.08)",
    pillBorder: "rgba(175, 82, 222, 0.22)",
    watermarkGradient:
      "linear-gradient(135deg, rgba(175, 82, 222, 0.42) 0%, rgba(196, 120, 232, 0.16) 55%, rgba(255, 255, 255, 0.04) 100%)",
  },
};

export const defaultExpertiseCardTheme = expertiseCardThemes.frontend;
