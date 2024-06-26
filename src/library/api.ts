export async function getI18nString(texts: Array<string>) {
  const res = await fetch("/api/get_i18n_string", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ texts }),
  });
  console.log(res, "?>?>?>?>");
  // const data = await res.json();
  // return data;
  return { hello: "world" };
}