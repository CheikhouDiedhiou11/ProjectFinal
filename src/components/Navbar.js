import { Button, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduit from './CartProduit';

function NavbarComponent() {
    const cart = useContext(CartContext);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:3000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items })
        })
        .then((response) => response.json())
        .then((response) => {
            if (response.url) {
                window.location.assign(response.url); // Redirige l'utilisateur vers Stripe
            }
        });
    }

    const produitCount = cart.items.reduce((sum, produit) => sum + produit.quantity, 0);

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button onClick={handleShow}>Panier ({produitCount} Articles)</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Panier d'achat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {produitCount > 0 ?
                        <>
                            <p>Articles dans votre panier:</p>
                            {cart.items.map((currentProduit, idx) => (
                                <CartProduit key={idx} id={currentProduit.id} quantity={currentProduit.quantity}></CartProduit>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Acheter les articles!
                            </Button>
                        </>
                        :
                        <h1>Il n'y a pas d'articles dans votre panier!</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;
