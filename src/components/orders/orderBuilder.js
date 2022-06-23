import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { CartContext } from "../products/cartContext"
import { useHistory } from "react-router-dom";
import { createOrder } from "./ordermanager";

export const OrderBuilder = () => {

    // adding to my new order
    const history = useHistory()
    const { cart, setCart, productToCart, currentPayment, setCurrentPayment, currentOrder, setCurrentOrder, productSize  } = useContext(CartContext)

    const [newOrder, setNewOrder] = useState({
        product_size: [],
        address: "",
        userPaymentId: 0
    })

    const shipping = (event) => {
        // TODO: Complete the onChange function
        const copy = { ...newOrder }
        copy[event.target.name] = event.target.value
        setNewOrder(copy)
    }

    const orderProductSize = (event) => {
        const copy = {...newOrder}
        copy.product_size = productSize
        setNewOrder(copy)
    }

    console.log(cart)

    const paymentId = (event) => {
        const copy = {...newOrder}
        copy.userPaymentId = currentPayment.id
        setNewOrder(copy)
    }

    
    useEffect(
        () => {
            orderProductSize()
            paymentId()
        }, []
    )


    return <>
        <Box sx={{ minHeight: '70vh', mr: 15, ml: 15, mt: 8 }}>
            <Grid
                sx={{ mb: 5 }}
                container
                spacing={2}
                direction="column"
                justifyContent="center"
            >
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h4"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Shipping Information
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Full Address
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <TextField onChange={shipping} name="address" id="address" sx={{ width: "60%" }} />
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 8, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Link to="/payment">
                            <Button variant="outlined"
                                sx={{ background: "black" }}
                                onClick={(evt) => {
                                    evt.preventDefault()

                                    const order = {
                                        product_size: productSize,
                                        address: newOrder.address,
                                        userPaymentId: newOrder.userPaymentId

                                    }
                                    // Send POST request to your API
                                    createOrder(order)
                                    .then(data => {setCurrentOrder(data)})
                                        .then(() => history.push("/orderreview"))
                                        console.log(currentOrder)
                                }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}> Save & continue</Typography>
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}