import React, { useState, useContext } from "react";
import { Button, Modal, Navbar } from "react-bootstrap";
import { CartContext } from "../CartProvider";
import { CurrencyRupee } from "tabler-icons-react";
import CartProduct from "./CartProduct";

const NavbarComponent = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  const { items, resetCart, getTotalCost } = useContext(CartContext);

  const cartProductCount = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  const handleShowCart = () => {
    setShowCart((pre) => !pre);
  };

  const handlePurchase = () => {
    setShowCart(false);
    resetCart();
    setShowSuccessPage(true);
  };

  return (
    <>
      <Navbar expand={"sm"}>
        <Navbar.Brand>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShowCart}>
            Cart({cartProductCount} items)
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={showCart} onHide={handleShowCart}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartProductCount > 0 ? (
            <>
              {items.map((item) => (
                <CartProduct cartItem={item} />
              ))}
              <h1>
                Total: <CurrencyRupee height={45} width={45} /> {getTotalCost()}
              </h1>
              <Button variant="success" onClick={handlePurchase}>
                Purchase items!
              </Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
      <Modal show={showSuccessPage} onHide={() => setShowSuccessPage(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order placed successfully</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};
export default NavbarComponent;
