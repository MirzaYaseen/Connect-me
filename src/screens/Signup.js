import React, { useState } from "react";
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
import upload from "../assets/images/uploadpic.png";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { convertLength } from "@mui/material/styles/cssUtils";

var url = process.env.REACT_APP_API_KEY;
const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Attachment, setAttachments] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [isFileInputVisible, setIsFileInputVisible] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };

  const handleSubmit = async (event) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const isPasswordValid = passwordRegex.test(password);

  if (!isPasswordValid) {
    setPasswordError(true);
    toast.error("Password should be at least 8 characters and include at least one special character");
    return;
  }
    const data = new FormData();
    data.append("file", Attachment);
    data.append("upload_preset", "MuhammadTufailAli");
    data.append("cloud_name", "vehiclebuddy");

    fetch("https://api.cloudinary.com/v1_1/vehiclebuddy/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        var newUrl = data.url.slice(0, 4) + "s" + data.url.slice(4);

        console.log("NEWWWWWW URLLLLLLS");
        console.log(newUrl);
        const photoUrl = newUrl;

        event.preventDefault();

        console.log(Attachment);

        let hasError = false;
        if (name.trim() === "") {
          setNameError(true);
          hasError = true;
        }
        if (email.trim() === "") {
          setEmailError(true);
          hasError = true;
        }
        if (password.trim() === "") {
          setPasswordError(true);
          hasError = true;
        }
        if (!Attachment) {
          setPasswordError(true);
          hasError = true;
        }

        if (hasError) {
          return;
        } else {
          const Final = async () => {
            const userData = {
              name: name,
              email: email,
              password: password,
              photo: photoUrl,
            };

            try {
              const result = await axios.post(`${url}users/signup`, userData);

              toast.success(result?.data?.message);

              setName("");
              setEmail("");
              setPassword("");
              setAttachments("");
            } catch (err) {
              toast.error(err?.response?.data?.message);
            }
          };
          Final();
        }
      });
  };
  const handleAvatarClick = () => {
    setIsFileInputVisible(true);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachments(file);
      setAvatar(URL.createObjectURL(file));
    }
  };
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "85%",
      marginTop:100,
      overflow:'hidden'
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
        <div
          style={{
            width: "70%",
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
            Create an Account
          </Typography>
          <label htmlFor="avatar-input" onClick={handleAvatarClick}>
            {avatar ? (
              <Avatar
                alt="Selected Avatar"
                src={avatar}
                sx={{
                  width: 150,
                  height: 150,
                  marginTop: 5,
                  marginLeft: "auto",
                  marginRight: "auto",

                
                  borderCollapse: "blue",
                }}
              />
            ) : (
              <Avatar
              src={upload}
                alt="Default Avatar"
                sx={{
                  width: 150,
                  height: 150,
                  marginTop: 2,
                  marginLeft: "auto",
                  marginRight: "auto",
               
            
                  borderCollapse: "blue",
                }}
              />
            )}
          </label>
          {isFileInputVisible && (
            <input
              type="file"
              id="avatar-input"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
          )
          }
          <TextField
            style={{
              marginTop: 40,
              width: 500,
              borderRadius: 10,
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            label="Name"
            margin="normal"
            value={name}
            onChange={handleNameChange}
            error={nameError}
            helperText={nameError ? "Please enter your name" : ""}
          />
          <TextField
            style={{
              marginTop: 30,
              maxWidth: 500,
              borderRadius: 10,
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
              marginTop: 30,
              width: 500,
              borderRadius: 10,
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            helperText={passwordError ? "Please enter a password" : ""}/>
          
          <Button
            onClick={handleSubmit}
            variant="contained"
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              width: 250,
              marginTop: 50,
              borderRadius: 20,
              color: "black",
              fontSize:16,
              backgroundColor: "#87CEEB",
            }}
          >
            Sign up
          </Button>
          <Button
            onClick={() => navigate("/login")}
            style={{
              textAlign: "center",
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 10,
              fontSize: 12,
              color:'grey'
            }}
          >
            Already have an account?
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%", 
          }}
        >
          <img
            src={signupImage}
            alt="Signup"
            style={{
              width: "100%",
              height: "100%",
             
              objectFit: "cover",
            marginRight:30
            }}
          />
        </div>
    </div>
  );
};

export default SignUpPage;

