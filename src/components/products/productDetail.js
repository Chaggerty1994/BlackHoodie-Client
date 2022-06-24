import { Alert, Button, Card, Divider, Grid, IconButton, Snackbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { changeProduct, getProductById } from "./productManager"
import HomeIcon from '@mui/icons-material/Home';
import { CartContext } from "./cartContext";


export const ProductDetails = () => {

    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedSize, setSelectedSize] = useState({})

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const { productId } = useParams()

    useEffect(
        () => {
            getProductById(productId).then((data) => { setSelectedProduct(data) })
        }, []
    )
    console.log(selectedProduct)




    const { cart, setCart, productToCart, sizes, productSize, setProductSize, handleProductSize } = useContext(CartContext)
    console.log(productSize)
    return <>
       
        <Box sx={{ display: "flex", minHeight: '70vh', mr: 10, ml: 10, mt: 4 }}>
        <Snackbar open={open} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} 
        autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Added 2 Cart!
            </Alert>
        </Snackbar>
            <Grid sx={{ mb: 5 }} container direction="row" spacing={0}>

                <Grid item>

                    <Box component="img"
                        elevation={15}
                        sx={{ minHeight: '70vh', ml: 13, mt: 4 }}
                        src={`http://localhost:8000${selectedProduct.image_path}`} />

                </Grid>

                <Grid xs={12} sm={6} md={6} lg={6} item>
                    <Box sx={{ minHeight: '70vh', ml: 5, mr: 2, mt: 4 }}>
                        <Typography variant="h3"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>
                            {selectedProduct.title}
                        </Typography>

                        <Typography variant="h4"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1, mt: 2 }}>
                            $ {selectedProduct.price}
                        </Typography>

                        <Box sx={{ mr: 5, display: "flex", gap: 1, alignItems: "center", mt: 8 }} >
                            <Typography variant="h4"
                                component="div"
                                sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                SIZE:
                            </Typography>

                            {
                                sizes.map(size => (
                                    <Button variant="outlined" value={size.id} sx={{ background: selectedSize !== size ? "black" : "white" }} onClick={(evt) => { setSelectedSize(size) }}>
                                        <Typography sx={{ letterSpacing: 5, color: selectedSize !== size ? "white" : "black" }}>
                                            {size.size}
                                        </Typography>
                                    </Button>
                                ))
                            }




                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "left", gap: 5, alignItems: "center", mt: 8 }} >


                            <Button variant="outlined" sx={{ background: "black" }}>
                                <Typography onClick={() => {
                                    handleProductSize(selectedProduct, selectedSize)
                                    handleClick()
                                }} sx={{ letterSpacing: 5, color: "white" }}>
                                    Add 2 Cart
                                </Typography>
                            </Button>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "center", mt: 8 }} >
                            <Typography variant="h4"
                                component="div"
                                sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                Description:
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "center", gap: 10, alignItems: "center", mt: 2 }} >
                            <Typography variant="h5"
                                component="div"
                                sx={{ letterSpacing: 5, flexGrow: 1 }}>
                                All of our hoodies are responsibly sourced and made in the USA
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    </>

}