import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from '@radix-ui/colors';


export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
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


      greenbg:green.green3,

      green:'#41A777',


      cardContainer: "#FBFAFF",
      cardInput: "#F6F5FC",
      button:'#6E56CF',

      navBar: "#ffffff",

      text:"#11181C",
      text100:"$gray600",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
    },
    fonts: {
      system: "system-ui",
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: "(max-width: 520px)",
    bp2: "(min-width: 900px)",
  },
});

export const globalStyles = globalCss({
  body: { margin: 0, padding: 0, fontFamily: "$system" },
});

export const darkTheme = createTheme({
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
    button:'#6E56CF',

    greenbg:green.green3,
    green:'#41A777',

    text:"$gray100",
    text100:"$purple400",
  },
});
