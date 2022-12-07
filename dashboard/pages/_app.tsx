import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme, lightTheme } from "../theme.config";
import { useEffect, useState } from "react";
export default function MyApp({ Component, pageProps }: AppProps) {
  // globalStyles();

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {

    if (!window.localStorage.getItem('theme'))
      window.localStorage.setItem('theme', 'dark')

    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (

      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    );
  }
}
