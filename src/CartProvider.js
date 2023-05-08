import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addToOneCart: function () {},
  removeOneToCart: function () {},
  removeFromCart: function () {},
  getProductQauntity: function () {},
  getTotalcost: function () {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState[[{ id: 1, quantity: 1 }]];
  
  const contextValue = {
    items: cartItems,
    addToOneCart: function () {},
    removeOneToCart: function () {},
    removeFromCart: function () {},
    getProductQauntity: function () {},
    getTotalcost: function () {},
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
