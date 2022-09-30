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
