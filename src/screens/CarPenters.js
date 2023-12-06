// import React from "react";
// import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import Electircian from "../assets/images/electrician.jpg";
// import Air from "../assets/images/air.jpg";
// import Carpenter from "../assets/images/carpenter.jpg";
// import Painter from "../assets/images/painter.jpg";
// import axios from "axios";
// import pdf from "../assets/images/pdf.png";

// // var url = process.env.REACT_APP_API_KEY;
// const CarPenter = () => {
//   //   const Lectures = JSON.parse(localStorage.getItem("Lectures"));
//   //   const userdetails = JSON.parse(localStorage.getItem("userdetails"));
//     const navigate = useNavigate();

//   //   const CreateConversation = async (receiver) => {
//   //     const usersIds = {
//   //       senderId: userdetails?._id,
//   //       receiverId: receiver,
//   //     };
//   //     try {
//   //       const result = await axios.post(`${url}conversation`, usersIds);

//   //       console.log(result);
//   //       navigate("/Messenger");
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   };

//   //   const handleDownloadPDF = async (pdfData, pdfFileName) => {
//   //     const pdfName = {
//   //       pdfFileName: pdfFileName,
//   //     };

//   //     try {
//   //       const response = await axios.post(
//   //         `${url}lecture/downloadLeacture`,
//   //         pdfName,
//   //         { responseType: "blob" }
//   //       );
//   //       // Create a Blob from the response data
//   //       const blob = new Blob([response.data], { type: "application/pdf" });

//   //       // Create a download link and trigger the download
//   //       const url = window.URL.createObjectURL(blob);
//   //       const a = document.createElement("a");
//   //       a.href = url;
//   //       a.download = pdfFileName; // Set the filename for the download
//   //       document.body.appendChild(a);
//   //       a.click();

//   //       // Clean up the URL object
//   //       window.URL.revokeObjectURL(url);

//   //       // window.location.href = url;
//   //     } catch (err) {
//   //       console.log(err?.response?.data?.message);
//   //     }
//   //   };

//   return (
//     <div style={{ marginBottom: 30 }}>
//       <Typography
//         style={{
//           marginTop: 40,

//           fontSize: 30,
//           color: "#212A3E",
//           fontWeight: "500",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//         }}
//       >
//         All Available Carpenter
//       </Typography>

//       <Grid
//         container
//         spacing={2}
//         justifyContent="center"
//         style={{
//           marginTop: 40,
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "space-evenly",
//         }}
//       >
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             style={{
//               width: "85%",
//               height: "100%",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//           >
//             <CardContent>
//               {/* <Typography variant="h6">{data?.MentorName}</Typography> */}
//               {/* <Typography variant="body2">{data?.lectureName}</Typography> */}
//               <Typography variant="body2">
//                 {/* {data?.lectureDescription} */}
//               </Typography>

//               <img
//                 //   onClick={() =>
//                 //     handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
//                 //   }
//                 src={Carpenter}
//                 alt="PDF"
//                 style={{
//                   width: "100%",
//                   height: 200,
//                 }}
//               />

//               <Typography
//                 style={{
//                   marginTop: 2,

//                   fontSize: 18,
//                   color: "#212A3E",
//                   fontWeight: "600",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//               >
//                 Rohail Awais
//               </Typography>

//               <Typography
//                 style={{
//                   marginTop: 3,
//                   fontSize: 14,
//                   color: "#212A3E",
//                   fontWeight: "500",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//               >
//                 Expert Carpenter with 6 years of experience located at Fareed
//                 Town
//               </Typography>
//               <Button
//                 //   onClick={() => {
//                 //     CreateConversation(data?.refOfUser);
//                 //   }}
//                 style={{
//                   display: "flex",

//                   marginTop: 15,
//                   backgroundColor: "#1976D2",
//                   width: "100%",
//                   height: 40,
//                   color: "white",
//                 }}
//               >
//                 Message
//               </Button>
//               <Button
//                 //   onClick={() => {
//                 //     CreateConversation(data?.refOfUser);
//                 //   }}
//                 onClick={()=>navigate('/payment')}
//                 style={{
//                   display: "flex",

//                   marginTop: 10,
//                   backgroundColor: "pink",
//                   width: "100%",
//                   height: 40,
//                   color: "black",
//                 }}
//               >
//                 Book Service
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             style={{
//               width: "85%",
//               height: "100%",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//           >
//             <CardContent>
//               {/* <Typography variant="h6">{data?.MentorName}</Typography> */}
//               {/* <Typography variant="body2">{data?.lectureName}</Typography> */}
//               <Typography variant="body2">
//                 {/* {data?.lectureDescription} */}
//               </Typography>

//               <img
//                 //   onClick={() =>
//                 //     handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
//                 //   }
//                 src={Carpenter}
//                 alt="PDF"
//                 style={{
//                   width: "100%",
//                   height: 200,
//                 }}
//               />

//               <Typography
//                 style={{
//                   marginTop: 2,

//                   fontSize: 18,
//                   color: "#212A3E",
//                   fontWeight: "600",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//               >
//                 Talha Ijaz
//               </Typography>

//               <Typography
//                 style={{
//                   marginTop: 2,
//                   fontSize: 14,
//                   color: "#212A3E",
//                   fontWeight: "500",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//               >
//                 Expert Carpenter with 4 years of experience located at
//                 Pakpattan chowk
//               </Typography>
//               <Button
//                 //   onClick={() => {
//                 //     CreateConversation(data?.refOfUser);
//                 //   }}
//                 style={{
//                   display: "flex",

//                   marginTop: 15,
//                   backgroundColor: "#1976D2",
//                   width: "100%",
//                   height: 40,
//                   color: "white",
//                 }}
//               >
//                 Message
//               </Button>
//               <Button
//                 //   onClick={() => {
//                 //     CreateConversation(data?.refOfUser);
//                 //   }}
//                 onClick={()=>navigate('/payment')}
//                 style={{
//                   display: "flex",

//                   marginTop: 10,
//                   backgroundColor: "pink",
//                   width: "100%",
//                   height: 40,
//                   color: "black",
//                 }}
//               >
//                 Book Service
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             style={{
//               width: "85%",
//               height: "100%",
//               marginLeft: "auto",
//               marginRight: "auto",
//             }}
//           >
//             <CardContent>
//               {/* <Typography variant="h6">{data?.MentorName}</Typography> */}
//               {/* <Typography variant="body2">{data?.lectureName}</Typography> */}
//               <Typography variant="body2">
//                 {/* {data?.lectureDescription} */}
//               </Typography>

//               <img
//                 //   onClick={() =>
//                 //     handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
//                 //   }
//                 src={Carpenter}
//                 alt="PDF"
//                 style={{
//                   width: "100%",
//                   height: 200,
//                 }}
//               />

//               <Typography
//                 style={{
//                   marginTop: 2,

//                   fontSize: 18,
//                   color: "#212A3E",
//                   fontWeight: "600",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//               >
//                 Rana Abdul Hanan
//               </Typography>

//               <Typography
//                 style={{
//                   marginTop: 2,
//                   fontSize: 14,
//                   color: "#212A3E",
//                   fontWeight: "500",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//               >
//                 Expert Carpenter with 3 years of experience located at
//                 Pakpattan chowk
//               </Typography>
//               <Button
//                 //   onClick={() => {
//                 //     CreateConversation(data?.refOfUser);
//                 //   }}
//                 style={{
//                   display: "flex",

//                   marginTop: 15,
//                   backgroundColor: "#1976D2",
//                   width: "100%",
//                   height: 40,
//                   color: "white",
//                 }}
//               >
//                 Message
//               </Button>
//               <Button
//                 //   onClick={() => {
//                 //     CreateConversation(data?.refOfUser);
//                 //   }}
//                 onClick={()=>navigate('/payment')}
//                 style={{
//                   display: "flex",

//                   marginTop: 10,
//                   backgroundColor: "pink",
//                   width: "100%",
//                   height: 40,
//                   color: "black",
//                 }}
//               >
//                 Book Service
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default CarPenter;



import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import women from "../assets/images/women.jpeg";
export default function CarPenter() {
  const dividerStyle = {
    width: 1,
    backgroundColor: "skyblue",
    height: "100%",
    marginRight:10 
  };
  return (
    <div style={{ padding: 30 }}>
      <div style={{ marginTop: 50, marginLeft:10 }}>
        <Typography>89 Services Available</Typography>
      </div>
      <div
        style={{
          marginTop: 20,
          width: "97%",
          height: 200,
          borderRadius: 20,
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          // alignSelf: "center",
          borderStyle: "solid",
          borderWidth: 2,
          flexDirection: "row",
          borderColor: "green",

          padding: 20,
        }}
      >
        <div>
          <img
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              borderColor: "#87CEEB",
              borderWidth: 5,
              borderStyle: "solid",
            }}
            src={women}
            alt="Profile"
          />
        </div>
        <div>
          <Typography style={{ marginTop: 10, fontSize: 25, marginLeft: 30 }}>
            Leslie Alexender
          </Typography>
          <Typography style={{ fontSize: 16, marginLeft: 30 }}>
            Carpenter Expert
          </Typography>
          <Typography
            style={{
              marginTop: 30,
              fontSize: 12,
              color: "GrayText",
              marginRight: 400,
              marginLeft: 30,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <Divider orientation="vertical" style={dividerStyle} />
        <div style={{  width: 300 }}>
          
          <Button
            style={{
              backgroundColor: "#87CEEB",
              width: 200,
              borderRadius: 30,
              color: "black",
              fontWeight: "600",
            }}
          >
            Live Chat
          </Button>
          <Typography
            style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
          >
            what I can expect from this Seller
          </Typography>
          <Divider />
          <Typography
            style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
          >
            Unlimited Chat, email or text
          </Typography>
          <Divider />
          <Typography
            style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
          >
            Up to 4 calls per month
          </Typography>
          <Divider />
          <Typography
            style={{ textAlign: "center", marginTop: 30, fontSize: 22 }}
          >
            $240/Month
          </Typography>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          width: "97%",
          height: 200,
          borderRadius: 20,
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          // alignSelf: "center",
          borderStyle: "solid",
          borderWidth: 2,
          flexDirection: "row",
          borderColor: "green",

          padding: 20,
        }}
      >
        <div>
          <img
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              borderColor: "#87CEEB",
              borderWidth: 5,
              borderStyle: "solid",
            }}
            src={women}
            alt="Profile"
          />
        </div>
        <div>
          <Typography style={{ marginTop: 10, fontSize: 25, marginLeft: 30 }}>
            Leslie Alexender
          </Typography>
          <Typography style={{ fontSize: 16, marginLeft: 30 }}>
            Carpenter Expert
          </Typography>
          <Typography
            style={{
              marginTop: 30,
              fontSize: 12,
              color: "GrayText",
              marginRight: 400,
              marginLeft: 30,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <Divider orientation="vertical" style={dividerStyle} />
        <div style={{  width: 300 }}>
          
          <Button
            style={{
              backgroundColor: "#87CEEB",
              width: 200,
              borderRadius: 30,
              color: "black",
              fontWeight: "600",
            }}
          >
            Live Chat
          </Button>
          <Typography
            style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
          >
            what I can expect from this Seller
          </Typography>
          <Divider />
          <Typography
            style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
          >
            Unlimited Chat, email or text
          </Typography>
          <Divider />
          <Typography
            style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
          >
            Up to 4 calls per month
          </Typography>
          <Divider />
          <Typography
            style={{ textAlign: "center", marginTop: 30, fontSize: 22 }}
          >
            $240/Month
          </Typography>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          width: "97%",
          height: 200,
          borderRadius: 20,
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          // alignSelf: "center",
          borderStyle: "solid",
          borderWidth: 2,
          flexDirection: "row",
          borderColor: "green",

          padding: 20,
        }}
      >
        <div>
          <img
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              borderColor: "#87CEEB",
              borderWidth: 5,
              borderStyle: "solid",
            }}
            src={women}
            alt="Profile"
          />
        </div>
        <div>
          <Typography style={{ marginTop: 10, fontSize: 25, marginLeft: 30 }}>
            Leslie Alexender
          </Typography>
          <Typography style={{ fontSize: 16, marginLeft: 30 }}>
            Carpenter Expert
          </Typography>
          <Typography
            style={{
              marginTop: 30,
              fontSize: 12,
              color: "GrayText",
              marginRight: 400,
              marginLeft: 30,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <Divider orientation="vertical" style={dividerStyle} />
        <div style={{  width: 300 }}>
          
          <Button
            style={{
              backgroundColor: "#87CEEB",
              width: 200,
              borderRadius: 30,
              color: "black",
              fontWeight: "600",
            }}
          >
            Live Chat
          </Button>
          <Typography
            style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
          >
            what I can expect from this Seller
          </Typography>
          <Divider />
          <Typography
            style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
          >
            Unlimited Chat, email or text
          </Typography>
          <Divider />
          <Typography
            style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
          >
            Up to 4 calls per month
          </Typography>
          <Divider />
          <Typography
            style={{ textAlign: "center", marginTop: 30, fontSize: 22 }}
          >
            $240/Month
          </Typography>
        </div>
      </div>
    </div>
  );
}
