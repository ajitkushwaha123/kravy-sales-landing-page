import { useState } from "react";

export function useCart() {
    const [items, setItems] = useState([]);
    
    return {
        items,
        addToCart: (item) => setItems([...items, item]),
        updateQuantity: (id, qty) => {},
        removeFromCart: (id) => {},
        incrementQuantity: (id) => {},
        decrementQuantity: (id) => {},
        clearCart: () => setItems([])
    };
}
