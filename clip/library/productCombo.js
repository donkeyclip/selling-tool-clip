import { CSSEffect,Combo } from "@donkeyclip/motorcortex";
import { loadPlugin } from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
const AnimePlugin = loadPlugin(AnimePluginDefinition);

export const productCombo = (selector, delay = 0) => new Combo(
    {
      incidents:[
        {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
             opacity:1
           }
          },
          props: {
           selector: ".balls-container",
           duration: 100,
          },
          position: 0
        },
        {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
             right:"@expression(random(20,90))%"
           }
          },
          props: {
           selector: ".part1",
           duration: 4000,
          },
          position: 0
        },
        {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
            left:"@expression(random(20,90))%"
           }
          },
          props: {
           selector: ".part2",
           duration: 4000,
          },
          position: 0
        },
        {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
             opacity:"@expression(random())"
           }
          },
          props: {
           selector: ".sm-ball",
           duration: 1000,
          },
          position: 0
        },
        {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
             scale:1
           }
          },
          props: {
           selector: ".circle",
           duration: 700,
           delay:"@stagger(0,300)"
          },
          position: 0
         },
         {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
             scale:1,
             transform:{
              rotate:"0deg"
             }
           }
          },
          props: {
           selector: ".image-wrapper",
           duration: 700,
           delay:"@stagger(0,300)"
          },
          position: 0
         },
         {
          incidentClass: CSSEffect,
          attrs: {
            initialValues: {
              top: "-120%",
            },
           animatedAttrs: {
             top:"0px"
           }
          },
          props: {
           selector: ".name",
           duration: 700,
          },
          position: 1000
         },
         {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
             bottom:"0px"
           }
          },
          props: {
           selector: ".description",
           duration: 700,
          },
          position: 1000
         },
         {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
            scale:1
           }
          },
          props: {
           selector: ".price-wrapper",
           duration: 500,
          },
          position: 1500
         },
         {incidentClass: AnimePlugin.MotionPath,
          attrs: {
            animatedAttrs: {
              positionOn: {
                pathElement: "circle",
              },
            },
          },
          props: {
            selector: ".ball",
            duration: 3500,
            delay:"@expression(500*index)",
          },
          position: 500
        },
        {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
            opacity: 1,
            width:"@expression(50*index+random(100,400))px",
           }
          },
          props: {
            selector: ".ball",
            duration: 500,
            delay:"@expression(500*index)",
          },
          position: 500
        },
        {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
            opacity: 0,
           }
          },
          props: {
            selector: ".ball",
            duration: 1,
            delay:"@expression(500*index)",
          },
          position: 3000
        },
        {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
            scale: 0,
            opacity:0
           }
          },
          props: {
            selector: ".product-container",
            duration: 300,
            delay:"@expression(1000*index)",
          },
          position: 4200
        },
      ]
    },
    {
      selector,
      delay
    }
    );