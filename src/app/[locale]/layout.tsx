import { CssBaseline, Box, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import getInitColorSchemeScript from "@mui/system/cssVars/getInitColorSchemeScript";
import type { Metadata } from "next";
import CustomAppBar from "@/components/AppBar";
import MenuList from "@/components/MenuList";
import { CommonStoreProvider } from "@/providers/common-store-provider";
import theme from "../../theme";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Suspense } from "react";
import Loading from "@/app/[locale]/loading";

export const metadata: Metadata = {
  title: "nextjs-mui-zustand-template",
  description: "Next.js + MUI + Zustand template",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations("Common");
  return (
    <html lang="en">
      <body>
        <CommonStoreProvider>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <NextIntlClientProvider messages={messages}>
              <ThemeProvider theme={theme} defaultMode="system">
                {getInitColorSchemeScript({
                  // From https://github.com/mui/material-ui/issues/39010#issuecomment-1896674887
                  attribute: "data-mui-color-scheme",
                  modeStorageKey: "mui-mode",
                  colorSchemeStorageKey: "mui-color-scheme",
                  defaultMode: "system",
                })}
                <CssBaseline />
                <Box
                  sx={{
                    height: "100vh",
                    width: "100vw",
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flex: "0 0 100vw",
                      height: "100vh",
                      flexWrap: "npwrap",
                      alignContent: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <CustomAppBar title={t("appBarTitle")}></CustomAppBar>
                    <Box
                      sx={{
                        flexGrow: 1,
                        width: "100%",
                        height: "100%",
                        overflowY: "auto",
                      }}
                    >
                      <Toolbar></Toolbar>
                      <Suspense fallback={<Loading></Loading>}>
                        {children}
                      </Suspense>
                    </Box>
                  </Box>
                </Box>
              </ThemeProvider>
            </NextIntlClientProvider>
          </AppRouterCacheProvider>
        </CommonStoreProvider>
      </body>
    </html>
  );
}
