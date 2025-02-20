"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { QuoteRequestModal } from "@/components/kits/quote-request";

const KitCards = ({ kitData }: { kitData: any[] }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 mb-16">
      {kitData.map((kit) => (
        <Card
          key={kit.name}
          className={`shadow-none h-[440px] w-[320px] flex flex-col group border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-[1px] ${
            kit.name === "AGRI-AGUA KIT"
              ? "hover:border-green-500"
              : kit.name === "STEAM KIT"
              ? "hover:border-red-500"
              : "hover:border-yellow-500"
          }`}
        >
          <CardHeader className="text-center">
            <CardTitle
              className={`text-xl font-extrabold transition-colors group-hover:${
                kit.name === "AGRI-AGUA KIT"
                  ? "text-green-500"
                  : kit.name === "STEAM KIT"
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}
            >
              {kit.name}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center flex-grow">
              <Image
                src={kit.image}
                alt={kit.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <p className="text-center mt-4 text-gray-600 line-clamp-3">
                {kit.description}
              </p>
            </div>

            <QuoteRequestModal
              kitName={kit.name}
              quantity={1}
              price={kit.price}
              className="w-64 mt-4"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KitCards;
