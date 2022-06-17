import { Box, Button, Card, Divider, Grid, IconButton, Paper, TextField, Typography } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../products/cartContext"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";


export const Cart = () => {

    const [orderPrice, setOrderPrice] = useState(0)
    const [orderTax, setOrderTax] = useState(0)
    const [orderShipping, setOrderShipping] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)
    console.log(localStorage.getItem("auth_token"))

    const handlePrice = () => {
        let total = 0;
        const price = cart.map((item) => { total += item.price });
        setOrderPrice(total)
    }

    const handleTax = () => {
        let tax = (orderPrice * 4) / 100;
        setOrderTax(tax)

        console.log(orderTax)
    }

    const handleShipping = () => {
        let shipping = (orderPrice * 10) / 100;
        setOrderShipping(shipping)

        console.log(orderTax)
    }

    const handleGrandTotal = () => {
        let grandTotal = (orderPrice + orderTax + orderShipping)
        setGrandTotal(grandTotal)
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => (item.id !== id))
        setCart(arr)
        handlePrice()
    }

    useEffect(() => { handlePrice() })
    useEffect(() => { handleTax() })
    useEffect(() => { handleShipping() })
    useEffect(() => { handleGrandTotal() })

    console.log(orderPrice)




    const { cart, setCart, productToCart } = useContext(CartContext)
    console.log(cart)
    return <>
        <Box sx={{ display: "flex", minHeight: '70vh', mr: 10, ml: 10, mt: 4 }}>
            <Grid sx={{ mb: 2 }} container direction="row" spacing={0}>

                <Grid xs={12} sm={9} md={6} lg={9} item>
                    <Box sx={{ display: "flex", mb: 3 }}>
                        <Typography variant="h3"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>
                            My Cart
                        </Typography>
                    </Box>
                    <Paper elevation={10} sx={{ display: "flex", minHeight: "63vh", maxHeight: "63vh", overflow: "auto", mt: 0, mr: 2 }}>
                        <Grid container direction="row" spacing={0}>
                            {
                                cart.map(cartItem => (
                                    <>
                                        <Card sx={{ display: "flex", direction: "row", height: "20vh", width: "99%", mb: 1, border: 1, flexGrow: 1 }}>

                                            <Box sx={{ mr: 2, ml: 2, mt: 2, mb: 2, }} component="img" src={`http://localhost:8000${cartItem.image_path}`} />
                                            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h4" component="div" sx={{ letterSpacing: 5 }}>
                                                        {cartItem.title}
                                                    </Typography>
                                                    <Typography variant="h5" sx={{ letterSpacing: 5 }}>
                                                        $ {cartItem.price}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>

                                                    <Box sx={{ display: "flex", direction: "row", justifyContent: "right", alignItems: "center" }}>
                                                        <Button variant="outlined"
                                                            sx={{ background: "black", mr: 4 }}
                                                            onClick={() => { handleRemove(cartItem.id) }}>
                                                            <Typography sx={{ letterSpacing: 5, color: "white" }}> Remove </Typography>
                                                        </Button>

                                                    </Box>
                                                </CardActions>
                                            </Box>
                                        </Card>
                                    </>
                                ))
                            }
                        </Grid>
                    </Paper>


                </Grid>


                <Grid xs={12} sm={3} md={3} lg={3} item>
                    <Box sx={{ display: "flex", minHeight: '41.5vh', mt: 10 }}>
                        <Grid sx={{ mb: 2 }} container direction="row" spacing={0}>
                            <Grid xs={12} sm={12} md={12} lg={12} item>
                                <Paper elevation={15} sx={{ width: "100%", mt: 0, mr: 2, border: 1 }}>
                                    <Box sx={{ display: "flex", direction: "column", minHeight: '41.5vh', margin: 1 }}>
                                        <Grid xs={12} sm={12} md={12} lg={12} item>
                                            <Box sx={{ display: "flex", direction: "row", mt: 2, mr: 1, ml: 1, justifyContent: "space-between" }}>
                                                <Typography variant="h5"
                                                    component="div"
                                                    sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                    Sub Total
                                                </Typography>
                                                <Typography variant="h5"
                                                    component="div"
                                                    sx={{ letterSpacing: 5 }}>
                                                    {orderPrice}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", direction: "row", mt: 2, mr: 1, ml: 1, justifyContent: "space-between" }}>
                                                <Typography variant="h5"
                                                    component="div"
                                                    sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                    Tax
                                                </Typography>
                                                <Typography variant="h5"
                                                    component="div"
                                                    sx={{ letterSpacing: 5 }}>
                                                    {orderTax}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", direction: "row", mt: 2, mr: 1, ml: 1, justifyContent: "space-between" }}>
                                                <Typography variant="h5"
                                                    component="div"
                                                    sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                    Shipping
                                                </Typography>
                                                <Typography variant="h5"
                                                    component="div"
                                                    sx={{ letterSpacing: 5 }}>
                                                    {orderShipping}
                                                </Typography>
                                            </Box>
                                            <Divider sx={{ border: 1, mt: 2 }} />
                                            <Box sx={{ display: "flex", direction: "row", mt: 2, mr: 1, ml: 1, justifyContent: "space-between" }}>
                                                <Typography variant="h5"
                                                    component="div"
                                                    sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                                    Grand Total
                                                </Typography>
                                                <Typography variant="h5"
                                                    component="div"
                                                    sx={{ letterSpacing: 5 }}>
                                                    {grandTotal}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", direction: "row", mt: 4, mr: 1, ml: 1, justifyContent: "center" }}>
                                                {
                                                    localStorage.getItem("auth_token") ?
                                                        <Link to="/payment">
                                                            <Button variant="outlined" sx={{ background: "black" }}>
                                                                <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                                                    Complete Order
                                                                </Typography>
                                                            </Button>
                                                        </Link>
                                                        :
                                                        
                                                        <Link to="/login">
                                                            <Button variant="outlined" sx={{ background: "black" }}>
                                                                <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                                                    Complete Order
                                                                </Typography>
                                                            </Button>
                                                        </Link>
                                                }
                                            </Box>
                                        </Grid>

                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>



                    </Box>
                </Grid>
            </Grid>
        </Box>

    </>
}