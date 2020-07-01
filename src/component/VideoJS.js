import React from "react";
import VideoPlayer from "react-video-js-player";
import Car from "./video/car.mp4";
import "./Video.css";

const VideoJS = () => {
  const videoSrc = Car;
  const poster =
    "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60";

  return (
    <div className="App">
      <h1>Videojs</h1>
      <VideoPlayer
        src={videoSrc}
        poster={poster}
        width="720"
        height="420"
        playbackRates={[0.5, 1, 3.85, 16]}
      />
    </div>
  );
};
export default VideoJS;
