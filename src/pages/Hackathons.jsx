import React from "react";
import info_img2 from "../assets/image/backend.png";
import info_img3 from "../assets/image/devops.png";
import info_img4 from "../assets/image/react.png";
import info_img5 from "../assets/image/angular.png";
import img from "../assets/image/hackathon1.jpg"
import img2 from "../assets/image/hackathon2.png"
import CTA from "../components/CTA"
import styles from "../style";
import Card from "../components/Card";



function Hackathons() {

    const hackdata = [
        {
            id: 1,
            name: 'Hack the Future',
            place: 'San Francisco, CA',
            value: 5000,
            image: 'https://picsum.photos/id/1/400/300',
        },
        {
            id: 2,
            name: 'CodeFest',
            place: 'New York, NY',
            value: 7500,
            image: 'https://picsum.photos/id/2/400/300',
        },
        {
            id: 3,
            name: 'HackathonX',
            place: 'Seattle, WA',
            value: 10000,
            image: 'https://picsum.photos/id/3/400/300',
        },
        {
            id: 4,
            name: 'Hacker Paradise',
            place: 'Miami, FL',
            value: 2500,
            image: 'https://picsum.photos/id/4/400/300',
        },
    ];

    return (
        <>
            <div class="flex min-h-screen items-center justify-center bg-primary-900">
                <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

                    {hackdata.map((hackathon, index) => (
                        <Card key={index} image={hackathon.image} name={hackathon.name} place={hackathon.place} value={hackathon.value} />
                    ))}
                    {/* <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Hack the Future</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websitesin hackathons</p>
                            <a href="https://devfolio.co/hackathons">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img2} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Hack the Future</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websitesin hackathons</p>
                            <a href="https://devfolio.co/hackathons">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Hack the Future</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websitesin hackathons</p>
                            <a href="https://devfolio.co/hackathons">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img2} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Hack the Future</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websitesin hackathons</p>
                            <a href="https://devfolio.co/hackathons">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Hack the Future</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websitesin hackathons</p>
                            <a href="https://devfolio.co/hackathons">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div class="h-96 w-72">
                            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img2} alt="" />
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 class="font-dmserif text-3xl font-bold text-white">Hack the Future</h1>
                            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Follow this roadmap and learn frontend to make exciting and mindblowing websitesin hackathons</p>
                            <a href="https://devfolio.co/hackathons">
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                            </a>
                        </div>
                    </div>




                    <br />
                </div> */}
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