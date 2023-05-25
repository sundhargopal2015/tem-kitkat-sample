import React from "react";
import {Col, Row } from "react-bootstrap";
import { Products } from "../Products";
import ProductCard from "../components/productCard";

{/*4.page create store */}
const Store = () =>{
    return(
        <>
        <h1 className="text-center">Welcome to store</h1>
        {/*6.product to store  */}
        <Row xs={1} md={3} className="g-4 text-center">
              {Products.map((product) => <Col><ProductCard product={product} /></Col>)}
              
        </Row>
        </>
        
    )
}
export default Store;