import React from "react";
import ReactDOM from "react-dom";
import classes from "../Style/Home.css";
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
                    <img alt="info" src={require('./assets/images/info1.jpg')}/>
            <div class="info">
                <div>

                </div>
                <div>
        
                </div>
            </div>
        </section>
    );
}
export default Home;