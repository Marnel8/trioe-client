"use client";

import * as React from "react";
import {
  Book,
  ChevronDown,
  ChevronRight,
  GalleryVerticalEnd,
  Search,
  ChevronLeft,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const docSections = [
  {
    title: "Getting Started",
    id: "getting-started",
    items: [
      { title: "Introduction", id: "introduction" },
      { title: "Quick Start", id: "quick-start" },
      { title: "Installation", id: "installation" },
    ],
  },
  {
    title: "Core Concepts",
    id: "core-concepts",
    items: [
      { title: "Architecture", id: "architecture" },
      { title: "Routing", id: "routing" },
      { title: "Data Fetching", id: "data-fetching" },
    ],
  },
  {
    title: "Advanced Guides",
    id: "advanced-guides",
    items: [
      { title: "Deployment", id: "deployment" },
      { title: "Authentication", id: "authentication" },
      { title: "Testing", id: "testing" },
    ],
  },
  {
    title: "API Reference",
    id: "api-reference",
    items: [
      { title: "Components", id: "components" },
      { title: "Hooks", id: "hooks" },
      { title: "Utilities", id: "utilities" },
    ],
  },
  {
    title: "Tutorials",
    id: "tutorials",
    items: [
      { title: "Building a Blog", id: "building-a-blog" },
      { title: "Creating a Dashboard", id: "creating-a-dashboard" },
      { title: "E-commerce Store", id: "e-commerce-store" },
    ],
  },
];

export function DocumentationSidebar() {
  const [version, setVersion] = React.useState("1.0.0");
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <SidebarProvider>
      <Sidebar className={`${isCollapsed ? 'w-16' : 'w-64'} flex-shrink-0 transition-[width] duration-300`}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                size="lg" 
                asChild 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="cursor-pointer"
              >
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
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        {!isCollapsed && (
          <>
            <SidebarContent>
              {docSections.map((section) => (
                <Collapsible key={section.id}>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="w-full justify-between">
                      <span className="flex items-center gap-2">
                        <Book className="size-4" />
                        {section.title}
                      </span>
                      <ChevronRight className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {section.items.map((item) => (
                        <SidebarMenuSubItem key={item.id}>
                          <SidebarMenuSubButton asChild>
                            <a href={`#${item.id}`}>{item.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </SidebarContent>
            <SidebarFooter className="p-4">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 size-4 -translate-y-1/2 transform text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="pl-8"
                />
              </div>
            </SidebarFooter>
          </>
        )}
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  );
}
