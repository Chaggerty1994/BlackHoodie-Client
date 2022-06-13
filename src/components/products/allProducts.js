import { Button, Card, Divider, Grid, IconButton, ImageListItemBar, Stack, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getProducts } from "./productManager";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export const Products = () => {
    const [products, setProducts] = useState([])

    const loadProducts = () => {
        getProducts().then(data => setProducts(data))
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return <>
        <Box sx={{ display: "flex", minHeight: '80vh', mr: 10, ml: 10, mt: 4 }}>
            <Box sx={{ minHeight: '80vh', width: '20%' }}>
                <Grid
                    sx={{ mb: 5 }}
                    container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Button variant="outlined"
                            sx={{ background: "black", width: "178px", mt: 5 }}>
                            <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                Nature
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Button variant="outlined"
                            sx={{ background: "black", width: "178px", mt: 3 }}>
                            <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                Animals
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Button variant="outlined"
                            sx={{ background: "black", width: "178px", mt: 3 }}>
                            <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                CyberPunk
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Button variant="outlined"
                            sx={{ background: "black", width: "178px", mt: 3 }}>
                            <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                Urban
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} item>
                        <Button variant="outlined"
                            sx={{ background: "black", width: "178px", mt: 3 }}>
                            <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                Abstract
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ minHeight: '80vh', width: '80%', ml: 3, mr: 3 }}>
                <ImageList cols={3}
                sx={{gridTemplateColumns: 'repeat(autofill, minman(280px, 1fr)) !important'}}>
                    {products.map(product => (
                        <Card key={product.id}>
                            <ImageListItem sx={{ height: '100% !impotant' }} >
                                <img src={`http://localhost:8000${product.image_path}`}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    sx={{ background: "black", fontColor: "white", fontSize: "30px",opacity: "100%" }}
                                    title={`${product.title} - $${product.price}`}
                                    actionIcon={
                                        <LocalMallIcon sx={{color:'white', mr: 2}}/>
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