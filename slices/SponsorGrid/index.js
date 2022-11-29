import React from "react";
import { PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.SponsorGridSlice} SponsorGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SponsorGridSlice>} SponsorGridProps
 * @param { SponsorGridProps }
 */
const SponsorGrid = ({ slice }) => {
  return (
    <section className="bg-gradient-to-br from-accent-100 to-gray-200 bg-[length:100vw_100vh] bg-fixed p-1">
      <div className="my-20 mx-auto flex max-w-7xl flex-col gap-y-6 px-4 sm:px-6 lg:px-8">
        <p className="mx-auto mb-6 max-w-sm text-center text-lg text-neutral-600">
          <span>{slice.primary.topCopy}</span>
        </p>
        <ul className="gap-6 space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {slice?.items?.map((item, i) => (
            <li key={i}>
              <PrismicLink
                field={item.sponsorLink}
                className="flex content-center justify-center rounded-lg border border-primary-300 bg-neutral-50 p-8 shadow shadow-sky-200 hover:border-primary-400 hover:shadow-accent-300"
              >
                <span className="sr-only">{item.logo.alt}</span>
                <PrismicNextImage field={item.logo} className="h-auto w-24" />
              </PrismicLink>
            </li>
          ))}

          <li className="footer  sm:col-span-2 lg:col-span-3">
            <p className="col-span-3 mx-auto mt-8 flex max-w-sm content-center  justify-center  text-center text-lg  text-neutral-600">
              <span>{slice.primary.bottomCopy}</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SponsorGrid;
