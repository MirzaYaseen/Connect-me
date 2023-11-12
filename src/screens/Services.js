import React, { useState } from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import Image1 from "../assets/images/6.png";
import Electircian from "../assets/images/electrician.jpg";
import Air from "../assets/images/air.jpg";
import Carpenter from "../assets/images/carpenter.jpg";
import Painter from "../assets/images/painter.jpg";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Screen() {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageClick = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== language)
      );
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const isLanguageSelected = (language) => selectedLanguages.includes(language);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        // height: "90vh",
        fontFamily: "Roboto",
        // overflow:'hidden'
        // backgroundColor: "#E6F7FF",
      }}
    >
      <Typography variant="h4" gutterBottom marginBottom={5}>
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
          style={{
            display: "flex",
            flexDirection: "column",
            background: "none",
            marginRight: 30,
          }}
          onClick={() => navigate("/electricians")}
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
              backgroundImage: `url(${Electircian})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: 3,
            }}
          ></Card>
          <Typography style={{ textAlign: "center", marginTop: 15 }}>
            Electrician
          </Typography>
        </Button>
        <Button
          style={{ display: "flex", flexDirection: "column", marginRight: 30 }}
          onClick={() => navigate("/airconditioners")}
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
          <Typography style={{ textAlign: "center", marginTop: 15 }}>
            Air Conditioning
          </Typography>
        </Button>
        <Button
          style={{ display: "flex", flexDirection: "column", marginRight: 30 }}
          onClick={() => navigate("/carpenters")}
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
          <Typography style={{ textAlign: "center", marginTop: 15 }}>
            Carpenter
          </Typography>
        </Button>
        <Button
          style={{ display: "flex", flexDirection: "column", marginRight: 30 }}
          onClick={() => navigate("/painters")}
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
          <Typography style={{ textAlign: "center", marginTop: 15 }}>
            Painter
          </Typography>
        </Button>
      </div>

      {/* <Box sx={{ marginTop: 5 }}>
        <Button
          variant={isLanguageSelected("JavaScript") ? "contained" : "outlined"}
          color="primary"
          sx={{ marginRight: 2 }}
          onClick={() => handleLanguageClick("JavaScript")}
        >
          JavaScript
        </Button>
        <Button
          variant={isLanguageSelected("Python") ? "contained" : "outlined"}
          color="primary"
          sx={{ marginRight: 2 }}
          onClick={() => handleLanguageClick("Python")}
        >
          Python
        </Button>
        <Button
          variant={isLanguageSelected("Java") ? "contained" : "outlined"}
          color="primary"
          sx={{ marginRight: 2 }}
          onClick={() => handleLanguageClick("Java")}
        >
          Java
        </Button>
        <Button
          variant={isLanguageSelected("C++") ? "contained" : "outlined"}
          color="primary"
          onClick={() => handleLanguageClick("C++")}
        >
          C++
        </Button>
      </Box>
      <Button
        // onClick={() => {
        //   console.log(selectedLanguages);
        //   localStorage.setItem(
        //     "SelectedCatByStudent",
        //     JSON.stringify(selectedLanguages)
        //   );
        //   navigate("/studentDashboard");
        // }}
        style={{ marginTop: 40, backgroundColor: "#12486B", width: 200 }}
      >
        <Typography style={{ color: "white" }}>Continue</Typography>
      </Button> */}
    </Box>
  );
}

export default Screen;
