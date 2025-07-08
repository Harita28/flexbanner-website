import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const placeOrder = async () => {
        if (cart.length === 0) return alert("Cart is empty");

        const response = await axios.post("http://localhost/flex_banner_project/php/place_order.php", {
            items: cart
        });

        if (response.data.status === "success") {
            alert("Order placed!");
            localStorage.removeItem("cart");
        }
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cart.map((item, i) => (
                <div key={i}>
                    <p><strong>{item.name}</strong> - {item.size} sq. ft - Rs {item.price}</p>
                </div>
            ))}
            <button onClick={placeOrder}>Place Order</button>
        </div>
    );
};

export default Cart;