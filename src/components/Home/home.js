import React from "react";
import Box from '@mui/material/Box';
import { Button, Grid, Typography } from "@mui/material";
import { FeaturedProduct } from "../products/featuredProducts";






export const Home = () => {

    return <>
        <Box sx={{ display: "flex", mr: 15, ml: 15, mt: 5 }}>
            <Typography variant="h6"
                component="div"
                sx={{ ml: 60, letterSpacing: 5, flexGrow: 1 }}>Weekly Features</Typography>
        </Box>
        <FeaturedProduct />
        
        <Box sx={{ display: "flex", mr: 15, ml: 15, mt: 5 }}>
        <Button sx={{ ml: 60, background: "black"}}>
           <Typography sx={{ letterSpacing: 5, color: "white"}}> All Designs</Typography>
        </Button>
        </Box>
    </>
}