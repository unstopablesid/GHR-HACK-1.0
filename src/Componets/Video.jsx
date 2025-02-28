import React from "react";

const Video = () => {
return (
    <div className=" flex flex-col items-center py-10 px-10 font-[Ghr4] bg-[#014EB6] text-white">
        <h1 className="text-white text-5xl font-bold mb-10">Registration Video</h1>
        <div className="w-full flex justify-center ">
            <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/GGH95N3ry88?si=YgWayZ66w15rJBO2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    </div>
);
};

export default Video;
