import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Typography, TextareaAutosize, Button, TextField } from "@mui/material";
import Rating from "@mui/material/Rating";
var url = process.env.REACT_APP_API_KEY;
function MentorReviews() {
  const [reviews, setReviews] = useState([]);
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));

  useEffect(() => {
    const getReviews = async () => {
      try {
        const result = await axios.get(
          `${url}review/getProductReview/${userdetails?._id}`
        );

        setReviews(result?.data?.data);
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    };

    getReviews();
  }, []);
  return (
    <>
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
        theme="light"
      />
        {reviews.length === 0 && (
        <Typography variant="h6" align="center" style={{ marginTop: 300,  }}>
          No reviews available yet ):
        </Typography>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 40,
          flexWrap: "wrap",
        }}
      >
        {reviews.map((review) => (
          <div
            style={{
              width: 300,
              height: 200,
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: 30,
              padding: 30,
              backgroundColor: "#DDF2FD",
              margin: 50, // Adjust the margin as needed
            }}
            key={review.id}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <img
                src={review?.refOfUser?.photo}
                alt="women"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  marginTop: -80,
                }}
              />
              {/* <BiSolidTrashAlt
                style={{ cursor: 'pointer' }}
                color='red'
                size={22}
                onClick={() => handleDelete(review.id)}
              /> */}
            </div>
            <Typography style={{ fontSize: 22, fontWeight: "500" }}>
              {review?.name}
            </Typography>
            <Typography style={{ fontSize: 17, marginTop: 5, color: "black" }}>
              {review?.refOfUser?.name}
            </Typography>
            <Rating
              style={{ marginTop: 5 }}
              name="review-stars"
              value={review.rating}
              readOnly
            />
            <Typography style={{ fontSize: 14, marginTop: 30 }}>
              "{review.review}"
            </Typography>
          </div>
        ))}
      </div>
    </>
  );
}

export default MentorReviews;
