import React from 'react';
import styles from '../../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import speakers from './Speakers';
import Speakercard from './Speakercard';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    return (
        <div className={`flex flex-col justify-center items-center h-screen bg-primary ${styles.flexStart}`}>
            <h1 className="text-5xl text-white font-bold mb-6">Google IO 2023</h1>
            <div className="flex items-center justify-center mb-8">
                <div className="flex items-center mr-8">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-white mr-2" />
                    <span className="text-white">May 31, 2023</span>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white mr-2" />
                    <span className="text-white">YouTube</span>
                </div>
            </div>
            <a href="https://www.youtube.com/watch?v=cNfINi5CNbY">
                <button className="px-8 py-4 rounded-lg bg-gray-800 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out">Attend the Event</button>
            </a>
            <br />
            <div >
                {speakers.map((speaker, index) => (
                    <div key={index} className="flex justify-center">
                        <Speakercard
                            companyImage={speaker.imageUrl}
                            name={speaker.name}
                            jobTitle={speaker.jobTitle}
                            companyName={speaker.companyName}
                            location={speaker.location}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
