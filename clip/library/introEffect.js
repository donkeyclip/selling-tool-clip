import { CSSEffect } from "@donkeyclip/motorcortex";
export const introEffect = (rotate,opacity,scale,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity,
        scale,
        transform:{
          rotate
        }
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
);