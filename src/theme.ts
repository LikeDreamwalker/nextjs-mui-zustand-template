"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

let theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#0066ff",
        },
        secondary: {
          main: "#c0c0c0",
        },
        error: {
          main: "#ff4500",
        },
        warning: {
          main: "#ff6835",
        },
        info: {
          main: "#00bbff",
        },
        success: {
          main: "#00a0f0",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#0066ff",
        },
        secondary: {
          main: "#c0c0c0",
        },
        error: {
          main: "#ff4500",
        },
        warning: {
          main: "#ff6835",
        },
        info: {
          main: "#00bbff",
        },
        success: {
          main: "#00a0f0",
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme) as typeof theme;
export default theme;
