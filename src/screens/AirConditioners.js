import React, { useState, useEffect } from "react";
import { Typography, Button, Divider } from "@mui/material";
import women from "../assets/images/women.jpeg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

var url = process.env.REACT_APP_API_KEY;

export default function AirConditioner() {
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  const SelectedCatByStudent = JSON.parse(
    localStorage.getItem("SelectedCatByServiceTaker")
  );

  const navigate = useNavigate();
  const [ServiceProvider, setServiceProvider] = useState([]);
  const [showService, setshowService] = useState(false);

  useEffect(() => {
    const getSelectedCatService = async () => {
      const cat = {
        category: SelectedCatByStudent,
      };

      try {
        const result = await axios.post(
          `${url}service/getServiceByCategory`,
          cat
        );
        const originalArray = result?.data?.data;

        localStorage.setItem("Services", JSON.stringify(result?.data?.data));
        if (result?.data?.data.length > 3) {
          setServiceProvider(originalArray.slice(0, 3));
        } else {
          setServiceProvider(result?.data?.data);
        }
        setshowService(true);
      } catch (err) {
        console.log(err?.response?.data?.message);
      }
    };
    getSelectedCatService();
  }, []);

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
    marginRight: 10,
  };

  return (
    <div style={{ padding: 30 }}>
      <div
        style={{
          marginTop: 20,
          marginLeft: 10,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography style={{ fontWeight: "600", color: "orange" }}>
          {ServiceProvider ? ServiceProvider.length : 0} Services Available
        </Typography>
        <Typography
          style={{ marginLeft: "30px", fontWeight: "600", color: "orange" }}
        >
          {" "}
          {SelectedCatByStudent?.length} Services Selected
        </Typography>
      </div>
      {showService ? (
        ServiceProvider.length < 1 ? (
          <p
            style={{
              textAlign: "center",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            No Service available in this category
          </p>
        ) : (
          <>
            <Button
              onClick={() => navigate("/viewAllServices")}
              style={{
                display: "flex",
                marginLeft: "auto",
                marginRight: 10,
                marginTop: 20,
                marginBottom: 20,
                width: 200,
                backgroundColor: "ButtonShadow",
              }}
            >
              View All
            </Button>
            {ServiceProvider.map((data) => {
              return (
                <div
                  style={{
                    marginTop: 20,
                    width: "97%",
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
            })}
          </>
        )
      ) : (
        <p>Please wait</p>
      )}
    </div>
  );
}
