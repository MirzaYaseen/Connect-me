import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


var url = process.env.REACT_APP_API_KEY;

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleSubmit = async () => {
    if (!firstName || !lastName || !query || !email) {
      toast.error("Please fill in all required fields.");
      return;
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
  
    try {
      const formData = {
        firstName,
        lastName,
        query,
        email,
        website,
      };

      const response = await fetch(`${url}contactus/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Contact form submitted successfully");
        toast.success("Contact form submitted successfully");
        setFirstName("");
        setLastName("");
        setQuery("");
        setEmail("");
        setWebsite("");
      } else {
        toast.error("Failed to submit contact form");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Error submitting contact form");
    }
  };

  return (
    <div>
       <ToastContainer />
      <Typography
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: 15,
          fontSize: 80,
        }}
      >
        Get in touch
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            fontSize: 20,
            width: 400,
          }}
        >
          We want to hear from you! Talk to our team and find out how connect Me
          can help you!
        </Typography>
      </div>
      <Typography
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          fontSize: 20,
          marginTop: 15,
        }}
      >
        You can also check our BLOG page for more information!
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 50,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h6"
            style={{ marginBottom: 10, marginRight: 250, fontSize: 16 }}
          >
            First Name
          </Typography>
          <Typography
            variant="h6"
            style={{ marginBottom: 10, marginRight: 200, fontSize: 16 }}
          >
            Last Name
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="First Name"
            InputProps={{
              style: {
                borderRadius: "40px",
                width: 300,
                height: 40,
              },
            }}
          />

          <TextField
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Last Name"
            InputProps={{
              style: {
                borderRadius: "40px",
                width: 300,
                height: 40,
                marginLeft: 30,
                borderColor: "green",
              },
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{ marginBottom: 10, marginRight: 470, fontSize: 16 }}
        >
          How can we help?
        </Typography>
        <TextField
          value={query}
          onChange={handleQueryChange}
          placeholder="write your query..."
          InputProps={{
            style: {
              borderRadius: "40px",
              width: 630,
              height: 40,
            },
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h6"
            style={{ marginBottom: 10, marginRight: 290, fontSize: 16 }}
          >
            Email
          </Typography>
          <Typography
            variant="h6"
            style={{ marginBottom: 10, marginRight: 140, fontSize: 16 }}
          >
            Website (Optional)
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            value={email}
            onChange={handleEmailChange}
            placeholder="xyz@example.com"
            InputProps={{
              style: {
                borderRadius: "40px",
                width: 300,
                height: 40,
              },
            }}
          />
          <TextField
            value={website}
            onChange={handleWebsiteChange}
            placeholder="https://"
            InputProps={{
              style: {
                borderRadius: "40px",
                width: 300,
                height: 40,
                marginLeft: 30,
              },
            }}
          />
        </div>
      </div>
      <Button
      onClick={handleSubmit}
        sx={{
          backgroundColor: "#87CEEB",
          width: "35%",
          height:50,
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          marginTop: 5,
          color: "black",
          fontSize: 14,
          borderRadius: 20,
          fontSize:18
        }}
      >
        Submit
      </Button>
    </div>
  );
}
