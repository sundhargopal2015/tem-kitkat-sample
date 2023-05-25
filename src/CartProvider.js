import { createContext, useState } from "react";
import { getProduct } from "./Products";

//8.creat context api for cart

export const CartContext = createContext({
  items: [],
  addToOneCart: function () {},
  removeOneToCart: function () {},
  removeFromCart: function () {},
  getProductQuantity: function () {},
  getTotalCost: function () {},
  resetCart:function () {},
});

//9.write component context provider
const CartProvider = ({ children }) => {
  console.log(children);
  //11.temms use so we use that
  const [cartItems, setCartItems] = useState([]);

  //14.create get product quantity

  const getProductQuantity = (id) => {
    return cartItems.find((cartItem) => cartItem.id === id)?.quantity;
  };

  //13.copy paste
  const addToOneCart = (id) => {
    setCartItems((pre) => {
      let finalVal = [];
      //17.getproductquantitiy

      const ProductQuantity = getProductQuantity(id);

        if (ProductQuantity) {
          finalVal = pre.map((cartItem) =>
            cartItem.id === id
              ? {
                  id: id,
                  quantity: cartItem.quantity + 1,
                }
              : cartItem
          );
        
      } else {
        // add previous pre  value 1 cart open second cart also open to add
        finalVal = [...pre,
          {
            id: id,
            quantity: 1,
          },
        ];
      }

      return finalVal;
    });
  };
//18.remove one fromcart
const removeOneToCart =(id) =>{
  //19.getproductquantity 20.after again
  const ProductQuantity = getProductQuantity(id);
  if(ProductQuantity === 1){
    removeFromCart(id);
  }else{
    setCartItems(pre => pre.map(item => item.id === id ?{
      id:id,
      quantity:item.quantity-1
    }: item))
  }
}
//20 remove all item
const removeFromCart = (id) =>{
  setCartItems(cartItems.filter(item => item.id !== id));
}

//22.get total cost
 const getTotalCost = () =>{
   return cartItems.reduce((accumulator,currentValue)=>{
    const {price} = getProduct(currentValue.id);// return product details
    const quantity = getProductQuantity(currentValue.id);
    
    return accumulator + price * quantity;
   },0)
 }

 //23 final resetcart
 const resetCart = () =>{
   setCartItems([]);
 }

  //12 create obj

  const contextValue = {
    items: cartItems,
    addToOneCart: addToOneCart,
    removeOneToCart: removeOneToCart,
    removeFromCart: removeFromCart,
    getProductQuantity: getProductQuantity,
    getTotalCost: getTotalCost,
    resetCart:resetCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
