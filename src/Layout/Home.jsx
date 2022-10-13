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
                    Single<br></br>
                    <span class="sub_h2">platform</span><br></br>
                    for all<br></br>
                    your <span class="sub_h2">needs</span>
                    </h1>
                </div>
                <div class="">
                    <img alt="info" class="info_img" src={info_img}/>
                </div>
            </div>
            <p class="info_text">Techies Lodge is a platform for tech enthusiasts who are trying to find similar people like they are...<br></br>
            It's main goal is to tie up people with same vision and goal, 
            helping creaters or entrapenours in selecting best possible team for their projects 
            or startups and skilled people can also see publicly listed projects which match with their intrests and skills.
            </p>
        </section>
    );
}
export default Home;