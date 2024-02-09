import React from "react";
import { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

function ChatScreen() {
  const [input, setInput] = useState('');
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

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, {  message: input }]);
    setInput("");
  }

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
    <div>
      <form className="chatScreen__input">
        <input 
        value={input}
        onChange={(e) => setInput.apply(e.target.value)}
        className="chatScreen__inputField"
        placeholder="Type a message..."
        type="text"
        />
        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
      </form>
    </div>
    </div>
  );
}

export default ChatScreen;
