import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
  TextField,
} from "@mui/material";

export default function ContactUs() {
  return (
    <div>
      <Typography
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: 90,
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
          marginTop: 30,
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
            style={{ marginBottom: 10, marginRight: 250,fontSize:16 }}
          >
            First Name
          </Typography>
          <Typography
            variant="h6"
            style={{ marginBottom: 10, marginRight: 200,fontSize:16  }}
          >
            Last Name
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            InputProps={{
              style: {
                borderRadius: "40px",
                width: 300,
                height: 40,
              },
            }}
          />

          <TextField
            InputProps={{
              style: {
                borderRadius: "40px",
                width: 300,
                height: 40,
                marginLeft: 30,
                borderColor:'green',
              
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
        <Typography variant="h6" style={{ marginBottom: 10, marginRight: 470, fontSize:16 }}>
          How can we help?
        </Typography>
        <TextField
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
            style={{ marginBottom: 10, marginRight: 290, fontSize:16 }}
          >
            Email
          </Typography>
          <Typography
            variant="h6"
            style={{ marginBottom: 10, marginRight: 140, fontSize:16 }}
          >
            Website (Optional)
          </Typography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <TextField
            InputProps={{
              style: {
                borderRadius: "40px",
                width: 300,
                height: 40,
              },
            }}
          />
          <TextField
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
    </div>
  );
}
