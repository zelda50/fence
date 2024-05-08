import React from 'react'
import video from "../assets/fence.mp4";
import "./BgStyles.css";

function BgVideo() {
  return (
   <div className="bgContainer">
    <div className="overlay">
      <video src={video} autoPlay loop muted />
    </div>
   </div>
  )
};

export default BgVideo;