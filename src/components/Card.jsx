import img from "../assets/image/hackathon1.jpg"
import React from 'react';

const Card = ({ image, name, place, value }) => {
    return (

        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div class="h-96 w-72">
                <img class="object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt="" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="mb-[8rem] font-dmserif text-3xl font-bold text-white">{name}</h1>
                <p class=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{place}</p>
                <p class=" text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{value}</p>
                <a href="#">
                    <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                </a>
            </div>
        </div>
        // <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //     <img className="w-full" src={image} alt={name} />
        //     <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2">{name}</div>
        //         <p className="text-gray-700 text-base">{place}</p>
        //         <p className="text-gray-700 text-base">${value}</p>
        //     </div>
        // </div>
    );
};

export default Card