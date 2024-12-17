"use client";

import * as React from "react";
import {
  Book,
  ChevronDown,
  ChevronRight,
  GalleryVerticalEnd,
  Search,
  ChevronLeft,
  Cpu,
  GraduationCap,
  HelpCircle,
  Home,
  Layers,
  Settings,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const docSections = [
  {
    title: "Getting Started",
    id: "getting-started",
    items: [
      { title: "Introduction to TRIOE", id: "introduction", href: "/docs#getting-started", icon: Home, color: "text-blue-500" },
      { title: "Installation", id: "installation", href: "/docs#getting-started", icon: Settings, color: "text-emerald-500" },
      { title: "Quick Start Guide", id: "quick-start", href: "/docs#getting-started", icon: Book, color: "text-violet-500" },
    ],
  },
  {
    title: "Our Kits",
    id: "kits-overview",
    items: [
      { title: "STEAM Kit", id: "steam-kit", href: "/docs#kits-overview", icon: Layers, color: "text-orange-500" },
      { title: "DRM Kit", id: "drm-kit", href: "/docs#kits-overview", icon: Layers, color: "text-red-500" },
      { title: "AGRI-AQUA Kit", id: "agri-aqua-kit", href: "/docs#kits-overview", icon: Layers, color: "text-green-500" },
    ],
  },
  {
    title: "Learning Path",
    id: "learning-path",
    items: [
      { title: "Beginner Level", id: "beginner-level", href: "/docs#learning-path", icon: GraduationCap, color: "text-green-500" },
      { title: "Intermediate Level", id: "intermediate-level", href: "/docs#learning-path", icon: GraduationCap, color: "text-yellow-500" },
      { title: "Advanced Level", id: "advanced-level", href: "/docs#learning-path", icon: GraduationCap, color: "text-red-500" },
    ],
  },
  {
    title: "Technical Reference",
    id: "technical-reference",
    items: [
      { title: "Hardware Specifications", id: "hardware-specs", href: "/docs#technical-reference", icon: Cpu, color: "text-blue-500" },
      { title: "Software Development", id: "software-dev", href: "/docs#technical-reference", icon: Settings, color: "text-purple-500" },
    ],
  },
  {
    title: "Support",
    id: "support",
    items: [
      { title: "Troubleshooting", id: "troubleshooting", href: "/docs#support", icon: Wrench, color: "text-orange-500" },
      { title: "Community Resources", id: "community", href: "/docs#support", icon: HelpCircle, color: "text-blue-500" },
    ],
  },
];

export function DocumentationSidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [version, setVersion] = React.useState("1.0.0");

  return (
    <SidebarProvider>
      <Sidebar
        className={cn(
          "border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          isCollapsed ? "w-[80px]" : "w-[240px]"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[60px] items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground p-1">
                <Image
                  src="/images/TRIOE_LOGO.png"
                  alt="TRIOE Logo"
                  width={32}
                  height={32}
                />
              </div>
              {!isCollapsed && (
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">TRIOE Documentation</span>
                  <Select value={version} onValueChange={setVersion}>
                    <SelectTrigger className="h-auto border-0 p-0 text-xs font-normal shadow-none">
                      <SelectValue placeholder="Select version" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.0.0">v1.0.0</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              {docSections.map((section) => (
                <div key={section.id} className="pb-4">
                  {!isCollapsed && (
                    <h4 className="mb-1 text-sm font-medium">{section.title}</h4>
                  )}
                  <div className="grid grid-flow-row auto-rows-max gap-1">
                    {section.items.map((item) => (
                      <Button
                        key={item.id}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start gap-2",
                          isCollapsed && "h-9 w-9 justify-center p-0"
                        )}
                        asChild
                      >
                        <Link href={item.href}>
                          <item.icon className={cn("h-4 w-4", item.color)} />
                          {!isCollapsed && <span>{item.title}</span>}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sidebar>
    </SidebarProvider>
  );
}
