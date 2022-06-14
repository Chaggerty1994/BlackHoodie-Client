import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Home } from "./Home/home"
import { Cart } from "./orders/cart"
import { Products } from "./products/allProducts"
import { CartContext } from "./products/cartContext"
import { ProductDetails } from "./products/productDetail"

const cartFromStorage = JSON.parse(localStorage.getItem("cart") || "[]" )

export const ApplicationViews = () => {

    const [cart, setCart] = useState(cartFromStorage)
    
    

    const productToCart = (product) => {
        setCart([...cart, product])
    }

    useEffect(
        () => {
            localStorage.setItem("cart", JSON.stringify(cart))
        }, [cart]
    )
    console.log(cart)
    return <>
            <CartContext.Provider value={{
                    cart,
                    setCart,
                    productToCart
            }}>

        <main>
            <Route exact path="/home">
                <Home />
            </Route>

            <Route exact path="/products/:productId(\d+)">
                <ProductDetails />
            </Route>

            <Route exact path="/products">
                <Products />
            </Route>

            <Route exact path="/cart">
                <Cart />
            </Route>


            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>
        </main>

        </CartContext.Provider>
    </>
}
