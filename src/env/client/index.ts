import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_SUPABASE_KEY: z.string(),
    NEXT_PUBLIC_IS_DEBUG: z.boolean(),
    NEXT_PUBLIC_BRAND_NAME: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_IS_DEBUG: process.env.NEXT_PUBLIC_IS_DEBUG === "true",
    NEXT_PUBLIC_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
    NEXT_PUBLIC_BRAND_NAME: process.env.NEXT_PUBLIC_BRAND_NAME,
  },
});
