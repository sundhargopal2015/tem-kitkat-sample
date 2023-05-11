import { useContext } from "react";
import { CartContext } from "../CartProvider";
import { getProduct } from "../Products";
import { CurrencyRupee } from "tabler-icons-react";
import { Button } from "react-bootstrap";

const CartProduct = ({ cartItem }) => {
  const { id } = cartItem;
  const { getProductQuantity, removeFromCart } = useContext(CartContext);

  return (
    <>
      <h3>{getProduct(id).name}</h3>
      <p>{getProductQuantity(id)} total</p>
      <p>
        <CurrencyRupee />
        {getProduct(id).price * getProductQuantity(id)}
      </p>
      <Button onClick={() => removeFromCart(id)}>Remove</Button>
      <hr />
    </>
  );
};

export default CartProduct;
