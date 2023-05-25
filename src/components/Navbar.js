import React, { useState, useContext } from "react";
import { Button, Modal, Navbar } from "react-bootstrap";
import { CartContext } from "../CartProvider";
import { getProduct } from "../Products";
import { CurrencyRupee } from "tabler-icons-react";
{
  /*2.navbar */
}
const NavbarComponent = () => {
  {
    /*7.modal compnent creat*/
  }
  const [showCart, setShowCart] = useState(false);
  {
    /*10.creat cartcontext for using value cartprovider */
  }
  //22.final 
  const [showSuccessPage,setShowSuccessPage] = useState(false);

  const cartContext = useContext(CartContext);

  //20.using reduce method for total cart item
  const  cartProductCount = cartContext.items.reduce((accumlator, currentValue) => accumlator + currentValue.quantity,0);


  const handleShowCart = (value) => {
    setShowCart(value);
  };

  const handlePurchase = (value) => {
    setShowCart(false);
    //24.call
    cartContext.resetCart();
    setShowSuccessPage(true);
  };


  return (
    <>
      <Navbar expand={"sm"}>
        <Navbar.Brand>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={() => handleShowCart(true)}>Cart({cartProductCount} items) </Button> {/*21add cartproduct count */}
        </Navbar.Collapse>
      </Navbar>
      <Modal show={showCart} onHide={() => handleShowCart(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/*21 add cart page */}
          {cartProductCount > 0 ? 
            cartContext.items.map(item => <>
            <h3>{getProduct(item.id).name}</h3>
            <p>{cartContext.getProductQuantity(item.id)} total</p>
            <p><CurrencyRupee  />{getProduct(item.id).price * cartContext.getProductQuantity(item.id)}</p>
            <Button onClick={() => cartContext.removeFromCart(item.id) }>Remove</Button>
            <hr/>
            </>)

           : (
            <h1>There are no items in your cart!</h1>
           )
          }
          {/*using type cost method !! this remove 0 value */}
          {!!cartProductCount && (
          <>
          <h1>Total: <CurrencyRupee  />{cartContext.getTotalCost()}</h1>
          <Button variant="success" onClick={handlePurchase}>Purchase items!</Button>
          </>
          )}
        </Modal.Body>
      </Modal>
      {/*25.sucess page */}
      <Modal show={showSuccessPage} onHide={() => setShowSuccessPage(false)}>
      <Modal.Header closeButton>
          <Modal.Title>order Placed successfully</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};
export default NavbarComponent;  
