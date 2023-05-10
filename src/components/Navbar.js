import React, { useState, useContext } from "react";
import { Button, Modal, Navbar } from "react-bootstrap";
import { CartContext } from "../CartProvider";
import { CurrencyRupee } from "tabler-icons-react";
import { getProduct } from "../Products";

const NavbarComponent = () => {
  const [showCart, setShowCart] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  const cartContext = useContext(CartContext);

  const cartProductCount = cartContext.items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  const handleShowCart = (value) => {
    setShowCart(value);
  };

  const handlePurchase = () => {
    setShowCart(false);
    cartContext.resetCart();
    setShowSuccessPage(true);
  };
  return (
    <>
      <Navbar expand={"sm"}>
        <Navbar.Brand>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={() => handleShowCart(true)}>
            Cart({cartProductCount} items)
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={showCart} onHide={() => handleShowCart(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartProductCount > 0 ? (
            cartContext.items.map((item) => (
              <>
                <h3>{getProduct(item.id).name}</h3>
                <p>{cartContext.getProductQuantity(item.id)} total</p>
                <p>
                  <CurrencyRupee />
                  {getProduct(item.id).price *
                    cartContext.getProductQuantity(item.id)}
                </p>
                <Button onClick={() => cartContext.removeFromCart(item.id)}>
                  Remove
                </Button>
                <hr />
              </>
            ))
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
          {!!cartProductCount && (
            <>
              <h1>
                Total: <CurrencyRupee height={45} width={45}/> {cartContext.getTotalCost()}
              </h1>
              <Button variant="success" onClick={handlePurchase}>
                Purchase items!
              </Button>
            </>
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
