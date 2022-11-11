import React from "react";
import { Routes, Route } from 'react-router-dom';
import Footer from "../Layout/Footer";
import classes from "../Style/Blogs.css";
import img1 from "../assets/image/box_img.png";
import img2 from "../assets/image/comm.png";
import img3 from "../assets/image/comm1.png";
import img4 from "../assets/image/like.png";
import img5 from "../assets/image/like1.png";
import img6 from "../assets/image/our_img1.jpg";
import img7 from "../assets/image/our_img2.jpg";
import img8 from "../assets/image/our_img3.jpg";
import img9 from "../assets/image/our_img4.jpg";
import img10 from "../assets/image/our_img5.jpg";
import img11 from "../assets/image/plan1.png";
import img12 from "../assets/image/test_bg.jpg";
import img13 from "../assets/image/box_img.png";
import img14 from "../assets/image/box_img.png";
import img15 from "../assets/image/box_img.png";

function Blogs() {
    return (
        <div>
            <div class="mb-5">
                <div class="head_top">
                    <section class="banner_main">
                        <div class="container">
                            <div class="row d_flex">
                                <div class=" col-xl-8 col-lg-8 col-md-8 col-12-9">
                                    <div class="text-bg">
                                        <h1>Blog<br></br> <span class="white1">Techies Duniya</span></h1>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-12-3">
                                    <div class="text-img">
                                        <figure><img src={img1} alt="#" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="blog_main">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <h2>Our Blogs</h2>
                                    <span class="">It is a long established fact that a reader will be distracted by the readable content of a page </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="our_two_box">
                                    <div class="row d_flex">

                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div class="our_img">
                                                <figure><img src={img6} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div class="our_text_box">
                                                <h3 class="awesome pa_wi">The biggest and most awesome Photo of  year</h3>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model </p>
                                                <div class="post_box padding_bottom1">
                                                    <h4 class="flot_left1">Post By : Blogger </h4>
                                                    <ul class="like">
                                                        <li><a href="#"><img src={img4} alt="#" />Like</a></li>
                                                        <li><a href="#"><img src={img2} alt="#" />Comment</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="our_two_box">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="our_img">
                                                <figure><img class="he_img" src={img7} alt="#" /></figure>


                                                <div class="our_text_box position_box">
                                                    <h3 class="awesome withi_color">This week is incelebrity homes  love food </h3>
                                                    <p class="hiuouh">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repea</p>
                                                    <div class="post_box">
                                                        <h4 class="flot_left1 withi_color">Post By : Blogger </h4>
                                                        <ul class="like withi_color">
                                                            <li><a href="#"><img src={img3} alt="#" />Like</a></li>
                                                            <li><a href="#"><img src={img5} alt="#" />Comment</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 padding_bottom2">
                                <div class="our_img">
                                    <figure><img src={img8} alt="#" /></figure>
                                </div>
                                <div class="our_text_box three_box">


                                    <div class="post_box d_flex padding_top3">
                                        <h3 class="awesome padding_flot">Chad-Montano</h3>
                                        <h4 class="flot_left1">Post By : Blogger </h4>
                                        <ul class="like padding_left2">
                                            <li><a href="#"><img src={img4} alt="#" />Like</a></li>
                                            <li><a href="#"><img src={img2} alt="#" />Comment</a></li>
                                        </ul>
                                    </div>
                                    <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis nostrud exercitation ullamco laboris </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="our_img">
                                    <figure><img src={img9} alt="#" /></figure>
                                </div>
                                <div class="our_text_box three_box">


                                    <div class="post_box d_flex padding_top3">
                                        <h3 class="awesome padding_flot">Amezing  Place</h3>
                                        <h4 class="flot_left1">Post By : Blogger </h4>
                                        <ul class="like padding_left2">
                                            <li><a href="#"><img src={img4} alt="#" />Like</a></li>
                                            <li><a href="#"><img src={img2} alt="#" />Comment</a></li>
                                        </ul>
                                    </div>
                                    <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis nostrud exercitation ullamco laboris </p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="our_two_box magna_top90">
                                    <div class="row d_flex">
                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div class="our_img">
                                                <figure><img src={img10} alt="#" /></figure>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div class="our_text_box">
                                                <h3 class="awesome pa_wi">Our food Quick is comment </h3>
                                                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id </p>
                                                <div class="post_box padding_bottom1">
                                                    <h4 class="flot_left1">Post By : Blogger </h4>
                                                    <ul class="like">
                                                        <li><a href="#"><img src={img4} alt="#" />Like</a></li>
                                                        <li><a href="#"><img src={img2} alt="#" />Comment</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="section">

                    <div id="" class="Testimonial">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 offset-md-3">
                                    <div class="titlepage">
                                        <h2>Testimonial</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row d_flex">
                                <div class="col-md-3">
                                    <div class="Testimonial_box">
                                        <i><img src={img11} alt="#" /></i>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="Testimonial_box">
                                        <h4>will smithe</h4>
                                        <p>Tof Lorem Ipsum, you need to be There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a pass
                                            <br></br>
                                            age of Lorem Ipsum, you need to be
                                        </p>
                                    </div>
                                </div>
                            </div>
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

export default Blogs;