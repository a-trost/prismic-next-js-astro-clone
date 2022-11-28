import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "../../components/Bounded";
import { Heading } from "../../components/Heading";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative overflow-hidden pt-24 pb-8">
      <div className=" pointer-events-none absolute inset-0 -z-50 border-t-[3.5rem] border-slate-900 bg-purple-800 bg-gradient-to-b from-slate-900 to-purple-800 bg-no-repeat">
        <div className="starfield  absolute inset-0"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto justify-center lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="relative z-10 col-span-6 mb-8 px-4 sm:mb-16 sm:px-6 sm:text-center lg:mb-0 lg:flex lg:px-0 lg:text-left">
            <div className="lg:py-24">
              <a
                href="/blog/astro-1"
                className="xs:mb-0 xs:flex-nowrap xs:border border-primary-100/30 xs:p-1 xs:pr-2 -mx-3 mb-4 inline-flex flex-wrap items-center gap-y-2 gap-x-2 rounded-full text-neutral-50 hover:border-opacity-50 hover:text-white sm:mx-0 sm:text-base lg:text-sm xl:text-base"
              >
                <span className="bg-primary-600 rounded-full px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-neutral-50">
                  Astro 1.0 is here
                </span>
                <span className="xs:border-0 border-primary-100/30 xs:p-0 inline-flex items-center rounded-full border py-0.5 pl-3 pr-1.5">
                  <span className="text-sm">Read the launch post</span>
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
            
                  ></svg>
                </span>
              </a>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-50 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block"> Build faster websites.</span>
              </h1>
              <p className="mt-3 max-w-lg text-lg text-neutral-200 sm:mx-auto sm:mt-5 sm:text-2xl lg:mx-0">
                Pull content from anywhere and serve it fast with Astro's
                next-gen island architecture.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <a
                    href="https://docs.astro.build/en/getting-started/"
                    className="text-primary-700 bg-primary-100 hover:bg-primary-200 flex w-full items-center justify-center rounded-md border border-transparent px-4 py-3 text-base font-medium no-underline md:text-lg"
                  >
                    Get Started
                  </a>
                </div>
                <div className="relative mt-3 sm:mt-0 sm:ml-3">
                  <div className="font-mono shadow-primary-700 flex items-center justify-center rounded-md border border-transparent bg-neutral-900 py-3 pl-3 pr-4 text-neutral-50 md:text-lg">
                    <svg
                      aria-hidden="true"
                      width="22"
                      height="22"
                      className="text-secondary-500 mr-2"
                  
                    ></svg>
                    <span id="heroCommand" className="select-all">
                      npm create astro@latest
                    </span>
                    
                      <button
                        aria-label="Copy to clipboard"
                        className="ml-4"
                      >
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

                <div className="card to-primary-100 shadow-primary-700  relative flex flex-col bg-gradient-to-br from-white via-white px-6 pt-4 pb-8 sm:py-10 sm:px-12">
                  <div
                    className=" text-2xl font-light text-neutral-700 sm:text-4xl sm:font-extralight"
                    style={{ "lineHeight": "1.8rem" }}
                  >
                    Rebuilt my blog with Astro
                    <br className="" /> out of curiosity…{" "}
                    <mark className=" -ml-2 mt-2 md:ml-0">
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
                        className="text-accent-900  col-span-2 mr-2 py-2 text-right font-bold"
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
