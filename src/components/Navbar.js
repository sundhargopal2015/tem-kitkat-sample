import React, { useState, useContext } from "react";
import { Button, Modal, Navbar } from "react-bootstrap";
import { CartContext } from "../CartProvider";

const NavbarComponent = () => {
  const [showCart, setShowCart] = useState(false);
  const cartContext = useContext(CartContext);
  console.log(cartContext.items);
  const handleShowCart = (value) => {
    setShowCart(value);
  };
  return (
    <>
      <Navbar expand={"sm"}>
        <Navbar.Brand>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={() => handleShowCart(true)}>Cart(0 items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={showCart} onHide={() => handleShowCart(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>There are no items in your cart!</h1>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default NavbarComponent;
