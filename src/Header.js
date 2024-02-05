import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    // BEM
    <div className="header">
      <PersonIcon className="header__icon" fontSize="large" />
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
        alt="tinder logo"
      />
      <ForumIcon className="header__icon" fontSize="large" />
    </div>
  );
}

export default Header;
