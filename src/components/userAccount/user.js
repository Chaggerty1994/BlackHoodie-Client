import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../products/cartContext"
import { useHistory } from "react-router-dom";
import { getCurrentUser } from "./userManager";

export const UserAccount = () => {

   
    useEffect(
        () => {
            getCurrentUser().then(data => setCurrentUser(data))
        }, []
    )

    const { cart, setCart, productToCart, currentPayment, setCurrentPayment, currentOrder, setCurrentOrder, currentUser, setCurrentUser } = useContext(CartContext)
    return <>
        <Box sx={{ minHeight: '70vh', mr: 15, ml: 15, mt: 8 }}>
            <Grid
                sx={{ mb: 5 }}
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Paper sx={{ minHeight: "70vh", maxHeight: "70vh", overflow: "auto", border: 1 }}>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Box sx={{ display: "flex", mt: 2, ml: 3, textAlign: "center", alignItems: "center" }} >
                            <Typography variant="h4"
                                component="div"
                                sx={{ letterSpacing: 5, flexGrow: 1 }}>Order History
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid xs={12} sm={12} md={12} lg={12} item>

                        {
                            currentUser.orders?.map(order =>
                                <Box sx={{ mt: 2, ml: 3 }}>
                                    <Link to={`/orders/${order.id}`}>
                                        <Typography variant="h4"
                                            component="div"
                                            sx={{ letterSpacing: 5, flexGrow: 1, color: "black" }}>
                                            {order.date}
                                        </Typography>
                                    </Link>
                                </Box>
                            ) 

                        }

                    </Grid>



                    <Divider sx={{ border: 1, ml: 4, mr: 80, mt: 2 }} />


                </Paper>
            </Grid>
        </Box>
    </>
}