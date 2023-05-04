import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/Navbar";
import Store from "./pages/store";


const App = () => {
    return (<Container>
        <NavbarComponent />
        <Store />
    </Container>)
}

export default App;