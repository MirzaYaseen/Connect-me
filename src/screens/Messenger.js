import React, { useContext, useState, useEffect, useRef } from "react";

import "./../ScreensCss/Messenger.css";
import Conversation from "./conversation/Conversation";
import Message from "./message/Message";
import ChatOnline from "./chatOnline/ChatOnline";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { io } from "socket.io-client";
import { Button, Typography } from "@mui/material";
import UserPhoto from '../assets/images/3.png'
var url = process.env.REACT_APP_API_KEY;
function Messenger() {
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  const [conversation, setConversation] = useState([]);
  const [currentChat, setcurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newmessages, setNewMessages] = useState("");
  const [lastMessage, setLastMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const socket = useRef(); //it is not http connection ws means web socket
  const [currentUser, setcurrentUser] = useState();
  const [receiverUser, setreceiverUser] = useState();

  const [
    FirstGetConversationThenGetMessage,
    setFirstGetConversationThenGetMessage,
  ] = useState(false);

  const [messageReceived, setmessageReceived] = useState(false);

  const scrollRef = useRef();

  const getConversation = () => {
    const userId = {
      id: userdetails?._id,
    };

    axios
      .post(`${url}conversation/GetConversation`, userId)
      .then((res) => {
        console.log("Conversation frombackend is");

        setConversation(res.data.data);
        setcurrentUser(res.data.currentUser);
        setFirstGetConversationThenGetMessage(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("LAAST MESSAGE" + lastMessage);
  console.log("The Current user is " + currentUser);

  const getMessages = () => {
    if (conversation.length > 0) {
      const otherUserId = currentChat?.members.filter(
        (user) => user !== currentUser
      );

      axios
        .get(`${url}message/${currentChat?._id}`)
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`${url}users/singleUser/${otherUserId}`)
        .then((res) => {
          console.log("HANNNNNNNNNNNNNNNN");
          console.log(res.data.data);
          setreceiverUser(res.data.data.doc);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  console.log(
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
    receiverUser
  );

  //To connect to server using socket io
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    //To recieve message which was send by user to server and server again send to receiver
    socket.current.on("getMessage", (data) => {
      console.log(data.text);
      console.log("TEHEEEE DATA is ");
      console.log(data);
      setmessageReceived(!messageReceived);
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  //If there is change in arrival message then we will update our messages

  useEffect(() => {
    //currentChat?.members.includes(arrivalMessage.sender) is ka mtlb k jisa send kiya ha message sirf usa receive ho
    console.log("The arrival message isssssssssssss" + arrivalMessage?.text);
    setLastMessage(arrivalMessage?.text);
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, messageReceived]);

  //To add user to online users list
  useEffect(() => {
    socket.current.emit("addUser", currentUser);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
  }, [currentUser]);

  //To get conversation
  useEffect(() => {
    getConversation();
    console.log("I am Called");
  }, [messages]);

  //To get messages
  useEffect(() => {
    if (FirstGetConversationThenGetMessage) {
      getMessages();
    }
  }, [currentChat]);

  //To automatically scroll the scroll bar
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.log("11111111111111111111111111111111111111111111111111");
  console.log(FirstGetConversationThenGetMessage);

  if (!FirstGetConversationThenGetMessage) {
    return (
      <div>
        <p>Please wait</p>
      </div>
    );
  } else {
    return (
      <div
        className="TopContainer"
        style={{ display: "flex", overflow: "hidden", }}>
        <div className="ChatScreen" >
          <div className="ChatMenu" style={{backgroundColor:'#E0F4FF', height:740 }}>
            {/* <div className="ChatMenuWrapper">
            <Typography>ashcjsa</Typography>
              {conversation.map((c) => {
                if (
                  c.members.includes(arrivalMessage?.sender) &&
                  c.members.includes(currentUser)
                ) {
                  c.lastMessage = lastMessage;
                }

                return (
                  <div
                    //Ab hum jab click kara ga chat pa to vo conversation mil  jay gi
                    //Or hum us conversation id ko use karta hova sari chat hasil kar la ga
                    onClick={() => {
                      setcurrentChat(c);
                    }}>
                    <Conversation
                      conversation={c}
                      currentUser={currentUser}
                      lastMessage={c.lastMessage}
                    />
                  </div>
                );
              })}
            </div> */}
             <img
                    className="OtherUserPhoto2"
                    src={UserPhoto}
                    alt="No photo"
                  />
                  {/* <Button style={{backgroundColor:'#FAC213',  textAlign:'center',marginLeft:110, marginTop:10, width:200}}>
                  Find Mentors
                  </Button> */}
                  <div style={{display:'flex',textAlign:'center', marginTop:20, backgroundColor:'azure', width:200, height:50, justifyContent:'center', marginLeft:'auto', alignItems:'center', marginRight:'auto', borderRadius:20}}>
                    
                    <Typography style={{  justifyContent:'center', alignItems:'center'}}>Find Service Provider</Typography>
                    </div>
               
          </div>
          <div className="ChatBox" style={{backgroundColor:'white'}}>
            {/* To Take input */}
            {currentChat ? (
              <div className="ChatBoxWrapper" style={{backgroundColor:'white'}}>
                <div className="ChatUserName">
                  
                  <img
                    className="OtherUserPhoto"
                    src={receiverUser?.photo}
                    alt="No photo"
                  />

                  <span className="OtherUserName">{receiverUser?.name}</span>
                </div>
                <div className="messageArea" style={{backgroundColor:'white'}} >
                 
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message
                        message={m}
                        own={m.sender === currentUser}
                        photo={receiverUser?.photo}
                      />
                    </div>
                  ))}
                </div>

                <div  className="ChatboxtotakeInput" style={{backgroundColor:'white'}}>
                  <Formik
                    initialValues={{ message: "" }}
                    onSubmit={async (values) => {
                      const message = {
                        sender: currentUser,
                        text: values.message,
                        conversationId: currentChat._id,
                      };

                      const receiverId = currentChat.members.find(
                        (member) => member !== currentUser
                      );
                      console.log("The recivere id is" + receiverId);
                      //We are sending message to server using socket io
                      socket.current.emit("sendMessage", {
                        senderId: currentUser,
                        receiverId,
                        text: values.message,
                      });

                      axios
                        .post(`${url}message`, message)
                        .then((res) => {
                          setLastMessage(res.data.text);
                          setMessages([...messages, res.data]);
                          values.message = "";
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}>
                    <Form className="InputFieldForEnteringMessage" >
                      <Field
                        className="InputMessageContainer"
                        name="message"
                        type="text"
                        
                        // className="textArea"
                      />

                      <button style={{color:'white', background:'cornflowerblue'}} type="submit" className="SendButton">
                        Send
                      </button>
                    </Form>
                  </Formik>
                </div>
              </div>
            ) : (
              <Typography style={{marginTop:300}}>Open a conversation to start a chat</Typography>
            )}
          </div>
          <div className="ChatOnline" style={{backgroundColor:'#E0F4FF'}}>
            <div className="ChatOnlineWrapper">
              <ChatOnline
                onlineUsers={onlineUsers}
                curentId={currentUser}
                setcurrentChat={setcurrentChat}
              />
               {conversation.map((c) => {
                if (
                  c.members.includes(arrivalMessage?.sender) &&
                  c.members.includes(currentUser)
                ) {
                  c.lastMessage = lastMessage;
                }

                return (
                  <div
                    //Ab hum jab click kara ga chat pa to vo conversation mil  jay gi
                    //Or hum us conversation id ko use karta hova sari chat hasil kar la ga
                    onClick={() => {
                      setcurrentChat(c);
                    }}>
                    <Conversation
                      conversation={c}
                      currentUser={currentUser}
                      lastMessage={c.lastMessage}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Messenger;
