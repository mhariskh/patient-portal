import { type FC } from "react";

import { RootLayoutProviders } from "@/layouts/root-layout/providers";
import { dmSans } from "@/layouts/root-layout/root-layout.utils";
import { type PropsWithChildren } from "@/types/common";

export const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-secondary`}>
        <RootLayoutProviders>{children}</RootLayoutProviders>
      </body>
    </html>
  );
};
