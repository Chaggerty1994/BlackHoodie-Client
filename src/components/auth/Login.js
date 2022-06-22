import { Box, Button, Grid, Input, Paper, TextField, Typography } from "@mui/material"
import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"
import { loginUser } from "./AuthManager"


export const Login = () => {
  const username = useRef()
  const password = useRef()
  const invalidDialog = useRef()
  const history = useHistory()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      username: username.current.value,
      password: password.current.value
    }

    loginUser(user)
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("auth_token", res.token)
          history.push("/payment")
        }
        else {
          invalidDialog.current.showModal()
        }
      })
  }

  return (
    <main >
      <dialog ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button onClick={e => invalidDialog.current.close()}>Close</button>
      </dialog>

      <div>
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

              <form onSubmit={handleLogin}>
               
                <Grid xs={12} sm={12} md={12} lg={12} item>
                  <Box sx={{ display: "flex", mt: 8, ml: 3, justifyContent: "center", alignItems: "center" }} >
                    <Typography variant="h5"

                      sx={{ letterSpacing: 5 }} htmlFor="inputUsername"> Username</Typography>
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
                        Sign In
                      </Typography>
                    </Button>
                  </Box>
                </Grid>
              </form>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box sx={{ display: "flex", mt: 2, ml: 3, justifyContent: "center", alignItems: "center" }} >
                  <Link to="/register">
                    <Typography sx={{ color: "black" }}>
                      Not a member yet?
                    </Typography>
                  </Link>
                </Box>
              </Grid>

            </Grid>
          </Box>

        </Paper>
      </div>
    </main >
  )
}
