import React, { useContext } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { CurrencyRupee } from "tabler-icons-react";
import { CartContext } from "../CartProvider";

const ProductCard = ({ product }) => {
  const { id, name, price } = product;
  const { addToOneCart, removeOneToCart, removeFromCart, getProductQuantity } =
    useContext(CartContext);

  const quantity = getProductQuantity(id);

  const handleAddToCart = () => {
    addToOneCart(id);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <CurrencyRupee />
          {price}
        </Card.Text>
        {quantity && quantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm={6}>
                In cart: {quantity}
              </Form.Label>
              <Col sm={6}>
                <Button
                  sm={6}
                  className="mx-2"
                  onClick={() => addToOneCart(id)}
                >
                  +
                </Button>
                <Button
                  sm={6}
                  className="mx-2"
                  onClick={() => removeOneToCart(id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => removeFromCart(id)}
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
