import React from "react";

export const Footer = ({ navigation, settings }) => {
  return (
    <footer className="bg-neutral-900">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2 text-center">
            <span
              href="https://docs.astro.build/en/concepts/why-astro/"
              className="text-base text-neutral-300 hover:text-neutral-100 hover:underline"
            >
              Why Astro?
            </span>
          </div>
          <div className="px-5 py-2 text-center">
            <span
              href="https://docs.astro.build/"
              className="text-base text-neutral-300 hover:text-neutral-100 hover:underline"
            >
              Documentation
            </span>
          </div>
          <div className="px-5 py-2 text-center">
            <span
              href="/blog"
              className="text-base text-neutral-300 hover:text-neutral-100 hover:underline"
            >
              Blog
            </span>
          </div>
          <div className="px-5 py-2 text-center">
            <span
              href="/press"
              className="text-base text-neutral-300 hover:text-neutral-100 hover:underline"
            >
              Press
            </span>
          </div>
          <div className="px-5 py-2 text-center">
            <span
              href="/privacy"
              className="text-base text-neutral-300 hover:text-neutral-100 hover:underline"
            >
              Privacy Policy
            </span>
          </div>
          <div className="px-5 py-2 text-center">
            <span
              href="https://astro.build/company/"
              className="text-base text-neutral-300 hover:text-neutral-100 hover:underline"
            >
              Site design and content stolen from the wonderful Astro Technology
              Company
            </span>
          </div>
        </nav>
      </div>
    </footer>
  );
};
