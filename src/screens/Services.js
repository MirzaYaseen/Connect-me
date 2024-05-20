import React, { useState } from "react";
import { Box, Card, Typography, Button, Icon, IconButton } from "@mui/material";
import Image1 from "../assets/images/6.png";
import Electircian from "../assets/images/electrician.jpg";
import Air from "../assets/images/air.jpg";
import Carpenter from "../assets/images/carpenter.jpg";
import Painter from "../assets/images/painter.jpg";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Screen() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState([]);

  const handleServiceClick = (service) => {
    if (selectedService.includes(service)) {
      setSelectedService(
        selectedService.filter((serv) => serv !== service)
      );
    } else {
      setSelectedService([...selectedService, service]);
    }
  };

  const isServiceSelected = (service) => selectedService.includes(service);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        fontFamily: "Roboto",
      }}
    >
      <Typography
        style={{ fontWeight: "600" }}
        variant="h4"
        gutterBottom
        marginBottom={0.5}
      >
        Choose a Service Category
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginRight: 2, marginTop: 5,  backgroundColor: isServiceSelected("Electrician")
          ? "#87CEEB"
          : "none",
        }}
          onClick={() => handleServiceClick("Electrician")}
          style={{
            display: "flex",
            flexDirection: "column",
            // background: "none",
            marginRight: 30,
          }}
          // onClick={() => navigate("/electricianServices")}
        >
          <Card
            sx={{
              width: 270,
              height: 320,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Electircian})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 3
            }}
          ></Card>
          <IconButton
            color="primary"
            aria-label="forward"
            style={{ marginLeft: "auto" }}
          >
            <ArrowForwardIcon />
          </IconButton>
          <Typography style={{ textAlign: "center", marginTop: 15 }}>
            Electrician
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              marginTop: 15,
              fontSize: 12,
              color: "GrayText",
            }}
          >
            12 services Available
          </Typography>
        </Button>
        <Button
          style={{ display: "flex", flexDirection: "column", marginRight: 30 }}
          variant="outlined"
          color="primary"
          sx={{ marginRight: 2, marginTop: 5, backgroundColor: isServiceSelected("AirConditioning")
          ? "#87CEEB"
          : "none",}}
          onClick={() => handleServiceClick("AirConditioning")}
        >
          <Card
            sx={{
              width: 270,
              height: 320,
              borderRadius: 10,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Air})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 3,
            }}
          ></Card>
          <IconButton
            color="primary"
            aria-label="forward"
            style={{ marginLeft: "auto" }}
          >
            <ArrowForwardIcon />
          </IconButton>
          <Typography style={{ textAlign: "center", marginTop: 15 }}>
            Air Conditioning
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              marginTop: 15,
              fontSize: 12,
              color: "GrayText",
            }}
          >
            12 services Available
          </Typography>
        </Button>
        <Button
          style={{ display: "flex", flexDirection: "column", marginRight: 30 }}
          variant="outlined"
          color="primary"
          sx={{ marginRight: 2, marginTop: 5,  backgroundColor: isServiceSelected("Carpenter")
          ? "#87CEEB"
          : "none",}}
          onClick={() => handleServiceClick("Carpenter")}
        >
          <Card
            sx={{
              width: 270,
              height: 320,
              borderRadius: 10,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Carpenter})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 3,
            }}
          ></Card>
          <IconButton
            color="primary"
            aria-label="forward"
            style={{ marginLeft: "auto" }}
          >
            <ArrowForwardIcon />
          </IconButton>
          <Typography style={{ textAlign: "center", marginTop: 15 }}>
            Carpenter
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              marginTop: 15,
              fontSize: 12,
              color: "GrayText",
            }}
          >
            12 services Available
          </Typography>
        </Button>
        <Button
          style={{ display: "flex", flexDirection: "column", marginRight: 30,  }}
          variant="outlined"
          color="primary"
          sx={{ marginRight: 2, marginTop: 5, backgroundColor: isServiceSelected("Painter")
          ? "#87CEEB"
          : "none",}}
          onClick={() => handleServiceClick("Painter")}
        >
          <Card
            sx={{
              width: 270,
              height: 320,
              borderRadius: 10,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${Painter})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 3,
            }}
          ></Card>
          <IconButton
            color="primary"
            aria-label="forward"
            style={{ marginLeft: "auto" }}
          >
            <ArrowForwardIcon />
          </IconButton>
          <Typography style={{ textAlign: "center", marginTop: 15 }}>
            Painter
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              marginTop: 15,
              fontSize: 12,
              color: "GrayText",
            }}
          >
            12 services Available
          </Typography>
        </Button>
      </div>
      <Button
        onClick={() => {
          console.log(selectedService);
          localStorage.setItem(
            "SelectedCatByServiceTaker",
            JSON.stringify(selectedService)
          );
          navigate("/airconditioners");
        }}
        style={{
          marginTop: 40,
          backgroundColor: "#87CEEB",
          width: 300,
          marginBottom: 20,
          height: 50,
        }}
      >
        <Typography style={{ color: "black" }}>Click to Continue</Typography>
      </Button>
    </Box>
  );
}

export default Screen;
