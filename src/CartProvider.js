import { createContext, useState } from "react";
import { getProduct } from "./Products";

export const CartContext = createContext({
  items: [],
  addToOneCart: function () {},
  removeOneToCart: function () {},
  removeFromCart: function () {},
  getProductQuantity: function () {},
  getTotalCost: function () {},
  resetCart: function () {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getProductQuantity = (id) => {
    // const product = cartItems.find(item => item.id === id);

    // if(product) {
    //   return product.quantity
    // } else {
    //   return 0;
    // }

    return cartItems.find((cartItem) => cartItem.id === id)?.quantity;
  };

  const addToOneCart = (id) => {
    // setCartItems((pre) => {
    //   let finalVal = [];
    //   if (pre.length) {
    //     const find = pre.find((cartItem) => cartItem.id === id);
    //     if (find) {
    //       finalVal = pre.map((cartItem) =>
    //       cartItem.id === find.id
    //           ? {
    //               id: find.id,
    //               quantity: find.quantity + 1,
    //             }
    //           : cartItem
    //       );
    //     } else {
    //       finalVal = [...pre, { id: id, quantity: 1 }];
    //     }
    //   } else {
    //     finalVal = [
    //       {
    //         id: id,
    //         quantity: 1,
    //       },
    //     ];
    //   }

    //   return finalVal;
    // });

    setCartItems((pre) => {
      let finalVal = [];
      const productQuantity = getProductQuantity(id);

      if (productQuantity) {
        finalVal = pre.map((cartItem) =>
          cartItem.id === id
            ? {
                id: id,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      } else {
        finalVal = [
          ...pre,
          {
            id: id,
            quantity: 1,
          },
        ];
      }

      return finalVal;
    });
  };

  const removeOneToCart = (id) => {
    const productQuantity = getProductQuantity(id);
    if (productQuantity === 1) {
      removeFromCart(id);
    } else {
      setCartItems((pre) =>
        pre.map((item) =>
          item.id === id
            ? {
                id: id,
                quantity: item.quantity - 1,
              }
            : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems((pre) => pre.filter((item) => item.id !== id));
  };

  const getTotalCost = () => {
    return cartItems.reduce((accumulator, currentValue) => {
      const { price } = getProduct(currentValue.id);
      const quantity = getProductQuantity(currentValue.id);

      return accumulator + price * quantity;
    }, 0);
  };

  const resetCart = () => {
    setCartItems([]);
  };

  const contextValue = {
    items: cartItems,
    addToOneCart: addToOneCart,
    removeOneToCart: removeOneToCart,
    removeFromCart: removeFromCart,
    getProductQuantity: getProductQuantity,
    getTotalCost: getTotalCost,
    resetCart: resetCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
