"use client";
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
import { usePathname, useRouter } from "next/navigation";
import { ConfirmNavigationModal } from "./ConfirmNavigationModal";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navLinks } from "@/constants";

// Map icons to link IDs
const ICON_MAP: { [key: string]: React.ElementType } = {
  home: HomeIcon,
  kits: PackageIcon,
  courses: BookOpenIcon,
  events: CalendarIcon,
  community: UsersIcon,
};

export function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [pendingNavigation, setPendingNavigation] = React.useState<
    string | null
  >(null);

  const handleNavigation = (href: string, title: string) => {
    if (href.includes("events") || href.includes("community")) {
      setPendingNavigation(href);
      setModalOpen(true);
    } else {
      router.push(href);
    }
  };

  const handleConfirmNavigation = () => {
    if (pendingNavigation) {
      window.location.href = pendingNavigation;
    }
    setModalOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-50 flex flex-col items-center gap-2">
        {/* Page Indicator */}
        <div className="px-4 py-1 rounded-full bg-background/80 backdrop-blur-sm border text-xs">
          {pathname === "/"
            ? "Home"
            : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}
        </div>

        {/* Navigation Bar */}
        <div className="max-w-[400px] w-full">
          <TooltipProvider>
            <div className="flex items-center justify-center gap-2 px-4 h-16 bg-background/80 backdrop-blur-sm border rounded-full shadow-lg">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/"
                    aria-label="Home"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full hover:bg-accent/50",
                      pathname === "/" && "bg-accent"
                    )}
                  >
                    <HomeIcon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Home</p>
                </TooltipContent>
              </Tooltip>
              <Separator orientation="vertical" className="h-8" />

              {navLinks.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleNavigation(item.href, item.title)}
                      aria-label={item.title}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-10 rounded-full hover:bg-accent/50",
                        pathname === item.href && "bg-accent"
                      )}
                    >
                      {ICON_MAP[item.id] &&
                        React.createElement(ICON_MAP[item.id], {
                          className: "size-5",
                        })}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.title}</p>
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

      <ConfirmNavigationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmNavigation}
        title={
          navLinks.find((link) => link.href === pendingNavigation)?.title || ""
        }
      />
    </>
  );
}
