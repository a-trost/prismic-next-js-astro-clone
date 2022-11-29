import React from "react";
import { PrismicRichText } from "@prismicio/react";
import FeatureIcon from "../../components/FeatureIcon";
import { PrismicLink } from "@prismicio/react";
import ContentTabs from "../../components/ContentTabs";

/**
 * @typedef {import("@prismicio/client").Content.ContentShowcaseSlice} ContentShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentShowcaseSlice>} ContentShowcaseProps
 * @param { ContentShowcaseProps }
 */
const ContentShowcase = ({ slice }) => (
  <section class="my-20 mx-auto flex   w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
    <div class=" mx-auto flex w-full max-w-4xl flex-col p-4 align-middle">
      <FeatureIcon icon={slice.primary.icon} />
      <p class="text-base font-semibold text-violet-600">
        {slice.primary.eyebrow}
      </p>
      <PrismicRichText field={slice.primary.heading} />

      <PrismicRichText field={slice.primary.body} />
    </div>
    <div class="mx-auto w-full max-w-4xl">
      <ContentTabs />
    </div>
  </section>
);

export default ContentShowcase;
