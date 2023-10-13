import React, { useState } from "react";
import { Videos } from "./Videos/video";
import "./VideoWebpage.css";

const VideoWebpage = () => {
  const [videoFile, setVideoFile] = useState(null);
 
  return (
    <>
      <div className="container">
        <h1>Video Gallery</h1>

        <div className="video-container">
          {
            Videos.map((file, index) => (
            <div className="video" key={index} onClick={() => setVideoFile(file)}>
              <video src={`${file.url}#t-0.001`} alt="Video Image" muted preload="metadata"/>
            </div>
          ))}
          {/* <div className="video">
            <video
              src={process.env.PUBLIC_URL + "/GCW_Video.mp4"}
              alt="Video Image"
              autoPlay
              controls
            ></video>
          </div> */}
        </div>

        
        <div className="popup-video" style={{display: videoFile? 'block' : 'none'}}>
          <span onClick={() => setVideoFile(null)}>&times;</span>
          
          <video src = {videoFile?.url} autoPlay controls />
          
        </div>
      </div>
    </>
  );
};

export default VideoWebpage;
