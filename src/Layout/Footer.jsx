import React from "react";
import { Routes, Route } from 'react-router-dom';
import classes from "../Style/Footer.css"
function Footer() {
  return (
    // <div classname={classes.Footer}>
    <footer class="footer-20192">
      <div class="site-section">
        <div class="container">

          <div class="cta d-block d-md-flex align-items-center px-5">
            <div>
              <h2 class="mb-0 text-light">Ready for a next project?</h2>
              <h3 class="text-light">Let's get started!</h3>
            </div>
            <div class="ml-auto">
              <a href="#" class="btn btn-dark rounded-0 py-3 px-5">Contact us</a>
            </div>
          </div>
          <div class="row">

            <div class="col-sm">
              <a href="#" class="footer-logo">Techies Lodge</a>
              <p class="copyright">
                <small>&copy; 2022</small>
              </p>
            </div>
            <div class="col-sm">
              <h3>Resources</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Android</a></li>
                <li><a href="#">Machine Learning</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Open Source</a></li>
              </ul>
            </div>
            <div class="col-sm">
              <h3>Company</h3>
              <ul class="list-unstyled links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div class="col-sm">
              <h3>Further Information</h3>
              <ul class="list-unstyled links">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h3>Follow us</h3>
              <ul class="list-unstyled social">
                <li><a href="#"><span class="icon-facebook"></span></a></li>
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-linkedin"></span></a></li>
                <li><a href="#"><span class="icon-medium"></span></a></li>
                <li><a href="#"><span class="icon-paper-plane"></span></a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
    // </div>

  );
}

export default Footer;