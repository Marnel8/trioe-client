"use client";

import * as React from "react";
import {
	Book,
	Youtube,
	ChevronRight,
	GalleryVerticalEnd,
	Search,
	ChevronLeft,
	Rocket,
	Download,
	PlayCircle,
	Layers,
	Cpu,
	Code,
	Wrench,
	Users,
	Settings,
	HelpCircle,
	BookOpen,
	Boxes,
	GraduationCap,
	FileCode,
	MessageCircle,
	Home,
	Lightbulb,
	Zap,
	FlaskConical,
	CircuitBoard,
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
		icon: Rocket,
		color: "text-blue-500",
		items: [
			{
				title: "Introduction to TRIOE",
				id: "introduction",
				icon: Home,
				color: "text-blue-500",
			},
			{
				title: "Installation",
				id: "installation",
				icon: Download,
				color: "text-blue-500",
			},
			{
				title: "Quick Start Guide",
				id: "quick-start",
				icon: PlayCircle,
				color: "text-blue-500",
			},
			// {
			// 	title: "Video Tutorials",
			// 	id: "video-tutorials",
			// 	icon: Youtube,
			// 	color: "text-blue-500",
			// },
		],
	},
	{
		title: "Our Kits",
		id: "kits",
		icon: Boxes,
		color: "text-purple-500",
		items: [
			{
				title: "STEAM Kit",
				id: "steam-kit",
				icon: FlaskConical,
				color: "text-purple-500",
			},
			{ title: "DRM Kit", id: "drm-kit", icon: Zap, color: "text-purple-500" },
			{
				title: "AGRI-AQUA Kit",
				id: "agri-aqua-kit",
				icon: Layers,
				color: "text-purple-500",
			},
		],
	},
	{
		title: "Learning Path",
		id: "learning-path",
		icon: GraduationCap,
		color: "text-green-500",
		items: [
			{
				title: "Beginner Level",
				id: "beginner-level",
				icon: BookOpen,
				color: "text-green-500",
			},
			{
				title: "Intermediate Level",
				id: "intermediate-level",
				icon: Book,
				color: "text-green-500",
			},
			{
				title: "Advanced Level",
				id: "advanced-level",
				icon: Lightbulb,
				color: "text-green-500",
			},
		],
	},
	{
		title: "Technical Reference",
		id: "technical-reference",
		icon: CircuitBoard,
		color: "text-orange-500",
		items: [
			{
				title: "Hardware Specifications",
				id: "hardware-specs",
				icon: Cpu,
				color: "text-orange-500",
			},
			{
				title: "Software Development",
				id: "software-dev",
				icon: Code,
				color: "text-orange-500",
			},
		],
	},
	{
		title: "Support",
		id: "support",
		icon: HelpCircle,
		color: "text-red-500",
		items: [
			{
				title: "Troubleshooting",
				id: "troubleshooting",
				icon: Wrench,
				color: "text-red-500",
			},
			{
				title: "Community Resources",
				id: "community",
				icon: MessageCircle,
				color: "text-red-500",
			},
		],
	},
];

export function DocumentationSidebar() {
	const [version, setVersion] = React.useState("1.0.0");
	const [isCollapsed, setIsCollapsed] = React.useState(false);

	return (
		<SidebarProvider>
			<Sidebar
				className={`${
					isCollapsed ? "w-16" : "w-64"
				} flex-shrink-0 transition-[width] duration-300`}
			>
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
										<SidebarMenuButton className="w-full justify-between hover:bg-accent/50">
											<span className="flex items-center gap-2">
												{React.createElement(section.icon, {
													className: `size-4 ${section.color}`,
												})}
												<span>{section.title}</span>
											</span>
											<ChevronRight className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{section.items.map((item) => (
												<SidebarMenuSubItem key={item.id}>
													<SidebarMenuSubButton asChild>
														<a
															href={`#${item.id}`}
															className="flex items-center gap-2 hover:bg-accent/50 pl-6"
														>
															{React.createElement(item.icon, {
																className: `size-3.5 ${item.color}`,
															})}
															<span className="text-sm">{item.title}</span>
														</a>
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
