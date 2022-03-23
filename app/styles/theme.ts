import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    mainBg: "#171923",
    bg: "#2D3748",
    fontColor: "#ebf8ff",
    borderColor: "#D53F8C",
  },
  styles: {
    global: () => ({
      body: {
        background: "mainBg",
      },
    }),
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
});
