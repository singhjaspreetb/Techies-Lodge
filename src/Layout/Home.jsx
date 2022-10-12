import React from "react";
import ReactDOM from "react-dom";
import classes from "../Style/Home.css";
import info_img from "../assets/image/info1.jpg"
function Home() {
    return(
        <section class="main">
            <div class="main-sec">
                <h1 class="heading">
                    We're<br></br>
                    connecting<br></br>
                    techies<br></br>
                    together
                </h1>
            </div>
            <div class="main-th">

            </div>
            <div class="info">
                <div class="">
                    <h1 class="heading2">
                    We're<br></br>
                    connecting<br></br>
                    techies<br></br>
                    together
                    </h1>
                </div>
                <div class="">
                    <img alt="info" class="info_img" src={info_img}/>
                </div>
            </div>
        </section>
    );
}
export default Home;