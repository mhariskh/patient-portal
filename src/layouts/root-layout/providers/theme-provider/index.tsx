"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type FC } from "react";

import { type PropsWithChildren } from "@/types/common";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextThemeProvider enableSystem attribute="class" disableTransitionOnChange>
      {children}
    </NextThemeProvider>
  );
};
