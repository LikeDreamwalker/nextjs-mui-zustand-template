import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "zh-CN"],

  // Used when no locale matches
  defaultLocale: "en",
});

// An easy way to memory the supported locales and use
export const fullRenderLocales = [
  {
    key: "en",
    name: "English",
  },
  {
    key: "zh-CN",
    name: "简体中文",
  },
];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
