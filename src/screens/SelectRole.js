import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import axios from "axios";
var url = process.env.REACT_APP_API_KEY;
const SelectRole = () => {
//   const navigate = useNavigate();
//   const userdetails = JSON.parse(localStorage.getItem("userdetails"));

//   const UpdateUserAsStudent = async (user) => {
//     const userCredentials = {
//       id: userdetails?._id,
//       role: user,
//     };
//     try {
//       const result = await axios.patch(`${url}users/updateMe`, userCredentials);

//       localStorage.setItem(
//         "userdetails",
//         JSON.stringify(result?.data?.data?.user)
//       );

//       if (user === "Student") {
//         navigate("/studentWelcome");
//       } else {
//         navigate("/Quiz");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
  return (
    <div
      style={{
        height: 670,
        backgroundColor: "#E6F7FF",
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 800,
            height: 250,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography
            style={{ fontSize: 50, textAlign: "center", display: "block" }}
          >
            Your trusted source for Service Taker & Service Provider.
          </Typography>
        </div>
        <div
          style={{
            width: 600,
            height: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography
            style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}
          >
            We shouldn't have to figure everything out on our own.In an age
            where it's easier than ever to connect,let's start trusting on other
            people's experience.
          </Typography>
        </div>

        <div
          style={{
            width: 800,
            height: 150,
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 70,
          }}
        >
          <Button
            // onClick={() => {
            //   UpdateUserAsStudent("Student");
            // }}
            style={{
              backgroundColor: "#12486B",
              width: 300,
              height: 40,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              borderRadius: 20,
              color: "white",
            }}
          >
            Find Services
          </Button>
          <Typography
            style={{ textAlign: "center", marginTop: 10, marginBottom: 10 }}
          >
            or
          </Typography>
          <Button
            // onClick={() => {
            //   UpdateUserAsStudent("Mentor");
            // }}
            style={{
              backgroundColor: "#12486B",
              width: 300,
              height: 40,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              borderRadius: 20,
              color: "white",
            }}
          >
            Continue as Provider
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
