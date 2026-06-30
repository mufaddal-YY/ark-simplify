import Script from "next/script";
import { getHeadCodeSettings } from "@/sanity/fetch";

const booleanAttributes = new Set([
  "async",
  "defer",
  "disabled",
  "nomodule",
  "noModule",
]);

const attributeMap = {
  charset: "charSet",
  class: "className",
  crossorigin: "crossOrigin",
  "http-equiv": "httpEquiv",
  referrerpolicy: "referrerPolicy",
};

const supportedTags = new Set(["script", "meta", "link", "style", "noscript"]);

function toReactAttributeName(name) {
  const normalized = name.toLowerCase();

  if (attributeMap[normalized]) {
    return attributeMap[normalized];
  }

  if (normalized.startsWith("data-") || normalized.startsWith("aria-")) {
    return normalized;
  }

  return normalized;
}

function parseAttributes(attributeText = "") {
  const attributes = {};
  const pattern =
    /([:@\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;

  while ((match = pattern.exec(attributeText))) {
    const [, rawName, doubleQuoted, singleQuoted, unquoted] = match;
    const name = toReactAttributeName(rawName);
    const value = doubleQuoted ?? singleQuoted ?? unquoted;

    attributes[name] = booleanAttributes.has(name) && value === undefined ? true : value ?? true;
  }

  return attributes;
}

function parseHeadCode(code = "") {
  const nodes = [];
  const tagPattern =
    /<(script|style|noscript)\b([^>]*)>([\s\S]*?)<\/\1>|<(meta|link)\b([^>]*?)\/?>/gi;
  let match;

  while ((match = tagPattern.exec(code))) {
    const pairedTag = match[1]?.toLowerCase();
    const voidTag = match[4]?.toLowerCase();
    const tag = pairedTag || voidTag;

    if (!supportedTags.has(tag)) {
      continue;
    }

    nodes.push({
      tag,
      attributes: parseAttributes(match[2] || match[5]),
      content: match[3]?.trim(),
    });
  }

  return nodes;
}

function HeadCodeNode({ node, block, index }) {
  const key = `${block._key || block.title || "head-code"}-${index}`;

  if (node.tag === "script") {
    const { async: _async, defer: _defer, ...attributes } = node.attributes;
    const id = attributes.id || `head-code-${key}`;
    const strategy = block.scriptStrategy || "afterInteractive";

    if (attributes.src) {
      return <Script key={key} {...attributes} id={id} strategy={strategy} />;
    }

    return (
      <Script key={key} {...attributes} id={id} strategy={strategy}>
        {node.content || ""}
      </Script>
    );
  }

  if (node.tag === "style") {
    return (
      <style
        key={key}
        {...node.attributes}
        dangerouslySetInnerHTML={{ __html: node.content || "" }}
      />
    );
  }

  if (node.tag === "noscript") {
    return (
      <noscript
        key={key}
        {...node.attributes}
        dangerouslySetInnerHTML={{ __html: node.content || "" }}
      />
    );
  }

  if (node.tag === "meta") {
    return <meta key={key} {...node.attributes} />;
  }

  if (node.tag === "link") {
    return <link key={key} {...node.attributes} />;
  }

  return null;
}

export default async function HeadCode() {
  const settings = await getHeadCodeSettings();

  if (!settings?.enabled) {
    return null;
  }

  const blocks = settings.codeBlocks?.filter(
    (block) => block?.enabled !== false && block?.code,
  );

  if (!blocks?.length) {
    return null;
  }

  return blocks.flatMap((block) =>
    parseHeadCode(block.code).map((node, index) => (
      <HeadCodeNode
        key={`${block._key || block.title || "head-code"}-${index}`}
        node={node}
        block={block}
        index={index}
      />
    )),
  );
}
