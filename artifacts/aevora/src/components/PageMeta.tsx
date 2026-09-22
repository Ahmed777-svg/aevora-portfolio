import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  ogImage: string;
  url: string;
}

function setMeta(property: string, content: string, attr = "property") {
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function PageMeta({ title, description, ogImage, url }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} | Ahmed Khaled Mahmoud`;
    const fullImage = `https://aevora.replit.app/${ogImage}`;
    const fullUrl = `https://aevora.replit.app${url}`;

    document.title = fullTitle;

    // Standard meta
    setMeta("description", description, "name");

    // Open Graph
    setMeta("og:title", fullTitle);
    setMeta("og:description", description);
    setMeta("og:url", fullUrl);
    setMeta("og:image", fullImage);

    // Twitter Card
    setMeta("twitter:title", fullTitle, "name");
    setMeta("twitter:description", description, "name");
    setMeta("twitter:url", fullUrl, "name");
    setMeta("twitter:image", fullImage, "name");

    // Canonical
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;
  }, [title, description, ogImage, url]);

  return null;
}
