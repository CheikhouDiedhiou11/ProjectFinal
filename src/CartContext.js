import { createContext, useState } from "react";
import { produitsArray, getProduitData } from "./produitstore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProduit, setCartProduit] = useState([]);
    
    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

    function getProduitQuantity(id) {
        const quantity = cartProduit.find(produit => produit.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProduitQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProduit(
                [
                    ...cartProduit,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    
            setCartProduit(
                cartProduit.map(
                    produit =>
                    produit.id === id                                
                    ? { ...produit, quantity: produit.quantity + 1 } 
                    : produit                                        
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProduitQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProduit(
                cartProduit.map(
                    produit =>
                    produit.id === id                               
                    ? { ...produit, quantity: produit.quantity - 1 } 
                    : produit                                        
                )
            )
        }
    }

    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProduit(
            cartProduit =>
            cartProduit.filter(currentProduit => {
                return currentProduit.id != id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProduit.map((cartItem) => {
            const produitData = getProduitData(cartItem.id);
            totalCost += (produitData.prix * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProduit,
        getProduitQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
