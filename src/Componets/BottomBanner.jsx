import React from 'react'
import logo from '../assets/Download/Download.png';
import brochure from '../assets/Download/Brochure.pdf';

const BottomBanner = () => {
    return (
        <div className="relative z-50">
    <a 
        href={brochure} 
        download 
        className="absolute bottom-4 right-4 z-50"
    >
        <img src={logo} alt="Banner" className="w-16 h-16" />
    </a>
</div>

    )
}

export default BottomBanner
