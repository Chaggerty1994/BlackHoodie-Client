import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Grid, Typography } from "@mui/material";
import { TextField } from '@mui/material';
import { Link } from "react-router-dom";

export const PaymentDetails = () => {

    return <>
    <Box sx={{ minHeight: '70vh', mr: 15, ml: 15, mt: 8 }}>
            <Grid
                sx={{ mb: 5 }}
                container
                spacing={2}
                direction="column"
                justifyContent="center"
            >
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h4"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Payment Information
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Card Number
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <TextField id="address" sx={{ width: "60%" }} />
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Zip Code
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6} lg={6} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <TextField id="address" sx={{ width: "60%" }} />
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 8, ml: 3, justifyContent: "left", alignItems: "center" }} >
                    <Link to="/orderreview">
                        <Button variant="outlined"
                            sx={{ background: "black" }}
                            onClick={() => { }}>
                            <Typography sx={{ letterSpacing: 5, color: "white" }}> Review Order</Typography>
                        </Button>
                    </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}