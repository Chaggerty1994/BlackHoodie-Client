import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Grid, Typography } from "@mui/material";
import { TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { CartContext } from "../products/cartContext"
import { useHistory } from "react-router-dom";

export const OrderReview = () => {
    const history = useHistory()
    const { cart, setCart, productToCart, currentPayment, setCurrentPayment, currentOrder, setCurrentOrder  } = useContext(CartContext)
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
                    <Box sx={{ display: "flex", mt: 1, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h4"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Review Order
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 1, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Shipping
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 1, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography>
                            {currentOrder.address}
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 1, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Payment Method
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 1, ml: 3, justifyContent: "left", alignItems: "center" }} >
                    <Typography>
                            CARD NUMBER
                    </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 1, ml: 3, mr: 3, minHeight: "15vh", justifyContent: "left", alignItems: "center" }} >
                    <Typography>
                            Oder Products
                    </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 8, ml: 3, justifyContent: "center", alignItems: "center" }} >
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