import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { darkTheme, globalStyles } from "../stitches.config";
import { useEffect, useState } from "react";
export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: "light-theme", dark: darkTheme.className }}
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
