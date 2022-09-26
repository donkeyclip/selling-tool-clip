import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { moveTop } from "../../library/moveTop";
import { introEffect } from "../../library/introEffect";

const clip = new HTMLClip({
  html,
  css,
  selector: "#root1",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    stylesheet:"@initParams.stylesheet",
    company:"@initParams.company",
  },
});

clip.addIncident(introEffect("0deg",1,1,".company-wrapper",600),0);
clip.addIncident(moveTop("0%",".company-quote",500),600);
export default clip;
