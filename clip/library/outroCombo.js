import { CSSEffect,Combo } from "@donkeyclip/motorcortex";
import { loadPlugin } from "@donkeyclip/motorcortex";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
const AnimePlugin = loadPlugin(AnimePluginDefinition);

export const outroCombo = (selector) => new Combo(
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
             right:"-100%"
           }
          },
          props: {
           selector: ".part1",
           duration: 5000,
          },
          position: 0
        },
        {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
            left:"-100%"
           }
          },
          props: {
           selector: ".part2",
           duration: 5000,
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
           selector: ".circle3",
           duration: 700,
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
           selector: ".circle2",
           duration: 700,
          },
          position: 150
         },
         {
          incidentClass: CSSEffect,
          attrs: {
           animatedAttrs: {
             scale:1
           }
          },
          props: {
           selector: ".circle1",
           duration: 700,
          },
          position: 300
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
            opacity: 0.9,
           }
          },
          props: {
            selector: ".cta-wrapper",
            duration: 300,
          },
          position: 2500
        },
      ]
    },
    {
      selector,
    }
    );