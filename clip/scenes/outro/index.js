import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import {moveLeft} from "../../library/moveLeft";
import { moveTop } from "../../library/moveTop";
import initParams from "../../initParams";
import { introEffect } from "../../library/introEffect";
import { scale } from "../../library/scale";
import { opacity } from "../../library/opacity";

const clip = new HTMLClip({
  html,
  css,
  selector: "#outro",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    stylesheet:"@initParams.stylesheet",
    company:"@initParams.company",
    products:"@initParams.products"
  },
});

clip.addIncident(opacity(1,".container",100,initParams[0].value.products.length*5500),0) 
clip.addIncident(introEffect("0deg",1,1,".company-wrapper",1000,500+initParams[0].value.products.length*5500),0) 
clip.addIncident(scale(2,".company-wrapper",100),2000+initParams[0].value.products.length*5500) 
clip.addIncident(scale(1,".company-wrapper",100),2100+initParams[0].value.products.length*5500) 
 
export default clip;
