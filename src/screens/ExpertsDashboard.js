import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
  MenuItem,
  Select,
} from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { BiSolidTrashAlt } from "react-icons/bi";
// import pdf from "../assets/images/pdf.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import chatIcon from "../assets/images/chatIcon.png";
import ExpertsTools from "../assets/images/expbg.jpg";
import women from "../assets/images/women.jpeg";
var urlBackend = process.env.REACT_APP_API_KEY;

const ExpertsDashboard = () => {
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [Ask, setAsk] = useState(false);
  const dividerStyle = {
    width: 1,
    backgroundColor: "skyblue",
    height: "100%",
    marginRight: 10,
  };
  const [Id, setId] = useState(false);
  const [takerName, setTakerName] = useState(""); //service Provider name
  const [serviceLink, setServiceLink] = useState(""); //service name
  const [serviceDescription, setServiceDescription] = useState(""); //service description
  const [serviceName, setServiceName] = useState("");
  const [category, setCategory] = useState("");
  const [serviceProvider, setServiceProvider] = useState([]);
  const [price, setPrice] = useState("");
  const [getServiceAgain, setgetServiceAgain] = useState(true);
  // const [pdfURL, setPdfURL] = useState("");
  const [reviews, setReviews] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getServiceProvider = async () => {
      const userId = {
        id: userdetails?._id,
      };

      try {
        const result = await axios.post(
          `${urlBackend}service/getServiceProvider`,
          userId
        );
        console.log(result?.data?.data);
        setServiceProvider(result?.data?.data);
        const getReviews = async () => {
          try {
            const result = await axios.get(
              `${urlBackend}review/getProductReview/${userdetails?._id}`
            );

            setReviews(result?.data?.data);
          } catch (err) {
            toast.error(err?.response?.data?.message);
          }
        };

        getReviews();
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    };
    getServiceProvider();
  }, [getServiceAgain]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDelete = async () => {
    try {
      const result = await axios.delete(
        `${urlBackend}service/deleteService/${Id}`
      );
      setAsk(false);
      setId("");
      setgetServiceAgain(!getServiceAgain);
      toast.success("Deleted Successfully");
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };


  const handleUpload = async () => {
    console.log("Service Name:", takerName);
    console.log("Service Description:", serviceDescription);
    console.log("Service price:", price);
   

    if (
      takerName.trim() === "" ||
      // lectureLink.trim() === "" ||
      // serviceName.trim() === "" ||
      price.trim() === "" ||
      // category.trim() === "" ||
      serviceDescription.trim() === ""
    ) {
      toast.error("Please enter all fields");
    } else {
      const serviceDetails = new FormData();
      serviceDetails.append("takerName", takerName);
      // lectureDetails.append("serviceName", serviceName);
      // lectureDetails.append("CategoryName", category);
      serviceDetails.append("price", price);
      // lectureDetails.append("lectureLink", lectureLink);
      serviceDetails.append("serviceDescription", serviceDescription);
      serviceDetails.append("refOfUser", userdetails?._id);
      serviceDetails.append("category", userdetails?.subject);
      // serviceDetails.append("ServiceName", userdetails?.name);

      try {
        const result = await axios.post(
          `${urlBackend}service/addService`,
          serviceDetails
        );

        console.log(result);

        toast.success("Service added successfully");
        setgetServiceAgain(!getServiceAgain);
        setTakerName("");
        // setLectureLink("");
        // setServiceName("");
        // setCategory("");
        setPrice("");
        setServiceDescription("");
        setOpen(false);
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
  };
  const iconStyles = {
    fontSize: 30,
    color: "#1565C0",
    // marginLeft: 5,
    marginBottom: 25,
  };

  const handleOpenChat = () => {
    navigate("/Messenger");
  };
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
            marginTop: 20,
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
            marginTop: "20px",
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
          Welcome, {userdetails?.name}
        </Typography>
        <div>
          <Button
            style={{
              marginTop: "10px",
              marginRight: "20px",
              fontSize: "17px",
              fontFamily: "Roboto",
              backgroundColor: "#87CEEB",
              color: "black",
              textAlign: "center",
              width:200
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
                label="Service Provider Name"
                fullWidth
                value={takerName}
                onChange={(e) => setTakerName(e.target.value)}
                margin="normal"
              />
              {/* 
              <TextField
                label="Service Name"
                fullWidth
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                margin="normal"
              /> */}
              <TextField
                label="Service Price"
                fullWidth
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                margin="normal"
              />
              {/* <TextField
                select
                label="Category Name"
                fullWidth
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                margin="normal"
              >
                <MenuItem value="Electrician">Electrician</MenuItem>
                <MenuItem value="Air Conditioner">Air Conditioner</MenuItem>
                <MenuItem value="Carpenter">Carpenter</MenuItem>
                <MenuItem value="Painter">Painter</MenuItem>
              </TextField> */}
              <TextField
                label="Skills Description"
                fullWidth
                multiline
                rows={4}
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                margin="normal"
              />
              {/* <input
                type="file"
                onChange={handleImageChange} // Call handleImageChange when an image is selected
                style={{ marginTop: "16px" }}
              />
              {selectedImage && ( // Display the selected image if available
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ marginTop: "16px", maxWidth: "100%" }}
                />
              )} */}
              <Button
                onClick={() => {
                  handleUpload();
                }}
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
                  onClick={handleDelete}
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
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{
          marginTop: "20px",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {serviceProvider.length > 0 ? (
          serviceProvider.map((data, index) => {
            return (
              <div
                key={data._id}
                style={{
                  marginTop: 20,
                  width: "95%",
                  height: 250,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  // alignItems: "center",
                  // alignSelf: "center",
                  borderStyle: "solid",
                  borderWidth: 2,
                  flexDirection: "row",
                  borderColor: "green",
                  // marginLeft:'auto', marginRight:'auto',

                  padding: 20,
                }}
              >
                  <div>
          {data.imageURl ? (
            <img
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                borderColor: "#87CEEB",
                borderWidth: 5,
                borderStyle: "solid",
              }}
              src={data.imageURl}
              alt="Profile"
            />
          ) : (
            <img
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                borderColor: "#87CEEB",
                borderWidth: 5,
                borderStyle: "solid",
              }}
              src={selectedImage || women} 
              alt="Profile"
            />
          )}
        </div>
                <div style={{ marginRight: "auto", width: "70%" }}>
                  <Typography
                    style={{ marginTop: 10, fontSize: 25, marginLeft: 30 }}
                  >
                    {data?.takerName}
                  </Typography>
                  {/* <Typography style={{ fontSize: 16, marginLeft: 30 }}>
                  Service # {index + 1}
                  </Typography> */}
                  <Typography style={{ fontSize: 16, marginLeft: 30 }}>
                    {data?.category}
                  </Typography>
                  <Typography
                    style={{
                      marginTop: 20,
                      fontSize: 12,
                      color: "GrayText",

                      // marginRight: 400,
                      marginLeft: 30,
                    }}
                  >
                    {data?.serviceDescription}
                  </Typography>
                </div>
                <Divider orientation="vertical" style={dividerStyle} />
                <div style={{ width: 300 }}>
                  <BiSolidTrashAlt
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      marginLeft: "auto",
                      marginBottom: 10,
                    }}
                    color="red"
                    size={22}
                    onClick={() => {
                      setAsk(true);
                      setId(data._id);
                    }}
                  />

                  <Button
                    onClick={handleOpenChat}
                    style={{
                      backgroundColor: "#87CEEB",
                      width: 200,
                      borderRadius: 30,
                      color: "black",
                      fontWeight: "600",
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    Live Chat
                  </Button>
                  <Button
                    onClick={() => navigate("/serviceProviderReviews")}
                    style={{
                      backgroundColor: "orange",
                      width: 200,
                      borderRadius: 30,
                      color: "white",
                      fontWeight: "600",
                      marginTop: 5,
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "flex",
                    }}
                  >
                    Read Review
                  </Button>
                  <Typography
                    style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
                  >
                    You can Live chat with the service Procider for any further
                    queries or Advance booking
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
                    style={{ textAlign: "center", marginTop: 10, fontSize: 22 }}
                  >
                    ${data?.price || '250'}/Month
                  </Typography>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Expert yet :(</p>
        )}
      </Grid>
    </div>
  );
};

export default ExpertsDashboard;
