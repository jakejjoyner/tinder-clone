import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    // BEM
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>

      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
        alt="tinder logo"
      />
      <Link to="/chats">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
