import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Grid, Typography } from "@mui/material";
import { TextField } from '@mui/material';
import { Link } from "react-router-dom";
import { createPaymentType } from "./ordermanager";
import { useHistory } from "react-router-dom";
import { CartContext } from "../products/cartContext";

export const PaymentDetails = () => {

   
    const history = useHistory()
    // create User Payment
    const [userPayment, setUserPayment] = useState({
        cardNumber: "",
        expDate: ""
    })

    const payment = (event) => {
        // TODO: Complete the onChange function
        const copy = { ...userPayment }
        copy[event.target.name] = event.target.value
        setUserPayment(copy)
    }

    const { cart, setCart, productToCart, currentPayment, setCurrentPayment } = useContext(CartContext)
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
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Payment Information
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Card Number
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <TextField id="address" onChange={payment} name="cardNumber" value={userPayment.card_number} sx={{ width: "60%" }} />
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Exp Date
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <TextField id="address" onChange={payment} name="expDate" value={userPayment.exp_date} sx={{ width: "60%" }} />
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 8, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        
                            <Button href="/orderreview" variant="outlined"
                                sx={{ background: "black" }}
                                onClick={(evt) => {
                                    evt.preventDefault()

                                    const payment = {
                                        cardNumber: userPayment.cardNumber,
                                        expDate: userPayment.expDate,
                                        
                                    }
                                    // Send POST request to your API
                                    createPaymentType(payment)
                                    .then(data => {setCurrentPayment(data)})
                                    
                                        .then(() => history.push("/shipping"))
                                }
                                }>
                            <Typography sx={{ letterSpacing: 5, color: "white" }}> save & continue</Typography>
                        </Button>
                   
                </Box>
            </Grid>
        </Grid>
    </Box>
    </>
}