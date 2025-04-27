"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type FC, useState } from "react";

import { clientEnv } from "@/env/client";
import { ThemeProvider } from "@/layouts/root-layout/providers/theme-provider";
import { type PropsWithChildren } from "@/types/common";

export const RootLayoutProviders: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
          },
        },
      })
  );

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {children}

        {clientEnv.NEXT_PUBLIC_IS_DEBUG && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </ThemeProvider>
  );
};
