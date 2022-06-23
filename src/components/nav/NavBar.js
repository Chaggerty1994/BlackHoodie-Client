import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HomeIcon from '@mui/icons-material/Home';
import "./NavBar.css"
import SearchIcon from '@mui/icons-material/Search';



// #212121

export const NavBar = () => {


  const history = useHistory()
 


  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static" elevation={15} style={{backgroundColor: "black"} }>
        <Toolbar >
          <Box className="nav" sx={{display: "flex", alignItems: "center", width: "100%"}}>

            <Typography variant="h6"
              component="div"
              sx={{ ml: 5, letterSpacing: 5, flexGrow: 1}}
              >
              BLACK HOODIES
            </Typography>

            <Box sx={{ mr: 5, display: "flex", gap: 1, alignItems: "center"}}  >

            

              <Link to="/home">
                <IconButton sx={{color: "white"}}>
                  <HomeIcon sx={{fontSize: "30px"}}   />
                </IconButton>

              </Link>

              <Link to="/products">
                <IconButton sx={{color: "white"}}>
                  <SearchIcon sx={{fontSize: "30px"}}   />
                </IconButton>

              </Link>

              <Link to="/account">
                <IconButton sx={{color: "white"}}>
                  <AccountBoxIcon sx={{fontSize: "30px"}}    />
                </IconButton>
              </Link>

              <Link to="/cart">
                <IconButton sx={{color: "white"}}>
                  <LocalMallIcon sx={{fontSize: "30px"}}  />
                </IconButton>
              </Link>

              {
                localStorage.getItem("auth_token") ?
                  <IconButton sx={{color: "white"}} onClick={() => {
                    localStorage.removeItem("auth_token")
                    history.push({ pathname: "/home" })
                  }}>
                    <LogoutIcon sx={{fontSize: "30px"}}    />
                  </IconButton>
                  :
                  
                  <Link to="/login">
                    <IconButton sx={{color: "white"}}>
                      <LoginIcon sx={{fontSize: "30px"}}    />
                    </IconButton>
                  </Link>
                  
              }
            </Box>
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
  )
}
