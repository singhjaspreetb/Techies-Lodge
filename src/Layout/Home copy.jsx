import React from "react";
import ReactDOM from "react-dom";
import classes from "../Style/Home.css";
function Home() {
    return(
        <section className="main">
            <div className="main-sec">
                <h1 className="heading">
                    We're<br></br>
                    connecting<br></br>
                    techies<br></br>
                    together
                </h1>
            </div>
            <div className="main-th">

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