{/*3.product add */}
const Products = [
    {
        id:11,
        name:"Cofee",
        price:10
    },
    {
        id:12,
        name:"Sun Glass",
        price:20
    },
    {
        id:13,
        name:"Camera",
        price:15000
    },
    {
        id:14,
        name:"Mobile",
        price:10000
    },
    {
        id:15,
        name:"Head Phones",
        price:3000
    },
    {
        id:16,
        name:"Travel Bag",
        price:5000
    },
];

export const getProduct = (id) => {
    return Products.find(product => product.id === id);
}
export {Products};