import { Box, Button, Card, Divider, Grid, Paper, Typography } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../products/cartContext"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


export const Cart = () => {




    const [currentOrderProduct, setCurrentOrderProduct] = useState({})




    const { cart, setCart, productToCart } = useContext(CartContext)
    console.log(cart)
    return <>
        <Box sx={{ display: "flex", minHeight: '70vh', mr: 15, ml: 15, mt: 4 }}>
            <Grid sx={{ mb: 2 }} container direction="row" spacing={0}>

                <Grid xs={12} sm={9} md={6} lg={9} item>
                    <Box sx={{ display: "flex", mt: 4 }}>
                        <Typography variant="h3"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>
                            My Cart
                        </Typography>
                    </Box>
                    <Paper sx={{ display: "flex", minHeight: "63vh", maxHeight: "63vh", overflow: "auto", mt: 0, background: "yellow" }}>
                        <Grid container direction="column" spacing={0}>
                            {
                                cart.map(cartItem => (
                                    <>
                                        <Card sx={{ display: "flex", direction: "row", height: "20vh",width: "99%",  mb: 1, border: 1 }}>
                                            {/* <CardMedia
                                                component="img"
                                                height="100"
                                                image={`http://localhost:8000${cartItem.image_path}`}
                                                alt="shirt"
                                            /> */}
                                            <Box sx={{mr: 2, ml: 2, mt: 2, mb: 2 }} component="img" src={`http://localhost:8000${cartItem.image_path}`} />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {cartItem.title}
                                                </Typography>
                                                <Typography >
                                                   $ {cartItem.price}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>



                                    </>

                                ))
                            }
                        </Grid>
                    </Paper>


                </Grid>


                <Grid xs={12} sm={3} md={3} lg={3} item>
                    <Box sx={{ display: "flex", minHeight: '70vh', mt: 4, background: "green" }}>






                    </Box>
                </Grid>
            </Grid>
        </Box>

    </>
}