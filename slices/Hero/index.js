import { PrismicLink, PrismicRichText } from "@prismicio/react";

const Hero = ({ slice }) => {
  return (
    <section className="relative overflow-hidden pt-24 pb-8">
      <div className=" pointer-events-none absolute inset-0 -z-50 border-t-[3.5rem] border-slate-900 bg-purple-800 bg-gradient-to-b from-slate-900 to-purple-800 bg-no-repeat">
        <div className="starfield  absolute inset-0"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto justify-center lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="relative z-10 col-span-6 mb-8 px-4 sm:mb-16 sm:px-6 sm:text-center lg:mb-0 lg:flex lg:px-0 lg:text-left">
            <div className="lg:py-24">
              <PrismicLink
                field={slice.primary.eyebrowURL}
                className="-mx-3 mb-4 inline-flex flex-wrap items-center gap-y-2 gap-x-2 rounded-full border-primary-100/30 text-neutral-50 hover:border-opacity-50 hover:text-white xs:mb-0 xs:flex-nowrap xs:border xs:p-1 xs:pr-2 sm:mx-0 sm:text-base lg:text-sm xl:text-base"
              >
                <div>
                  <span className="rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold uppercase leading-5 tracking-wide text-neutral-50">
                    <span>{slice.primary.eyebrowBadge}</span>
                  </span>
                  <span className="ml-2 inline-flex items-center rounded-full border border-primary-100/30 py-0.5 pl-3 pr-1.5 xs:border-0 xs:p-0">
                    <span className="text-sm">
                      {slice.primary.eyebrowSecondaryText}
                    </span>
                    <svg aria-hidden="true" width="20" height="20"></svg>
                  </span>
                </div>
              </PrismicLink>

              <PrismicRichText
                field={slice.primary.heading}
                components={{
                  heading1: ({ children }) => (
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-50 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      {children}
                    </h1>
                  ),
                }}
              />

              <div className="mt-3 max-w-lg text-lg text-neutral-200 sm:mx-auto sm:mt-5 sm:text-2xl lg:mx-0">
                <PrismicRichText field={slice.primary.body} />
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <a
                    href="https://docs.astro.build/en/getting-started/"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-100 px-4 py-3 text-base font-medium text-primary-700 no-underline hover:bg-primary-200 md:text-lg"
                  >
                    Get Started
                  </a>
                </div>
                <div className="relative mt-3 sm:mt-0 sm:ml-3">
                  <div className="flex items-center justify-center rounded-md border border-transparent bg-neutral-900 py-3 pl-3 pr-4 font-mono text-neutral-50 shadow-primary-700 md:text-lg">
                    <svg
                      aria-hidden="true"
                      width="22"
                      height="22"
                      className="mr-2 text-secondary-500"
                    ></svg>
                    <span id="heroCommand" className="select-all">
                      npm create astro@latest
                    </span>

                    <button aria-label="Copy to clipboard" className="ml-4">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className=""
                        width="22"
                        height="22"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinejoin="round"
                            d="M15.5 4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5"
                          ></path>
                          <path
                            strokeLinejoin="round"
                            d="M8.621 3.515A2 2 0 0 1 10.561 2h2.877a2 2 0 0 1 1.94 1.515L16 6H8l.621-2.485z"
                          ></path>
                          <path d="M9 12h6M9 16h6"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" col-span-6 mt-16 mb-8 items-center justify-center px-2 sm:px-6 sm:text-center lg:-mx-64 lg:mt-0 lg:mb-0 lg:flex lg:px-64 lg:text-left"
            style={{ "--rot-x": "0deg", "--rot-y": "0deg" }}
          >
            <div className=" mx-auto max-w-sm sm:max-w-xl">
              <div className="js-tilt  relative">
                <div className="grid-lines  -z-10">
                  <div className="vertical  right-1/4"></div>
                  <div className="vertical  right-1/2"></div>
                  <div className="vertical  right-3/4"></div>
                  <div className="horizontal  top-1/2"></div>
                  <div className="vertical  right-0"></div>
                  <div className="horizontal  bottom-0"></div>
                  <div className="vertical  left-0"></div>
                  <div className="horizontal  top-0"></div>
                  <div className="vertical outer  -right-[25%]"></div>
                  <div className="vertical outer  -left-[25%]"></div>
                </div>

                <h2 className=" sr-only">Testimonial</h2>

                <div className="card relative flex  flex-col bg-gradient-to-br from-white via-white to-primary-100 px-6 pt-4 pb-8 shadow-primary-700 sm:py-10 sm:px-12">
                  <div className=" text-2xl font-light text-neutral-700 sm:text-4xl sm:font-extralight">
                    Rebuilt my blog with Astro
                    <br className="" /> out of curiosity…{" "}
                    <mark className=" -ml-2 mt-2 rounded-md bg-gradient-to-r from-yellow-200 to-yellow-300 font-semibold md:ml-0">
                      holy
                      <span className="dense js-bleep ">
                        <span className="">★</span>
                        <span className="">#</span>
                        <span className="">?</span>
                        <span className="">@</span>
                      </span>
                      !
                    </mark>
                  </div>
                  <div className="bars  mt-4">
                    <div
                      className=" grid grid-cols-11 items-center text-sm sm:text-base"
                      style={{ "--max": 180 }}
                    >
                      <div
                        id="payload-title-1"
                        className=" col-span-2 mr-2 py-2 text-right text-neutral-600"
                      >
                        <h3 className="">Next.js</h3>
                      </div>
                      <div className=" col-span-9 flex items-center">
                        <div
                          className="bar  shrink bg-violet-400"
                          style={{ "--value": 138 }}
                          aria-labelledby="payload-title-1"
                          aria-describedby="payload-before"
                          role="progressbar"
                          aria-valuenow="138"
                          aria-valuemin="0"
                          aria-valuemax="138"
                        ></div>
                        <span
                          id="payload-before"
                          className=" ml-2 shrink-0 text-sm text-neutral-600"
                        >
                          138{" "}
                          <abbr title="kilobytes" className="">
                            kB
                          </abbr>
                        </span>
                      </div>
                      <div
                        id="payload-title-2"
                        className="col-span-2  mr-2 py-2 text-right font-bold text-accent-900"
                      >
                        <h3 className="">Astro</h3>
                      </div>
                      <div className=" col-span-9 flex items-center">
                        <div
                          className="bar bg-accent-600 "
                          style={{ "--value": 7.6 }}
                          aria-labelledby="payload-title-2"
                          aria-describedby="payload-after"
                          role="progressbar"
                          aria-valuenow="7.5"
                          aria-valuemin="0"
                          aria-valuemax="138"
                        ></div>
                        <span
                          id="payload-after"
                          className=" ml-2 text-sm text-neutral-600"
                        >
                          7.6{" "}
                          <abbr title="kilobytes" className="">
                            kB
                          </abbr>{" "}
                          JavaScript page load
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className=" absolute top-3.5 right-4 -z-10 fill-neutral-200 sm:top-4 sm:right-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                      className=""
                    >
                      <path
                        d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <a
                    className=" group"
                    href="https://twitter.com/t3dotgg/status/1437195415439360003"
                  >
                    <span className=" absolute bottom-2 right-3 mt-4 ml-auto text-xs text-neutral-600 no-underline sm:bottom-4 sm:right-6">
                      Source:{" "}
                      <span className=" cursor-pointer underline outline-offset-2 group-focus:outline">
                        Theo, CEO @ Ping Labs
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
