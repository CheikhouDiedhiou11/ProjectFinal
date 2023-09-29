import {Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../CartContext';


function ProduitCard(props) {
    const produit = props.produit;
    const imageSize = { width: '200px', height: '200px' }; 
    const Cart = useContext(CartContext);
    const produitQuantity = Cart.getProduitQuantity(produit.id)
    console.log(Cart.item);

   
    return (
        <>
       <Card>
                    <Card.Img src={produit.image} alt={produit.titre}  style={imageSize} />
            <Card.Body>
                    <Card.Title>{produit.titre}</Card.Title>
                    <Card.Text>{produit.prix}$</Card.Text>
                    {produitQuantity > 0 ? 
                    <>
                     <Form as={Row}>
                            <Form.Label column="true" sm="6">Dans le panier: {produitQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => Cart.addOneToCart(produit.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => Cart.removeOneFromCart(produit.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => Cart.deleteFromCart(produit.id)} className="my-2">retirer du pani</Button>
                    </>
                    :
                
                
                    <Button variant='primary' onClick={() => Cart.addOneToCart(produit.id)}>Ajouter au panier</Button>
                    }
                    
            </Card.Body>
       </Card>
       </>
    );
}

export default ProduitCard;