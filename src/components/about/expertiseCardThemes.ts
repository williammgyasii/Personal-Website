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

const paperTheme = (
  ink: string,
  wash: string,
): ExpertiseCardTheme => ({
  surface: `linear-gradient(145deg, ${wash} 0%, rgba(242, 241, 237, 0.96) 52%, #f2f1ed 100%)`,
  border: ink.replace("1)", "0.22)"),
  glow: ink.replace("1)", "0.28)"),
  badge: ink.replace("1)", "0.1)"),
  badgeText: ink.includes("255, 91, 46") ? "#ff5b2e" : "#11110f",
  title: ink.includes("255, 91, 46") ? "#ff5b2e" : "#11110f",
  pill: ink.replace("1)", "0.08)"),
  pillBorder: ink.replace("1)", "0.2)"),
  watermarkGradient: `linear-gradient(135deg, ${ink.replace("1)", "0.38)")} 0%, rgba(217, 255, 83, 0.14) 55%, rgba(242, 241, 237, 0.04) 100%)`,
});

export const expertiseCardThemes: Record<string, ExpertiseCardTheme> = {
  frontend: paperTheme("rgba(255, 91, 46, 1)", "rgba(255, 91, 46, 0.14)"),
  backend: paperTheme("rgba(17, 17, 15, 1)", "rgba(17, 17, 15, 0.08)"),
  database: paperTheme("rgba(255, 91, 46, 1)", "rgba(217, 255, 83, 0.16)"),
  cloud: paperTheme("rgba(17, 17, 15, 1)", "rgba(255, 91, 46, 0.1)"),
  "mobile-desktop": paperTheme("rgba(255, 91, 46, 1)", "rgba(255, 91, 46, 0.16)"),
  ai: paperTheme("rgba(17, 17, 15, 1)", "rgba(217, 255, 83, 0.14)"),
};

export const defaultExpertiseCardTheme = expertiseCardThemes.frontend;
