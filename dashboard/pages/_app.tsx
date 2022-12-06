import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme, globalStyles } from "../stitches.config";
import { useEffect, useState } from "react";
export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {

    if(!window.localStorage.getItem('theme'))
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
      <NextUIProvider >
        <Component {...pageProps} />
      </NextUIProvider>
    );
  }
}
