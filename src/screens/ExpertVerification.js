import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpertsTools from "../assets/images/expertsTools.jpg";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import backgroundImage from '../assets/images/background.jpg'
const useStyles = makeStyles((theme) => ({
  backgroundContainer: {
    // background: '#E6F7FF',
    // backgroundImage: `url(${ExpertsTools})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    background: "linear-gradient(to left,  #87CEEB, #87CEEB, #F5F5F5)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "block",
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
  },
  container: {
    // backgroundColor: 'rgba(255, 255, 255, 0.9)',
    // padding: '10px',
    //  elevation:3,
    borderRadius: "10px",
    height: 450,
    marginTop: 70,

    // boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  question: {
    fontSize: "24px",
    // marginBottom: 10,
    textAlign: "center",
    color: "#87CEEB",
    fontWeight: "800",
  },
  listItem: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "white",
    marginBottom: "20px",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  timer: {
    fontSize: "16px",
    color: "black",
    marginTop: "50px",
    justifyContent: "center",
    alignSelf: "center",
    display: "flex",
  },
  completedPaper: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  completedTitle: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  continueButton: {
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
}));

const ExpertVerification = () => {
  const classes = useStyles();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timer, setTimer] = useState(120);
  const [quizPassed, setQuizPassed] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      question:
        "What is the primary reason for hiring a service professional in these categories?",
      options: [
        "♟️ Maintenance",
        "♟️ Installation",
        "♟️ Repair",
        "♟️ Emergency",
      ],
      correctAnswer: "♟️ Repair",
    },
    {
      question:
        "What are some common safety precautions to consider when hiring a service professional?",
      options: [
        "♟️ Ask for references",
        "♟️ Check for licenses and insurance",
        "♟️ Request a written estimate",
        "♟️ All of the above",
      ],
      correctAnswer: "♟️ All of the above",
    },
    {
      question:
        "Which of the following is a standard payment method for these services?",
      options: [
        "♟️ Bitcoin",
        "♟️ Credit Card",
        "♟️ Barter System",
        "♟️ None, its usually free",
      ],
      correctAnswer: "♟️ Credit Card",
    },
    {
      question:
        "What should you do before scheduling an appointment with a service professional?",
      options: [
        "♟️ Wait for them to call you",
        "♟️ Fix the issue yourself",
        "♟️ Leave your home unlocked",
        "♟️ Gather all necessary information",
      ],
      correctAnswer: "♟️ Gather all necessary information",
    },
    {
      question:
        "How can you verify the reputation of a service professional before hiring them?",
      options: [
        "♟️ Ask for their social security number",
        "♟️ Send them money in advance",
        "♟️ Read online reviews",
        "♟️ None of the above",
      ],
      correctAnswer: "♟️ Read online reviews",
    },
    {
      question:
        "What should you do if you are not satisfied with the work of a service professional?",
      options: [
        "♟️ Contact the service provider.",
        "♟️ Do nothing and accept it",
        "♟️ Post a negative review",
        "♟️ Sue them in court",
      ],
      correctAnswer: "♟️ Contact the service provider.",
    },
    {
      question:
        "In case of an emergency, how quickly should you expect a response from a service professional?",
      options: [
        "♟️ Within a few hours",
        "♟️ Within a week",
        "♟️ Within a month",
        "♟️ There is no specific timeframe",
      ],
      correctAnswer: "♟️ Within a few hours",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0 || currentQuestion === questions.length) {
        checkAnswers();
        clearInterval(interval);
      } else {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, currentQuestion]);

  const handleAnswerSelect = (selectedAnswer) => {
    setSelectedAnswers([...selectedAnswers, selectedAnswer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const checkAnswers = () => {
    console.log("Checking Answers...");
    const correctAnswers = questions.map((question) => question.correctAnswer);
    const correctCount = correctAnswers.reduce(
      (count, correctAnswer, index) => {
        if (
          correctAnswer.toLowerCase() === selectedAnswers[index].toLowerCase()
        ) {
          return count + 1;
        }

        return count;
      },
      0
    );
    console.log("Correct Answers:", correctAnswers);
    console.log("Selected Answers:", selectedAnswers);

    if (correctCount >= 4) {
      console.log("Quiz Passed!");
      // Navigate to the next screen (e.g., SuccessScreen)
      setQuizPassed(true);
      //   navigate('/mentotSubjectReg');
      navigate("/congratsSeller");
    } else {
      // Redirect to the login page

      //   navigate('/chooseSubject');
      console.log("Quiz failed!");
      navigate("/services");
    }
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className={classes.backgroundContainer}>
      <Container maxWidth="sm" className={classes.container}>
        {currentQuestion < questions.length ? (
          <Paper elevation={3} style={{ padding: "100px", height: "95%" }}>
            {/* <Typography
              fontSize={28}
              align="center"
              gutterBottom
              marginBottom={5}
            >
              Expert Verification
            </Typography> */}
            <Typography variant="h6" className={classes.question}>
              {currentQuestionData.question}
            </Typography>
            <List>
              {currentQuestionData.options.map((option, index) => (
                <ListItem key={index}>
                  <ListItemButton
                    style={{ backgroundColor: "#87CEEB" }}
                    onClick={() => handleAnswerSelect(option)}
                    // sx={listItemStyle}
                    className={classes.listItem}
                  >
                    {option}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Typography
              variant="subtitle1"
              color="white"
              className={classes.timer}
            >
              Time remaining: {timer} seconds
            </Typography>
          </Paper>
        ) : (
          <Paper elevation={3} className={classes.completedPaper}>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              className={classes.completedTitle}
            >
              Quiz Completed
            </Typography>
            <Button
              variant="contained"
              className={classes.continueButton}
              onClick={checkAnswers}
              fullWidth
            >
              Continue
            </Button>
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default ExpertVerification;
