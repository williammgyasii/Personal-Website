import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { absoluteUrl, getSeoRoute, ogImageUrl } from "../../data/seo";

function upsertMeta(selector: string, attributes: Record<string, string>, content: string) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    for (const [key, value] of Object.entries(attributes)) {
      el.setAttribute(key, value);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function Seo({ path }: { path?: string }) {
  const { pathname } = useLocation();
  const route = getSeoRoute(path ?? pathname);
  const url = absoluteUrl(route.path);
  const image = ogImageUrl();

  useLayoutEffect(() => {
    document.title = route.title;
    upsertMeta('meta[name="description"]', { name: "description" }, route.description);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, route.title);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, route.description);
    upsertMeta('meta[property="og:url"]', { property: "og:url" }, url);
    upsertMeta('meta[property="og:image"]', { property: "og:image" }, image);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, route.title);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, route.description);
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, image);
    upsertLink("canonical", url);
  }, [image, route.description, route.title, url]);

  return null;
}
