import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
  Card,
} from "@mui/material";
import { css } from "@emotion/react";
import signupImage from "../assets/images/1.jpg";
import { Navigate } from "react-router";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
export default function MakeAppointment() {
    const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <div style={{ marginTop: 80, padding: 50 }}>
        <Typography
          style={{
            fontSize: 75,
            letterSpacing: 5,
            justifyContent: "center",
            display: "flex",
            width: 600,
          }}
        >
          Everyone Need
        </Typography>
        <Typography
          style={{
            fontSize: 75,
            color: "green",
            justifyContent: "center",
            display: "flex",
            width: 540,
          }}
        >
          Home Services
        </Typography>
        <Typography
          style={{
            fontSize: 16,
            color: "green",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Search amazing individuals around the globe, find best seller, expand
        </Typography>
        <Typography
          style={{
            fontSize: 16,
            color: "green",
            justifyContent: "center",
            display: "flex",
          }}
        >
          your network and learn from incredible people
        </Typography>

        <TextField
          InputProps={{
            style: {
              borderRadius: "40px",
              width: 600,
              height: 40,
              marginTop: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              paddingLeft: 10,
            },
          }}
          placeholder="Search Service Provider"
        />
        <Typography
          style={{
            fontSize: 18,
            justifyContent: "center",
            display: "flex",
            marginTop: 30,
          }}
        >
          The sky cloudless and of a deep dark blue{" "}
        </Typography>
        <Typography
          style={{ fontSize: 18, justifyContent: "center", display: "flex" }}
        >
          spectable before us was indeed subline
        </Typography>

        <Button
        onClick={()=>navigate('/services')}
          style={{
            display: "flex",
            justifyContent: "center",
            width: 250,
            backgroundColor: "#87CEEB",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            color: "black",
            fontSize: 12,
            fontWeight: "600",
            borderRadius: 40,
          }}
        >
          Make an Appointment
        </Button>
      </div>
      <div>
        <img
          src={signupImage}
          alt="Signup"
          style={{
            width: 820,
            height: 670,
            marginTop: 75,

            objectFit: "cover",
            marginRight: 30,
          }}
        />
      </div>
    </div>
  );
}
