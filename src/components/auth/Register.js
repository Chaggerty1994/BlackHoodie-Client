import React, { useRef } from "react"
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { Link, useHistory } from "react-router-dom"
import { registerUser } from "./AuthManager"
import './Auth.css'
// TODO: This should get you started on registering a new user. 
// Add new fields depending on your server side registration
export const Register = () => {
  const username = useRef()
  const password = useRef()
  const history = useHistory()

  const handleRegister = (e) => {
    e.preventDefault()

    const newUser = {
      "username": username.current.value,
      "password": password.current.value
    }

    registerUser(newUser).then(res => {
      if ("token" in res) {
        localStorage.setItem("auth_token", res.token)
        history.push("/payment")
      }
    })
  }

  return (
    <main>
      <Paper className="accountinfo"
        elevation={12}
        sx={{ border: 1, mt: 8, ml: 43, minHeight: "60vh", width: "50%" }}>
        <Box sx={{ display: "flex", direction: "column", minHeight: "50vh", alignItems: "center" }}>
          <Grid
            sx={{ mb: 5 }}
            container
            spacing={2}
            direction="column"
            justifyContent="center"
          >
            <form onSubmit={handleRegister}>
              <Grid xs={12} sm={12} md={12} lg={12} item>
                <Box sx={{ display: "flex", mt: 8, ml: 3, justifyContent: "center", alignItems: "center" }} >
                  <Typography variant="h5"
                    sx={{ letterSpacing: 5 }}>
                    UserName
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={12} item>
                <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "center", alignItems: "center" }} >
                  <input ref={username} type="username" id="username" placeholder="Username" required autoFocus />
                </Box>
              </Grid>

              <Grid xs={12} sm={12} md={12} lg={12} item>
                <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "center", alignItems: "center" }} >
                  <Typography variant="h5"
                    sx={{ letterSpacing: 5 }} htmlFor="inputPassword"> Password </Typography>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} md={12} lg={12} item>
                <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "center", alignItems: "center" }} >
                  <input ref={password} type="password" id="password" placeholder="Password" required />
                </Box>
              </Grid>


              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box sx={{ display: "flex", mt: 5, ml: 3, justifyContent: "center", alignItems: "center" }} >
                  <Button type="submit" sx={{ background: "black", width: "30%" }}>
                    <Typography sx={{ color: "white" }}>
                      Register
                    </Typography>
                  </Button>
                </Box>
              </Grid>

            </form>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "center", alignItems: "center" }} >
                  <Link to="/login">
                    <Typography sx={{ color: "black" }}>
                      Not a member yet?
                    </Typography>
                  </Link>
                </Box>
              </Grid>
          </Grid>
        </Box>

      </Paper>
    </main >
  )
}
