import React from "react";
import "./message.css";

import { format } from "timeago.js";

function Message({ message, own, photo }) {
  const userdetails = JSON.parse(localStorage.getItem("userdetails"));
  return (
    <div className="Messagediv">
      {own ? (
        <div className="Owndiv">
          <div style={{ display: "flex", justifyContent:'end', alignItems:'center', gap: 10 }}>
            <p className="OwndivText">{message.text}</p>
            <img
              style={{ width: 25, height: 25, borderRadius: "50%", alignItems:'end' }}
              src={userdetails?.photo}
              alt="No photo"
            />
          </div>

          <p className="MessageTime">{format(message.createdAt)}</p>
        </div>
      ) : (
        <div className="Otherdiv">
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <img
              style={{ width: 25, height: 25, borderRadius: "50%" }}
              src={photo}
              alt="No photo"
            />
            <p className="OtherDivText">{message.text}</p>
          </div>

          <p className="MessageTime">{format(message.createdAt)}</p>
        </div>
      )}
    </div>
  );
}

export default Message;
