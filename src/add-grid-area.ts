import { CSSProperties } from "react";

export function addGridArea(name: string) {
  return {
    "--grid-area-name": name,
  } as CSSProperties;
}
