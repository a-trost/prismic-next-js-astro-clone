import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";
import { ConditionalWrap } from "./ConditionalWrap";

export default function Card({ image, heading, body, link }) {
  return (
    <article class=" relative isolate rounded-lg border border-primary-300 bg-neutral-50 p-4 shadow shadow-sky-200 hover:border-primary-400 hover:shadow-accent-300">
      <ConditionalWrap
        condition={prismicH.isFilled.link(link)}
        wrap={<PrismicLink field={link} />}
      >
        <div class="icon   mr-4 inline-block" aria-hidden="true">
          {prismicH.isFilled.image(image) ? (
            <PrismicNextImage
              field={image}
              class=" h-[2.5em] w-[2.5em] object-contain"
            />
          ) : (
            ""
          )}
        </div>

        <h3 class="font-display break-word  flex items-center gap-2 pt-2 font-bold">
          <span class="">{heading}</span>
        </h3>

        <p class=" flex-1 text-sm line-clamp-2">{body}</p>
      </ConditionalWrap>
    </article>
  );
}
