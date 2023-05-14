import React from "react";
import img1 from "../../assets/image/speakers/1.jpg"
const Speakercard = ({ imageUrl, name, jobTitle, companyName, location }) => {
    return (
        <div className="max-w-sm bg-white border-2 border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-sm" src={img1} alt={name} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {jobTitle} at {companyName}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {location}
                </p>
            </div>
        </div>
    );
};

export default Speakercard;
