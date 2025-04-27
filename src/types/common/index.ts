import { type ReactNode } from "react";

export type PropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

export interface PropsWithClassName {
  className?: string;
}

export type PropsWithChildrenAndClassName<P = unknown> = PropsWithChildren<P> &
  PropsWithClassName;
