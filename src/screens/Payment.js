import React, { useState, useEffect } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "500px",
    // margin: "0 auto",
    display:'flex', 
    
    marginLeft:'auto', 
    marginRight:'auto',
    marginTop:100,
    

  },
  card: {
    padding: 20, // Use theme.spacing for spacing
    borderRadius: 10,
  },
  cardElement: {
    padding: 20, // Use theme.spacing for spacing
    border: "1px solid #ccc",
    borderRadius: 5,
    marginTop:5,
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
    textAlign:'center'
  },
  successMessage: {
    color: "green",
    marginTop: 10, // Use theme.spacing for spacing
  },
}));

const stripePromise = loadStripe("Published_key"); // Replace with your actual publishable key

const PaymentForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Payment Form
          </Typography>
          <Elements stripe={stripePromise}>
            <PaymentFormContent classes={classes} />
          </Elements>
        </CardContent>
      </Card>
    </div>
  );
};

const PaymentFormContent = ({ classes }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState(null);
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    // Fetch the client secret from your server and set it
    // Replace with actual server-side code to fetch the client secret
    fetch("/your-server-endpoint-for-client-secret")
      .then((response) => response.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        setError("Error fetching client secret from server.");
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        setPaymentComplete(true);
      }
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <>
    
      <TextField
        placeholder="Card Holder Name"
        style={{
          padding: 10,
          paddingLeft: 0,

          borderRadius: 20,
          width: "100%",
        }}
      ></TextField>
      <CardElement className={classes.cardElement} />
      <TextField
        placeholder="Address"
        style={{
          padding: 10,
          paddingLeft: 0,

          borderRadius: 20,
          width: "100%",
        }}
      ></TextField>
      <TextField
        placeholder="Phone Number"
        style={{
          padding: 10,
          paddingLeft: 0,

          borderRadius: 20,
          width: "100%",
        }}
      ></TextField>
      <Button
        // type="submit"
        // disabled={!stripe}
        // className={classes.payButton}
        variant="contained"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: 400,
          marginTop:10
        }}
      >
        Pay
      </Button>
    </>
      /* {error && <div className={classes.errorMessage}>Error: {error}</div>}
      {paymentComplete && (
        <div className={classes.successMessage}>Payment successful!</div>
      )} */
    // </form>
  );
};

export default PaymentForm;
