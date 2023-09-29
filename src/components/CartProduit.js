import React from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProduitData } from "../produitstore";

function CartProduit(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const produitData = getProduitData(id);

    return (
        <>
            <h3>{produitData.title}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * produitData.prix).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Supprimer</Button>
            <hr></hr>
        </>
    )
}

export default CartProduit;