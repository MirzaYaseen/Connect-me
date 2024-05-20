import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import bg from "../assets/images/expbg.jpg";
import axios from "axios";
var url = process.env.REACT_APP_API_KEY;
const SelectRole = () => {
  const navigate = useNavigate();
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));

  const UpdateUserAsStudent = async (user) => {
    const userCredentials = {
      id: userdetails?._id,
      role: user,
    };
    try {
      const result = await axios.patch(`${url}users/updateMe`, userCredentials);

      localStorage.setItem(
        "userdetails",
        JSON.stringify(result?.data?.data?.user)
      );

      if (user === "Student") {
        navigate("/categoryChoose");
      } else {
        navigate("/expertsVerification");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop:50
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
            width: 1000,
            height: 250,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography
            style={{ fontSize: 70, textAlign: "center", display: "block", fontWeight:'600' }}
          >
            Your trusted source for Services & Coaching.
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
            style={{ fontSize: 18, textAlign: "center", marginTop: 100 }}
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
            marginTop: 120,
          }}
        >
          <Button
            onClick={() => {
              UpdateUserAsStudent("Student");
            }}
            style={{
              backgroundColor:'#87CEEB',
              width: 300,
              height: 50,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              borderRadius: 20,
              color: "black",
              fontSize:16,
              fontWeight:'600'
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
            onClick={() => {
              UpdateUserAsStudent("Mentor");
            }}
            style={{
              backgroundColor: "#87CEEB",
              width: 300,
              height: 50,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              borderRadius: 20,
              color: "black",
              fontSize:16,
              fontWeight:'600'
              
            }}
          >
            Become a Seller
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
