import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";

import { createTheme, NextUIProvider } from "@nextui-org/react";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...grayDark,
      ...blueDark,
      ...redDark,
      ...greenDark,
      primary: "transparent",

      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",

      gray100: "hsl(206,22%,99%)",
      gray200: "hsl(206,12%,97%)",
      gray300: "hsl(206,11%,92%)",
      gray400: "hsl(206,10%,84%)",
      gray500: "hsl(206,10%,76%)",
      gray600: "hsl(206,10%,44%)",

      purple100: "hsl(252,100%,99%)",
      purple200: "hsl(252,100%,98%)",
      purple300: "hsl(252,100%,94%)",
      purple400: "hsl(252,75%,84%)",
      purple500: "hsl(252,78%,60%)",
      purple600: "hsl(252,80%,53%)",

      greenbg: green.green3,

      green: "#41A777",

      cardContainer: "#FBFAFF",
      cardInput: "#F6F5FC",
      button: "#6E56CF",

      navBar: "#ffffff",

      text: "#11181C",
      text100: "$gray600",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    fonts: {
      system: "system-ui",
    },
    fontSizes: {
      xs: "0.75rem" /* 12px */,
      sm: "0.875rem" /* 14px */,
      base: "1rem" /* 16px */,
      md: "1rem" /* 16px */,
      lg: "1.125rem" /* 18px */,
      xl: "1.25rem" /* 20px */,
      "2xl": "1.5rem" /* 24px */,
      "3xl": "1.875rem" /* 30px */,
      "4xl": "2.25rem" /* 36px */,
      "5xl": "3rem" /* 48px */,
      "6xl": "3.75rem" /* 60px */,
      "7xl": "4.5rem" /* 72px */,
      "8xl": "6rem" /* 96px */,
      "9xl": "8rem" /* 128px */,
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      xs: 1 /* 16px */,
      sm: 1.25 /* 20px */,
      base: 1.5 /* 24px */,
      md: 1.5 /* 24px */,
      lg: 1.75 /* 28px */,
      xl: 1.75 /* 28px */,
      "2xl": 2 /* 32px */,
      "3xl": 2.25 /* 36px */,
      "4xl": 2.5 /* 40px */,
      "5xl": 1 /* 16px */,
      "6xl": 1 /* 16px */,
      "7xl": 1 /* 16px */,
      "8xl": 1 /* 16px */,
      "9xl": 1 /* 16px */,
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    radii: {
      xs: "7px",
      sm: "9px",
      md: "12px",
      base: "14px",
      lg: "14px",
      xl: "18px",
      "2xl": "24px",
      "3xl": "32px",
      squared: "33%",
      rounded: "50%",
      pill: "9999px",
    },
    breakpoints: {
      xs: "650px",
      sm: "960px",
      md: "1280px",
      lg: "1400px",
      xl: "1920px",
    },

    shadows: {
      xs: "0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)",
      sm: "0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)",
      md: "0 12px 20px 6px rgb(104 112 118 / 0.08)",
      lg: "0 12px 34px 6px rgb(104 112 118 / 0.18)",
      xl: "0 25px 65px 0px rgb(104 112 118 / 0.35)",
    },
    // to use along with css dropShadow utility
    dropShadows: {
      xs: "drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))",
      sm: "drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))",
      md: "drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04))",
      lg: "drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))",
      xl: "drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...grayDark,
      ...blueDark,
      ...redDark,
      ...greenDark,
      primary: "transparent",
      navBar: "hsl(206,8%,8%)",
      hiContrast: "hsl(206,2%,93%)",
      loContrast: "hsl(206,8%,8%)",

      gray100: "hsl(206,22%,99%)",
      gray200: "hsl(206,12%,97%)",
      gray300: "hsl(206,11%,92%)",
      gray400: "hsl(206,10%,84%)",
      gray500: "hsl(206,10%,76%)",
      gray600: "hsl(206,10%,44%)",

      purple100: "hsl(252,100%,99%)",
      purple200: "hsl(252,100%,98%)",
      purple300: "hsl(252,100%,94%)",
      purple400: "hsl(252,75%,84%)",
      purple500: "hsl(252,78%,60%)",
      purple600: "hsl(252,80%,53%)",

      cardContainer: "#29214A",
      cardInput: "#1A1523",
      button: "#6E56CF",

      greenbg: green.green3,
      green: "#41A777",

      text: "$gray100",
      text100: "$purple400",
    },
    shadows: {
      xs: "0 2px 8px 1px rgb(0 0 0 / 0.07), 0 1px 1px -1px rgb(0 0 0 / 0.04)",
      sm: "0 2px 8px 2px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.04)",
      md: "0 12px 20px 6px rgb(0 0 0 / 0.08)",
      lg: "0 12px 34px 6px rgb(0 0 0 / 0.18)",
      xl: "0 25px 65px 0px rgb(0 0 0 / 0.35)",
    },
    // to use along with css dropShadow utility
    dropShadows: {
      xs: "drop-shadow(0 2px 4px rgb(0 0 0 / 0.07)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.04))",
      sm: "drop-shadow(0 2px 8px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 4px rgb(0 0 0 / 0.04))",
      md: "drop-shadow(0 4px 12px rgb(0 0 0 / 0.08)) drop-shadow(0 20px 8px rgb(0 0 0 / 0.04))",
      lg: "drop-shadow(0 12px 24px rgb(0 0 0 / 0.15)) drop-shadow(0 12px 14px rgb(0 0 0 / 0.1))",
      xl: "drop-shadow(0 25px 34px rgb(0 0 0 / 0.35))",
    },
  },
});

export {lightTheme, darkTheme}

// export const {
//   config,
//   createTheme,
//   css,
//   getCssText,
//   globalCss,
//   styled,
//   theme,
// } = createStitches({

// });

// export const globalStyles = globalCss({
//   body: { margin: 0, padding: 0, fontFamily: "$system" },
// });

// export const darkTheme = createTheme({

// });
