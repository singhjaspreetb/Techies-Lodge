import img from "../../assets/image/hackathon1.jpg"
import React from 'react';

const Card = ({ image, name, place, value }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{place}</p>
                <p className="text-gray-700 text-base">${value}</p>
            </div>
        </div>
    );
};

export default Card