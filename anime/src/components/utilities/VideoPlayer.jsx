"use client";

import Button from "@/elements/button/Button";
import YouTube from "react-youtube";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-4 right-4">
        <Button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right"
        >
          <IoClose size={32} />
        </Button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, please try another.")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <Button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 w-32 rounded-md
     bg-color-primary hover:bg-color-accent text-color-dark transition-all shadow-xl"
      >
        Tonton Trailer
      </Button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
