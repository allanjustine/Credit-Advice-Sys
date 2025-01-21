"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Theme({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return <>{children}</>;
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
