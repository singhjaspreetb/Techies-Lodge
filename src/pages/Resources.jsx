import React from "react";
import Footer from "../Layout/Footer";
import classes from "../Style/Resources.css";
import info_img1 from "../assets/image/frontend.png";
import info_img2 from "../assets/image/backend.png";
import info_img3 from "../assets/image/devops.png";
import info_img4 from "../assets/image/react.png";
import info_img5 from "../assets/image/angular.png";
import info_img6 from "../assets/image/flutter.png";
import info_img7 from "../assets/image/blockchain.png";
import info_img8 from "../assets/image/java.png";
import info_img9 from "../assets/image/python.png";

function Resources() {
    return (
        <div>
            <div class="row ml-5 mb-5 mb-5 mt-5">
                <div class="container cont-frnt col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img1} />
                        </div>
                        <div class="contentBx">
                            <h2>Front-End</h2>
                            <a class="mt-5" href="https://roadmap.sh/pdfs/frontend.pdf" target="_blank">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container cont-back col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img2} />
                        </div>
                        <div class="contentBx">
                            <h2>Back-End</h2>
                            <a class="mt-5" href="https://roadmap.sh/pdfs/backend.pdf" target="_blank">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container cont-dops col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img3} />
                        </div>
                        <div class="contentBx">
                            <h2>DevOps</h2>
                            <a class="mt-5" href="https://roadmap.sh/pdfs/devops.pdf" target="_blank">See Roadmap</a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="row ml-5 mb-5 mb-5 mt-5">
                <div class="container cont-rct col-lg-4">
                    <div class="card">
                        <div class="imgBx mb-5">
                            <img src={info_img4} />
                        </div>
                        <div class="contentBx">
                            <h2>React</h2>
                            <a class="mt-5" href="https://roadmap.sh/pdfs/react.pdf" target="_blank">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container cont-ang col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img5} />
                        </div>
                        <div class="contentBx">
                            <h2>Angular</h2>
                            <a class="mt-5" href="https://roadmap.sh/pdfs/angular.pdf" target="_blank">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container cont-flt col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img6} />
                        </div>
                        <div class="contentBx">
                            <h2>Flutter</h2>
                            <a class="mt-5" href="https://roadmap.sh/pdfs/flutter.pdf" target="_blank">See Roadmap</a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="row ml-5 mb-5 mb-5 mt-5">
                <div class="container cont-bchain col-lg-4">
                    <div class="card">
                        <div class="imgBx mb-5">
                            <img src={info_img7} />
                        </div>
                        <div class="contentBx">
                            <h2>Blockchain</h2>
                            <a class="mt-5" href="https://roadmap.sh/pdfs/blockchain.pdf" target="_blank">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container cont-java col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img8} />
                        </div>
                        <div class="contentBx">
                            <h2>Java</h2>
                            <a class="mt-5" href="https://roadmap.sh/pdfs/java.pdf" target="_blank">See Roadmap</a>
                        </div>
                    </div>
                </div>
                <div class="container cont-py col-lg-4">
                    <div class="card">
                        <div class="imgBx">
                            <img src={info_img9} />
                        </div>
                        <div class="contentBx">
                            <h2>Python</h2>
                            <a class="mt-5" href="https://roadmap.sh/pdfs/python.pdf" target="_blank">See Roadmap</a>
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