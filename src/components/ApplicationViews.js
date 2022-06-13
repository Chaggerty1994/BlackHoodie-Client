import React from "react"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Home } from "./Home/home"
import { ProductDetails } from "./products/productDetail"

export const ApplicationViews = () => {
    return <>
        <main>

            <Route exact path="/home">
                <Home />
            </Route>

            <Route exact path="/products/:productId(\d+)">
                <ProductDetails />
            </Route>


            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>
        </main>
    </>
}
