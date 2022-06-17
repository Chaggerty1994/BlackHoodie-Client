import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../products/cartContext"
import { useHistory } from "react-router-dom";

export const UserAccount = () => {

   
    const { cart, setCart, productToCart, currentPayment, setCurrentPayment, currentOrder, setCurrentOrder, currentUser } = useContext(CartContext)
    return <>
        <Box sx={{ minHeight: '70vh', mr: 15, ml: 15, mt: 8, background: "grey" }}>
            <Grid
                sx={{ mb: 5 }}
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Paper sx={{minHeight: "70vh", border: 1}}>
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h4"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>User Account
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>User Name
                        </Typography>
                    </Box>
                </Grid>
                
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                {currentUser.username}
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Orders
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", direction: "row", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                      {
                          currentUser.orders.map(order => 
                              <Box sx={{mt: 2}}>
                                  <Typography variant="h6"
                                                component="div"
                                                sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                {order.created_on}
                                            </Typography>
                                  </Box>

                          )
                      }
                    </Box>
                </Grid>
                
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                {currentUser.email}
                        </Typography>
                    </Box>
                </Grid>

                <Divider sx={{ border: 1, ml: 4, mr: 80, mt: 2 }} />

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 8, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Link to="/payment">
                            <Button variant="outlined"
                                sx={{ background: "black" }}
                                onClick={() => { }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}> Save & continue</Typography>
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                </Paper>
            </Grid>
        </Box>
    </>
}