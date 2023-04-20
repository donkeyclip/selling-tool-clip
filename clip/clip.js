import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene from "./scenes/scene";
import initParamsValidationRules from "./initParamsValidationRules";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
setCSSCore(AnimePluginDefinition.CSSEffect);

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Montserrat:wght@600;900&family=Raleway&display=swap`,
    },
  ],
});

clip.addIncident(scene, 0);
