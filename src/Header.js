import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import ArrowBackIos from "mui-icons-matieral/ArrowBackIos";

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    // BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src=""
          alt="logo"
          //tinder logo
          //tangle
          //https://mail.google.com/mail/u/0?ui=2&ik=362ace6c62&attid=0.1&permmsgid=msg-a:r3747731829614085924&th=18d8bdbf35b38a78&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8RRoabAoQhWU29bCHqnZ5F6YW7C559ZwttkSmzPGFYc-sfDx4DsVe_yYObMf-S75eNChjCBQeKz0qI28PLvKMRnmj4DFlfWV-02BjvsUqQrZdUCZMF1LZvGl4&disp=emb&realattid=ii_lse2pwve0
          //https://mail.google.com/mail/u/0?ui=2&ik=362ace6c62&attid=0.1&permmsgid=msg-a:r-3091224667554353493&th=18d8bf5175acdcd7&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8pebrhd6tmWDzYOvgjhOSjCFGCxp-nSXwEYaQwuM8_pRDkw3HPnGwTSKUHB2SAXgUq48xKXzmGXUfhQsQ6hTNaqQPzAzAQircluvdK4gqqIFCshW__K0KUwy0&disp=emb&realattid=ii_lse3pgx11
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
