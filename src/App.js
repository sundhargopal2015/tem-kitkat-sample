import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import Store from "./pages/store";
import CartProvider from "./CartProvider";

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
