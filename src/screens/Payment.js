import React, { useState, useEffect } from "react";

import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, useNavigate,useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "500px",
    // margin: "0 auto",
    display: "flex",

    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  card: {
    padding: 20, // Use theme.spacing for spacing
    borderRadius: 10,
  },
  cardElement: {
    padding: 20, // Use theme.spacing for spacing
    border: "1px solid #ccc",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5, // Use theme.spacing for spacing
  },
  inputsFields: {
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 20,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: "#007bff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "16px",
    padding: 10, // Use theme.spacing for spacing
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
  errorMessage: {
    color: "red",
    marginTop: 10, // Use theme.spacing for spacing
    textAlign: "center",
  },
  successMessage: {
    color: "green",
    marginTop: 10, // Use theme.spacing for spacing
  },
}));

var url = process.env.REACT_APP_API_KEY;

const PaymentFormContent = ({ classes }) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !cardHolderName ||
      !cardNumber ||
      !expirationDate ||
      !cvv ||
      !phoneNumber
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    // Create a payload object with the form data
    const payload = {
      cardHolderName,
      cardNumber,
      expirationDate,
      cvv,
      phoneNumber,
    };

    try {
      // Make a POST request to the payment API endpoint
      const response = await fetch(`${url}api/payment/process-payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Check if the request was successful
      if (response.ok) {
        toast.success("Payment successful!");
        console.log("Payment successful!");

        // Clear form fields
        setCardHolderName("");
        setCardNumber("");
        setExpirationDate("");
        setCvv("");
        setPhoneNumber("");
        setTimeout(() => {
          navigate("/services");
        }, 3000); // Delay navigation for 3 seconds (3000 milliseconds)
      } else {
        // Handle payment error
        toast.error("Payment failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Card
        style={{
          // backgroundColor: "red",
          width: "40%",
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 80,
        }}
      >
        <div
          style={{
            // backgroundColor: "red",

            display: "block",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 50,
          }}
        >
          <Typography
            style={{ textAlign: "center", fontSize: 35, marginTop: 30 }}
          >
            Service Payment
          </Typography>
          <TextField
            placeholder="Card Holder Name"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            style={{
              padding: 10,
              paddingLeft: 0,
              borderRadius: 20,
              width: "80%",
              marginTop: 20,
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          {/* <TextField
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={{
              padding: 10,
              paddingLeft: 0,
              borderRadius: 20,
              width: "80%",
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          /> */}
          <TextField
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => {
              const trimmedValue = e.target.value
                .replace(/\s/g, "")
                .substr(0, 16); // Remove any spaces and limit to 12 characters
              const formattedValue = trimmedValue
                .replace(/\D/g, "")
                .replace(/(\d{4})(?=\d)/g, "$1 "); // Add space after every 4 digits
              setCardNumber(formattedValue);
            }}
            style={{
              padding: 10,
              paddingLeft: 0,
              borderRadius: 20,
              width: "80%",
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginLeft: 47,
              marginRight: 47,
            }}
          >
            {/* <TextField
              placeholder="Expiration Date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              style={{
                padding: 10,
                paddingLeft: 0,
                borderRadius: 20,
                width: "45%",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            /> */}
            <TextField
              placeholder="Expiration Date"
              value={expirationDate}
              onChange={(e) => {
                const trimmedValue = e.target.value
                  .replace(/\s/g, "")
                  .substr(0, 5); // Remove any spaces and limit to 4 characters
                const formattedValue = trimmedValue
                  .replace(/\D/g, "")
                  .replace(/(\d{2})(?=\d)/, "$1/"); // Add space after 2 digits
                setExpirationDate(formattedValue);
              }}
              style={{
                padding: 10,
                paddingLeft: 0,
                borderRadius: 20,
                width: "45%",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            {/* 
            <TextField
              placeholder="Cvc"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              style={{
                padding: 10,
                paddingLeft: 0,
                borderRadius: 20,
                width: "45%",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            /> */}

            <TextField
              placeholder="CVC"
              value={cvv}
              onChange={(e) => {
                const trimmedValue = e.target.value
                  .replace(/\D/g, "")
                  .substr(0, 3); // Remove any non-digit characters and limit to 3 characters
                setCvv(trimmedValue);
              }}
              style={{
                padding: 10,
                paddingLeft: 0,
                borderRadius: 20,
                width: "45%",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
          {/* <TextField
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              padding: 10,
              paddingLeft: 0,
              borderRadius: 20,
              width: "80%",
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          /> */}
          <TextField
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => {
              const trimmedValue = e.target.value
                .replace(/\D/g, "")
                .substr(0, 13); // Remove any non-digit characters and limit to 13 characters
              setPhoneNumber(trimmedValue);
            }}
            style={{
              padding: 10,
              paddingLeft: 0,
              borderRadius: 20,
              width: "80%",
              display: "flex",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <Button
            onClick={handleSubmit}
            variant="contained"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "80%",
              height: 50,
              fontSize: 20,
              marginTop: 10,
            }}
          >
            Pay
          </Button>
        </div>
      </Card>
    </>
  );
};

export default PaymentFormContent;
