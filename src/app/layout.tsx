import "./globals.css";

import { type Metadata, type Viewport } from "next";
import { type FC } from "react";

import { ABSOLUTE_ROUTES } from "@/constants/routes";
import { clientEnv } from "@/env/client";
import { RootLayout } from "@/layouts/root-layout";
import { type PropsWithChildren } from "@/types/common";

export const metadata: Metadata = {
  title: `${clientEnv.NEXT_PUBLIC_BRAND_NAME} - Multiple AI Models, One Powerful Assistant`,
  icons: {
    icon: [`${ABSOLUTE_ROUTES.FAVICON}?v=3`],
  },
  description: `${clientEnv.NEXT_PUBLIC_BRAND_NAME} combines top AI models in one platform, delivering comprehensive insights and powerful assistance.`,
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const Layout: FC<PropsWithChildren> = async ({ children }) => {
  return <RootLayout>{children}</RootLayout>;
};

export default Layout;
