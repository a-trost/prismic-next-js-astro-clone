import { Icon } from "@iconify/react";

export default function FeatureIcon({ icon }) {
  return (
    <div
      class="mb-4 w-max rounded-md p-[3px] shadow shadow-sky-200"
      aria-hidden="true"
    >
      <div class="grid h-12 w-12 place-content-center rounded-md border border-primary-300 bg-gradient-to-br from-neutral-50 to-primary-100 text-violet-500 shadow shadow-sky-200 outline outline-1 outline-offset-[3px] outline-primary-100">
        <Icon icon={`carbon:${icon}`} height={32} />
      </div>
    </div>
  );
}
