import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "../prismicio";
import { Heading } from "../components/Heading";

import "../styles/globals.css";

const richTextComponents = {
  heading1: ({ children }) => (
    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-50 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2 className="mt-2 mb-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3 className="mb-7 mt-12 first:mt-0 last:mb-0">{children}</h3>
  ),
  paragraph: ({ children }) => (
    <p className="mb-7 max-w-lg text-base last:mb-0">{children}</p>
  ),
  oList: ({ children }) => (
    <ol className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="mb-7 pl-4 last:mb-0 md:pl-6">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li className="mb-1 list-disc pl-1 last:mb-0 md:pl-2">{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="underline decoration-1 underline-offset-2"
    >
      {children}
    </PrismicLink>
  ),
};

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      internalLinkComponent={Link}
      richTextComponents={richTextComponents}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
