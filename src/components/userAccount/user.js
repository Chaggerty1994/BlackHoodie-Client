import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const UserAccount = () => {

    // const [currentUser, setCurrentUser] = useState({})

    // const userId = localStorage.getItem("auth_user")

    // console.log(userId)


    // useEffect(
    //     () => {
    //         fetch("http://localhost:8000/user", {
    //             headers: {
    //                 "Authorization": `Token ${localStorage.getItem("auth_token")}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then((usersArray) => {
    //                 const userNow = usersArray.find(
    //                     u => u.id === parseInt(userId))
    //                 console.log(userNow)
    //                 setCurrentUser(userNow)
    //             })
    //     }, []
    // )

    return <>
        <Box sx={{ minHeight: '70vh', mr: 15, ml: 15, mt: 8, background: "grey" }}>
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

                    </Box>
                </Grid>

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