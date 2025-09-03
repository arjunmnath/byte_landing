"use client"; // must be a client component

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/contexts/auth-context";

interface Props {
  children: ReactNode;
}

export default function ClientProviders({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        <AuthProvider>{children}</AuthProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
