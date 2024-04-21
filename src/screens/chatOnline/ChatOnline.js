import React, { useContext, useState, useEffect } from "react";
import "./chatOnline.css";

import axios from "axios";

var url = process.env.REACT_APP_API_KEY;

function ChatOnline({ onlineUsers, curentId, setcurrentChat }) {
  const [allUsers, setAllusers] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const [cond, setCond] = useState(true);

  const getData = () => {
    setCond(false);
  };

  useEffect(() => {
    getData();
  }, [curentId]);

  useEffect(() => {
    var tempOnlineUser = [];
    var count = 0;

    allUsers.map((f) => {
      onlineUsers.map((o) => {
        if (o.userId === f._id) {
          tempOnlineUser[count] = f;
          count++;
        }
      });
    });
    console.log(tempOnlineUser);
    setOnlineFriends(tempOnlineUser);
  }, [allUsers, onlineUsers]);

  const handleClick = async (user) => {
    console.log("I am clicked");
    try {
      console.log(user._id);
      const res = await axios.get(
        `${url}conversation/find/${curentId}/${user._id}`
      );
      console.log(res);
      setcurrentChat(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (cond) {
    return (
      <div>
        <p>Please wait</p>
      </div>
    );
  } else {
    console.log(onlineFriends);

    return (
      <div > 
        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, marginBottom:30, marginTop:90 }}>
          Online Users
        </p>
        {/* <p style={{ marginLeft: 13 }}>Available soon</p> */}
        {onlineFriends.map((o) => {
          if (o._id !== curentId) {
            return (
              <div className="OnlineUsers" onClick={() => handleClick(o)}>
                <img
                  className="UserPhoto"
                  src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg"
                  alt="No photo"
                />

                <p className="UserName">{o?.name}</p>
                <div className="GreenDot"></div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default ChatOnline;
