import React from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "../Layout/Footer";
import classes from "../Style/Events.css"
import img1 from "../assets/image/speakers/1.jpg"
import img2 from "../assets/image/speakers/2.jpg"
import img3 from "../assets/image/speakers/3.jpg"
import img4 from "../assets/image/speakers/4.jpg"
import img5 from "../assets/image/speakers/5.jpg"
import img6 from "../assets/image/speakers/6.jpg"

function Events() {
    return (
        <div>
            <section id="intro">
                <div class="intro-container wow fadeIn">
                    <h1 class="mb-4 pb-0">The Annual<br></br><span>Developers</span> Conference</h1>
                    <p class="mb-4 pb-0">10-12 December,  Kalpna Chawala Research Center , Chandigarh University</p>
                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox play-btn mb-4" data-vbtype="video"
                        data-autoplay="true"></a>
                    <a href="#about" class="about-btn scrollto">About The Event</a>
                </div>
            </section>
            <main id="main">
                <section id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <h2>About The Event</h2>
                                <p>Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut
                                    accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in
                                    est ut optio sequi unde.</p>
                            </div>
                            <div class="col-lg-3">
                                <h3>Where</h3>
                                <p>Kalpna Chawala Research Center , Chandigarh University</p>
                            </div>
                            <div class="col-lg-3">
                                <h3>When</h3>
                                <p>Monday to Wednesday<br></br>10-12 December</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="speakers" class="wow fadeInUp">
                    <div class="container">
                        <div class="section-header">
                            <h2>Event Speakers</h2>
                            <p>Here are some of our speakers</p>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="speaker">
                                    <img src={img1} alt="Speaker 1" class="img-fluid"/>
                                        <div class="details">
                                            <h3><a href="speaker-details.html">Brenden Legros</a></h3>
                                            <p>Quas alias incidunt</p>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="speaker">
                                <img src={img2} alt="Speaker 2" class="img-fluid"/>
                                        <div class="details">
                                            <h3><a href="speaker-details.html">Hubert Hirthe</a></h3>
                                            <p>Consequuntur odio aut</p>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="speaker">
                                <img src={img3} alt="Speaker 3" class="img-fluid"/>
                                        <div class="details">
                                            <h3><a href="speaker-details.html">Cole Emmerich</a></h3>
                                            <p>Fugiat laborum et</p>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="speaker">
                                <img src={img4} alt="Speaker 4" class="img-fluid"/>
                                        <div class="details">
                                            <h3><a href="speaker-details.html">Jack Christiansen</a></h3>
                                            <p>Debitis iure vero</p>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="speaker">
                                <img src={img5} alt="Speaker 5" class="img-fluid"/>
                                        <div class="details">
                                            <h3><a href="speaker-details.html">Alejandrin Littel</a></h3>
                                            <p>Qui molestiae natus</p>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="speaker">
                                <img src={img6} alt="Speaker 6" class="img-fluid"/>
                                        <div class="details">
                                            <h3><a href="speaker-details.html">Willow Trantow</a></h3>
                                            <p>Non autem dicta</p>
                                            <div class="social">
                                                <a href=""><i class="fa fa-twitter"></i></a>
                                                <a href=""><i class="fa fa-facebook"></i></a>
                                                <a href=""><i class="fa fa-google-plus"></i></a>
                                                <a href=""><i class="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                

            </main>
            <div class="mt-5">
                <Footer />
            </div>
        </div>

    );
}

export default Events;