import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import Store from "./pages/Store";
import CartProvider from "./CartProvider";

{
  /*1.checking */
}
const App = () => {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent />
        <Store />
      </Container>
    </CartProvider>
  );
};

export default App;
