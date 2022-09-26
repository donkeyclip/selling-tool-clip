import { HTMLClip} from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { productCombo } from "../../library/productCombo";


const clip = new HTMLClip({
  html,
  css,
  selector: "#root2",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    stylesheet:"@initParams.stylesheet",
    products: "@initParams.products"
  },
});

clip.addIncident(productCombo(".products","@expression(5000*index)"),0);
export default clip;
