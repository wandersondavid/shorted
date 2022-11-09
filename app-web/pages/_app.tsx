import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { darkTheme } from "../stitches.config";
export default function MyApp({ Component, pageProps }: AppProps) {
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
