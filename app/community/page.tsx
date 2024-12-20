
import React from "react";
import Image from "next/image";
import PulsatingButton from "@/components/ui/pulsating-button";
import ProjectGallery from "@/components/ProjectGallery";

const CommunityPage = () => {
  return (
    <section className="container mx-auto p-5">
      <div className="bg-community-image bg-cover bg-center h-[500px] rounded-xl flex flex-col gap-4 justify-center items-center">
        <Image
          src="/images/TRIOE_LOGO.png"
          alt="Community Background"
          width={150}
          height={150}
          className="object-cover"
        />
        <h1 className="text-2xl lg:text-5xl font-bold">TRIOE COMMUNITY</h1>
        <p className="text-sm text-center lg:text-base text-gray-500">
          Connecting Customers, Learners, Partners, and Developers of TRIOE
          together.{" "}
        </p>
        <div className="flex justify-center items-center mt-4">
          <PulsatingButton className="tracking-wide">Join the Community</PulsatingButton>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <ProjectGallery />
      </div>
    </section>
  );
};

export default CommunityPage;
