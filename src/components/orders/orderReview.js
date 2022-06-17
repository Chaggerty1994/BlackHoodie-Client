import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Grid, Typography } from "@mui/material";
import { TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { CartContext } from "../products/cartContext"
import { useHistory } from "react-router-dom";

export const OrderReview = () => {
    const history = useHistory()
    const { cart, setCart, productToCart, currentPayment, setCurrentPayment, currentOrder, setCurrentOrder } = useContext(CartContext)
    console.log(currentOrder)
    return <>
        <Box sx={{ minHeight: '70vh', mr: 15, ml: 15, mt: 4, background: "grey" }}>
            <Grid
                sx={{ mb: 5 }}
                container
                spacing={0}
                direction="row"
                justifyContent="left"
            >
                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ minHeight: '70vh', ml: 5, mr: 2, mt: 1 }}>
                        <Grid
                            container
                            spacing={0}
                            direction="row"
                            justifyContent="left"
                        >
                            <Grid xs={12} sm={12} md={12} lg={12} Item>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h3"
                                        component="div"
                                        sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                        Shipping
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} Item>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h4"
                                        component="div"
                                        sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                        {currentOrder.address}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} Item>
                                <Box sx={{ mt: 10 }}>
                                    <Typography variant="h4"
                                        component="div"
                                        sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                        Payment Method
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} Item>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h4"
                                        component="div"
                                        sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                        {/* {currentOrder.user_payment.obscured_num} */}
                                    </Typography>
                                </Box>
                            </Grid>






                            <Box sx={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "center", mt: 2 }} >
                                <Typography variant="h5"
                                    component="div"
                                    sx={{ letterSpacing: 5, flexGrow: 1 }}>

                                </Typography>
                            </Box>
                        </Grid>
                    </Box>

                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", minHeight: "70vh", direction: "row", mt: 1, ml: 3, mr: 3, justifyContent: "left", background: "yellow" }} >
                        <Grid container spacing={0} direction="row" justifyContent="left" >
                            {
                                currentOrder.products.map(prod =>
                                    <Grid xs={12} sm={12} md={12} lg={12} Item>
                                        <Box sx={{  background: "green" }}>
                                            <Typography variant="h6"
                                                component="div"
                                                sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                {prod.title}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                )
                            }

                        </Grid>

                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 4, ml: 3, justifyContent: "center", alignItems: "center" }} >
                        <Link to="/thankyou">
                            <Button variant="outlined"
                                sx={{ background: "black" }}
                                onClick={() => { }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}> Order Now</Typography>
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    </>
}