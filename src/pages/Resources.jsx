import React from "react";
import Footer from "../Layout/Footer";
import classes from "../Style/Resources.css"
import info_img from "../assets/image/android.png"

function Resources() {
    return (
        <div>
            <div class="row ml-5 mb-5 mb-5 mt-5">
                <div class="container col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img} />
                        </div>
                        <div class="contentBx">
                            <h2>Android</h2>
                            {/* <div class="size">
                                <h3>Size :</h3>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                            </div>
                            <div class="color">
                                <h3>Color :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                            <a class="mt-5" href="#">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img} />
                        </div>
                        <div class="contentBx">
                            <h2>Android</h2>
                            <a class="mt-5" href="#">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img} />
                        </div>
                        <div class="contentBx">
                            <h2>Android</h2>
                            <a class="mt-5" href="#">See Roadmap</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row ml-5 mb-5 mb-5 mt-5">
                <div class="container col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img} />
                        </div>
                        <div class="contentBx">
                            <h2>Android</h2>
                            {/* <div class="size">
                                <h3>Size :</h3>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                            </div>
                            <div class="color">
                                <h3>Color :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                            <a class="mt-5" href="#">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img} />
                        </div>
                        <div class="contentBx">
                            <h2>Android</h2>
                            <a class="mt-5" href="#">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img} />
                        </div>
                        <div class="contentBx">
                            <h2>Android</h2>
                            <a class="mt-5" href="#">See Roadmap</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <Footer />
            </div>
        </div>

    );
}

export default Resources;