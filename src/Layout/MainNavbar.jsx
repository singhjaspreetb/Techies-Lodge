import React from "react";
import ReactDOM from "react-dom";
import classes from "../Style/MainNavbar.css";
function MainNavbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark">
      <a class="navbar-brand">Techies Lodge</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ml-5" id="navbarText">
        <ul class="navbar-nav ml-5 mr-auto mt-2 mt-lg-0">
          {/* <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li> */}
          <li class="nav-item">
            <a class="nav-link" href="#">Resources</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Hackathons</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Community</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blogs</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">

          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="mr-2 bi bi-person-circle mt-2" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
          <button class="btn btn-primary mt-2 mr-5" type="submit">
            Login
          </button>
          {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
        </form>
      </div>
    </nav>
  );
}

export default MainNavbar;
