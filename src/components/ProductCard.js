import React, { useContext } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { CurrencyRupee } from "tabler-icons-react";
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
          <CurrencyRupee />
          {product.price}
        </Card.Text>
        {quantity && quantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm={6}>In cart: {quantity}</Form.Label>
              <Col sm={6}>
                <Button sm={6} className="mx-2" onClick={() => cartContext.addToOneCart(product.id)}>
                  +
                </Button>
                <Button sm={6} className="mx-2" onClick={() => cartContext.removeOneToCart(product.id)}>
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cartContext.removeFromCart(product.id)}
              className="my-2"
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
