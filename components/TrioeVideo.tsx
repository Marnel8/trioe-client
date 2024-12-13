import React from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const TrioeVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full rounded-xl">
      {/* <video
        autoPlay
        controls
        style={{
          width: "100%",
          maxWidth: "720px",
        height: "auto",
      }}
      className="rounded-xl"
    >
      <source src="/videos/trioe_board_with_audio_1080p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="/videos/trioe_board_with_audio_1080p.mp4"
          thumbnailSrc="/images/video_thumbnail.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default TrioeVideo;
