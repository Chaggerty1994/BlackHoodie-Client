import React from "react"
import { Route } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Home } from "./Home/home"

export const ApplicationViews = () => {
    return <>
        <main>

            <Route exact path="/home">
                <Home />
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
