import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";
import { getProducts } from "./productManager";


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
            <Grid sx={{ mb: 5 }} container spacing={2}>
                {
                    products.map(product => {
                        return <>
                            <Grid xs={12} sm={6} md={6} lg={3} item>
                                <Box component="img" src={`http://localhost:8000${product.image_path}`} />
                                <Typography>{product.title}</Typography>
                                <Typography>$ {product.price}</Typography>
                            </Grid>

                        </>
                    }

                    )
                }




            </Grid>
        </Box>
    </>
}