import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CoinRupee } from "tabler-icons-react";
import { CartContext } from "../CartProvider";

const ProductCard = ({ product }) => {
  const cartContext = useContext(CartContext);

  const handleAddToCart = () => {
    cartContext.addToOneCart(product.id);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <CoinRupee />
          {product.price}
        </Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          {cartContext.items.find((val) => val.id === product.id)
            ? "+"
            : "Add to cart"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
