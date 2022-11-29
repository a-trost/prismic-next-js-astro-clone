import { Tab } from "@headlessui/react";
import Image from "next/image";
import apiImage from "../public/build_api.png";
import cmsImage from "../public/build_cms.png";
import mdxImage from "../public/build_mdx.png";
import markdownImage from "../public/build_markdown.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const tabTitles = ["CMS", "Markdown", "MDX", "API"];

  return (
    <div className="w-full  px-2 py-6 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex max-w-md space-x-1 rounded-xl bg-purple-900/20 p-1">
          {tabTitles.map((tabTitle) => (
            <Tab
              key={tabTitle}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-800",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-purple-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-purple-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tabTitle}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          <Tab.Panel className={"rounded-xl bg-white p-3"}>
            <Image src={cmsImage} alt={"CMS"} />
          </Tab.Panel>
          <Tab.Panel className={"rounded-xl bg-white p-3"}>
            <Image src={markdownImage} alt={"API"} />
          </Tab.Panel>
          <Tab.Panel className={"rounded-xl bg-white p-3"}>
            <Image src={mdxImage} alt={"API"} />
          </Tab.Panel>
          <Tab.Panel className={"rounded-xl bg-white p-3"}>
            <Image src={apiImage} alt={"API"} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
