import React from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

const TrioeVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full rounded-xl">
      <div className="relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://youtu.be/zVInmh4o5qw?si=rQ_tG8emsKrjxEnM"
          thumbnailSrc="/images/video_thumbnail.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://youtu.be/zVInmh4o5qw?si=rQ_tG8emsKrjxEnM"
          thumbnailSrc="/images/video_thumbnail.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default TrioeVideo;
