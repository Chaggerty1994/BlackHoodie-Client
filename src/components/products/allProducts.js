import { Button, Card, Divider, Grid, IconButton, ImageListItemBar, Stack, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getCategories, getFilteredProducts, getProducts } from "./productManager";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CartContext } from "./cartContext";


export const Products = () => {




    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const loadCategories = () => {
        getCategories().then(data => setCategories(data))
    }

    const loadProducts = () => {
        getProducts().then(data => setProducts(data))
    }

    const loadFilteredProducts = (catId) => {
        getFilteredProducts(catId).then(data => setProducts(data))
    }



    useEffect(() => {
        loadProducts()
        loadCategories()
    }, [])

    console.log(categories)
    const { cart, setCart, productToCart } = useContext(CartContext)

    return <>
        <Box sx={{ display: "flex", minHeight: '80vh', mr: 5, ml: 5, mt: 4 }}>
            <Box sx={{ minHeight: '80vh', width: '20%' }}>
                <Grid
                    sx={{ mb: 5 }}
                    container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    

                    {
                        categories.map(cat => (
                            <Grid xs={12} sm={12} md={12} lg={12} item>
                                <Button variant="outlined" onClick={() => {loadFilteredProducts(cat.id)}}
                                    sx={{ background: "black", width: "178px", mt: 5 }}>
                                    <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                        {cat.name}
                                    </Typography>
                                </Button>
                            </Grid>
                        ))
                    }
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Button variant="outlined" onClick={() => {loadProducts()}}
                            sx={{ background: "black", width: "178px", mt: 5 }}>
                            <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                All Styles
                            </Typography>
                        </Button>
                    </Grid>


                </Grid>
            </Box>

            <Box sx={{ minHeight: '80vh', width: '80%', ml: 3, mr: 3 }}>
                <ImageList cols={3}
                    sx={{ gridTemplateColumns: 'repeat(autofill, minman(280px, 1fr)) !important' }}>
                    {products.map(product => (
                        <Card key={product.id}>
                            <ImageListItem sx={{ height: '100% !impotant' }} >
                                <Link to={`/products/${product.id}`}>
                                    <img src={`http://localhost:8000${product.image_path}`}
                                        loading="lazy"
                                    />
                                </Link>
                                <ImageListItemBar
                                    sx={{ letterSpacing: 5, background: "black", fontColor: "white", fontSize: "30px", opacity: "100%" }}
                                    title={`${product.title} - $${product.price}`}
                                    actionIcon={
                                        <IconButton onClick={() => { productToCart(product) }}>
                                            <LocalMallIcon sx={{ color: 'white', mr: 2 }} />
                                        </IconButton>
                                    }
                                    position='bottom' />
                            </ImageListItem>
                        </Card>
                    ))}
                </ImageList>


            </Box>


        </Box>

    </>
}