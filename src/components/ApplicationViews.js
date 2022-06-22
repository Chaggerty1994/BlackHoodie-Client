import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Home } from "./Home/home"
import { Cart } from "./orders/cart"
import { getUserById, getUserPayments } from "./orders/ordermanager"
import { OrderReview } from "./orders/orderReview"
import { PaymentDetails } from "./orders/paymentDetails"
import { OrderBuilder, ShippingDetails } from "./orders/orderBuilder"
import { ThankYou } from "./orders/thanks4biz"
import { Products } from "./products/allProducts"
import { CartContext } from "./products/cartContext"
import { ProductDetails } from "./products/productDetail"
import { UserAccount } from "./userAccount/user"
import { getCurrentUser, getUsers } from "./userAccount/userManager"
import { OrderDetails } from "./orders/orderDetails"
import { changeTask, getSizes } from "./products/productManager"

const cartFromStorage = JSON.parse(localStorage.getItem("cart") || "[]")

export const ApplicationViews = () => {

    

    const [currentPayment, setCurrentPayment] = useState({})
    const [currentOrder, setCurrentOrder] = useState({})
    
    const [currentUser, setCurrentUser] = useState({})
    
    const [cart, setCart] = useState(cartFromStorage)

    const [sizes, setSizes] = useState([])

    
    
   
   


    const productToCart = (product) => {
        setCart([...cart, product])
    }

 
    useEffect(
        () => {
            getCurrentUser().then(data => setCurrentUser(data))
        }, []
    )
    

    useEffect(
        () => {
            getSizes().then(data => setSizes(data))
        }, []
    )
        console.log(sizes)

  
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
            productToCart,
            currentPayment,
            setCurrentPayment,
            currentOrder,
            setCurrentOrder,
            currentUser,
            setCurrentUser,
            sizes, 
            cartFromStorage
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
                <Route exact path="/shipping">
                    <OrderBuilder />
                </Route>

                <Route exact path="/payment">
                    <PaymentDetails />
                </Route>

                <Route exact path="/orderreview">
                    <OrderReview />
                </Route>

                <Route exact path="/thankyou">
                    <ThankYou />
                </Route>

                <Route exact path="/account">
                    <UserAccount />
                </Route>

                <Route exact path="/orders/:orderId(\d+)">
                    <OrderDetails />
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
