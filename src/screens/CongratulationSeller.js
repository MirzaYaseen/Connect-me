import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import bg from "../assets/images/circle2.png";
import axios from "axios";
var url = process.env.REACT_APP_API_KEY;
const CongratulationSeller = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: 680,
    
        // backgroundColor: "#E6F7FF",
        // backgroundImage: `url(${bg})`,
        // backgroundSize: "contain", 
        // backgroundPosition: "right", // Optional: Set background position
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundRepeat:'no-repeat',
        overflow:'hidden'
        
      }}
    >
      <div
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          // backgroundImage: `url(${bg})`, // Set the background image
          // backgroundSize: "contain", // Optional: Set background size
          // backgroundPosition: "right", // Optional: Set background position
          // backgroundRepeat:'no-repeat'
        }}
      >
        <div
          style={{
            width: "95%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 100,
          }}
        >
          <Typography
            style={{ fontSize: 90, textAlign: "center", display: "block" }}
          >
            Congratulations,
          </Typography>
        </div>
        {/* <div style={{display:'flex', flexDirection:'row'}}>  */}

        <Typography style={{ fontSize: 90, textAlign: "center", top:0 }}>
          you have been registered
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              color: "black",
              fontSize: 90,
              textAlign: "center",
              marginLeft: 15,
            }}
          >
            as a
          </Typography>
          <Typography
            style={{
              color: "green",
              fontSize: 90,
              textAlign: "center",
              marginLeft: 15,
            }}
          >
            Seller
          </Typography>
        </div>

        <div
          style={{
            width: 700,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography
            style={{
              fontSize: 22,
              textAlign: "center",
              marginTop: 10,
              color: "grey",
            }}
          >
            We shouldn't have to figure everything out on our own.In an age
            where it's easier than ever to connect,let's start trusting on other
            people's experience.
          </Typography>
        </div>

        <div
          style={{
            width: 200,
            height: 150,
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
          }}
        >
          <Button
            // onClick={() => {
            //   UpdateUserAsStudent("Student");
            // }}
            onClick={() => navigate("/registerServiceProvider")}
            style={{
              backgroundColor: "#87CEEB",
              width: 250,
              height: 40,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              borderRadius: 15,
              color: "black",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CongratulationSeller;
