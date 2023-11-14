import React from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Electircian from "../assets/images/electrician.jpg";
import Air from "../assets/images/air.jpg";
import Carpenter from "../assets/images/carpenter.jpg";
import Painter from "../assets/images/painter.jpg";
import axios from "axios";
import pdf from "../assets/images/pdf.png";

// var url = process.env.REACT_APP_API_KEY;
const CarPenter = () => {
  //   const Lectures = JSON.parse(localStorage.getItem("Lectures"));
  //   const userdetails = JSON.parse(localStorage.getItem("userdetails"));
    const navigate = useNavigate();

  //   const CreateConversation = async (receiver) => {
  //     const usersIds = {
  //       senderId: userdetails?._id,
  //       receiverId: receiver,
  //     };
  //     try {
  //       const result = await axios.post(`${url}conversation`, usersIds);

  //       console.log(result);
  //       navigate("/Messenger");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const handleDownloadPDF = async (pdfData, pdfFileName) => {
  //     const pdfName = {
  //       pdfFileName: pdfFileName,
  //     };

  //     try {
  //       const response = await axios.post(
  //         `${url}lecture/downloadLeacture`,
  //         pdfName,
  //         { responseType: "blob" }
  //       );
  //       // Create a Blob from the response data
  //       const blob = new Blob([response.data], { type: "application/pdf" });

  //       // Create a download link and trigger the download
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement("a");
  //       a.href = url;
  //       a.download = pdfFileName; // Set the filename for the download
  //       document.body.appendChild(a);
  //       a.click();

  //       // Clean up the URL object
  //       window.URL.revokeObjectURL(url);

  //       // window.location.href = url;
  //     } catch (err) {
  //       console.log(err?.response?.data?.message);
  //     }
  //   };

  return (
    <div style={{ marginBottom: 30 }}>
      <Typography
        style={{
          marginTop: 40,

          fontSize: 30,
          color: "#212A3E",
          fontWeight: "500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        All Available Carpenter
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{
          marginTop: 40,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              width: "85%",
              height: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <CardContent>
              {/* <Typography variant="h6">{data?.MentorName}</Typography> */}
              {/* <Typography variant="body2">{data?.lectureName}</Typography> */}
              <Typography variant="body2">
                {/* {data?.lectureDescription} */}
              </Typography>

              <img
                //   onClick={() =>
                //     handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
                //   }
                src={Carpenter}
                alt="PDF"
                style={{
                  width: "100%",
                  height: 200,
                }}
              />

              <Typography
                style={{
                  marginTop: 2,

                  fontSize: 18,
                  color: "#212A3E",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Rohail Awais
              </Typography>

              <Typography
                style={{
                  marginTop: 3,
                  fontSize: 14,
                  color: "#212A3E",
                  fontWeight: "500",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Expert Carpenter with 6 years of experience located at Fareed
                Town
              </Typography>
              <Button
                //   onClick={() => {
                //     CreateConversation(data?.refOfUser);
                //   }}
                style={{
                  display: "flex",

                  marginTop: 15,
                  backgroundColor: "#1976D2",
                  width: "100%",
                  height: 40,
                  color: "white",
                }}
              >
                Message
              </Button>
              <Button
                //   onClick={() => {
                //     CreateConversation(data?.refOfUser);
                //   }}
                onClick={()=>navigate('/payment')}
                style={{
                  display: "flex",

                  marginTop: 10,
                  backgroundColor: "pink",
                  width: "100%",
                  height: 40,
                  color: "black",
                }}
              >
                Book Service
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              width: "85%",
              height: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <CardContent>
              {/* <Typography variant="h6">{data?.MentorName}</Typography> */}
              {/* <Typography variant="body2">{data?.lectureName}</Typography> */}
              <Typography variant="body2">
                {/* {data?.lectureDescription} */}
              </Typography>

              <img
                //   onClick={() =>
                //     handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
                //   }
                src={Carpenter}
                alt="PDF"
                style={{
                  width: "100%",
                  height: 200,
                }}
              />

              <Typography
                style={{
                  marginTop: 2,

                  fontSize: 18,
                  color: "#212A3E",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Talha Ijaz
              </Typography>

              <Typography
                style={{
                  marginTop: 2,
                  fontSize: 14,
                  color: "#212A3E",
                  fontWeight: "500",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Expert Carpenter with 4 years of experience located at
                Pakpattan chowk
              </Typography>
              <Button
                //   onClick={() => {
                //     CreateConversation(data?.refOfUser);
                //   }}
                style={{
                  display: "flex",

                  marginTop: 15,
                  backgroundColor: "#1976D2",
                  width: "100%",
                  height: 40,
                  color: "white",
                }}
              >
                Message
              </Button>
              <Button
                //   onClick={() => {
                //     CreateConversation(data?.refOfUser);
                //   }}
                onClick={()=>navigate('/payment')}
                style={{
                  display: "flex",

                  marginTop: 10,
                  backgroundColor: "pink",
                  width: "100%",
                  height: 40,
                  color: "black",
                }}
              >
                Book Service
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              width: "85%",
              height: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <CardContent>
              {/* <Typography variant="h6">{data?.MentorName}</Typography> */}
              {/* <Typography variant="body2">{data?.lectureName}</Typography> */}
              <Typography variant="body2">
                {/* {data?.lectureDescription} */}
              </Typography>

              <img
                //   onClick={() =>
                //     handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
                //   }
                src={Carpenter}
                alt="PDF"
                style={{
                  width: "100%",
                  height: 200,
                }}
              />

              <Typography
                style={{
                  marginTop: 2,

                  fontSize: 18,
                  color: "#212A3E",
                  fontWeight: "600",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Rana Abdul Hanan
              </Typography>

              <Typography
                style={{
                  marginTop: 2,
                  fontSize: 14,
                  color: "#212A3E",
                  fontWeight: "500",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Expert Carpenter with 3 years of experience located at
                Pakpattan chowk
              </Typography>
              <Button
                //   onClick={() => {
                //     CreateConversation(data?.refOfUser);
                //   }}
                style={{
                  display: "flex",

                  marginTop: 15,
                  backgroundColor: "#1976D2",
                  width: "100%",
                  height: 40,
                  color: "white",
                }}
              >
                Message
              </Button>
              <Button
                //   onClick={() => {
                //     CreateConversation(data?.refOfUser);
                //   }}
                onClick={()=>navigate('/payment')}
                style={{
                  display: "flex",

                  marginTop: 10,
                  backgroundColor: "pink",
                  width: "100%",
                  height: 40,
                  color: "black",
                }}
              >
                Book Service
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CarPenter;
