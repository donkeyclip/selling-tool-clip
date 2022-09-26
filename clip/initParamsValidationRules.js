export default {
  stylesheet:{
    label: "Style Sheet",
    type: "object",
    props: {
      backgroundColor: { type: "color" },
      fontColor: { type: "color" },
      imageBackgroundColor: { type: "color" },
      primaryColor: { type: "color" },
    }
  },
  company:{
    label: "Company",
    type: "object",
    props: {
      name: { type: "string" },
      quote: { type: "string" },
    }
  },
  products:{
    label: "Products",
    type: "array",
    items:{
      type:"object",
      props: {
        image: { type: "string"},
        name: { type: "string" },
        description: { type: "string" },
        price: { type: "string" },
      }
    }
  },
};
