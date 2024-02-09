import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo whats UP!"
        timestamp="40 seconds ago"
        profilePic="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
      />
      <Chat
        name="Ellen"
        message="Whats up 💗?"
        timestamp="55 minutes ago"
        profilePic="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1052566600.jpg"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://i.pinimg.com/736x/d4/15/be/d415be693a2cf64915c51e0833cb4db0.jpg"
      />
      <Chat
        name="Natasha"
        message="Oops there he is... "
        timestamp="1 week ago"
        profilePic="https://thumbs.dreamstime.com/b/beautiful-white-girl-red-lips-looks-to-camera-stunning-brunette-closeup-face-young-woman-healthy-clean-skin-pretty-188607196.jpg"
      />
    </div>
  );
}

export default Chats;
