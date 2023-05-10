import React, { useContext } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { CoinRupee } from "tabler-icons-react";
import { CartContext } from "../CartProvider";

const ProductCard = ({ product }) => {
  const cartContext = useContext(CartContext);

  const quantity = cartContext.getProductQuantity(product.id);

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
        {quantity && quantity > 0 ? (
          <>
            <Row>
              <Col>In cart: {quantity}</Col>
              <Col>
                <Button onClick={() => cartContext.addToOneCart(product.id)}>
                  +
                </Button>
              </Col>
              <Col>
                <Button onClick={() => cartContext.removeOneToCart(product.id)}>
                  -
                </Button>
              </Col>
            </Row>
            <Button
              variant="danger"
              onClick={() => cartContext.removeFromCart(product.id)}
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Button variant="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
