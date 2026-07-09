import { useEffect } from "react";

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

type SeoHeadProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  schema?: object | object[];
};

const managedAttribute = "data-jervix-seo";

function upsertMeta(tag: MetaTag) {
  const selector = tag.name
    ? `meta[name="${tag.name}"]`
    : `meta[property="${tag.property}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    if (tag.name) {
      element.setAttribute("name", tag.name);
    }
    if (tag.property) {
      element.setAttribute("property", tag.property);
    }
    element.setAttribute(managedAttribute, "true");
    document.head.appendChild(element);
  }

  element.setAttribute("content", tag.content);
}

function upsertCanonical(canonicalUrl: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute(managedAttribute, "true");
    document.head.appendChild(link);
  }

  link.setAttribute("href", canonicalUrl);
}

export default function SeoHead({
  title,
  description,
  canonicalUrl,
  ogImage,
  schema,
}: SeoHeadProps) {
  useEffect(() => {
    document.title = title;
    upsertCanonical(canonicalUrl);

    [
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: "website" },
    ].forEach(upsertMeta);

    document.head
      .querySelectorAll(`script[type="application/ld+json"][${managedAttribute}]`)
      .forEach((element) => element.remove());

    const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];
    schemas.forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute(managedAttribute, "true");
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
    });
  }, [canonicalUrl, description, ogImage, schema, title]);

  return null;
}
