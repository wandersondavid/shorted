import type { AppProps } from "next/app";
import {  NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme, lightTheme } from "../theme.config";
import { useEffect, useState } from "react";
import { AuthProvider } from "../hooks/auth";
export default function MyApp({ Component, pageProps }: AppProps) {
  // globalStyles();
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
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </NextUIProvider>
      </NextThemesProvider>
    );
}
