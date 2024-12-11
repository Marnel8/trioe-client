import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  BookOpenIcon,
  CalendarIcon,
  UsersIcon,
  PackageIcon,
  LogInIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Simplified DATA to match HeaderNav links
const DATA = {
  navbar: [
    { href: "/kits", icon: PackageIcon, label: "Kits" },
    { href: "/courses", icon: BookOpenIcon, label: "Courses" },
    { href: "/events", icon: CalendarIcon, label: "Events" },
    { href: "/community", icon: UsersIcon, label: "Community" },
  ],
};

export function MobileNav() {

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
      <div className="max-w-[400px] w-full">
        <TooltipProvider>
          <div className="flex items-center justify-center gap-2 px-4 h-16 bg-background/80 backdrop-blur-sm border rounded-full shadow-lg">
            {DATA.navbar.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full hover:bg-accent/50"
                    )}
                  >
                    <item.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}

            <Separator orientation="vertical" className="h-8" />

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/signin"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 rounded-full hover:bg-accent/50"
                  )}
                >
                  <LogInIcon className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sign In</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 rounded-full hover:bg-accent/50"
                  )}
                >
                  <MoonIcon className="size-5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle theme</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}
