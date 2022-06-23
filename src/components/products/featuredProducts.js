import React, { useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Button, Card, Grid, IconButton, ImageListItemBar, Typography } from "@mui/material";
import { getProducts } from "./productManager";
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CartContext } from "./cartContext";


export const FeaturedProduct = () => {

    const [products, setProducts] = useState([])

    const loadProducts = () => {
        getProducts().then(data => setProducts(data))
    }

    useEffect(() => {
        loadProducts()
    }, [])
    console.log(products)

    const { cart, setCart, productToCart, handleProductSize } = useContext(CartContext)

    return <>
        <Box sx={{ minHeight: '60vh', mr: 15, ml: 15, mt: 4 }}>
            <Grid
                sx={{ mb: 5 }}
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 5, justifyContent: "center", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Weekly Features
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
            <Box sx={{ minHeight: '40vh', width: '100%', ml: 3, mr: 3, justifyContent: "center" }} elevation={15}>
                <ImageList cols={4}
                    sx={{ gridTemplateColumns: 'repeat(autofill, minman(280px, 1fr)) !important' }}>
                    {products.slice(0, 4).map(product => (
                        <Card key={product.id}>
                            <ImageListItem sx={{ height: '100% !impotant' }}  >
                                <Link to={`/products/${product.id}`}>

                                    <img src={`http://localhost:8000${product.image_path}`}
                                        loading="lazy"
                                    />
                                </Link>
                                <ImageListItemBar
                                    sx={{ background: "black", fontColor: "white", fontSize: "30px", opacity: "100%" }}
                                    title={`${product.title} - $${product.price}`}
                                    actionIcon={
                                        <Button onClick={() => { handleProductSize(product, 0) }}>
                                            <LocalMallIcon sx={{ color: 'white', mr: 2 }} />
                                        </Button>
                                    }
                                    position='bottom' />
                            </ImageListItem>
                        </Card>
                    ))}
                </ImageList>


            </Box>
            <Grid xs={12} sm={12} md={12} lg={12} item>
                <Box sx={{ display: "flex", mt: 5, justifyContent: "center", alignItems: "center" }}>
                    
                        <Button href="/products" variant="outlined"
                            sx={{ background: "black" }}>
                            <Typography sx={{ letterSpacing: 5, color: "white" }}> All Designs</Typography>
                        </Button>
                   
                </Box>
            </Grid>
        </Box>
    </>
}