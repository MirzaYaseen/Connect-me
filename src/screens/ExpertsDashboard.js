import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { BiSolidTrashAlt } from "react-icons/bi";
import pdf from "../assets/images/pdf.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import chatIcon from "../assets/images/chatIcon.png";
import ExpertsTools from "../assets/images/expbg.jpg";
import women from "../assets/images/women.jpeg";
// var urlBackend = process.env.REACT_APP_API_KEY;
const ExpertsDashboard = () => {
  //   const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  //   const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [Ask, setAsk] = useState(false);
  const dividerStyle = {
    width: 1,
    backgroundColor: "skyblue",
    height: "100%",
    marginRight: 10,
  };
  //   const [Id, setId] = useState(false);
  //   const [lectureName, setLectureName] = useState("");
  //   const [lectureLink, setLectureLink] = useState("");
  //   const [lectureDescription, setLectureDescription] = useState("");
  //   const [attachments, setAttachments] = useState("");

  //   const [MentorLecture, setMentorLecture] = useState([]);
  //   const [getLectureAgain, setgetLectureAgain] = useState(true);
  //   const [pdfURL, setPdfURL] = useState("");

  //   useEffect(() => {
  //     const getMentorLectures = async () => {
  //       const userId = {
  //         id: userdetails?._id,
  //       };

  //       try {
  //         const result = await axios.post(
  //           `${urlBackend}lecture/getMentorLectures`,
  //           userId
  //         );
  //         console.log(result?.data?.data);
  //         setMentorLecture(result?.data?.data);
  //       } catch (err) {
  //         toast.error(err?.response?.data?.message);
  //       }
  //     };
  //     getMentorLectures();
  //   }, [getLectureAgain]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const handleDownloadPDF = async (pdfData, pdfFileName) => {
  //     const pdfName = {
  //       pdfFileName: pdfFileName,
  //     };

  //     try {
  //       const response = await axios.post(
  //         `${urlBackend}lecture/downloadLeacture`,
  //         pdfName,
  //         { responseType: "blob" }
  //       );

  //       const blob = new Blob([response.data], { type: "application/pdf" });

  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement("a");
  //       a.href = url;
  //       a.download = pdfFileName;
  //       document.body.appendChild(a);
  //       a.click();

  //       window.URL.revokeObjectURL(url);
  //     } catch (err) {
  //       console.log(err?.response?.data?.message);
  //     }
  //   };

  //   const handleDelete = async () => {
  //     try {
  //       const result = await axios.delete(
  //         `${urlBackend}lecture/deleteLecture/${Id}`
  //       );
  //       setAsk(false);
  //       setId("");
  //       setgetLectureAgain(!getLectureAgain);
  //       toast.success("Deleted Successfully");
  //     } catch (err) {
  //       toast.error(err?.response?.data?.message);
  //     }
  //   };

  //   const handleUpload = async () => {
  //     console.log("Lecture Name:", lectureName);
  //     console.log("Lecture Description:", lectureDescription);
  //     console.log("Attachments:", attachments);

  //     if (
  //       lectureName.trim() === "" ||
  //       lectureLink.trim() === "" ||
  //       lectureDescription.trim() === "" ||
  //       attachments === ""
  //     ) {
  //       toast.error("Please enter all fields");
  //     } else {
  //       const lectureDetails = new FormData();
  //       lectureDetails.append("pdfFile", attachments);
  //       lectureDetails.append("lectureName", lectureName);
  //       lectureDetails.append("lectureLink", lectureLink);
  //       lectureDetails.append("lectureDescription", lectureDescription);
  //       lectureDetails.append("refOfUser", userdetails?._id);
  //       lectureDetails.append("category", userdetails?.subject);
  //       lectureDetails.append("MentorName", userdetails?.name);

  //       try {
  //         const result = await axios.post(
  //           `${urlBackend}lecture/addLecture`,
  //           lectureDetails
  //         );

  //         console.log(result);

  //         toast.success("Lecture added successfully");
  //         setgetLectureAgain(!getLectureAgain);
  //         setLectureName("");
  //         setLectureLink("");
  //         setLectureDescription("");
  //         setAttachments("");
  //         setOpen(false);
  //       } catch (err) {
  //         toast.error(err?.response?.data?.message);
  //       }
  //     }
  //   };
  const iconStyles = {
    fontSize: 30,
    color: "#1565C0",
    // marginLeft: 5,
    marginBottom: 25,
  };

  //   const handleOpenChat = () => {
  //     navigate("/Messenger");
  //   };
  return (
    <div
      style={{
        // backgroundImage: `url(${ExpertsTools})`,
        padding: "20px",

        // backgroundSize:'cover'
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
        theme="dark"
      />
      <div style={{ display: "flex" }}>
        <Typography
          variant="h4"
          style={{
            marginTop: 100,
            marginLeft: 10,
            fontSize: 30,

            color: "#212A3E",
            fontWeight: "700",
          }}
        >
          CONNECT ME
        </Typography>
        <Button
          //   onClick={handleOpenChat}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "15px",
            marginTop: "100px",
          }}
        >
          <FontAwesomeIcon icon={faComments} style={iconStyles} />
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          style={{
            marginLeft: 10,
            fontSize: 25,
            fontFamily: "Roboto",
          }}
        >
          Welcome, Roahil
          {/* {userdetails?.name} */}
        </Typography>
        <div>
          <Button
            style={{
              marginTop: "10px",
              marginRight: "80px",
              fontSize: "17px",
              fontFamily: "Roboto",
              backgroundColor: "#3f51b5",
              color: "#fff",
              textAlign: "center",
            }}
            onClick={handleOpen}
          >
            Add Service
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="upload-lecture-modal"
            aria-describedby="upload-lecture-description"
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background:
                  "linear-gradient(to left,  #87CEEB, #87CEEB, #F5F5F5)",
                padding: "20px",
                width: "400px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Typography
                style={{ textAlign: "center", fontSize: 25, fontWeight: "500" }}
                variant="h6"
              >
                Add Service
              </Typography>
              <TextField
                label="Service Name"
                fullWidth
                // value={lectureName}
                // onChange={(e) => setLectureName(e.target.value)}
                margin="normal"
              />

              <TextField
                label="Pin Location"
                fullWidth
                // value={lectureLink}
                // onChange={(e) => setLectureLink(e.target.value)}
                margin="normal"
              />
              <TextField
                label="Skills Description"
                fullWidth
                multiline
                rows={4}
                // value={lectureDescription}
                // onChange={(e) => setLectureDescription(e.target.value)}
                margin="normal"
              />
              {/* <input
                type="file"
                
                onChange={(e) => setAttachments(e.target.files[0])}
                style={{ marginTop: "16px" }}
              /> */}
              <Button
                // onClick={() => {
                //   handleUpload();
                // }}
                variant="contained"
                color="primary"
                style={{ marginTop: "16px", width: 200, marginLeft: 100 }}
              >
                Add Service
              </Button>
            </div>
          </Modal>
          {/* Modal for asking if you want to delete or not */}
          <Modal
            open={Ask}
            onClose={handleClose}
            aria-labelledby="upload-lecture-modal"
            aria-describedby="upload-lecture-description"
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                width: "400px",
              }}
            >
              <p
                style={{
                  margin: "5px",
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Want to delete the Service?
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  //   onClick={handleDelete}
                  variant="contained"
                  color="primary"
                  style={{ margin: "10px" }}
                >
                  Confirm
                </Button>
                <Button
                  onClick={() => {
                    setAsk(false);
                  }}
                  variant="outlined"
                  style={{ margin: "10px" }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <Typography
        style={{
          marginTop: 10,
          marginLeft: 10,
          fontSize: 30,
          fontFamily: "Roboto",
        }}
      >
        Experties
      </Typography>
      {/* <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
        {MentorLecture.length > 0 ? (
          MentorLecture.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} md={4}
               key={data._id}
               >
                <Card
                  style={{
                    width: 450,
                    height: 300,
                    margin: "auto",
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h5">
                        Lecture {index + 1}: {data?.lectureName}
                      </Typography>
                      <BiSolidTrashAlt
                        style={{ cursor: "pointer" }}
                        color="red"
                        size={22}
                        onClick={() => {
                          setAsk(true);
                          setId(data._id);
                        }}
                      />
                    </div>
                    <Typography variant="body2">
                      {data?.lectureDescription}
                    </Typography>
                  </CardContent>
                  <img
                    onClick={() =>
                      handleDownloadPDF(data.pdfData, data.lecturePdfLocation)
                    }
                    src={pdf}
                    alt="PDF"
                    style={{ width: 80, height: 80, cursor: "pointer" }}
                  />
                  <br />
                  <div style={{ marginLeft: "10px", width: 250 }}>
                    <a href={data?.lectureLink}>Link: {data?.lectureLink}</a>
                  </div>
                </Card>
              </Grid>
            );
          })
        ) : (
          <p>No Expert yet :(</p>
        )} 
      </Grid> */}

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
        <div style={{ width: 300 }}>
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
            You can Live chat with the service Procider for any further queries
            or Advance booking
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
            $5/Hour
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ExpertsDashboard;
