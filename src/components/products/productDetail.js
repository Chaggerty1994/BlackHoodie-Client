import { Button, Card, Divider, Grid, IconButton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "./productManager"
import HomeIcon from '@mui/icons-material/Home';


export const ProductDetails = () => {

    const [selectedProduct, setSelectedProduct] = useState({})

    const { productId } = useParams()

    useEffect(
        () => {
            getProductById(productId).then((data) => { setSelectedProduct(data) })
        }
    )
    console.log(selectedProduct)

    return <>
        <Box sx={{ display: "flex", minHeight: '70vh', mr: 10, ml: 10, mt: 4 }}>
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

                            <Button variant="outlined" sx={{ background: "black" }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                    S
                                </Typography>
                            </Button>

                            <Button variant="outlined" sx={{ background: "black" }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                    M
                                </Typography>
                            </Button>

                            <Button variant="outlined" sx={{ background: "black" }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                    L
                                </Typography>
                            </Button>

                            <Button variant="outlined" sx={{ background: "black" }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                    XL
                                </Typography>
                            </Button>

                            <Button variant="outlined" sx={{ background: "black" }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                    XXL
                                </Typography>
                            </Button>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "left", gap: 5, alignItems: "center", mt: 8 }} >
                            <Button variant="outlined" sx={{ background: "black" }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}>
                                    Buy Now
                                </Typography>
                            </Button>

                            <Button variant="outlined" sx={{ background: "black" }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}>
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
                                    All of our hoodies are conveniently sourced and made locally in China
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    </>

}