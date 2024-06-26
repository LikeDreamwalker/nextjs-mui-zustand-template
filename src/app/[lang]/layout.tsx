import { CssBaseline, Box, Toolbar } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import getInitColorSchemeScript from "@mui/system/cssVars/getInitColorSchemeScript";
import type { Metadata } from "next";
import CustomAppBar from "@/components/AppBar";
import MenuList from "@/components/MenuList";
import { CommonStoreProvider } from "@/providers/common-store-provider";
import theme from "@/theme";
import { Locale } from "@/library/intl";
import { getI18nString } from "@/library/api";

export const metadata: Metadata = {
  title: "nextjs-mui-zustand-template",
  description: "Next.js + MUI + Zustand template",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  console.log(params, "?>?>?>params");
  const appBarTitle = "";
  // const appBarTitle = getI18nString({
  //   locale: params.lang,
  //   texts: ["common.app-bar.title"],
  // });
  return (
    <html lang="en">
      <body>
        <CommonStoreProvider>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <CssVarsProvider theme={theme} defaultMode="system">
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
                  flexDirection: "column",
                }}
              >
                <Toolbar></Toolbar>
                <CustomAppBar title={appBarTitle}></CustomAppBar>
                <Box
                  sx={{
                    display: "flex",
                    flex: "1 1 auto",
                    flexWrap: "nowrap",
                    alignContent: "flex-start",
                    justifyContent: "space-between",
                  }}
                >
                  <MenuList></MenuList>
                  {children}
                </Box>
              </Box>
            </CssVarsProvider>
          </AppRouterCacheProvider>
        </CommonStoreProvider>
      </body>
    </html>
  );
}
