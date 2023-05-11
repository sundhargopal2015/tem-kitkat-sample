import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartProvider from "./CartProvider";
import ErrorBoundary from "./ErrorBoundary";
import { Home } from "tabler-icons-react";
import { Container } from "react-bootstrap";
import Router from "./Router";

const App = () => {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Container>
          <Router />
        </Container>
      </CartProvider>
    </ErrorBoundary>
  );
};

export default App;
