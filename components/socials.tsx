import React from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
  } from "lucide-react";
  import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Socials = ({ color, size }: { color: string; size: number }) => {
  return (
    <div className="flex justify-center md:justify-start items-center gap-4">
      <Link
        href="https://www.tiktok.com/@devops.batstateu?"
        className={cn("rounded-full border p-2 text-muted-foreground hover:bg-gray-200", color)}
      >
        <FaTiktok className={cn("h-4 w-4", color)} />
        <span className="sr-only">TikTok</span>
      </Link>
      <Link
        href="https://youtube.com/@devopsbatstateu?"
        className={cn("rounded-full border p-2 text-muted-foreground hover:bg-gray-200", color)}
      >
        <Youtube className={cn("h-4 w-4", color)}    />
        <span className="sr-only">Youtube</span>
      </Link>
      <Link
        href="https://www.facebook.com/people/TRIOE/61560879090036/"
        className={cn("rounded-full border p-2 text-muted-foreground hover:bg-gray-200", color)}
      >
        <Facebook className={cn("h-4 w-4", color)} />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/trioe-dev-164062341/"
        className={cn("rounded-full border p-2 text-muted-foreground hover:bg-gray-200", color)}
      >
        <Linkedin className={cn("h-4 w-4", color)} />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="https://www.instagram.com/devops.batstateu/?"
        className={cn("rounded-full border p-2 text-muted-foreground hover:bg-gray-200", color)}
      >
        <Instagram className={cn("h-4 w-4", color)} />
        <span className="sr-only">Instagram</span>
      </Link>
    </div>
  );
};

export default Socials;
