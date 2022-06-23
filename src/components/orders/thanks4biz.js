import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ThankYou = () => {
    return <>
        <Box sx={{ minHeight: '60vh', mr: 15, ml: 15, mt: 10 }}>
            <Grid
                sx={{ mb: 5 }}
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 10, justifyContent: "center", alignItems: "center" }} >
                        <Typography variant="h2"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Thank you For Your Business!
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 15, justifyContent: "center", alignItems: "center" }}>
                        
                            <Button href="/home" variant="outlined"
                                sx={{ background: "black" }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}> Return 2 Home</Typography>
                            </Button>
                      
                    </Box>
                </Grid>

            </Grid>
        </Box>
    </>
}