import React from "react";
import ReactDOM from "react-dom";
import classes from "../Style/MainNavbar.css";
function MainNavbar() {
  return (
    <div className="topnav" id="myTopnav">
      <a href="#home" class="logo">
        Techies Lodge
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a className="icon" onClick={resp}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}
function resp() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export default MainNavbar;
