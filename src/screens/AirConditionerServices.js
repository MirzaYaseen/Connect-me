import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import bg from "../assets/images/8.png";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
export default function AirconditionerServices() {
    const navigate = useNavigate();
  return (
    <div style={{ padding: 40 }}>
      <div style={{ marginTop: 50 }}>
        <Typography
          style={{ fontSize: 30, textAlign: "center", fontWeight: "600" }}
        >
          Air Conditioner Services
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 100,
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain", 
          backgroundPosition: "right", 
          backgroundRepeat: "no-repeat",
          height: 360,
        }}
      >
        <div>
          <Typography style={{ width: 400 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Typography>
          <Typography style={{ marginTop: 30 }}>
            🏀 Fucus Lutus blandit Si.
          </Typography>
          <Typography style={{ marginTop: 10 }}>
            🏀 Fucus Lutus blandit Si.
          </Typography>
          <Button
           onClick={() => navigate("/airconditioners")}
            style={{
              marginTop: 50,
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
              backgroundColor: "#87CEEB",
              width: 200,
              borderRadius: 50,
              height: 50,
              color: "white",
              fontSize: 16,
            }}
          >
            Get Started
          </Button>
        </div>
    
      </div>
    </div>
  );
}
