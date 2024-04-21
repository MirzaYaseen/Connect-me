import React,{useState,useEffect} from "react";
import { Typography, Card, CardContent, Grid, Button,  Divider, } from "@mui/material";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import pdf from "../assets/images/pdf.png";
import { ToastContainer, toast } from 'react-toastify';
import women from "../assets/images/women.jpeg";
var url = process.env.REACT_APP_API_KEY;


const ViewAllServiceProviders = () => {
  const Services = JSON.parse(localStorage.getItem("Services"));
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  const mentorId = localStorage.getItem('ServiceProviderId');
  const [value, setValue] = useState(0);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const CreateConversation = async (receiver) => {
    const usersIds = {
      senderId: userdetails?._id,
      receiverId: receiver,
    };
    try {
      const result = await axios.post(`${url}conversation`, usersIds);

      console.log(result);
      navigate("/Messenger");
    } catch (err) {
      console.log(err);
    }
  };

  const dividerStyle = {
    width: 1,
    backgroundColor: "skyblue",
    height: "100%",
    marginRight:20,
  };

  useEffect(() => {
    const getReviews = async () => {
      try {
        const result = await axios.get(
          `${url}review/getProductReview/${mentorId}`
        );

        setReviews(result?.data?.data);
      } catch (err) {
        toast.error(err?.response?.data?.message);
        console.log('===>', err)
      }
    };

    getReviews();
  }, [value]);

  
  return (
    <div style={{ marginBottom: 30, padding:20 }}>
      <Typography
        style={{
          marginTop: 20,
          marginLeft: 70,
          fontSize: 30,
          color: "#212A3E",
          fontWeight: "500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: 40 }}>
        {Services ? (
          Services.map((data) => {
            return (
              <div
                  style={{
                    marginTop: 20,
                    width: "95%",
                    height: 250,
                    borderRadius: 20,
                    display: "flex",
                    justifyContent: "space-between",
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
                      alt="img"
                    />
                  </div>
                  <div style={{ marginRight: "auto", width: "70%" }}>
                    <Typography
                      style={{ marginTop: 10, fontSize: 25, marginLeft: 30 }}
                    >
                      {data?.takerName}
                    </Typography>
                    <Typography style={{ fontSize: 16, marginLeft: 30 }}>
                      {data?.category}
                    </Typography>
                    <Typography
                      style={{
                        marginTop: 30,
                        fontSize: 13,
                        // width:200,
                        color: "GrayText",
                        marginRight: 400,
                        marginLeft: 30,
                      }}
                    >
                      {data?.serviceDescription}
                    </Typography>
                  </div>
                  <Divider orientation="vertical" style={dividerStyle} />
                  <div style={{ width: 310 }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Button
                        onClick={() => {
                          CreateConversation(data?.refOfUser);
                        }}
                        style={{
                          backgroundColor: "#87CEEB",
                          width: 150,
                          borderRadius: 30,
                          color: "white",
                          fontWeight: "600",
                          marginLeft: "auto",
                          marginRight: "auto",
                          display: "flex",
                          marginBottom: 10,
                        }}
                      >
                        Live Chat
                      </Button>
                      <Button
                        onClick={() => navigate("/payment")}
                        style={{
                          backgroundColor: "cornflowerblue",
                          width: 150,
                          borderRadius: 30,
                          color: "white",
                          fontWeight: "600",
                          marginLeft: "auto",
                          marginRight: "auto",
                          display: "flex",
                          marginBottom: 10,
                        }}
                      >
                        Book Service
                      </Button>
                    </div>
                    <Button
                      onClick={() => {
                        localStorage.setItem(
                          "ServiceProviderId",
                          data?.refOfUser
                        );
                        navigate("/reviews");
                      }}
                      style={{
                        backgroundColor: "orange",
                        width: 300,
                        borderRadius: 30,
                        color: "white",
                        fontWeight: "600",
                        marginTop: 5,
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                      }}
                    >
                      Give Review
                    </Button>
                    <Typography
                      style={{
                        textAlign: "center",
                        marginTop: 10,
                        fontSize: 12,
                      }}
                    >
                      what I can expect from this Seller
                    </Typography>
                    <Divider />
                    <Typography
                      style={{
                        textAlign: "center",
                        marginTop: 10,
                        fontSize: 12,
                      }}
                    >
                      Unlimited Chat, email or text
                    </Typography>
                    <Divider />
                    <Typography
                      style={{
                        textAlign: "center",
                        marginTop: 10,
                        fontSize: 12,
                      }}
                    >
                      Up to 4 calls per month
                    </Typography>
                    <Divider />
                    <Typography
                      style={{
                        textAlign: "center",
                        marginTop: 10,
                        fontSize: 22,
                      }}
                    >
                      {data?.price}/Month
                    </Typography>
                  </div>
                </div>
            );
          })
        ) : (
          <p>No Service available</p>
        )}
      </Grid>
    </div>
  );
};

export default ViewAllServiceProviders;
