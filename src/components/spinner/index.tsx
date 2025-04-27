import { type FC } from "react";

import { LoaderIcon } from "@/icons/loader";
import { type PropsWithClassName } from "@/types/common";
import { cn } from "@/utils/cn";

export const Spinner: FC<PropsWithClassName> = ({ className }) => (
  <LoaderIcon className={cn("size-4 animate-spin text-primary", className)} />
);
