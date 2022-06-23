import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../products/cartContext"
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getOrderById } from "./ordermanager";


export const OrderDetails = () => {

    const [selectedOrder, setSelectedOrder] = useState({})
    const { orderId } = useParams()
   
    useEffect(
        () => {
            getOrderById(orderId).then((data) => { setSelectedOrder(data) })
        }, []
    )



    console.log(selectedOrder)

    const { cart, setCart, productToCart, currentPayment, setCurrentPayment, currentOrder, setCurrentOrder, currentUser } = useContext(CartContext)
    return <>
         <Box sx={{ minHeight: '70vh', mr: 15, ml: 15, mt: 4 }}>
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
                                    <Typography variant="h6"
                                        component="div"
                                        sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                        {selectedOrder.address}
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
                                    <Typography variant="h6"
                                        component="div"
                                        sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                        {selectedOrder.user_payment?.obscured_num}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid xs={12} sm={12} md={12} lg={12} Item>
                                <Box sx={{ mt: 10 }}>
                                    <Typography variant="h4"
                                        component="div"
                                        sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                        Exp Date
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} md={12} lg={12} Item>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h6"
                                        component="div"
                                        sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                        {selectedOrder.user_payment?.exp_date}
                                    </Typography>
                                </Box>
                            </Grid>






                            
                        </Grid>
                    </Box>

                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", minHeight: "70vh", direction: "row", mt: 1, ml: 3, mr: 3, justifyContent: "left" }} >
                        <Grid container spacing={0} direction="row" justifyContent="left" >

                            <Grid xs={12} sm={12} md={12} lg={12} Item>
                                <Typography variant="h3"
                                    component="div"
                                    sx={{ letterSpacing: 5, mt: 2, flexGrow: 1 }}>
                                    Order Summary
                                </Typography>
                                {
                                    selectedOrder.product_size?.map(prod =>

                                        <Box sx={{ mt: 2, display: "flex", direction: "row" }}>
                                            <Typography variant="h6"
                                                component="div"
                                                sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                {prod.product?.title}
                                            </Typography>
                                            <Box sx={{display: "flex", direction: "row", minWidth: "20vw", justifyContent: "space-between"}}>
                                            <Typography variant="h6"
                                                component="div"
                                                sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                Size:
                                            </Typography>
                                            <Typography variant="h6"
                                                component="div"
                                                sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                {prod.size?.size}
                                            </Typography>
                                            </Box>
                                        </Box>

                                    )
                                }
                                <Box sx={{ display: "flex", direction: "row", mt: 5, mr: 20, justifyContent: "space-between" }}>
                                            <Typography variant="h6"
                                                component="div"
                                                sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                Order Total
                                            </Typography>
                                            <Typography variant="h6"
                                                component="div"
                                                sx={{ letterSpacing: 5}}>
                                               $ {selectedOrder.total}
                                            </Typography>
                                </Box>
                            </Grid>

                        </Grid>

                    </Box>
                </Grid>

               
            </Grid>

        </Box>
    </>
}