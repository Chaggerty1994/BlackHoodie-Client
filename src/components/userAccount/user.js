import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const UserAccount = () => {

   

    return <>
        <Box sx={{ minHeight: '70vh', mr: 15, ml: 15, mt: 8, background: "grey" }}>
            <Grid
                sx={{ mb: 5 }}
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h4"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>User Account Details
                        </Typography>
                    </Box>
                </Grid>

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>Name
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Typography variant="h5"
                            component="div"
                            sx={{ letterSpacing: 5, flexGrow: 1 }}>SPOOKY
                        </Typography>
                    </Box>
                </Grid>

                <Divider sx={{ border: 1, ml: 4, mr: 80, mt: 2 }} />

                <Grid xs={12} sm={12} md={12} lg={12} item>
                    <Box sx={{ display: "flex", mt: 8, ml: 3, justifyContent: "left", alignItems: "center" }} >
                        <Link to="/payment">
                            <Button variant="outlined"
                                sx={{ background: "black" }}
                                onClick={() => { }}>
                                <Typography sx={{ letterSpacing: 5, color: "white" }}> Save & continue</Typography>
                            </Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}