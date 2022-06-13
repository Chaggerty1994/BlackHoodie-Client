import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from "@mui/material";
import { getProducts } from "./productManager";
import { Link } from "react-router-dom";


export const FeaturedProduct = () => {

    const [products, setProducts] = useState([])

    const loadProducts = () => {
        getProducts().then(data => setProducts(data))
    }

    useEffect(() => {
        loadProducts()
    }, [])
    console.log(products)

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
            <Grid sx={{ mb: 5 }} container spacing={2} >
                {
                    products.map(product => {
                        return <>
                            <Grid xs={12} sm={6} md={6} lg={3} item>
                                <Link to={`/products/${product.id}`}>
                                <Box component="img" src={`http://localhost:8000${product.image_path}`} />
                                </Link>
                                <Box sx={{ display: "flex", mt: 2, justifyContent: "center", alignItems: "center" }} >
                                    <Typography>{product.title}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", mt: 2, justifyContent: "center", alignItems: "center" }} >
                                    <Typography>$ {product.price}</Typography>
                                </Box>
                            </Grid>

                        </>
                    }

                    )
                }

            </Grid>
            <Grid xs={12} sm={12} md={12} lg={12} item>
                <Box sx={{ display: "flex", mt: 5, justifyContent: "center", alignItems: "center" }}>
                    <Link to="/products">
                    <Button variant="outlined"
                    sx={{ background: "black" }}>
                        <Typography sx={{ letterSpacing: 5, color: "white" }}> All Designs</Typography>
                    </Button>
                    </Link>
                </Box>
            </Grid>
        </Box>
    </>
}