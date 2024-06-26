import "server-only";
import { i18n } from "../../i18n-config";
import { createIntl } from "@formatjs/intl";
export type Locale = (typeof i18n)["locales"][number];

export async function getIntl(locale: Locale | "" = "en") {
  return createIntl({
    locale,
    messages: (await import(`../lang/${locale}.json`)).default,
  });
}
