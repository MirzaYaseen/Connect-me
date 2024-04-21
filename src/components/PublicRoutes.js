import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
var url = process.env.REACT_APP_API_KEY;
function PublicRoutes() {
  const navigate = useNavigate();
  const [RunUseEffectFirst, setRunUseEffectFirst] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);

  useEffect(() => {
    const userdetails = JSON.parse(localStorage.getItem("userdetails"));
    console.log(userdetails);
    if (userdetails) {
      console.log("Inside if");
      const userCredentials = {
        email: userdetails?.email,
        password: userdetails?.password,
      };

      const CheckUserIsValid = async () => {
        try {
          const result = await axios.post(
            `${url}users/signin`,
            userCredentials
          );
          
          console.log(result);
          if (userdetails?.role === "Mentor") {
            if (userdetails?.subject) {
              navigate("/expertsDashboard");
            } else {
              if (!quizPassed) {
                navigate("/expertsVerification"); // Redirect to quiz if quiz not passed
              } else {
                navigate("/registerServiceProvider");
              }
            }
          } else if (userdetails?.role === "Student") {
            navigate("/categoryChoose");    //services
          } else {
            navigate("/selectRole");
          }
        } catch (err) {
          setRunUseEffectFirst(true);
        }
      };
      CheckUserIsValid();
    } else {
      setRunUseEffectFirst(true);
    }
  }, [quizPassed]);

  return RunUseEffectFirst ? (
    <Outlet quizPassed={quizPassed} setQuizPassed={setQuizPassed} />
  ) : null;
}

export default PublicRoutes;
