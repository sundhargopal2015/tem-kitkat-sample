import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addToOneCart: function () {},
  removeOneToCart: function () {},
  removeFromCart: function () {},
  getProductQuantity: function () {},
  getTotalCost: function () {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToOneCart = (id) => {
    setCartItems((pre) => {
      let finalVal = [];
      if (pre.length) {
        const find = pre.find((cartItem) => cartItem.id === id);
        if (find) {
          finalVal = pre.map((cartItem) =>
          cartItem.id === find.id
              ? {
                  id: find.id,
                  quantity: find.quantity + 1,
                }
              : cartItem
          );
        } else {
          finalVal = [...pre, { id: id, quantity: 1 }];
        }
      } else {
        finalVal = [
          {
            id: id,
            quantity: 1,
          },
        ];
      }

      return finalVal;
    });
  };

  const contextValue = {
    items: cartItems,
    addToOneCart: addToOneCart,
    removeOneToCart: function () {},
    removeFromCart: function () {},
    getProductQuantity: function () {},
    getTotalCost: function () {},
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
