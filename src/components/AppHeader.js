import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(to right, #3498db 30%, #ff6b81 90%)",
  height: 80,
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const Navbar = () => {
//   const location = useLocation();
  const navigate = useNavigate();

//   const routesWithoutNavbar = ["/login", "/"];
//   const shouldDisplayNavbar = !routesWithoutNavbar.includes(location.pathname);

//   return shouldDisplayNavbar ? (
    return(
    <StyledAppBar position="static">
      <Toolbar>
        {/* <StyledIconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </StyledIconButton> */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Connect Me
        </Typography>
        <StyledButton color="inherit" onClick={()=>navigate('/selectRole')}>
          Home
        </StyledButton>
        <StyledButton color="inherit" onClick={()=>navigate('/about')}>
          About
        </StyledButton>
        <StyledButton onClick={()=>navigate('/services')}  color="inherit">Services</StyledButton>
        <StyledButton
          color="inherit"
        //   onClick={() => {
        //     localStorage.clear();
        //     navigate("/login");
        //   }}
        >
          Logout
        </StyledButton>
      </Toolbar>
    </StyledAppBar>
  )
//    : null;
};

export default Navbar;
