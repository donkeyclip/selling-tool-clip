import { CSSEffect } from "@donkeyclip/motorcortex";
export const opacity = (opacity,selector, duration) =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity
      },
    },
    {
      selector,
      duration,
    }
  );