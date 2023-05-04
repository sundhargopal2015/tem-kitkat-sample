import React from "react"
import { Button, Card } from "react-bootstrap";
import {CoinRupee} from "tabler-icons-react";


const ProductCard = ({product}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text><CoinRupee />{product.price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;