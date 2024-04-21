import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Card,
} from "@mui/material";
import { css } from "@emotion/react";
import signupImage from "../assets/images/signup1.jpg";

import background from "../assets/images/1.jpg";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
var url = process.env.REACT_APP_API_KEY;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation
    let hasError = false;

    if (email.trim() === "") {
      setEmailError(true);
      hasError = true;
    }
    if (password.trim() === "") {
      setPasswordError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    } else {
      const userCredentials = {
        email: email,
        password: password,
      };
      try {
        const result = await axios.post(`${url}users/signin`, userCredentials);
        toast.success(result?.data?.message);
        localStorage.setItem("userdetails", JSON.stringify(result?.data?.data));

        // navigate("/chooseSubject");
        navigate("/selectRole");
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
  };

  return (
    <div
      style={{
        // background: "#E6F7FF",
        // backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "85vh",
        overflow:'hidden',
        marginTop:100,
        
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* <Card
        style={{
          display: "flex",
        //   width: "900px",
          height: "650px",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
          width: "1200px", // Adjust the card width as needed
        }}
      > */}
       
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            paddingLeft: 20,
            borderRadius:40
          }}
        >
          <Typography
            style={{
              marginBottom: "20px",
              fontSize: 35,
              fontWeight: "600",
              color: "#212A3E",
              textAlign: "center",
              
            }}
          >
            Sign In Now
          </Typography>
          <TextField
           style={{
            marginTop: 60,
            width: 500,
            borderRadius: 30,
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
          }}
         
            label="Email"
            margin="normal"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Please enter a valid email" : ""}
          />
          <TextField
              style={{
              
                width: 500,
                borderRadius: 10,
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
                borderColor:'#87CEEB'
              }}
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={passwordError ? "Please enter a password" : ""}
          />
          <Button
            style={{
              fontSize: "10px",
              marginLeft: 380,
            }}
          >
            Forget Password?
          </Button>
          <Button
            onClick={handleSubmit}
            // onClick={()=>navigate('/selectRole')}
            variant="contained"
            style={{
              width: "250px",
              marginTop: "60px",
              borderRadius: "20px",
              backgroundColor: "#87CEEB",
              color: "black",
              alignSelf: "center",
              fontSize:16
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => navigate("/")}
            style={{
              marginTop: "10px",
              fontSize: "12px",
              textAlign: "center",
              color:'gray'
            }}
          >
            Don't have an account?
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%", // Adjust the width of the image container
            // Add padding for space
            // backgroundColor: "pink",
          }}
        >
          <img
            src={background}
            alt="Signup"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      {/* </Card> */}
    </div>
  );
};

export default Login;
