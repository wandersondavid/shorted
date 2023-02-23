import type { AppProps } from "next/app";
import {  NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme, lightTheme } from "../theme.config";
import { useEffect, useState } from "react";
import { AuthProvider } from "../hooks/auth";

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
const NEXT_PUBLIC_SUPABASE_URL:string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const NEXT_PUBLIC_SUPABASE_KEY:string = process.env.NEXT_PUBLIC_SUPABASE_KEY!;


export default function MyApp({ Component, pageProps }:  AppProps<{
  initialSession: Session,
}>) {
  // globalStyles();

  const [supabase] = useState(() => createBrowserSupabaseClient({supabaseUrl:NEXT_PUBLIC_SUPABASE_URL , supabaseKey:NEXT_PUBLIC_SUPABASE_KEY }))


    return (
      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
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
      </SessionContextProvider>
    );
}
