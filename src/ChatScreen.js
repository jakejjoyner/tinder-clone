import React from "react";
import { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1052566600.jpg",
      message: "Whats up 💕",
    },
    {
      name: "Ellen",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1052566600.jpg",
      message: "How's it going!",
    },
    {
      message: "Hi! How are you Ellen!",
    },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
