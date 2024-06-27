import { cachedPathLocale } from "@/middleware";
export async function getI18nString(texts: Array<string>) {
  console.log(typeof window, "window", cachedPathLocale);
  const res = await fetch("/api/get_i18n_string", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ texts }),
  });
  const jsonData = await res.json();
  if (jsonData.code !== 200) {
    return {};
  } else {
    return jsonData.data;
  }
}
