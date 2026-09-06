const CRAWLER_UA =
  /Googlebot|Google-InspectionTool|Bingbot|DuckDuckBot|Slurp|Twitterbot|LinkedInBot|GPTBot|ChatGPT-User|ClaudeBot|Anthropic-AI|Applebot|facebookexternalhit|Bytespider|PerplexityBot|Google-Extended|bingbot/i;

export function isSeoCrawler(): boolean {
  if (typeof navigator === "undefined") return false;
  if (navigator.webdriver) return true;
  return CRAWLER_UA.test(navigator.userAgent);
}
