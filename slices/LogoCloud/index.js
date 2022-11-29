import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.LogoCloudSlice} LogoCloudSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoCloudSlice>} LogoCloudProps
 * @param { LogoCloudProps }
 */
const LogoCloud = ({ slice }) => {
  return (
    <section className="my-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="pb-6 text-center text-base font-semibold uppercase tracking-wide text-neutral-500">
        {slice.primary.heading}
      </h2>
      <div className="fill-neutral-500">
        <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-6 sm:gap-y-8 sm:gap-x-8 lg:gap-x-12">
          {slice?.items?.map((item, i) => (
            <PrismicNextImage
              field={item.companyLogo}
              key={i}
              className="w-24 "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
