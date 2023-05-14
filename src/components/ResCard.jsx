import img from "../assets/image/hackathon1.jpg"
import React from 'react';

const ResCard = ({ image, name, link }) => {
    return (

        <div className="z-1 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
                <img className="z-1 object-center object-contain transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="mb-[8rem] font-dmserif text-3xl font-bold text-white">{name}</h1>
                <a href={link}>
                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                </a>
            </div>
        </div>
        // <div classNameName="max-w-sm rounded overflow-hidden shadow-lg">
        //     <img classNameName="w-full" src={image} alt={name} />
        //     <div classNameName="px-6 py-4">
        //         <div classNameName="font-bold text-xl mb-2">{name}</div>
        //         <p classNameName="text-gray-700 text-base">{place}</p>
        //         <p classNameName="text-gray-700 text-base">${value}</p>
        //     </div>
        // </div>
    );
};

export default ResCard