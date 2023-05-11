const Products = [
  {
    id: 111,
    name: "Coffee",
    price: 20,
  },
  {
    id: 112,
    name: "Sun Glass",
    price: 300,
  },
  {
    id: 113,
    name: "Camera",
    price: 15000,
  },
  {
    id: 114,
    name: "Mobile",
    price: 10000,
  },
  {
    id: 115,
    name: "Head phones",
    price: 3000,
  },
  {
    id: 116,
    name: "Travel bag",
    price: 5000,
  },
];

export const getProduct = (id) => Products.find((product) => product.id === id);

export { Products };
