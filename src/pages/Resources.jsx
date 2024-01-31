import React from "react";
import info_img1 from "../assets/image/frontend.png";
import info_img2 from "../assets/image/backend.png";
import info_img3 from "../assets/image/devops.png";
import info_img4 from "../assets/image/react.png";
import info_img5 from "../assets/image/angular.png";
import info_img6 from "../assets/image/flutter.png";
import info_img7 from "../assets/image/blockchain.png";
import info_img8 from "../assets/image/java.png";
import info_img9 from "../assets/image/python.png";
import CTA from "../components/CTA"
import styles from "../style";
import ResCard from "../components/ResCard";

function Hackathons() {
    const resources = [
        {
            name: "Frontend",
            link: "https://roadmap.sh/frontend",
            image: info_img1,
        },
        {
            name: "Backend",
            link: "https://roadmap.sh/backend",
            image: info_img2,
        },
        {
            name: "Flutter",
            link: "https://roadmap.sh/flutter",
            image: info_img6,
        },
        {
            name: "React",
            link: "https://roadmap.sh/react",
            image: info_img4,
        },
        {
            name: "Blockchain",
            link: "hhttps://roadmap.sh/blockchain",
            image: info_img7,
        },
        {
            name: "Devops",
            link: "hhttps://roadmap.sh/devops",
            image: info_img3,
        },
        {
            name: "Angular",
            link: "hhttps://roadmap.sh/angular",
            image: info_img5,
        },
        {
            name: "Java",
            link: "hhttps://roadmap.sh/java",
            image: info_img8,
        },
        {
            name: "Python",
            link: "hhttps://roadmap.sh/python",
            image: info_img9,
        },
    ];
    return (
        <>
            <div className="flex min-h-screen items-center justify-center bg-primary-900">

                <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={info_img1} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Frontend</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websites</p>
                            <a href="https://roadmap.sh/frontend">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={info_img2} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Frontend</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websites</p>
                            <a href="https://roadmap.sh/frontend">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={info_img3} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Frontend</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websites</p>
                            <a href="https://roadmap.sh/frontend">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={info_img4} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Frontend</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websites</p>
                            <a href="https://roadmap.sh/frontend">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={info_img5} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Frontend</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websites</p>
                            <a href="https://roadmap.sh/frontend">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={info_img6} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Frontend</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websites</p>
                            <a href="https://roadmap.sh/frontend">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={info_img7} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Frontend</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websites</p>
                            <a href="https://roadmap.sh/frontend">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={info_img8} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Frontend</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websites</p>
                            <a href="https://roadmap.sh/frontend">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={info_img9} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Frontend</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websites</p>
                            <a href="https://roadmap.sh/frontend">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <br />
                </div>

            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <CTA heading="Subsribe Now" text="Get Notifications directly in your mailbox" />
                </div>
            </div>
        </>
    );
}

export default Hackathons;