import { Box, Button, Card, Divider, Grid, Paper, TextField, Typography } from "@mui/material"
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


    const handlePrice = () => {
        let total = 0;
        const price = cart.map((item) => { total += item.price });
        setOrderPrice(total)
    }

    const handleTax = () => {
        let tax = (orderPrice * 10) / 100;
        setOrderTax(tax)
        setOrderShipping(tax)
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
                    <Paper sx={{ display: "flex", minHeight: "63vh", maxHeight: "63vh", overflow: "auto", mt: 0, mr: 2 }}>
                        <Grid container direction="row" spacing={0}>
                            {
                                cart.map(cartItem => (
                                    <>
                                        <Card sx={{ display: "flex", direction: "row", height: "20vh", width: "99%", mb: 1, border: 1, flexGrow: 1 }}>

                                            <Box sx={{ mr: 2, ml: 2, mt: 2, mb: 2, }} component="img" src={`http://localhost:8000${cartItem.image_path}`} />
                                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                                                            sx={{ background: "black" }}
                                                            onClick={() => {handleRemove(cartItem.id)}}>
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
                        <Paper sx={{ display: "flex", width: "100%", mt: 0, mr: 2, border: 1 }}>
                            <Box sx={{ ml: 1, mr: 1 }}>
                                <Grid
                                    sx={{}}
                                    container
                                    spacing={2}
                                    direction="column"
                                    alignItems="left"
                                    justifyContent="center"
                                >
                                    <Box sx={{ display: "flex", direction: "column", justifyContent: "space-between", mt: 3, ml: 2, mr: 2, background: "yellow" }}>
                                        <Typography variant="h5"
                                            component="div"
                                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Sub Total - </Typography>
                                        <Box sx={{ display: "flex", direction: "row", alignItems: "right", background: "yellow" }}>
                                            <Typography variant="h5"
                                                component="div"
                                                sx={{ letterSpacing: 5, flexGrow: 1, }}>{orderPrice}</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", direction: "row", mt: 3, ml: 2, background: "yellow" }}>
                                        <Typography variant="h5"
                                            component="div"
                                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Tax - </Typography>
                                        <Typography variant="h5"
                                            component="div"
                                            sx={{ letterSpacing: 5, flexGrow: 1 }}>{orderTax}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", direction: "row", mt: 3, ml: 2, background: "yellow" }}>
                                        <Typography variant="h5"
                                            component="div"
                                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Shipping - </Typography>
                                        <Typography variant="h5"
                                            component="div"
                                            sx={{ letterSpacing: 5, flexGrow: 1 }}>{orderShipping}</Typography>
                                    </Box>
                                    <Divider sx={{ ml: 4, mt: 3, border: 1 }} />
                                    <Box sx={{ display: "flex", direction: "row", mt: 3, ml: 2 }}>
                                        <Typography variant="h5"
                                            component="div"
                                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Total -</Typography>
                                        <Typography variant="h5"
                                            component="div"
                                            sx={{ letterSpacing: 5, flexGrow: 1 }}>{grandTotal}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", direction: "row", justifyContent: "center", mt: 3, ml: 5 }}>
                                    <Link to="/shipping">
                                        <Button variant="outlined"
                                            sx={{ background: "black" }}
                                            >
                                            <Typography sx={{ letterSpacing: 5, color: "white" }}> Checkout </Typography>
                                        </Button>
                                    </Link>
                                    </Box>
                                </Grid>
                            </Box>
                        </Paper>





                    </Box>
                </Grid>
            </Grid>
        </Box>

    </>
}