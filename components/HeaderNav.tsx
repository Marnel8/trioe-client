import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import PulsatingButton from "./ui/pulsating-button";
import { navLinks } from "@/constants";

const HeaderNav = () => {
  return (
    <div className={`w-full py-5 flex justify-between items-center`}>
      <div className="px-4">
        <Link href="/">
          <Image
            src="/images/LOGO_WITH_TEXT.png"
            alt="logo"
            width={120}
            height={100}
          />
        </Link>
      </div>
      <div className="flex gap-9 px-5 items-center">
        {navLinks.map((link) => (
          <Link
            className="subtext uppercase text-black tracking-wider  "
            href={`/${link.id}`}
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="px-5">
        <Button
          variant="default"
          className="text-sm tracking-wider px-7 bg-transparent ring-2 text-primary ring-primary-gradient rounded-full hover:bg-primary-gradient hover:text-white hover:bg-primary"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default HeaderNav;
