import React from 'react';
import '../Styles/Banner.css'; // Make sure to create this CSS file for styling
import Raisoni from '../assets/Logo/Raisoni banner.png'
const Banner = () => {
    return (
        <div className="banner-container">
            <img 
                src={Raisoni} 
                alt="Raisoni Banner" 
                className="banner-image" 
            />
        </div>
    );
};

export default Banner;