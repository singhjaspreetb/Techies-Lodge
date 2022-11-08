import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import classes from "../Style/MainNavbar.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import App from "../App";
function MainNavbar() {
  return (
    <header>
    <nav className="navbar navbar-expand-md navbar-dark">
      <Link to="/"  className="navbar-brand">Techies Lodge</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ml-5" id="navbarText">
        <ul className="navbar-nav ml-5 mr-auto mt-2 mt-lg-0">
          {/* <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li> */}
          <li className="nav-item">
            <Link to="/Resources"  className="nav-link" >Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/Events"  className="nav-link" >Events</Link>
          </li>
          <li className="nav-item">
            <Link to="/Hackathons"  className="nav-link" >Hackathons</Link>
          </li>
          <li className="nav-item">
            <Link to="/Community" className="nav-link" >Community</Link>
          </li>
          <li class="nav-item">
            <Link to="/Blogs" className="nav-link" >Blogs</Link>
          </li>
          <li class="nav-item">
            <Link to="/About" className="nav-link" >About</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="mr-2 bi bi-person-circle mt-2" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
          <Link to="/Login" className="nav-link" >
          <button className="btn btn-primary mt-2 mr-5" type="submit">
            Login
          </button>
          </Link>
          {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
        </form>
      </div>
    </nav>
    
    </header>
    
  );
}

export default MainNavbar;
