import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: "100%", 
  zIndex: theme.zIndex.drawer + 1,
  alignSelf: "center",
  backgroundColor: "#CAF4FF",
  boxShadow: "none",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: "black",
  "&.active": {
    backgroundColor: "#A6CF98",
    borderRadius: 25,
  },
}));

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTabActive = (path) => location.pathname === path;
  console.log("Current Path: ", location.pathname);

    const routesWithoutNavbar = ["/login", "/"];
    const shouldDisplayNavbar = !routesWithoutNavbar.includes(location.pathname);

    return shouldDisplayNavbar ? (
    <StyledAppBar position="static">
      <Toolbar
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            style={{
              fontSize: 22,
              flexDirection: "row",
              color: "#87CEEB",
              fontWeight: "700",
            }}
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            CONNECT
          </Typography>
          <Typography
            style={{
              fontSize: 22,
              flexDirection: "row",
              marginLeft: 8,
              color: "#A6CF98",
              fontWeight: "700",
            }}
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            ME
          </Typography>
        </div>
        <div>
          <StyledButton
            className={isTabActive("/selectRole") ? "active" : ""}
            style={{ marginRight: 50, color: "black" }}
            color="inherit"
            onClick={() => navigate("")}
          >
            Home
          </StyledButton>
          <StyledButton
            className={isTabActive("/about") ? "active" : ""}
            style={{ marginRight: 50, color: "black" }}
            color="inherit"
            onClick={() => navigate("/about")}
          >
            About
          </StyledButton>
          <StyledButton
            className={isTabActive("/services") ? "active" : ""}
            style={{ marginRight: 50, color: "black" }}
            onClick={() => navigate("/services")}
            color="inherit"
          >
            Services
          </StyledButton>
          <StyledButton
            className={isTabActive("/contactUs") ? "active" : ""}
            style={{ marginRight: 50, color: "black" }}
            onClick={() => navigate("/contactUs")}
            color="inherit"
          >
            Contact Us
          </StyledButton>
          <StyledButton
            className={isTabActive("/login") ? "active" : ""}
            style={{ marginRight: 50, color: "black" }}
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </StyledButton>
        </div>
      </Toolbar>
    </StyledAppBar>
  ) : null;
};

export default Navbar;
