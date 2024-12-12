import Image from "next/image";
import React from "react";

const TeamCard = () => {
  const teams = [
    {
      name: "Dr. Tirso A. Ronquillo",
      role: "University President",
      image: "/teams/president.jpg",
    },
    {
      name: "Engr. Albertson D. Amante",
      role: "Vice President, RDES",
      image: "/teams/vicepresident.png",
    },
    {
      name: "Engr. John Carlo A. Catilo",
      role: "University Research Associate II",
      image: "/teams/wewo.jpg",
    },
    {
      name: "Engr. Ara Jane Mogan",
      role: "University Research Associate I",
      image: "/teams/AJM.png",
    },
    {
      name: "Mr. Marc James Beltran",
      role: "University Research Associate I",
      image: "/teams/mj.jpg",
    },
    {
      name: "Mr. Mhar Nhel J. Valentin",
      role: "University Research Associate I",
      image: "/teams/marnel.png",
    },
  ];
  return (
    <>
      {teams.map((team, index) => (
        <div
          className="bg-white rounded-lg shadow-md p-4 min-w-[250px] h-[330px] flex flex-col items-center justify-center"
          key={index}
        >
          <div className="w-full h-[100px] md:h-[120px] rounded-xl relative bg-module-image bg-cover bg-center">
            <div className="absolute bg-white w-full h-[220px]  md:h-[220px] rounded-xl max-w-[93%] left-1/2 top-3 sm:top-5 -translate-x-1/2 shadow-md">
              <Image
                src={team.image}
                alt="module-card"
                fill
                className="object-cover rounded-xl m-auto shadow-md"
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-[170px]">
            <span className="font-bold text-lg">{team.name}</span>
            <br />
            {team.role}
          </p>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
