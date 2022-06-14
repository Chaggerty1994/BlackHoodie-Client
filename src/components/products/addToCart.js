import React, { useEffect, useState } from "react";


export const AddToCart = (product) => {

    const [cart, setCart] = useState([])
    
    useEffect(
        () => {
            localStorage.setItem("cart", JSON.stringify(cart))
        }, [cart]
    )

    const productToCart = (product) => {
        setCart([...cart, product])
    }

}