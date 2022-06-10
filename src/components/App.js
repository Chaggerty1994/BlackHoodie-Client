import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"



// set up independant route for navbar and application

export const App = () => (
    <>
        {/* <Route render={() => {
            if (localStorage.getItem("auth_token")) {
                return <>

                </>
            } else {
                return <Redirect to="/home" />
            }
        }} /> */}

        <Route>
            <NavBar />
            <ApplicationViews />
        </Route>

     

    </>
)
